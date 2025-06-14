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

const formSchema = z.object({
  firstName: z.string().min(2, { message: "First name must be at least 2 characters." }),
  lastName: z.string().min(2, { message: "Last name must be at least 2 characters." }),
  baptismalName: z.string().optional(),
  dateOfBirth: z.string().min(1, { message: "Date of birth is required." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().min(6, { message: "Phone number must be at least 6 characters." }),
  address: z.string().min(5, { message: "Address must be at least 5 characters." }),
  city: z.string().min(2, { message: "City must be at least 2 characters." }),
  postalCode: z.string().min(4, { message: "Postal code must be at least 4 characters." }),
  membershipType: z.enum(["individual", "family"], {
    required_error: "Please select a membership type.",
  }),
  familyMembers: z
    .array(
      z.object({
        name: z.string().min(2, { message: "Name must be at least 2 characters." }),
        relation: z.string().min(2, { message: "Relation must be at least 2 characters." }),
        age: z.string(),
      }),
    )
    .optional(),
  emergencyContact: z.object({
    name: z.string().min(2, { message: "Name must be at least 2 characters." }),
    phone: z.string().min(6, { message: "Phone number must be at least 6 characters." }),
    relation: z.string().min(2, { message: "Relation must be at least 2 characters." }),
  }),
  interests: z.array(z.string()).optional(),
  skills: z.string().optional(),
  agreeToTerms: z.boolean().refine((value) => value === true, {
    message: "You must agree to the terms and conditions.",
  }),
})

export default function MembershipFormPage() {
  const [formStep, setFormStep] = useState(0)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [familyMembersCount, setFamilyMembersCount] = useState(1)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
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
      familyMembers: [{ name: "", relation: "", age: "" }],
      emergencyContact: {
        name: "",
        phone: "",
        relation: "",
      },
      interests: [],
      skills: "",
      agreeToTerms: false,
    },
  })

  const watchMembershipType = form.watch("membershipType")

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      console.log(values)
      setIsSubmitting(false)
      setIsSubmitted(true)
    }, 2000)
  }

  const addFamilyMember = () => {
    const currentFamilyMembers = form.getValues("familyMembers") || []
    form.setValue("familyMembers", [...currentFamilyMembers, { name: "", relation: "", age: "" }])
    setFamilyMembersCount((prev) => prev + 1)
  }

  const removeFamilyMember = (index: number) => {
    const currentFamilyMembers = form.getValues("familyMembers") || []
    if (currentFamilyMembers.length > 1) {
      form.setValue(
        "familyMembers",
        currentFamilyMembers.filter((_, i) => i !== index),
      )
      setFamilyMembersCount((prev) => prev - 1)
    }
  }

  const nextFormStep = () => {
    setFormStep((prev) => prev + 1)
  }

  const prevFormStep = () => {
    setFormStep((prev) => prev - 1)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto">
        <div className="mb-12 text-center">
          <h1 className="text-3xl font-bold mb-4">Church Membership Application</h1>
          <p className="text-gray-600">
            Complete this form to apply for membership at St. Michael Ethiopian Orthodox Church in Cologne.
          </p>
        </div>

        <Tabs defaultValue="form" className="mb-8">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="form">
              <FileText className="mr-2 h-4 w-4" />
              Online Form
            </TabsTrigger>
            <TabsTrigger value="download">
              <Download className="mr-2 h-4 w-4" />
              Download Form
            </TabsTrigger>
            <TabsTrigger value="info">
              <Book className="mr-2 h-4 w-4" />
              Membership Info
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
                    Application Submitted Successfully
                  </CardTitle>
                  <CardDescription className="text-green-600">
                    Thank you for submitting your membership application
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <p className="mb-4">
                    Your application has been received and is being processed. Here's what happens next:
                  </p>
                  <ol className="space-y-2 list-decimal pl-5">
                    <li>A confirmation email will be sent to your registered email address.</li>
                    <li>A member of our membership committee will review your application.</li>
                    <li>You'll be contacted for an in-person meeting (if required).</li>
                    <li>Once approved, you'll receive your membership confirmation.</li>
                  </ol>
                </CardContent>
                <CardFooter className="border-t pt-4 flex flex-col sm:flex-row gap-3">
                  <Button
                    onClick={() => {
                      setIsSubmitted(false)
                      form.reset()
                      setFormStep(0)
                    }}
                  >
                    Submit Another Application
                  </Button>
                  <Button variant="outline">Return to Homepage</Button>
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
                            Personal Information
                          </CardTitle>
                          <CardDescription>Please provide your personal details</CardDescription>
                        </CardHeader>
                        <CardContent className="pt-6">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <FormField
                              control={form.control}
                              name="firstName"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>First Name *</FormLabel>
                                  <FormControl>
                                    <Input placeholder="John" {...field} />
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
                                  <FormLabel>Last Name *</FormLabel>
                                  <FormControl>
                                    <Input placeholder="Doe" {...field} />
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
                                  <FormLabel>Baptismal Name (if any)</FormLabel>
                                  <FormControl>
                                    <Input placeholder="Baptismal name" {...field} />
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
                                  <FormLabel>Date of Birth *</FormLabel>
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
                                  <FormLabel>Email *</FormLabel>
                                  <FormControl>
                                    <Input type="email" placeholder="john.doe@example.com" {...field} />
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
                                  <FormLabel>Phone Number *</FormLabel>
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
                            Address Information
                          </CardTitle>
                          <CardDescription>Please provide your current address</CardDescription>
                        </CardHeader>
                        <CardContent className="pt-6">
                          <div className="grid grid-cols-1 gap-6">
                            <FormField
                              control={form.control}
                              name="address"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Street Address *</FormLabel>
                                  <FormControl>
                                    <Input placeholder="123 Example Street" {...field} />
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
                                    <FormLabel>City *</FormLabel>
                                    <FormControl>
                                      <Input placeholder="Cologne" {...field} />
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
                                    <FormLabel>Postal Code *</FormLabel>
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
                          Next Step
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
                            Membership Type & Family Information
                          </CardTitle>
                          <CardDescription>Select membership type and add family members if applicable</CardDescription>
                        </CardHeader>
                        <CardContent className="pt-6">
                          <div className="space-y-6">
                            <FormField
                              control={form.control}
                              name="membershipType"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Membership Type *</FormLabel>
                                  <FormControl>
                                    <RadioGroup
                                      onValueChange={field.onChange}
                                      defaultValue={field.value}
                                      className="flex flex-col space-y-1"
                                    >
                                      <div className="flex items-center space-x-2">
                                        <RadioGroupItem value="individual" id="individual" />
                                        <label htmlFor="individual" className="cursor-pointer">
                                          Individual Membership
                                        </label>
                                      </div>
                                      <div className="flex items-center space-x-2">
                                        <RadioGroupItem value="family" id="family" />
                                        <label htmlFor="family" className="cursor-pointer">
                                          Family Membership
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
                                  <h4 className="text-sm font-medium">Family Members</h4>
                                  <Button type="button" variant="outline" size="sm" onClick={addFamilyMember}>
                                    Add Family Member
                                  </Button>
                                </div>

                                {Array.from({ length: familyMembersCount }).map((_, index) => (
                                  <div key={index} className="border border-gray-200 rounded-md p-4">
                                    <div className="flex items-center justify-between mb-3">
                                      <h5 className="text-sm font-medium">Family Member {index + 1}</h5>
                                      {index > 0 && (
                                        <Button
                                          type="button"
                                          variant="ghost"
                                          size="sm"
                                          onClick={() => removeFamilyMember(index)}
                                          className="h-8 px-2 text-red-600 hover:text-red-700 hover:bg-red-50"
                                        >
                                          Remove
                                        </Button>
                                      )}
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                      <FormField
                                        control={form.control}
                                        name={`familyMembers.${index}.name`}
                                        render={({ field }) => (
                                          <FormItem>
                                            <FormLabel>Name</FormLabel>
                                            <FormControl>
                                              <Input placeholder="Full name" {...field} />
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
                                            <FormLabel>Relation</FormLabel>
                                            <FormControl>
                                              <Input placeholder="e.g., Spouse, Child" {...field} />
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
                                            <FormLabel>Age</FormLabel>
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
                            Emergency Contact
                          </CardTitle>
                          <CardDescription>Person to contact in case of emergency</CardDescription>
                        </CardHeader>
                        <CardContent className="pt-6">
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <FormField
                              control={form.control}
                              name="emergencyContact.name"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Contact Name *</FormLabel>
                                  <FormControl>
                                    <Input placeholder="Full name" {...field} />
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
                                  <FormLabel>Contact Phone *</FormLabel>
                                  <FormControl>
                                    <Input placeholder="Phone number" {...field} />
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
                                  <FormLabel>Relationship *</FormLabel>
                                  <FormControl>
                                    <Input placeholder="e.g., Spouse, Parent" {...field} />
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
                          Previous Step
                        </Button>
                        <Button type="button" onClick={nextFormStep}>
                          Next Step
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
                            Church Involvement
                          </CardTitle>
                          <CardDescription>
                            Tell us how you'd like to be involved in our church community
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
                                    <FormLabel>Areas of Interest (Select all that apply)</FormLabel>
                                    <FormDescription>
                                      These areas help us know how you might want to participate in church activities
                                    </FormDescription>
                                  </div>
                                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                    {[
                                      { id: "worship", label: "Worship Services" },
                                      { id: "choir", label: "Church Choir" },
                                      { id: "sunday-school", label: "Sunday School" },
                                      { id: "youth", label: "Youth Programs" },
                                      { id: "community", label: "Community Service" },
                                      { id: "prayer", label: "Prayer Groups" },
                                      { id: "bible-study", label: "Bible Study" },
                                      { id: "committees", label: "Church Committees" },
                                      { id: "events", label: "Events & Celebrations" },
                                      { id: "maintenance", label: "Facilities & Maintenance" },
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
                                  <FormLabel>Skills & Talents</FormLabel>
                                  <FormDescription>
                                    Please share any skills or talents you'd like to contribute to our church community
                                  </FormDescription>
                                  <FormControl>
                                    <Textarea
                                      placeholder="Describe your skills or talents (e.g., music, teaching, organizing, languages, etc.)"
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
                            Terms & Submission
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
                                      I agree to the church membership terms and conditions
                                    </FormLabel>
                                    <FormDescription>
                                      By checking this box, you confirm that the information provided is accurate and
                                      you agree to abide by the church's principles and community guidelines.
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
                          Previous Step
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
                              Submitting...
                            </>
                          ) : (
                            <>
                              <Send className="mr-2 h-4 w-4" />
                              Submit Application
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

          <TabsContent value="download">
            <Card>
              <CardHeader>
                <CardTitle>Download Membership Form</CardTitle>
                <CardDescription>
                  You can download the membership form to fill out manually and submit it in person.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p>
                    If you prefer to fill out a physical form, you can download it in your preferred format below. Once
                    completed, please bring it to the church office during office hours or give it to an administrative
                    staff member during a church service.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
                    <Button className="flex items-center justify-center gap-2" variant="outline">
                      <FileText className="h-4 w-4" />
                      PDF Format
                    </Button>
                    <Button className="flex items-center justify-center gap-2" variant="outline">
                      <FileText className="h-4 w-4" />
                      Word Format
                    </Button>
                    <Button className="flex items-center justify-center gap-2" variant="outline">
                      <FileText className="h-4 w-4" />
                      Print Instructions
                    </Button>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="border-t pt-4">
                <p className="text-sm text-gray-500">
                  For any questions regarding the membership form, please contact the church office at
                  church@example.com or call +491234567890.
                </p>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="info">
            <Card>
              <CardHeader>
                <CardTitle>Church Membership Information</CardTitle>
                <CardDescription>Learn about the benefits and responsibilities of church membership</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Benefits of Membership</h3>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Full participation in church sacraments and ceremonies</li>
                      <li>Voting rights in church matters and elections</li>
                      <li>Access to pastoral care and counseling</li>
                      <li>Participation in members-only events and programs</li>
                      <li>Opportunity to serve in church ministries and leadership roles</li>
                      <li>Special consideration for church facilities use</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-2">Membership Requirements</h3>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Baptism in the Orthodox faith</li>
                      <li>Regular attendance at church services</li>
                      <li>Commitment to the teachings and traditions of the Ethiopian Orthodox Tewahedo Church</li>
                      <li>Participation in church life and activities</li>
                      <li>Financial contributions to support the church's mission</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-2">Membership Process</h3>
                    <ol className="list-decimal pl-6 space-y-1">
                      <li>Submit a completed membership application form</li>
                      <li>Meet with a clergy member or membership committee representative</li>
                      <li>Complete any required orientation or classes</li>
                      <li>Receive approval from the church leadership</li>
                      <li>Official recognition during a church service</li>
                    </ol>
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
