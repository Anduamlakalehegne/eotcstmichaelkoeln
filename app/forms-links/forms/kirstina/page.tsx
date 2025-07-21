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

const formSchema = z.object({
  familyName: z.string().min(2, { message: "Family name must be at least 2 characters." }),
  firstName: z.string().min(2, { message: "First name must be at least 2 characters." }),
  baptismName: z.string().min(2, { message: "Baptism name must be at least 2 characters." }),
  fatherName: z.string().min(2, { message: "Father's name must be at least 2 characters." }),
  motherName: z.string().min(2, { message: "Mother's name must be at least 2 characters." }),
  godparentName: z.string().min(2, { message: "Godparent's name must be at least 2 characters." }),
  country: z.string().min(2, { message: "Country is required." }),
  birthPlace: z.string().min(2, { message: "Birth place is required." }),
  birthCountry: z.string().min(2, { message: "Birth country is required." }),
  birthDate: z.string().min(1, { message: "Birth date is required." }),
  baptismChurch: z.string().min(2, { message: "Baptism church is required." }),
  baptismDate: z.string().min(1, { message: "Baptism date is required." }),
  nationality: z.string().min(2, { message: "Nationality is required." }),
  baptizingPriest: z.string().min(2, { message: "Baptizing priest name is required." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().min(6, { message: "Phone number must be at least 6 characters." }),
  agreeToTerms: z.boolean().refine((value) => value === true, {
    message: "You must agree to the terms and conditions.",
  }),
})

export default function KirstinaFormPage() {
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
New Baptism Registration

Family Name: ${values.familyName}
First Name: ${values.firstName}
Baptism Name: ${values.baptismName}
Father's Name: ${values.fatherName}
Mother's Name: ${values.motherName}
Godparent's Name: ${values.godparentName}
Country: ${values.country}
Birth Place: ${values.birthPlace}
Birth Country: ${values.birthCountry}
Birth Date: ${values.birthDate}
Baptism Church: ${values.baptismChurch}
Baptism Date: ${values.baptismDate}
Nationality: ${values.nationality}
Baptizing Priest: ${values.baptizingPriest}
Email: ${values.email}
Phone: ${values.phone}

Submitted on: ${new Date().toLocaleString()}
      `.trim()

      // Create form data for FormSubmit.co
      const formData = new FormData()
      formData.append("_to", "anduamlakalehegne@gmail.com")
      formData.append("_subject", `New Baptism Registration - ${values.firstName} ${values.familyName}`)
      formData.append("_replyto", values.email)
      formData.append("message", emailContent)
      formData.append("name", `${values.firstName} ${values.familyName}`)
      formData.append("email", values.email)
      
      // Add additional FormSubmit.co configuration
      formData.append("_captcha", "false") // Disable captcha for testing
      formData.append("_template", "table") // Use table template for better formatting
      formData.append("_autoresponse", "Thank you for submitting your baptism registration. We will review your information and contact you soon.") // Auto-response to submitter

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
            title: "Form activation required",
            description: "Please check your email (anduamlakalehegne@gmail.com) for the activation link from FormSubmit.co",
            variant: "default",
          })
        } else {
          setSubmissionResult({ success: true, messageId: `form-${Date.now()}` })
          setIsSubmitted(true)
          toast({
            title: "Registration submitted successfully!",
            description: "Your baptism registration has been sent via email.",
          })
        }
      } else {
        console.error("FormSubmit.co error response:", responseText)
        throw new Error(`Failed to submit form: ${responseText}`)
      }
    } catch (error) {
      console.error("Error submitting form:", error)
      toast({
        title: "Error submitting form",
        description: "There was an error submitting your form. Please try again or contact us directly.",
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
          <h1 className="text-3xl font-bold mb-4">የክርስትና (ጥምቀት) መመዝገቢያ</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            በኮሎኝ ቅዱስ ሚካኤል የኢትዮጵያ ኦርቶዶክስ ተዋሕዶ ቤተክርስቲያን የጥምቀት መመዝገብ ለማድረግ ይህን ቅፅ ይሙሉ።
          </p>
        </div>

        <Tabs defaultValue="form" className="mb-8">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="form">
              <FileText className="mr-2 h-4 w-4" />
              መመዝገቢያ ቅፅ
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
                    የጥምቀት መመዝገብዎ በተሳካ ሁኔታ ተልኳል!
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
                    ሌላ መመዝገብ ላክ
                  </Button>
                </CardFooter>
              </Card>
            ) : (
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <Card>
                    <CardHeader className="bg-gray-50">
                      <CardTitle>የጥምቀት ክርስትና ፎርም</CardTitle>
                      {/* <CardDescription>Please fill out all required fields</CardDescription> */}
                    </CardHeader>
                    <CardContent className="pt-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="familyName"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>የቤተስብ ስም / Familien Name *</FormLabel>
                              <FormControl>
                                <Input placeholder="የቤተሰብ ስም" {...field} />
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
                              <FormLabel>የተጸውዖ ስም / Vorname *</FormLabel>
                              <FormControl>
                                <Input placeholder="የመጀመሪያ ስም" {...field} />
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
                              <FormLabel>የተጠመቀዉ (ችዉ) ክርስትና ስም / Taufname *</FormLabel>
                              <FormControl>
                                <Input placeholder="የክርስትና ስም" {...field} />
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
                              <FormLabel>የአባት ስም / Name des Vaters *</FormLabel>
                              <FormControl>
                                <Input placeholder="የአባት ስም" {...field} />
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
                              <FormLabel>የእናት ስም / Name des Mutter *</FormLabel>
                              <FormControl>
                                <Input placeholder="የእናት ስም" {...field} />
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
                              <FormLabel>የክርስትና አባት (እናት) ስም Godparent's Name *</FormLabel>
                              <FormControl>
                                <Input placeholder="የክርስትና አባት/እናት ስም" {...field} />
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
                              <FormLabel>ሀገር / Land *</FormLabel>
                              <FormControl>
                                <Input placeholder="ሀገር" {...field} />
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
                              <FormLabel>የተወለደበት ( ችበት) ቦታ / Geburtsadresse *</FormLabel>
                              <FormControl>
                                <Input placeholder="የተወለደበት ቦታ" {...field} />
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
                              <FormLabel>የትውልድ ሀገር / Geburtsort *</FormLabel>
                              <FormControl>
                                <Input placeholder="የትውልድ ሀገር" {...field} />
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
                              <FormLabel>የተወለደበት (ችበት) ቀን / Geburtsdatum *</FormLabel>
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
                              <FormLabel>የተጠመቀበት (ችበት) ቤተ ክርስቲያን / Taufdatum *</FormLabel>
                              <FormControl>
                                <Input placeholder="የቤተ ክርስቲያን ስም" {...field} />
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
                              <FormLabel>የተጠመቀበት (ችበት) ቀን / Kirche *</FormLabel>
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
                              <FormLabel>ዜግነት / Staatsangehörigkeit *</FormLabel>
                              <FormControl>
                                <Input placeholder="ዜግነት" {...field} />
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
                              <FormLabel>አጥማቂው ካህን / Taufe Priester *</FormLabel>
                              <FormControl>
                                <Input placeholder="አጥማቂው ካህን" {...field} />
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
                              <FormLabel>ኢሜል/Email *</FormLabel>
                              <FormControl>
                                <Input type="email" placeholder="ኢሜል" {...field} />
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
                              <FormLabel>Phone *</FormLabel>
                              <FormControl>
                                <Input placeholder="ስልክ ቁጥር" {...field} />
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
                                <FormLabel>የሰጠኋትን መረጃ ትክክለኛነቱን አረጋግጫለሁ *</FormLabel>
                                <FormDescription>
                                  የሰጡት መረጃ ትክክለኛና መሆኑን ያረጋግጡ።
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
                            በማስገባት ላይ...
                          </>
                        ) : (
                          <>
                            <Send className="mr-2 h-4 w-4" />
                            መመዝገብ ላክ
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
