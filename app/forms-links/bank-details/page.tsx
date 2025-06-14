"use client"

import { Copy, CheckCheck, Building, Landmark, AlertCircle, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

import { useState } from "react"

export default function BankDetailsPage() {
  const [copied, setCopied] = useState<string | null>(null)

  const bankDetails = {
    domestic: {
      bankName: "Pax Bank",
      accountName: "St. Michael Äthiopisch-Orthodoxe Kirchengemeinde Köln",
      iban: "DE91 37060193 0023 6530 10",
      bic: "GENODEDIPAX",
      beneficiaryaddress: "Ückerather Str. 2, 50739 Köln",
      beneficialPhone: "+49 221 5992623",
      beneficialEmail: "aeokd@gmx.de",
      accountNumber: "1234567890",
      sortCode: "37050198",

    },
    international: {
      bankName: "Sparkasse KölnBonn",
      accountName: "St. Michael Ethiopian Orthodox Church",
      iban: "DE89 3704 0044 0532 0130 00",
      bic: "COBADEFFXXX",
      address: "Hahnenstraße 57, 50667 Köln, Germany",
      correspondentBank: "Deutsche Bank",
    },
  }

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text)
    setCopied(field)
    setTimeout(() => setCopied(null), 2000)
  }

  return (
    <div className="container mx-auto px-4">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold mb-4">የባንክ አካውንት</h1>
          {/* <p className="text-gray-600">
            Please use the following bank details for donations and other financial contributions to our church.
          </p> */}
        </div>

        {/* <Alert className="mb-8 border-blue-200 bg-blue-50">
          <AlertCircle className="h-4 w-4 text-blue-600" />
          <AlertTitle className="text-blue-800">Reference Information</AlertTitle>
          <AlertDescription className="text-blue-700">
            Always include your name and the purpose of the payment (e.g., "Donation," "Membership Fee," etc.) as a
            reference when making a bank transfer.
          </AlertDescription>
        </Alert> */}

        <Tabs defaultValue="domestic" className="mb-8">
          {/* <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="domestic">
              <Globe className="mr-2 h-4 w-4" />
              Domestic Transfers
            </TabsTrigger>
            <TabsTrigger value="international">
              <Globe className="mr-2 h-4 w-4" />
              International Transfers
            </TabsTrigger>
          </TabsList> */}

          <TabsContent value="domestic">
            <Card>
              <CardHeader>
                {/* <CardTitle className="flex items-center">
                  
                  የባንክ አካውንት
                </CardTitle>
                <CardDescription>Use these details for transfers within Germany</CardDescription> */}
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <label className="text-sm font-medium text-gray-500 block mb-1">Bank Name</label>
                      <div className="flex justify-between items-center bg-gray-50 p-3 rounded-md">
                        <span className="font-medium">{bankDetails.domestic.bankName}</span>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => copyToClipboard(bankDetails.domestic.bankName, "bankName")}
                          className="h-8 w-8 p-0"
                        >
                          {copied === "bankName" ? (
                            <CheckCheck className="h-4 w-4 text-green-500" />
                          ) : (
                            <Copy className="h-4 w-4" />
                          )}
                        </Button>
                      </div>
                    </div>

                    <div>
                      <label className="text-sm font-medium text-gray-500 block mb-1">Account Name</label>
                      <div className="flex justify-between items-center bg-gray-50 p-3 rounded-md">
                        <span className="font-medium">{bankDetails.domestic.accountName}</span>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => copyToClipboard(bankDetails.domestic.accountName, "accountName")}
                          className="h-8 w-8 p-0"
                        >
                          {copied === "accountName" ? (
                            <CheckCheck className="h-4 w-4 text-green-500" />
                          ) : (
                            <Copy className="h-4 w-4" />
                          )}
                        </Button>
                      </div>
                    </div>

                    <div>
                      <label className="text-sm font-medium text-gray-500 block mb-1">IBAN</label>
                      <div className="flex justify-between items-center bg-gray-50 p-3 rounded-md">
                        <span className="font-medium tracking-wider">{bankDetails.domestic.iban}</span>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => copyToClipboard(bankDetails.domestic.iban, "iban")}
                          className="h-8 w-8 p-0"
                        >
                          {copied === "iban" ? (
                            <CheckCheck className="h-4 w-4 text-green-500" />
                          ) : (
                            <Copy className="h-4 w-4" />
                          )}
                        </Button>
                      </div>
                    </div>

                    <div>
                      <label className="text-sm font-medium text-gray-500 block mb-1">BIC/SWIFT</label>
                      <div className="flex justify-between items-center bg-gray-50 p-3 rounded-md">
                        <span className="font-medium">{bankDetails.domestic.bic}</span>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => copyToClipboard(bankDetails.domestic.bic, "bic")}
                          className="h-8 w-8 p-0"
                        >
                          {copied === "bic" ? (
                            <CheckCheck className="h-4 w-4 text-green-500" />
                          ) : (
                            <Copy className="h-4 w-4" />
                          )}
                        </Button>
                      </div>
                    </div>

                  </div>

                  <div className="space-y-4">
                    <div>
                      <label className="text-sm font-medium text-gray-500 block mb-1">Beneficiary Sddress</label>
                      <div className="flex justify-between items-center bg-gray-50 p-3 rounded-md">
                        <span className="font-medium">{bankDetails.domestic.beneficiaryaddress}</span>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => copyToClipboard(bankDetails.domestic.beneficiaryaddress, "beneficiaryaddress")}
                          className="h-8 w-8 p-0"
                        >
                          {copied === "beneficiaryaddress" ? (
                            <CheckCheck className="h-4 w-4 text-green-500" />
                          ) : (
                            <Copy className="h-4 w-4" />
                          )}
                        </Button>
                      </div>
                    </div>

                    <div>
                      <label className="text-sm font-medium text-gray-500 block mb-1">Beneficial Phone</label>
                      <div className="flex justify-between items-center bg-gray-50 p-3 rounded-md">
                        <span className="font-medium">{bankDetails.domestic.beneficialPhone}</span>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => copyToClipboard(bankDetails.domestic.beneficialPhone, "beneficialPhone")}
                          className="h-8 w-8 p-0"
                        >
                          {copied === "beneficialPhone" ? (
                            <CheckCheck className="h-4 w-4 text-green-500" />
                          ) : (
                            <Copy className="h-4 w-4" />
                          )}
                        </Button>
                      </div>
                    </div>


                    <div>
                      <label className="text-sm font-medium text-gray-500 block mb-1">Beneficial Email</label>
                      <div className="flex justify-between items-center bg-gray-50 p-3 rounded-md">
                        <span className="font-medium">{bankDetails.domestic.beneficialEmail}</span>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => copyToClipboard(bankDetails.domestic.beneficialEmail, "beneficialEmail")}
                          className="h-8 w-8 p-0"
                        >
                          {copied === "beneficialEmail" ? (
                            <CheckCheck className="h-4 w-4 text-green-500" />
                          ) : (
                            <Copy className="h-4 w-4" />
                          )}
                        </Button>
                      </div>
                    </div>

                  </div>
                </div>
              </CardContent>
              <CardFooter className="border-t pt-6 block">
                <Button
                  className="w-full md:w-auto"
                  onClick={() =>
                    copyToClipboard(
                      `Bank: ${bankDetails.domestic.bankName}
                       Account Name: ${bankDetails.domestic.accountName}
                       IBAN: ${bankDetails.domestic.iban}
                       BIC/SWIFT: ${bankDetails.domestic.bic}
                       Beneficiary Address: ${bankDetails.domestic.beneficiaryaddress}
                       Beneficiary Phone: ${bankDetails.domestic.beneficialPhone}
                       Beneficiary Email: ${bankDetails.domestic.beneficialEmail}`,
                      "allDomestic",
                    )
                  }
                >
                  <Copy className="mr-2 h-4 w-4" />
                  {copied === "allDomestic" ? "Copied All Details!" : "Copy All Details"}
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="international">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Landmark className="mr-2 h-5 w-5 text-blue-600" />
                  International Bank Account Details
                </CardTitle>
                <CardDescription>Use these details for transfers from outside Germany</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <label className="text-sm font-medium text-gray-500 block mb-1">Bank Name</label>
                      <div className="flex justify-between items-center bg-gray-50 p-3 rounded-md">
                        <span className="font-medium">{bankDetails.international.bankName}</span>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => copyToClipboard(bankDetails.international.bankName, "intBankName")}
                          className="h-8 w-8 p-0"
                        >
                          {copied === "intBankName" ? (
                            <CheckCheck className="h-4 w-4 text-green-500" />
                          ) : (
                            <Copy className="h-4 w-4" />
                          )}
                        </Button>
                      </div>
                    </div>

                    <div>
                      <label className="text-sm font-medium text-gray-500 block mb-1">Account Name</label>
                      <div className="flex justify-between items-center bg-gray-50 p-3 rounded-md">
                        <span className="font-medium">{bankDetails.international.accountName}</span>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => copyToClipboard(bankDetails.international.accountName, "intAccountName")}
                          className="h-8 w-8 p-0"
                        >
                          {copied === "intAccountName" ? (
                            <CheckCheck className="h-4 w-4 text-green-500" />
                          ) : (
                            <Copy className="h-4 w-4" />
                          )}
                        </Button>
                      </div>
                    </div>

                    <div>
                      <label className="text-sm font-medium text-gray-500 block mb-1">Bank Address</label>
                      <div className="flex justify-between items-center bg-gray-50 p-3 rounded-md">
                        <span className="font-medium">{bankDetails.international.address}</span>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => copyToClipboard(bankDetails.international.address, "intAddress")}
                          className="h-8 w-8 p-0"
                        >
                          {copied === "intAddress" ? (
                            <CheckCheck className="h-4 w-4 text-green-500" />
                          ) : (
                            <Copy className="h-4 w-4" />
                          )}
                        </Button>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <label className="text-sm font-medium text-gray-500 block mb-1">IBAN</label>
                      <div className="flex justify-between items-center bg-gray-50 p-3 rounded-md">
                        <span className="font-medium tracking-wider">{bankDetails.international.iban}</span>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => copyToClipboard(bankDetails.international.iban, "intIban")}
                          className="h-8 w-8 p-0"
                        >
                          {copied === "intIban" ? (
                            <CheckCheck className="h-4 w-4 text-green-500" />
                          ) : (
                            <Copy className="h-4 w-4" />
                          )}
                        </Button>
                      </div>
                    </div>

                    <div>
                      <label className="text-sm font-medium text-gray-500 block mb-1">BIC/SWIFT</label>
                      <div className="flex justify-between items-center bg-gray-50 p-3 rounded-md">
                        <span className="font-medium">{bankDetails.international.bic}</span>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => copyToClipboard(bankDetails.international.bic, "intBic")}
                          className="h-8 w-8 p-0"
                        >
                          {copied === "intBic" ? (
                            <CheckCheck className="h-4 w-4 text-green-500" />
                          ) : (
                            <Copy className="h-4 w-4" />
                          )}
                        </Button>
                      </div>
                    </div>

                    <div>
                      <label className="text-sm font-medium text-gray-500 block mb-1">Correspondent Bank</label>
                      <div className="flex justify-between items-center bg-gray-50 p-3 rounded-md">
                        <span className="font-medium">{bankDetails.international.correspondentBank}</span>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() =>
                            copyToClipboard(bankDetails.international.correspondentBank, "intCorrespondent")
                          }
                          className="h-8 w-8 p-0"
                        >
                          {copied === "intCorrespondent" ? (
                            <CheckCheck className="h-4 w-4 text-green-500" />
                          ) : (
                            <Copy className="h-4 w-4" />
                          )}
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="border-t pt-6 block">
                <Button
                  className="w-full md:w-auto"
                  onClick={() =>
                    copyToClipboard(
                      `Bank: ${bankDetails.international.bankName}
Account Name: ${bankDetails.international.accountName}
Bank Address: ${bankDetails.international.address}
IBAN: ${bankDetails.international.iban}
BIC/SWIFT: ${bankDetails.international.bic}
Correspondent Bank: ${bankDetails.international.correspondentBank}`,
                      "allInternational",
                    )
                  }
                >
                  <Copy className="mr-2 h-4 w-4" />
                  {copied === "allInternational" ? "Copied All Details!" : "Copy All Details"}
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
