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
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import {
  CreditCard,
  Landmark,
  Calendar,
  FileText,
  AlertCircle,
  HeartHandshake,
  Banknote,
  User,
  Users,
} from "lucide-react"

const formSchema = z.object({
  donationType: z.enum(["one-time", "monthly", "quarterly", "annually"], {
    required_error: "Please select a donation type.",
  }),
  amount: z.string().min(1, { message: "Please enter an amount." }),
  customAmount: z.string().optional(),
  paymentMethod: z.enum(["credit-card", "bank-transfer", "paypal"], {
    required_error: "Please select a payment method.",
  }),
  firstName: z.string().min(2, { message: "First name must be at least 2 characters." }),
  lastName: z.string().min(2, { message: "Last name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  address: z.string().optional(),
  city: z.string().optional(),
  postalCode: z.string().optional(),
  phone: z.string().optional(),
  purpose: z.enum(["general", "building-fund", "youth-programs", "community-outreach", "other"], {
    required_error: "Please select a donation purpose.",
  }),
  otherPurpose: z.string().optional(),
  comments: z.string().optional(),
  anonymous: z.boolean().default(false),
  receiptRequired: z.boolean().default(true),
  agreeToTerms: z.boolean().refine((value) => value === true, {
    message: "You must agree to the terms and conditions.",
  }),
})

export default function DonationFormPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [selectedAmount, setSelectedAmount] = useState<string | null>(null)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      donationType: "one-time",
      amount: "",
      customAmount: "",
      paymentMethod: "credit-card",
      firstName: "",
      lastName: "",
      email: "",
      address: "",
      city: "",
      postalCode: "",
      phone: "",
      purpose: "general",
      otherPurpose: "",
      comments: "",
      anonymous: false,
      receiptRequired: true,
      agreeToTerms: false,
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      console.log(values)
      setIsSubmitting(false)
      setIsSubmitted(true)
    }, 2000)
  }

  const handleAmountSelect = (amount: string) => {
    setSelectedAmount(amount)
    form.setValue("amount", amount)
    form.clearErrors("amount")
  }

  const watchDonationType = form.watch("donationType")
  const watchPurpose = form.watch("purpose")
  const watchPaymentMethod = form.watch("paymentMethod")

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold mb-4">Donate to Our Church</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Your generous donations help support our mission, community outreach programs, and maintain our church
            facilities. Thank you for your support!
          </p>
        </div>

        <Tabs defaultValue="online" className="mb-8">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="online">
              <CreditCard className="mr-2 h-4 w-4" />
              Online Donation
            </TabsTrigger>
            <TabsTrigger value="bank">
              <Landmark className="mr-2 h-4 w-4" />
              Bank Transfer
            </TabsTrigger>
            <TabsTrigger value="info">
              <FileText className="mr-2 h-4 w-4" />
              Donation Information
            </TabsTrigger>
          </TabsList>

          <TabsContent value="online">
            {isSubmitted ? (
              <Card className="border-green-100">
                <CardHeader className="bg-green-50">
                  <CardTitle className="text-green-700 flex items-center">
                    <HeartHandshake className="mr-2 h-5 w-5" />
                    Thank You for Your Donation!
                  </CardTitle>
                  <CardDescription className="text-green-600">
                    Your donation has been successfully processed
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <p className="mb-4">Your generosity makes our work possible. Here's what happens next:</p>
                  <ol className="space-y-2 list-decimal pl-5">
                    <li>You will receive a confirmation email with the details of your donation.</li>
                    <li>If you requested a receipt, it will be sent to you within 1-2 business days.</li>
                    <li>Your donation will be put to work according to your specified purpose.</li>
                  </ol>
                  <div className="bg-blue-50 p-4 rounded-md mt-6">
                    <h3 className="font-semibold text-blue-700 mb-2">Reference Number</h3>
                    <p className="text-blue-600 font-mono text-lg tracking-wider">
                      DON-
                      {Math.floor(Math.random() * 1000000)
                        .toString()
                        .padStart(6, "0")}
                    </p>
                    <p className="text-sm text-blue-500 mt-2">Please keep this reference number for your records.</p>
                  </div>
                </CardContent>
                <CardFooter className="border-t pt-4 flex flex-col sm:flex-row gap-3">
                  <Button
                    onClick={() => {
                      setIsSubmitted(false)
                      form.reset()
                    }}
                  >
                    Make Another Donation
                  </Button>
                  <Button variant="outline">Return to Homepage</Button>
                </CardFooter>
              </Card>
            ) : (
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                  <Card>
                    <CardHeader className="bg-gray-50">
                      <CardTitle className="flex items-center">
                        <Banknote className="mr-2 h-5 w-5 text-blue-600" />
                        Donation Details
                      </CardTitle>
                      <CardDescription>Specify the amount and frequency of your donation</CardDescription>
                    </CardHeader>
                    <CardContent className="pt-6 space-y-6">
                      <FormField
                        control={form.control}
                        name="donationType"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Donation Frequency *</FormLabel>
                            <FormControl>
                              <RadioGroup
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                                className="flex flex-wrap gap-4"
                              >
                                <div className="flex items-center space-x-2 border rounded-md p-3 hover:bg-gray-50 transition-colors">
                                  <RadioGroupItem value="one-time" id="one-time" />
                                  <label htmlFor="one-time" className="cursor-pointer font-medium">
                                    One-time
                                  </label>
                                </div>
                                <div className="flex items-center space-x-2 border rounded-md p-3 hover:bg-gray-50 transition-colors">
                                  <RadioGroupItem value="monthly" id="monthly" />
                                  <label htmlFor="monthly" className="cursor-pointer font-medium">
                                    Monthly
                                  </label>
                                </div>
                                <div className="flex items-center space-x-2 border rounded-md p-3 hover:bg-gray-50 transition-colors">
                                  <RadioGroupItem value="quarterly" id="quarterly" />
                                  <label htmlFor="quarterly" className="cursor-pointer font-medium">
                                    Quarterly
                                  </label>
                                </div>
                                <div className="flex items-center space-x-2 border rounded-md p-3 hover:bg-gray-50 transition-colors">
                                  <RadioGroupItem value="annually" id="annually" />
                                  <label htmlFor="annually" className="cursor-pointer font-medium">
                                    Annually
                                  </label>
                                </div>
                              </RadioGroup>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <div className="space-y-4">
                        <FormField
                          control={form.control}
                          name="amount"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Donation Amount (€) *</FormLabel>
                              <div className="space-y-4">
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                                  {["10", "25", "50", "100", "250", "500"].map((amount) => (
                                    <Button
                                      key={amount}
                                      type="button"
                                      variant={selectedAmount === amount ? "default" : "outline"}
                                      onClick={() => handleAmountSelect(amount)}
                                      className="h-14 text-lg"
                                    >
                                      €{amount}
                                    </Button>
                                  ))}
                                  <div className="col-span-2 md:col-span-2">
                                    <FormControl>
                                      <Input
                                        placeholder="Other amount"
                                        {...field}
                                        className="h-14 text-lg"
                                        onChange={(e) => {
                                          setSelectedAmount(null)
                                          field.onChange(e.target.value)
                                        }}
                                      />
                                    </FormControl>
                                  </div>
                                </div>
                                <FormMessage />
                              </div>
                              <FormDescription>
                                {watchDonationType !== "one-time" && (
                                  <>
                                    You will be charged €{field.value || "0"} {watchDonationType}.
                                  </>
                                )}
                              </FormDescription>
                            </FormItem>
                          )}
                        />
                      </div>

                      <FormField
                        control={form.control}
                        name="purpose"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Donation Purpose *</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select the purpose of your donation" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="general">General Fund</SelectItem>
                                <SelectItem value="building-fund">Church Building & Maintenance</SelectItem>
                                <SelectItem value="youth-programs">Youth Programs</SelectItem>
                                <SelectItem value="community-outreach">Community Outreach</SelectItem>
                                <SelectItem value="other">Other (Please Specify)</SelectItem>
                              </SelectContent>
                            </Select>
                            {watchPurpose === "other" && (
                              <FormField
                                control={form.control}
                                name="otherPurpose"
                                render={({ field }) => (
                                  <FormItem className="mt-2">
                                    <FormControl>
                                      <Input placeholder="Please specify the purpose" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
                            )}
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="paymentMethod"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Payment Method *</FormLabel>
                            <FormControl>
                              <RadioGroup
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                                className="grid grid-cols-3 gap-4"
                              >
                                <div
                                  className={`flex flex-col items-center justify-center border rounded-md p-4 hover:bg-gray-50 transition-colors ${field.value === "credit-card" ? "border-blue-500 bg-blue-50" : ""}`}
                                >
                                  <RadioGroupItem value="credit-card" id="credit-card" className="sr-only" />
                                  <label htmlFor="credit-card" className="cursor-pointer text-center">
                                    <CreditCard className="h-8 w-8 mx-auto mb-2 text-blue-600" />
                                    <span className="block font-medium">Credit Card</span>
                                  </label>
                                </div>
                                <div
                                  className={`flex flex-col items-center justify-center border rounded-md p-4 hover:bg-gray-50 transition-colors ${field.value === "bank-transfer" ? "border-blue-500 bg-blue-50" : ""}`}
                                >
                                  <RadioGroupItem value="bank-transfer" id="bank-transfer" className="sr-only" />
                                  <label htmlFor="bank-transfer" className="cursor-pointer text-center">
                                    <Landmark className="h-8 w-8 mx-auto mb-2 text-blue-600" />
                                    <span className="block font-medium">Bank Transfer</span>
                                  </label>
                                </div>
                                <div
                                  className={`flex flex-col items-center justify-center border rounded-md p-4 hover:bg-gray-50 transition-colors ${field.value === "paypal" ? "border-blue-500 bg-blue-50" : ""}`}
                                >
                                  <RadioGroupItem value="paypal" id="paypal" className="sr-only" />
                                  <label htmlFor="paypal" className="cursor-pointer text-center">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      className="h-8 w-8 mx-auto mb-2 text-blue-600"
                                      viewBox="0 0 24 24"
                                      fill="currentColor"
                                    >
                                      <path d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944.901C5.026.382 5.474 0 5.998 0h7.46c2.57 0 4.578.543 5.69 1.81 1.01 1.15 1.304 2.42 1.012 4.287-.023.143-.047.288-.077.437-.983 5.05-4.349 6.797-8.647 6.797h-2.19c-.524 0-.968.382-1.05.9l-1.12 7.106zm14.146-14.42a3.35 3.35 0 0 0-.607-.541c-.013.076-.026.175-.041.254-.08.432-.143.865-.248 1.283-1.066 4.24-4.328 6.767-8.772 6.767H9.05c-.571 0-1.052.383-1.14.945L6.5 24h4.588c.41 0 .845-.293.915-.703l.38-2.404c.067-.406.363-.703.773-.703h2.202c4.167 0 7.145-2.378 8.07-6.241.2-.755.356-1.527.389-2.405.042-.968-.024-1.793-.595-2.627z" />
                                    </svg>
                                    <span className="block font-medium">PayPal</span>
                                  </label>
                                </div>
                              </RadioGroup>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      {watchPaymentMethod === "bank-transfer" && (
                        <div className="bg-yellow-50 p-4 rounded-md border border-yellow-200">
                          <div className="flex items-start gap-3">
                            <AlertCircle className="text-yellow-600 h-5 w-5 mt-0.5" />
                            <div>
                              <h4 className="font-medium text-yellow-800 mb-1">Bank Transfer Information</h4>
                              <p className="text-yellow-700 text-sm">
                                After submitting this form, you will receive our bank details to complete your donation
                                via bank transfer. Please include your name and donation purpose in the reference.
                              </p>
                            </div>
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="bg-gray-50">
                      <CardTitle className="flex items-center">
                        <User className="mr-2 h-5 w-5 text-blue-600" />
                        Your Information
                      </CardTitle>
                      <CardDescription>
                        We need your information to process your donation and provide a receipt
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="pt-6 space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="firstName"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>First Name *</FormLabel>
                              <FormControl>
                                <Input placeholder="First name" {...field} />
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
                                <Input placeholder="Last name" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email Address *</FormLabel>
                            <FormControl>
                              <Input type="email" placeholder="your.email@example.com" {...field} />
                            </FormControl>
                            <FormDescription>
                              We'll send the receipt and confirmation to this email address.
                            </FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="phone"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Phone Number (Optional)</FormLabel>
                              <FormControl>
                                <Input placeholder="Phone number" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="address"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Address (Optional)</FormLabel>
                              <FormControl>
                                <Input placeholder="Street address" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="city"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>City (Optional)</FormLabel>
                              <FormControl>
                                <Input placeholder="City" {...field} />
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
                              <FormLabel>Postal Code (Optional)</FormLabel>
                              <FormControl>
                                <Input placeholder="Postal code" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <FormField
                        control={form.control}
                        name="comments"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Comments (Optional)</FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="Any additional information or special instructions for your donation"
                                className="min-h-[80px]"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <div className="space-y-4 pt-2">
                        <FormField
                          control={form.control}
                          name="anonymous"
                          render={({ field }) => (
                            <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                              <FormControl>
                                <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                              </FormControl>
                              <div className="space-y-1 leading-none">
                                <FormLabel>Make this donation anonymous</FormLabel>
                                <FormDescription>
                                  Your name will not be publicly associated with this donation.
                                </FormDescription>
                              </div>
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="receiptRequired"
                          render={({ field }) => (
                            <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                              <FormControl>
                                <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                              </FormControl>
                              <div className="space-y-1 leading-none">
                                <FormLabel>Send me a donation receipt</FormLabel>
                                <FormDescription>We'll email you a receipt for tax purposes.</FormDescription>
                              </div>
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="agreeToTerms"
                          render={({ field }) => (
                            <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                              <FormControl>
                                <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                              </FormControl>
                              <div className="space-y-1 leading-none">
                                <FormLabel>I agree to the donation terms and conditions *</FormLabel>
                                <FormDescription>
                                  By checking this box, you agree to our donation terms and privacy policy.
                                </FormDescription>
                              </div>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                    </CardContent>
                    <CardFooter className="border-t pt-6">
                      <Button type="submit" className="w-full md:w-auto" disabled={isSubmitting}>
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
                            Processing Donation...
                          </>
                        ) : (
                          <>
                            Donate €{form.watch("amount") || "0"}{" "}
                            {watchDonationType !== "one-time" ? watchDonationType : ""}
                          </>
                        )}
                      </Button>
                    </CardFooter>
                  </Card>
                </form>
              </Form>
            )}
          </TabsContent>

          <TabsContent value="bank">
            <Card>
              <CardHeader>
                <CardTitle>Donate via Bank Transfer</CardTitle>
                <CardDescription>Make a direct bank transfer to our church account</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="bg-blue-50 rounded-lg p-6 border border-blue-100">
                  <h3 className="text-lg font-semibold text-blue-800 mb-4">Bank Account Details</h3>

                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <div className="text-sm text-blue-700">Bank Name:</div>
                      <div className="font-medium">Sparkasse KölnBonn</div>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="text-sm text-blue-700">Account Name:</div>
                      <div className="font-medium">St. Michael Ethiopian Orthodox Church</div>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="text-sm text-blue-700">IBAN:</div>
                      <div className="font-medium">DE89 3704 0044 0532 0130 00</div>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="text-sm text-blue-700">BIC/SWIFT:</div>
                      <div className="font-medium">COBADEFFXXX</div>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="text-sm text-blue-700">Reference:</div>
                      <div className="font-medium">Donation - [Your Name]</div>
                    </div>
                  </div>

                  <div className="mt-6">
                    <Button className="w-full">Copy Bank Details</Button>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">Important Information</h3>
                  <ul className="space-y-2 list-disc pl-5">
                    <li>
                      When making a bank transfer, please include your name and the purpose of your donation in the
                      reference field
                    </li>
                    <li>
                      For tax receipt purposes, please email us at church@example.com after making your transfer with
                      your full name, address, and donation amount
                    </li>
                    <li>Bank transfers typically take 1-3 business days to process</li>
                    <li>For donations over €500, please consider contacting us directly at +49123456789</li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold mb-3">Regular Donations</h3>
                  <p className="text-gray-600 mb-3">
                    To set up regular (monthly, quarterly, or annual) donations, you can:
                  </p>
                  <ul className="space-y-2 list-disc pl-5 text-gray-600">
                    <li>Set up a standing order with your bank</li>
                    <li>Complete our recurring donation form (available at the church office)</li>
                    <li>Contact our finance committee for assistance</li>
                  </ul>
                </div>
              </CardContent>
              <CardFooter className="border-t pt-6 flex flex-wrap gap-4">
                <Button>
                  <HeartHandshake className="mr-2 h-4 w-4" />
                  Notify Us of Your Transfer
                </Button>
                <Button variant="outline">View Our Donation Policy</Button>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="info">
            <Card>
              <CardHeader>
                <CardTitle>Donation Information</CardTitle>
                <CardDescription>Learn about how your donations support our church and community</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3">How Your Donations Help</h3>
                  <div className="grid md:grid-cols-2 gap-4 mt-4">
                    <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="bg-blue-100 p-2 rounded-full">
                          <Landmark className="h-5 w-5 text-blue-600" />
                        </div>
                        <h4 className="font-medium">Church Building & Maintenance</h4>
                      </div>
                      <p className="text-sm text-gray-600">
                        Helps maintain our church building, pay utilities, and fund needed renovations
                      </p>
                    </div>
                    <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="bg-blue-100 p-2 rounded-full">
                          <User className="h-5 w-5 text-blue-600" />
                        </div>
                        <h4 className="font-medium">Clergy Support</h4>
                      </div>
                      <p className="text-sm text-gray-600">
                        Provides for our clergy and church staff who lead and support our community
                      </p>
                    </div>
                    <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="bg-blue-100 p-2 rounded-full">
                          <Users className="h-5 w-5 text-blue-600" />
                        </div>
                        <h4 className="font-medium">Community Outreach</h4>
                      </div>
                      <p className="text-sm text-gray-600">
                        Funds programs that serve our local community and those in need
                      </p>
                    </div>
                    <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="bg-blue-100 p-2 rounded-full">
                          <Calendar className="h-5 w-5 text-blue-600" />
                        </div>
                        <h4 className="font-medium">Cultural & Religious Events</h4>
                      </div>
                      <p className="text-sm text-gray-600">
                        Supports special church services, cultural celebrations, and community events
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold mb-3">Donation FAQs</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium">Are donations tax-deductible?</h4>
                      <p className="text-sm text-gray-600 mt-1">
                        Yes, donations to our church are tax-deductible in Germany. We provide receipts for all
                        donations upon request.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-medium">How do I get a receipt for my donation?</h4>
                      <p className="text-sm text-gray-600 mt-1">
                        Receipts are automatically sent for online donations. For bank transfers, please email
                        church@example.com with your details.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-medium">Can I specify how my donation is used?</h4>
                      <p className="text-sm text-gray-600 mt-1">
                        Yes, you can designate your donation for specific purposes during the donation process.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-medium">How do I set up a recurring donation?</h4>
                      <p className="text-sm text-gray-600 mt-1">
                        You can set up recurring donations online or through your bank's standing order system.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">Donation Transparency</h3>
                  <p className="text-gray-600 mb-4">
                    We are committed to full transparency in how donations are used. Our financial statements are
                    available to church members, and regular reports are presented during community meetings.
                  </p>
                  <div className="flex items-center gap-4">
                    <Button>View Annual Report</Button>
                    <Button variant="outline">Contact Finance Committee</Button>
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
