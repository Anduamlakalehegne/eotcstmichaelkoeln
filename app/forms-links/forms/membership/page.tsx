"use client"

import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { FileText, Download, Send, User, Users, Book, MapPin } from "lucide-react"
import { toast } from "@/hooks/use-toast"

const formSchema = z.object({
  firstName: z.string().min(2, { message: "የመጀመሪያ ስም ቢያንስ 2 ፊደል መሆን አለበት።" }),
  lastName: z.string().min(2, { message: "የአያት ስም ቢያንስ 2 ፊደል መሆን አለበት።" }),
  baptismalName: z.string().optional(),
  dateOfBirth: z.string().min(1, { message: "የትውልድ ቀን ያስፈልጋል።" }),
  email: z.string().email({ message: "እባክዎን ትክክለኛ ኢሜል ያስገቡ።" }),
  phone: z.string().min(6, { message: "የስልክ ቁጥር ቢያንስ 6 ቁጥሮች መሆን አለበት።" }),
  address: z.string().min(5, { message: "አድራሻ ቢያንስ 5 ፊደል መሆን አለበት።" }),
  city: z.string().min(2, { message: "ከተማ ቢያንስ 2 ፊደል መሆን አለበት።" }),
  postalCode: z.string().min(4, { message: "የፖስታ ኮድ ቢያንስ 4 ቁጥሮች መሆን አለበት።" }),
  membershipType: z.enum(["individual", "family"], {
    required_error: "እባክዎን የአባልነት አይነት ይምረጡ።",
  }),
  familyMembers: z
    .array(
      z.object({
        name: z.string().min(2, { message: "ስም ቢያንስ 2 ፊደል መሆን አለበት።" }),
        relation: z.string().min(2, { message: "ግንኙነት ቢያንስ 2 ፊደል መሆን አለበት።" }),
        age: z.string(),
      })
    ),
  emergencyContact: z.object({
    name: z.string().min(2, { message: "ስም ቢያንስ 2 ፊደል መሆን አለበት።" }),
    phone: z.string().min(6, { message: "የስልክ ቁጥር ቢያንስ 6 ቁጥሮች መሆን አለበት።" }),
    relation: z.string().min(2, { message: "ግንኙነት ቢያንስ 2 ፊደል መሆን አለበት።" }),
  }),
  interests: z.array(z.string()).optional(),
  skills: z.string().optional(),
  agreeToTerms: z.boolean().refine((value) => value === true, {
    message: "የቤተክርስቲያን ደንቦችን መቀበል አለበት።",
  }),
}).superRefine((data, ctx) => {
  if (data.membershipType === "family") {
    if (!data.familyMembers || data.familyMembers.length === 0) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "የቤተሰብ አባላት ቢያንስ 1 መሞላት አለበት።",
        path: ["familyMembers"],
      })
    } else {
      data.familyMembers.forEach((member, i) => {
        if (!member.name || member.name.length < 2) {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: "ስም ቢያንስ 2 ፊደል መሆን አለበት።",
            path: ["familyMembers", i, "name"],
          })
        }
        if (!member.relation || member.relation.length < 2) {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: "ግንኙነት ቢያንስ 2 ፊደል መሆን አለበት።",
            path: ["familyMembers", i, "relation"],
          })
        }
      })
    }
  } else {
    // If not family, ignore familyMembers validation
    // Optionally clear familyMembers or ignore
  }
})

const defaultValues: z.infer<typeof formSchema> = {
      firstName: "",
      lastName: "",
      baptismalName: "",
      dateOfBirth: "",
      email: "",
      phone: "",
      address: "",
      city: "",
      postalCode: "",
      membershipType: "individual",
  familyMembers: [],
      emergencyContact: {
        name: "",
        phone: "",
        relation: "",
      },
      interests: [],
      skills: "",
      agreeToTerms: false,
}

export default function MembershipFormPage() {
  const [formStep, setFormStep] = useState(0)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [familyMembersCount, setFamilyMembersCount] = useState(1)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues,
  })

  const watchMembershipType = form.watch("membershipType")

  async function onSubmit(values: z.infer<typeof formSchema>) {

    console.log("Submitting...")
    
    setIsSubmitting(true)

    try {
      // Format the email content
      const emailContent = `\nNew Membership Application\n\nFirst Name: ${values.firstName}\nLast Name: ${values.lastName}\nBaptismal Name: ${values.baptismalName || "-"}\nDate of Birth: ${values.dateOfBirth}\nEmail: ${values.email}\nPhone: ${values.phone}\nAddress: ${values.address}\nCity: ${values.city}\nPostal Code: ${values.postalCode}\nMembership Type: ${values.membershipType}\n\nFamily Members: ${(values.familyMembers && values.familyMembers.length > 0) ? values.familyMembers.map((m, i) => `\n  ${i+1}. Name: ${m.name}, Relation: ${m.relation}, Age: ${m.age}`).join("") : "-"}\n\nEmergency Contact:\n  Name: ${values.emergencyContact.name}\n  Phone: ${values.emergencyContact.phone}\n  Relation: ${values.emergencyContact.relation}\n\nInterests: ${(values.interests && values.interests.length > 0) ? values.interests.join(", ") : "-"}\nSkills: ${values.skills || "-"}\n\nSubmitted on: ${new Date().toLocaleString()}\n      `.trim()

      // Create form data for FormSubmit.co
      const formData = new FormData()
      formData.append("_to", "anduamlakalehegne@gmail.com")
      formData.append("_subject", `New Membership Application - ${values.firstName} ${values.lastName}`)
      formData.append("_replyto", values.email)
      formData.append("message", emailContent)
      formData.append("name", `${values.firstName} ${values.lastName}`)
      formData.append("email", values.email)
      formData.append("_captcha", "false")
      formData.append("_template", "table")
      formData.append("_autoresponse", "Thank you for submitting your membership application. We will review your information and contact you soon.")

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
          setIsSubmitted(true)
          toast({
            title: "Application submitted successfully!",
            description: "Your membership application has been sent via email.",
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

  const addFamilyMember = () => {
    const currentFamilyMembers = form.getValues("familyMembers") || []
    form.setValue("familyMembers", [...currentFamilyMembers, { name: "", relation: "", age: "" }])
    setFamilyMembersCount((prev: number) => prev + 1)
  }

  const removeFamilyMember = (index: number) => {
    const currentFamilyMembers = form.getValues("familyMembers") || []
    if (currentFamilyMembers.length > 1) {
      form.setValue(
        "familyMembers",
        currentFamilyMembers.filter((_: any, i: number) => i !== index),
      )
      setFamilyMembersCount((prev: number) => prev - 1)
    }
  }

  const nextFormStep = () => {
    setFormStep((prev: number) => prev + 1)
  }

  const prevFormStep = () => {
    setFormStep((prev: number) => prev - 1)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto">
        <div className="mb-12 text-center">
          <h1 className="text-3xl font-bold mb-4">የቤተክርስቲያን አባልነት ማመልከቻ ቅፅ</h1>
          <p className="text-gray-600">
            በኮሎኝ ቅዱስ ሚካኤል የኢትዮጵያ ኦርቶዶክስ ተዋሕዶ ቤተክርስቲያን አባል ለመሆን ይህን ቅፅ ይሙሉ።
          </p>
        </div>

        <Tabs defaultValue="form" className="mb-8">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="form">
              <FileText className="mr-2 h-4 w-4" />
              መመዝገቢያ ቅፅ
            </TabsTrigger>
          </TabsList>

          <TabsContent value="form" className="space-y-6">
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
                    ማመልከቻዎ በተሳካ ሁኔታ ተልኳል
                  </CardTitle>
                  <CardDescription className="text-green-600">
                    ስለማመልከቻዎ እናመሰግናለን
                  </CardDescription>
                </CardHeader>
                {/* <CardContent className="pt-6">
                  <p className="mb-4">
                    ማመልከቻዎን ተቀብለናል። የሚቀጥሉት ይህን ይጠብቁ:
                  </p>
                  <ol className="space-y-2 list-decimal pl-5">
                    <li>የማረጋገጫ ኢሜል  ወደ ተመዘገበው ኢሜል ይላካል።</li>
                    <li>የአባልነት ኮሚቴ አባል ማመልከቻዎን ይመርመራል።</li>
                    <li>በአስፈላጊነት ወደ ቤተክርስቲያኑ ለቃለ-መጠይቅ ይጠራሉ።</li>
                    <li>ከተፈቀደ በኋላ የአባልነት ማረጋገጫ ይሰጣል።</li>
                  </ol>
                </CardContent> */}
                <CardFooter className="border-t pt-4 flex flex-col sm:flex-row gap-3">
                  <Button
                    onClick={() => {
                      setIsSubmitted(false)
                      form.reset()
                      setFormStep(0)
                    }}
                  >
                    ሌላ ማመልከቻ ላክ
                  </Button>
                  {/* <Button variant="outline">ወደ መነሻ ገፅ ተመለስ</Button> */}
                </CardFooter>
              </Card>
            ) : (
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  {formStep === 0 && (
                    <div className="space-y-6">
                      <Card>
                        <CardHeader className="bg-gray-50">
                          <CardTitle className="flex items-center">
                            <User className="mr-2 h-5 w-5 text-blue-600" />
                            የግል መረጃ
                          </CardTitle>
                          <CardDescription>የግል መረጃዎን ያስገቡ</CardDescription>
                        </CardHeader>
                        <CardContent className="pt-6">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <FormField
                              control={form.control}
                              name="firstName"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>የመጀመሪያ ስም *</FormLabel>
                                  <FormControl>
                                    <Input placeholder="ሙሉ ስም" {...field} />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                            <FormField
                              control={form.control}
                              name="lastName"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>የአያት ስም *</FormLabel>
                                  <FormControl>
                                    <Input placeholder="የአያት ስም" {...field} />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                            <FormField
                              control={form.control}
                              name="baptismalName"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>የክርስትና ስም (ካለ)</FormLabel>
                                  <FormControl>
                                    <Input placeholder="የጥምቀት ስም" {...field} />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                            <FormField
                              control={form.control}
                              name="dateOfBirth"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>የትውልድ ቀን *</FormLabel>
                                  <FormControl>
                                    <Input type="date" {...field} />
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
                                  <FormLabel>ኢሜል *</FormLabel>
                                  <FormControl>
                                    <Input type="email" placeholder="example@email.com" {...field} />
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
                                  <FormLabel>ስልክ ቁጥር *</FormLabel>
                                  <FormControl>
                                    <Input placeholder="+49 123 456789" {...field} />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </div>
                        </CardContent>
                      </Card>

                      <Card>
                        <CardHeader className="bg-gray-50">
                          <CardTitle className="flex items-center">
                            <MapPin className="mr-2 h-5 w-5 text-blue-600" />
                            የአድራሻ መረጃ
                          </CardTitle>
                          <CardDescription>የአሁኑን አድራሻዎን ያስገቡ</CardDescription>
                        </CardHeader>
                        <CardContent className="pt-6">
                          <div className="grid grid-cols-1 gap-6">
                            <FormField
                              control={form.control}
                              name="address"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>የመኖሪያ አድራሻ *</FormLabel>
                                  <FormControl>
                                    <Input placeholder="123 ምሳሌ መንገድ" {...field} />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                              <FormField
                                control={form.control}
                                name="city"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>ከተማ *</FormLabel>
                                    <FormControl>
                                      <Input placeholder="ኮሎኝ" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
                              <FormField
                                control={form.control}
                                name="postalCode"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>የፖስታ ኮድ *</FormLabel>
                                    <FormControl>
                                      <Input placeholder="50667" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
                            </div>
                          </div>
                        </CardContent>
                      </Card>

                      <div className="flex justify-end">
                        <Button type="button" onClick={nextFormStep}>
                          ወደ ቀጣይ ይቀጥሉ
                        </Button>
                      </div>
                    </div>
                  )}

                  {formStep === 1 && (
                    <div className="space-y-6">
                      <Card>
                        <CardHeader className="bg-gray-50">
                          <CardTitle className="flex items-center">
                            <Users className="mr-2 h-5 w-5 text-blue-600" />
                            የአባልነት አይነት & የቤተሰብ መረጃ
                          </CardTitle>
                          <CardDescription>የአባልነት አይነት ይምረጡ እና የቤተሰብ አባላት ካሉ ያክሉ</CardDescription>
                        </CardHeader>
                        <CardContent className="pt-6">
                          <div className="space-y-6">
                            <FormField
                              control={form.control}
                              name="membershipType"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>የአባልነት አይነት *</FormLabel>
                                  <FormControl>
                                    <RadioGroup
                                      onValueChange={field.onChange}
                                      defaultValue={field.value}
                                      className="flex flex-col space-y-1"
                                    >
                                      <div className="flex items-center space-x-2">
                                        <RadioGroupItem value="individual" id="individual" />
                                        <label htmlFor="individual" className="cursor-pointer">
                                          የግል አባልነት
                                        </label>
                                      </div>
                                      <div className="flex items-center space-x-2">
                                        <RadioGroupItem value="family" id="family" />
                                        <label htmlFor="family" className="cursor-pointer">
                                          የቤተሰብ አባልነት
                                        </label>
                                      </div>
                                    </RadioGroup>
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />

                            {watchMembershipType === "family" && (
                              <div className="space-y-4">
                                <div className="flex items-center justify-between">
                                  <h4 className="text-sm font-medium">የቤተሰብ አባላት</h4>
                                  <Button type="button" variant="outline" size="sm" onClick={addFamilyMember}>
                                    የቤተሰብ አባል አክል
                                  </Button>
                                </div>

                                {Array.from({ length: familyMembersCount }).map((_, index) => (
                                  <div key={index} className="border border-gray-200 rounded-md p-4">
                                    <div className="flex items-center justify-between mb-3">
                                      <h5 className="text-sm font-medium">የቤተሰብ አባል {index + 1}</h5>
                                      {index > 0 && (
                                        <Button
                                          type="button"
                                          variant="ghost"
                                          size="sm"
                                          onClick={() => removeFamilyMember(index)}
                                          className="h-8 px-2 text-red-600 hover:text-red-700 hover:bg-red-50"
                                        >
                                          አስወግድ
                                        </Button>
                                      )}
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                      <FormField
                                        control={form.control}
                                        name={`familyMembers.${index}.name`}
                                        render={({ field }) => (
                                          <FormItem>
                                            <FormLabel>ስም</FormLabel>
                                            <FormControl>
                                              <Input placeholder="ሙሉ ስም" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                          </FormItem>
                                        )}
                                      />
                                      <FormField
                                        control={form.control}
                                        name={`familyMembers.${index}.relation`}
                                        render={({ field }) => (
                                          <FormItem>
                                            <FormLabel>ግንኙነት</FormLabel>
                                            <FormControl>
                                              <Input placeholder="ለምሳሌ፡ ባል፣ ልጅ" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                          </FormItem>
                                        )}
                                      />
                                      <FormField
                                        control={form.control}
                                        name={`familyMembers.${index}.age`}
                                        render={({ field }) => (
                                          <FormItem>
                                            <FormLabel>እድሜ</FormLabel>
                                            <FormControl>
                                              <Input type="number" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                          </FormItem>
                                        )}
                                      />
                                    </div>
                                  </div>
                                ))}
                              </div>
                            )}
                          </div>
                        </CardContent>
                      </Card>

                      <Card>
                        <CardHeader className="bg-gray-50">
                          <CardTitle className="flex items-center">
                            <User className="mr-2 h-5 w-5 text-blue-600" />
                            የአደጋ ጊዜ እውቂያ
                          </CardTitle>
                          <CardDescription>በአደጋ ጊዜ ሊደውሉት የሚችሉትን ሰው ያስገቡ</CardDescription>
                        </CardHeader>
                        <CardContent className="pt-6">
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <FormField
                              control={form.control}
                              name="emergencyContact.name"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>ስም *</FormLabel>
                                  <FormControl>
                                    <Input placeholder="ሙሉ ስም" {...field} />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                            <FormField
                              control={form.control}
                              name="emergencyContact.phone"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>ስልክ ቁጥር *</FormLabel>
                                  <FormControl>
                                    <Input placeholder="ስልክ ቁጥር" {...field} />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                            <FormField
                              control={form.control}
                              name="emergencyContact.relation"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>ግንኙነት *</FormLabel>
                                  <FormControl>
                                    <Input placeholder="ለምሳሌ፡ ባል፣ ወላጅ" {...field} />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </div>
                        </CardContent>
                      </Card>

                      <div className="flex justify-between">
                        <Button type="button" variant="outline" onClick={prevFormStep}>
                          ወደ ቀዳሚ ተመለስ
                        </Button>
                        <Button type="button" onClick={nextFormStep}>
                          ወደ ቀጣይ ይቀጥሉ
                        </Button>
                      </div>
                    </div>
                  )}

                  {formStep === 2 && (
                    <div className="space-y-6">
                      <Card>
                        <CardHeader className="bg-gray-50">
                          <CardTitle className="flex items-center">
                            <Book className="mr-2 h-5 w-5 text-blue-600" />
                            በቤተክርስቲያኑ ውስጥ አገልግሎት
                          </CardTitle>
                          <CardDescription>
                            በቤተክርስቲያኑ ውስጥ ለማገልገል የሚፈልጉትን ይምረጡ
                          </CardDescription>
                        </CardHeader>
                        <CardContent className="pt-6">
                          <div className="space-y-6">
                            <FormField
                              control={form.control}
                              name="interests"
                              render={() => (
                                <FormItem>
                                  <div className="mb-4">
                                    <FormLabel>የሚፈልጉት አገልግሎቶች (ሁሉንም መምረጥ ይችላሉ)</FormLabel>
                                    <FormDescription>
                                      በቤተክርስቲያኑ ውስጥ ለማገልገል የሚፈልጉትን ይምረጡ
                                    </FormDescription>
                                  </div>
                                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                    {[
                                      { id: "worship", label: "የስጦታ አገልግሎት" },
                                      { id: "choir", label: "የቤተክርስቲያን መዝሙር ቡድን" },
                                      { id: "sunday-school", label: "የእሁድ ት/ቤት" },
                                      { id: "youth", label: "የወጣቶች ፕሮግራሞች" },
                                      { id: "community", label: "የማህበረሰብ አገልግሎት" },
                                      { id: "prayer", label: "የጸሎት ቡድኖች" },
                                      { id: "bible-study", label: "የመጽሐፍ ቅዱስ ጥናት" },
                                      { id: "committees", label: "የቤተክርስቲያን ኮሚቴዎች" },
                                      { id: "events", label: "የተለያዩ ዝግጅቶች" },
                                      { id: "maintenance", label: "የቤተክርስቲያን ግንባታ/ጥገና" },
                                    ].map((item) => (
                                      <FormField
                                        key={item.id}
                                        control={form.control}
                                        name="interests"
                                        render={({ field }) => {
                                          return (
                                            <FormItem
                                              key={item.id}
                                              className="flex flex-row items-start space-x-3 space-y-0"
                                            >
                                              <FormControl>
                                                <Checkbox
                                                  checked={field.value?.includes(item.id)}
                                                  onCheckedChange={(checked) => {
                                                    const updatedInterests = checked
                                                      ? [...(field.value || []), item.id]
                                                      : field.value?.filter((value) => value !== item.id) || []
                                                    field.onChange(updatedInterests)
                                                  }}
                                                />
                                              </FormControl>
                                              <FormLabel className="font-normal cursor-pointer">{item.label}</FormLabel>
                                            </FormItem>
                                          )
                                        }}
                                      />
                                    ))}
                                  </div>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />

                            <FormField
                              control={form.control}
                              name="skills"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>ችሎታዎች & ተሞክሮዎች</FormLabel>
                                  <FormDescription>
                                    ለቤተክርስቲያኑ ማገልገል የሚፈልጉትን ችሎታዎች ይግለጹ
                                  </FormDescription>
                                  <FormControl>
                                    <Textarea
                                      // placeholder="ለምሳሌ፡ ሙዚቃ፣ አስተማማኝነት፣ የተለያዩ ቋንቋዎች..."
                                      className="min-h-[100px]"
                                      {...field}
                                    />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </div>
                        </CardContent>
                      </Card>

                      <Card>
                        <CardHeader className="bg-gray-50">
                          <CardTitle className="flex items-center">
                            <FileText className="mr-2 h-5 w-5 text-blue-600" />
                            ደንቦች & ማስገባት
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="pt-6">
                          <div className="space-y-6">
                            <FormField
                              control={form.control}
                              name="agreeToTerms"
                              render={({ field }) => (
                                <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                                  <FormControl>
                                    <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                                  </FormControl>
                                  <div className="space-y-1 leading-none">
                                    <FormLabel className="font-normal">
                                      የቤተክርስቲያኑን ደንቦች እና መመሪያዎች እስማማለሁ
                                    </FormLabel>
                                    <FormDescription>
                                      የሰጡት መረጃ እውነተኛ መሆኑን ያረጋግጡ እና የቤተክርስቲያኑን መመሪያዎች እና ደንቦች ይከተላሉ።
                                    </FormDescription>
                                  </div>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </div>
                        </CardContent>
                      </Card>

                      <div className="flex justify-between">
                        <Button type="button" variant="outline" onClick={prevFormStep}>
                          ወደ ቀዳሚ ተመለስ
                        </Button>
                        <Button type="submit" disabled={isSubmitting}>
                          {isSubmitting ? (
                            <>
                              <svg
                                className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                              >
                                <circle
                                  className="opacity-25"
                                  cx="12"
                                  cy="12"
                                  r="10"
                                  stroke="currentColor"
                                  strokeWidth="4"
                                ></circle>
                                <path
                                  className="opacity-75"
                                  fill="currentColor"
                                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                ></path>
                              </svg>
                              በማስገባት ላይ...
                            </>
                          ) : (
                            <>
                              <Send className="mr-2 h-4 w-4" />
                              ማመልከቻ ላክ
                            </>
                          )}
                        </Button>
                      </div>
                    </div>
                  )}
                </form>
              </Form>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
