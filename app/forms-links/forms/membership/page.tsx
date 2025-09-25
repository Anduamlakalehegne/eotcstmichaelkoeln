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
import { useLocale } from "@/contexts/locale-context"

export default function MembershipFormPage() {
  const { translations } = useLocale()
  const t = translations.formsLinks.forms.membership

  const formSchema = z.object({
    firstName: z.string().min(2, { message: t.validation.firstNameMin }),
    lastName: z.string().min(2, { message: t.validation.lastNameMin }),
    baptismalName: z.string().optional(),
    dateOfBirth: z.string().min(1, { message: t.validation.dateOfBirthReq }),
    email: z.string().email({ message: t.validation.emailInvalid }),
    phone: z.string().min(6, { message: t.validation.phoneMin }),
    address: z.string().min(5, { message: t.validation.addressMin }),
    city: z.string().min(2, { message: t.validation.cityMin }),
    postalCode: z.string().min(4, { message: t.validation.postalCodeMin }),
    membershipType: z.enum(["individual", "family"], {
      required_error: t.validation.membershipTypeReq,
    }),
  familyMembers: z
    .array(
      z.object({
        name: z.string().min(2, { message: t.validation.familyMemberNameMin }),
        relation: z.string().min(2, { message: t.validation.familyMemberRelationMin }),
        age: z.string(),
      })
    ),
  emergencyContact: z.object({
    name: z.string().min(2, { message: t.validation.emergencyNameMin }),
    phone: z.string().min(6, { message: t.validation.emergencyPhoneMin }),
    relation: z.string().min(2, { message: t.validation.emergencyRelationMin }),
  }),
  interests: z.array(z.string()).optional(),
  skills: z.string().optional(),
  agreeToTerms: z.boolean().refine((value) => value === true, {
    message: t.validation.agreeRequired,
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
      const emailContent = `\n${t.email.heading}\n\n${t.labels.firstName}: ${values.firstName}\n${t.labels.lastName}: ${values.lastName}\n${t.labels.baptismalName}: ${values.baptismalName || "-"}\n${t.labels.dateOfBirth}: ${values.dateOfBirth}\n${t.labels.email}: ${values.email}\n${t.labels.phone}: ${values.phone}\n${t.labels.address}: ${values.address}\n${t.labels.city}: ${values.city}\n${t.labels.postalCode}: ${values.postalCode}\n${t.labels.membershipType}: ${values.membershipType}\n\n${t.labels.familyMembers}: ${(values.familyMembers && values.familyMembers.length > 0) ? values.familyMembers.map((m, i) => `\n  ${i+1}. ${t.labels.name}: ${m.name}, ${t.labels.relation}: ${m.relation}, ${t.labels.age}: ${m.age}`).join("") : "-"}\n\n${t.labels.emergencyContact}:\n  ${t.labels.name}: ${values.emergencyContact.name}\n  ${t.labels.phone}: ${values.emergencyContact.phone}\n  ${t.labels.relation}: ${values.emergencyContact.relation}\n\nInterests: ${(values.interests && values.interests.length > 0) ? values.interests.join(", ") : "-"}\n${t.labels.skills}: ${values.skills || "-"}\n\n${t.email.submittedOn}: ${new Date().toLocaleString()}\n      `.trim()

      // Create form data for FormSubmit.co
      const formData = new FormData()
      formData.append("_to", "anduamlakalehegne@gmail.com")
      formData.append("_subject", `${t.email.subjectPrefix} - ${values.firstName} ${values.lastName}`)
      formData.append("_replyto", values.email)
      formData.append("message", emailContent)
      formData.append("name", `${values.firstName} ${values.lastName}`)
      formData.append("email", values.email)
      formData.append("_captcha", "false")
      formData.append("_template", "table")
      formData.append("_autoresponse", t.email.autoresponse)

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
            description: t.toast.activationDesc,
            variant: "default",
          })
        } else {
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
          <h1 className="text-3xl font-bold mb-4">{t.title}</h1>
          <p className="text-gray-600">{t.intro}</p>
        </div>

        <Tabs defaultValue="form" className="mb-8">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="form">
              <FileText className="mr-2 h-4 w-4" />
              {t.tabs.form}
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
                    {t.successTitle}
                  </CardTitle>
                  <CardDescription className="text-green-600">{t.successDesc}</CardDescription>
                </CardHeader>
               
                <CardFooter className="border-t pt-4 flex flex-col sm:flex-row gap-3">
                  <Button
                    onClick={() => {
                      setIsSubmitted(false)
                      form.reset()
                      setFormStep(0)
                    }}
                  >
                    {t.successButton}
                  </Button>
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
                            {t.sections.personal.title}
                          </CardTitle>
                          <CardDescription>{t.sections.personal.description}</CardDescription>
                        </CardHeader>
                        <CardContent className="pt-6">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                              name="lastName"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>{t.labels.lastName} *</FormLabel>
                                  <FormControl>
                                    <Input placeholder={t.placeholders.lastName} {...field} />
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
                                  <FormLabel>{t.labels.baptismalName}</FormLabel>
                                  <FormControl>
                                    <Input placeholder={t.placeholders.baptismalName} {...field} />
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
                                  <FormLabel>{t.labels.dateOfBirth} *</FormLabel>
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
                        </CardContent>
                      </Card>

                      <Card>
                        <CardHeader className="bg-gray-50">
                          <CardTitle className="flex items-center">
                            <MapPin className="mr-2 h-5 w-5 text-blue-600" />
                            {t.sections.address.title}
                          </CardTitle>
                          <CardDescription>{t.sections.address.description}</CardDescription>
                        </CardHeader>
                        <CardContent className="pt-6">
                          <div className="grid grid-cols-1 gap-6">
                            <FormField
                              control={form.control}
                              name="address"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>{t.labels.address} *</FormLabel>
                                  <FormControl>
                                    <Input placeholder={t.placeholders.address} {...field} />
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
                                    <FormLabel>{t.labels.city} *</FormLabel>
                                    <FormControl>
                                      <Input placeholder={t.placeholders.city} {...field} />
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
                                    <FormLabel>{t.labels.postalCode} *</FormLabel>
                                    <FormControl>
                                      <Input placeholder={t.placeholders.postalCode} {...field} />
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
                          {t.labels.next}
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
                            {t.sections.membership.title}
                          </CardTitle>
                          <CardDescription>{t.sections.membership.description}</CardDescription>
                        </CardHeader>
                        <CardContent className="pt-6">
                          <div className="space-y-6">
                            <FormField
                              control={form.control}
                              name="membershipType"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>{t.labels.membershipType} *</FormLabel>
                                  <FormControl>
                                    <RadioGroup
                                      onValueChange={field.onChange}
                                      defaultValue={field.value}
                                      className="flex flex-col space-y-1"
                                    >
                                      <div className="flex items-center space-x-2">
                                        <RadioGroupItem value="individual" id="individual" />
                                        <label htmlFor="individual" className="cursor-pointer">
                                          {t.labels.membershipIndividual}
                                        </label>
                                      </div>
                                      <div className="flex items-center space-x-2">
                                        <RadioGroupItem value="family" id="family" />
                                        <label htmlFor="family" className="cursor-pointer">
                                          {t.labels.membershipFamily}
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
                                  <h4 className="text-sm font-medium">{t.labels.familyMembers}</h4>
                                  <Button type="button" variant="outline" size="sm" onClick={addFamilyMember}>
                                    {t.labels.addFamilyMember}
                                  </Button>
                                </div>

                                {Array.from({ length: familyMembersCount }).map((_, index) => (
                                  <div key={index} className="border border-gray-200 rounded-md p-4">
                                    <div className="flex items-center justify-between mb-3">
                                      <h5 className="text-sm font-medium">{t.labels.memberN} {index + 1}</h5>
                                      {index > 0 && (
                                        <Button
                                          type="button"
                                          variant="ghost"
                                          size="sm"
                                          onClick={() => removeFamilyMember(index)}
                                          className="h-8 px-2 text-red-600 hover:text-red-700 hover:bg-red-50"
                                        >
                                          {t.labels.remove}
                                        </Button>
                                      )}
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                      <FormField
                                        control={form.control}
                                        name={`familyMembers.${index}.name`}
                                        render={({ field }) => (
                                          <FormItem>
                                            <FormLabel>{t.labels.name}</FormLabel>
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
                                            <FormLabel>{t.labels.relation}</FormLabel>
                                            <FormControl>
                                              <Input placeholder={t.placeholders.relationExample} {...field} />
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
                                            <FormLabel>{t.labels.age}</FormLabel>
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
                            {t.sections.emergency.title}
                          </CardTitle>
                          <CardDescription>{t.sections.emergency.description}</CardDescription>
                        </CardHeader>
                        <CardContent className="pt-6">
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <FormField
                              control={form.control}
                              name="emergencyContact.name"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>{t.labels.name} *</FormLabel>
                                  <FormControl>
                                    <Input placeholder="" {...field} />
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
                                  <FormLabel>{t.labels.phone} *</FormLabel>
                                  <FormControl>
                                    <Input placeholder="" {...field} />
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
                                  <FormLabel>{t.labels.relation} *</FormLabel>
                                  <FormControl>
                                    <Input placeholder="" {...field} />
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
                          {t.labels.prev}
                        </Button>
                        <Button type="button" onClick={nextFormStep}>
                          {t.labels.next}
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
                            {t.sections.service.title}
                          </CardTitle>
                          <CardDescription>{t.sections.service.description}</CardDescription>
                        </CardHeader>
                        <CardContent className="pt-6">
                          <div className="space-y-6">
                            <FormField
                              control={form.control}
                              name="interests"
                              render={() => (
                                <FormItem>
                                  <div className="mb-4">
                                    <FormLabel>{t.labels.interestsTitle}</FormLabel>
                                    <FormDescription>{t.labels.interestsHelp}</FormDescription>
                                  </div>
                                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                    {[ 
                                      { id: "worship", label: t.labels.interestsOptions.worship },
                                      { id: "choir", label: t.labels.interestsOptions.choir },
                                      { id: "sunday-school", label: t.labels.interestsOptions.sundaySchool },
                                      { id: "youth", label: t.labels.interestsOptions.youth },
                                      { id: "community", label: t.labels.interestsOptions.community },
                                      { id: "prayer", label: t.labels.interestsOptions.prayer },
                                      { id: "bible-study", label: t.labels.interestsOptions.bibleStudy },
                                      { id: "committees", label: t.labels.interestsOptions.committees },
                                      { id: "events", label: t.labels.interestsOptions.events },
                                      { id: "maintenance", label: t.labels.interestsOptions.maintenance },
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
                                  <FormLabel>{t.labels.skills}</FormLabel>
                                  <FormDescription>{t.labels.skillsHelp}</FormDescription>
                                  <FormControl>
                                    <Textarea
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
                            {t.sections.terms.title}
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
                                    <FormLabel className="font-normal">{t.labels.agree}</FormLabel>
                                    <FormDescription>{t.labels.agreeHelp}</FormDescription>
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
                          {t.labels.prev}
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
                              {t.labels.submitting}
                            </>
                          ) : (
                            <>
                              <Send className="mr-2 h-4 w-4" />
                              {t.labels.submit}
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
