"use client"

import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Checkbox } from "@/components/ui/checkbox"
import { FileText, Info, Calendar, Send, Loader2 } from "lucide-react"
import Image from "next/image"
import { toast } from "@/hooks/use-toast"
import { useLocale } from "@/contexts/locale-context"

export default function KirstinaFormPage() {
  const { translations } = useLocale()
  const t = translations.formsLinks.forms.kirstina

  const formSchema = z.object({
    familyName: z.string().min(2, { message: t.validation.familyNameMin }),
    firstName: z.string().min(2, { message: t.validation.firstNameMin }),
    baptismName: z.string().min(2, { message: t.validation.baptismNameMin }),
    fatherName: z.string().min(2, { message: t.validation.fatherNameMin }),
    motherName: z.string().min(2, { message: t.validation.motherNameMin }),
    godparentName: z.string().min(2, { message: t.validation.godparentNameMin }),
    country: z.string().min(2, { message: t.validation.countryRequired }),
    birthPlace: z.string().min(2, { message: t.validation.birthPlaceRequired }),
    birthCountry: z.string().min(2, { message: t.validation.birthCountryRequired }),
    birthDate: z.string().min(1, { message: t.validation.birthDateRequired }),
    baptismChurch: z.string().min(2, { message: t.validation.baptismChurchRequired }),
    baptismDate: z.string().min(1, { message: t.validation.baptismDateRequired }),
    nationality: z.string().min(2, { message: t.validation.nationalityRequired }),
    baptizingPriest: z.string().min(2, { message: t.validation.baptizingPriestRequired }),
    email: z.string().email({ message: t.validation.emailInvalid }),
    phone: z.string().min(6, { message: t.validation.phoneMin }),
    agreeToTerms: z.boolean().refine((value) => value === true, {
      message: t.validation.agreeRequired,
    }),
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [submissionResult, setSubmissionResult] = useState<{ success: boolean; messageId?: string } | null>(null)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      familyName: "",
      firstName: "",
      baptismName: "",
      fatherName: "",
      motherName: "",
      godparentName: "",
      country: "",
      birthPlace: "",
      birthCountry: "",
      birthDate: "",
      baptismChurch: "",
      baptismDate: "",
      nationality: "",
      baptizingPriest: "",
      email: "",
      phone: "",
      agreeToTerms: false,
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true)

    try {
      // Format the email content
      const emailContent = `
${t.email.heading}

${t.labels.familyName}: ${values.familyName}
${t.labels.firstName}: ${values.firstName}
${t.labels.baptismName}: ${values.baptismName}
${t.labels.fatherName}: ${values.fatherName}
${t.labels.motherName}: ${values.motherName}
${t.labels.godparentName}: ${values.godparentName}
${t.labels.country}: ${values.country}
${t.labels.birthPlace}: ${values.birthPlace}
${t.labels.birthCountry}: ${values.birthCountry}
${t.labels.birthDate}: ${values.birthDate}
${t.labels.baptismChurch}: ${values.baptismChurch}
${t.labels.baptismDate}: ${values.baptismDate}
${t.labels.nationality}: ${values.nationality}
${t.labels.baptizingPriest}: ${values.baptizingPriest}
${t.labels.email}: ${values.email}
${t.labels.phone}: ${values.phone}

${t.email.submittedOn}: ${new Date().toLocaleString()}
      `.trim()

      // Create form data for FormSubmit.co
      const formData = new FormData()
      formData.append("_to", "anduamlakalehegne@gmail.com")
      formData.append("_subject", `${t.email.subjectPrefix} - ${values.firstName} ${values.familyName}`)
      formData.append("_replyto", values.email)
      formData.append("message", emailContent)
      formData.append("name", `${values.firstName} ${values.familyName}`)
      formData.append("email", values.email)
      
      // Add additional FormSubmit.co configuration
      formData.append("_captcha", "false") // Disable captcha for testing
      formData.append("_template", "table") // Use table template for better formatting
      formData.append("_autoresponse", t.email.autoresponse) // Auto-response to submitter

      // Send the form using FormSubmit.co
      const response = await fetch("https://formsubmit.co/anduamlakalehegne@gmail.com", {
        method: "POST",
        body: formData,
      })

      const responseText = await response.text()
      console.log("FormSubmit.co response:", responseText)

      if (response.ok) {
        if (responseText.includes("Activate your form")) {
          toast({
            title: t.toast.activationTitle,
            description: t.toast.activationDescription,
            variant: "default",
          })
        } else {
          setSubmissionResult({ success: true, messageId: `form-${Date.now()}` })
          setIsSubmitted(true)
          toast({
            title: t.toast.submitSuccessTitle,
            description: t.toast.submitSuccessDesc,
          })
        }
      } else {
        console.error("FormSubmit.co error response:", responseText)
        throw new Error(`Failed to submit form: ${responseText}`)
      }
    } catch (error) {
      console.error("Error submitting form:", error)
      toast({
        title: t.toast.submitErrorTitle,
        description: t.toast.submitErrorDesc,
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12 text-center">
          <h1 className="text-3xl font-bold mb-4">{t.title}</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">{t.intro}</p>
        </div>

        <Tabs defaultValue="form" className="mb-8">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="form">
              <FileText className="mr-2 h-4 w-4" />
              {t.tabs.form}
            </TabsTrigger>
            {/* <TabsTrigger value="requirements">
              <Info className="mr-2 h-4 w-4" />
              መስፈርቶች
            </TabsTrigger>
            <TabsTrigger value="schedule">
              <Calendar className="mr-2 h-4 w-4" />
              የጥምቀት መርሃግብር
            </TabsTrigger> */}
          </TabsList>

          <TabsContent value="form">
            {isSubmitted ? (
              <Card className="border-green-100">
                <CardHeader className="bg-green-50">
                  <CardTitle className="text-green-700 flex items-center">
                    <svg
                      className="w-6 h-6 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    {t.successTitle}
                  </CardTitle>
                  {/* <CardDescription className="text-green-600">
                    መመዝገብዎ በኢሜይል ተልኳል
                  </CardDescription> */}
                </CardHeader>
                {/* <CardContent className="pt-6">
                  <p className="mb-4">
                    Your baptism registration has been successfully submitted. Here's what happens next:
                  </p>
                  <ol className="space-y-2 list-decimal pl-5">
                    <li>Your registration has been emailed to the church administration.</li>
                    <li>You will receive a confirmation email at your provided email address.</li>
                    <li>Our clergy team will review your registration and contact you within 3-5 business days.</li>
                    <li>You'll be invited for a meeting to discuss any additional requirements.</li>
                    <li>Once confirmed, you'll receive your baptism certificate.</li>
                  </ol>
                  <div className="bg-blue-50 p-4 rounded-md mt-6">
                    <h3 className="font-semibold text-blue-700 mb-2">Registration Details</h3>
                    {submissionResult?.messageId && (
                      <p className="text-blue-600 text-sm mb-2">
                        <strong>Tracking ID:</strong> {submissionResult.messageId}
                      </p>
                    )}
                    <p className="text-blue-600 font-mono text-lg tracking-wider">
                      Reference: BPT-
                      {Math.floor(Math.random() * 1000000)
                        .toString()
                        .padStart(6, "0")}
                    </p>
                    <p className="text-sm text-blue-500 mt-2">
                      Please reference this number in all future communications about this registration.
                    </p>
                  </div>
                </CardContent> */}
                <CardFooter className="border-t pt-4 flex flex-col sm:flex-row gap-3">
                  <Button
                    onClick={() => {
                      setIsSubmitted(false)
                      setSubmissionResult(null)
                      form.reset()
                    }}
                  >
                    {t.successButton}
                  </Button>
                </CardFooter>
              </Card>
            ) : (
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <Card>
                    <CardHeader className="bg-gray-50">
                      <CardTitle>{t.cardTitle}</CardTitle>
                      {/* <CardDescription>Please fill out all required fields</CardDescription> */}
                    </CardHeader>
                    <CardContent className="pt-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="familyName"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>{t.labels.familyName} *</FormLabel>
                              <FormControl>
                                <Input placeholder={t.placeholders.familyName} {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="firstName"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>{t.labels.firstName} *</FormLabel>
                              <FormControl>
                                <Input placeholder={t.placeholders.firstName} {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="baptismName"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>{t.labels.baptismName} *</FormLabel>
                              <FormControl>
                                <Input placeholder={t.placeholders.baptismName} {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="fatherName"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>{t.labels.fatherName} *</FormLabel>
                              <FormControl>
                                <Input placeholder={t.placeholders.fatherName} {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="motherName"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>{t.labels.motherName} *</FormLabel>
                              <FormControl>
                                <Input placeholder={t.placeholders.motherName} {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="godparentName"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>{t.labels.godparentName} *</FormLabel>
                              <FormControl>
                                <Input placeholder={t.placeholders.godparentName} {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="country"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>{t.labels.country} *</FormLabel>
                              <FormControl>
                                <Input placeholder={t.placeholders.country} {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="birthPlace"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>{t.labels.birthPlace} *</FormLabel>
                              <FormControl>
                                <Input placeholder={t.placeholders.birthPlace} {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="birthCountry"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>{t.labels.birthCountry} *</FormLabel>
                              <FormControl>
                                <Input placeholder={t.placeholders.birthCountry} {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="birthDate"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>{t.labels.birthDate} *</FormLabel>
                              <FormControl>
                                <Input type="date" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="baptismChurch"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>{t.labels.baptismChurch} *</FormLabel>
                              <FormControl>
                                <Input placeholder={t.placeholders.baptismChurch} {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="baptismDate"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>{t.labels.baptismDate} *</FormLabel>
                              <FormControl>
                                <Input type="date" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="nationality"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>{t.labels.nationality} *</FormLabel>
                              <FormControl>
                                <Input placeholder={t.placeholders.nationality} {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="baptizingPriest"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>{t.labels.baptizingPriest} *</FormLabel>
                              <FormControl>
                                <Input placeholder={t.placeholders.baptizingPriest} {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>{t.labels.email} *</FormLabel>
                              <FormControl>
                                <Input type="email" placeholder={t.placeholders.email} {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="phone"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>{t.labels.phone} *</FormLabel>
                              <FormControl>
                                <Input placeholder={t.placeholders.phone} {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      <div className="mt-6">
                        <FormField
                          control={form.control}
                          name="agreeToTerms"
                          render={({ field }) => (
                            <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                              <FormControl>
                                <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                              </FormControl>
                              <div className="space-y-1 leading-none">
                                <FormLabel>{t.labels.agree} *</FormLabel>
                                <FormDescription>
                                  {t.labels.agreeDescription}
                                </FormDescription>
                              </div>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-end">
                      <Button type="submit" disabled={isSubmitting}>
                        {isSubmitting ? (
                          <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            {t.actions.submitting}
                          </>
                        ) : (
                          <>
                            <Send className="mr-2 h-4 w-4" />
                            {t.actions.submit}
                          </>
                        )}
                      </Button>
                    </CardFooter>
                  </Card>
                </form>
              </Form>
            )}
          </TabsContent>

          <TabsContent value="requirements">
            <Card>
              <CardHeader>
                <CardTitle>የጥምቀት መስፈርቶች</CardTitle>
                <CardDescription>ስለ ጥምቀት መስፈርቶች እና አዘጋጅቶች መረጃ</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="relative h-[300px] rounded-lg overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=300&width=400"
                      alt="Baptism Ceremony"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-4">ስለ ኦርቶዶክስ ጥምቀት</h3>
                    <p className="text-gray-600 mb-4">
                      በኢትዮጵያ ኦርቶዶክስ ተዋሕዶ ቤተክርስቲያን ጥምቀት (ክርስትና) ከሰባቱ ቅዱሳን ምስጢሮች አንዱ ሲሆን መንፈሳዊ ዳግም ልደትን እና ወደ ክርስቲያናዊ ማህበረሰብ መግባትን ይወክላል።
                    </p>
                    <p className="text-gray-600">
                      ስነ-ሥርዓቱ ጸሎቶች፣ ቅባቶች እና በተባረከ ውሃ ሶስት ጊዜ መጠመቅን ያካትታል፣ ይህም ከክርስቶስ ጋር ሞትን እና ትንሣኤን ይወክላል።
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4">የሚያስፈልጉ ነገሮች</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-medium mb-2">ለሕፃኑ</h4>
                      <ul className="space-y-2 pl-5 list-disc text-gray-600">
                        <li>ነጭ የጥምቀት ልብስ</li>
                        <li>ትንሽ መስቀል ሐተታ</li>
                        <li>የጥምቀት ሻማ</li>
                        <li>ለስላሳ ታፋ</li>
                        <li>ልብስ ለመቀየር</li>
                      </ul>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-medium mb-2">ለክርስትና አባት/እናት</h4>
                      <ul className="space-y-2 pl-5 list-disc text-gray-600">
                        <li>የኦርቶዶክስ ጸሎት መጽሐፍ</li>
                        <li>ለሕፃኑ ምስል</li>
                        <li>የጥምቀት መስቀል (አማራጭ)</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4">የሚያስፈልጉ ሰነዶች</h3>
                  <ul className="space-y-2 pl-5 list-disc text-gray-600">
                    <li>የትውልድ ወረቀት</li>
                    <li>የወላጆች መታወቂያ</li>
                    <li>የክርስትና አባቶች/እናቶች መታወቂያ</li>
                    <li>ተሟልቷ የቀረበ መመዝገቢያ ቅፅ</li>
                  </ul>
                </div>

                <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
                  <h3 className="text-xl font-semibold text-blue-800 mb-4">አስፈላጊ መመሪያዎች</h3>
                  <div className="space-y-3 text-blue-700">
                    <p>• ክርስትና አባቶች/እናቶች የተጠመቁ ኦርቶዶክስ ክርስቲያናን መሆን አለባቸው</p>
                    <p>• ሁሉም መረጃዎች ትክክለኛና ማረጋገጫ የሚችሉ መሆን አለባቸው</p>
                    <p>• የመጀመሪያ ሰነዶች ለማረጋገጥ ሊያስፈልጉ ይችላሉ</p>
                    <p>• ማረጋገጫ ሰነድ ከሚሰጥ በፊት መመዝገቡ መተግበር አለበት</p>
                    <p>• ለማንኛውም ጥያቄ ወደ ቤተክርስቲያኑ ቢሮ ያናግሩ</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="schedule">
            <Card>
              <CardHeader>
                <CardTitle>የጥምቀት መርሃግብር</CardTitle>
                <CardDescription>ስለ ጥምቀት መመዝገብ እና መርሃግብር መረጃ</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-4">የመመዝገብ ሂደት</h3>
                  <div className="bg-gray-50 rounded-lg p-6">
                    <p className="mb-4 text-gray-600">
                      በኮሎኝ ቅዱስ ሚካኤል የኢትዮጵያ ኦርቶዶክስ ተዋሕዶ ቤተክርስቲያን የጥምቀት መመዝገብ ሂደት ይህንን ያካትታል፦
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-sm font-bold">
                          1
                        </div>
                        <span>መመዝገቢያ ቅፅ ሙሉ</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-sm font-bold">
                          2
                        </div>
                        <span>የሚያስፈልጉ ሰነዶችን አስረክብ</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-sm font-bold">
                          3
                        </div>
                        <span>በቤተክርስቲያኑ ቢሮ እይታ እና ማረጋገጥ</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-sm font-bold">
                          4
                        </div>
                        <span>ማረጋገጫ ሰነድ አዘጋጅት እና መስጠት</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4">የቢሮ ሰዓታት</h3>
                  <p className="text-gray-600 mb-4">
                    ቤተክርስቲያኑ ቢሮ ስለ ጥምቀት መመዝገብ ጥያቄዎች በዚህ ሰዓት ይገኛል፦
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-white p-4 rounded-lg border border-gray-200">
                      <div className="flex items-center gap-3 mb-2">
                        <Calendar className="h-5 w-5 text-blue-600" />
                        <h4 className="font-medium">ሳምንታዊ ቀናት</h4>
                      </div>
                      <p className="text-gray-600">ሰኞ - አርብ፡ 3፡00 ጠዋት - 11፡00 ከሰዓት</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg border border-gray-200">
                      <div className="flex items-center gap-3 mb-2">
                        <Calendar className="h-5 w-5 text-blue-600" />
                        <h4 className="font-medium">የሳምንቱ መጨረሻ</h4>
                      </div>
                      <p className="text-gray-600">ቅዳሜ፡ 4፡00 ጠዋት - 8፡00 ከሰዓት</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
