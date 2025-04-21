
import { useState } from "react";
import { MainLayout } from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function PurchaseRequestWizard() {
  const [step, setStep] = useState(1);
  const totalSteps = 5;

  const nextStep = () => {
    if (step < totalSteps) {
      setStep(step + 1);
    }
  };

  const prevStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  return (
    <MainLayout>
      <div className="space-y-8">
        <div className="flex items-center">
          <Button variant="ghost" size="sm" asChild className="mr-2">
            <Link to="/dashboard">
              <ChevronLeft className="h-4 w-4" />
              Back to Dashboard
            </Link>
          </Button>
          <div>
            <h2 className="text-3xl font-bold tracking-tight">New Purchase Request</h2>
            <p className="text-muted-foreground">Create a new purchase request for your project.</p>
          </div>
        </div>

        {/* Progress Indicator */}
        <div className="relative">
          <div className="absolute top-1/2 left-0 right-0 h-1 -translate-y-1/2 bg-muted"></div>
          <div className="relative flex justify-between">
            {Array.from({ length: totalSteps }).map((_, index) => (
              <div 
                key={index}
                className="flex items-center justify-center"
              >
                <div 
                  className={`relative z-10 flex h-10 w-10 items-center justify-center rounded-full border-2 ${
                    step > index + 1 
                      ? "border-acmv-purple bg-acmv-purple text-primary-foreground" 
                      : step === index + 1
                      ? "border-acmv-purple bg-white text-acmv-purple" 
                      : "border-muted-foreground bg-background text-muted-foreground"
                  }`}
                >
                  {index + 1}
                </div>
                {index < totalSteps - 1 && (
                  <div className={`hidden sm:block text-xs font-medium mt-2 w-32 text-center ${
                    step > index + 1 
                      ? "text-acmv-purple" 
                      : "text-muted-foreground"
                  }`}>
                    {index === 0 ? "Request Info" : 
                     index === 1 ? "Project Details" : 
                     index === 2 ? "Vendor Selection" : 
                     "Documents"}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Step Content */}
        <Card>
          {step === 1 && (
            <>
              <CardHeader>
                <CardTitle>Request Information</CardTitle>
                <CardDescription>
                  Select the type of purchase request you want to create.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-6">
                  <div className="grid gap-3">
                    <div className="grid gap-1">
                      <Label htmlFor="request-type">Request Type</Label>
                      <RadioGroup defaultValue="new" className="grid gap-2">
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="new" id="new" />
                          <Label htmlFor="new">New Issuance</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="revision" id="revision" />
                          <Label htmlFor="revision">Revision</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="variation" id="variation" />
                          <Label htmlFor="variation">Variation Order</Label>
                        </div>
                      </RadioGroup>
                    </div>
                  </div>

                  <div className="grid gap-3">
                    <div className="grid gap-1">
                      <Label htmlFor="title">Request Title</Label>
                      <Input id="title" placeholder="Enter a descriptive title for this request" />
                    </div>
                  </div>

                  <div className="grid gap-1">
                    <Label htmlFor="description">Description</Label>
                    <Textarea id="description" placeholder="Provide a brief description of what you're requesting" rows={3} />
                  </div>
                </div>
              </CardContent>
            </>
          )}

          {step === 2 && (
            <>
              <CardHeader>
                <CardTitle>Project Details</CardTitle>
                <CardDescription>
                  Select the project and budget details for this request.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-6">
                  <div className="grid gap-3">
                    <div className="grid gap-1">
                      <Label htmlFor="project">Project</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select project" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="changi">Changi Airport T5</SelectItem>
                          <SelectItem value="mbs">Marina Bay Sands</SelectItem>
                          <SelectItem value="jurong">Jurong East Mall</SelectItem>
                          <SelectItem value="tampines">Tampines Hub</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="grid gap-1">
                      <Label htmlFor="project-code">Project Code</Label>
                      <Input id="project-code" value="P-2023-001" readOnly disabled />
                    </div>
                    <div className="grid gap-1">
                      <Label htmlFor="cost-center">Cost Center</Label>
                      <Input id="cost-center" value="CC-ACMV-001" readOnly disabled />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="grid gap-1">
                      <Label htmlFor="approved-budget">Approved Budget (SGD)</Label>
                      <Input id="approved-budget" value="250,000.00" readOnly disabled />
                    </div>
                    <div className="grid gap-1">
                      <Label htmlFor="request-amount">Request Amount (SGD)</Label>
                      <Input 
                        id="request-amount" 
                        placeholder="Enter amount" 
                        type="number"
                      />
                    </div>
                  </div>

                  <div className="grid gap-1">
                    <Label>Budget Utilization</Label>
                    <div className="h-2 w-full rounded-full bg-muted overflow-hidden">
                      <div className="h-full w-[35%] rounded-full bg-acmv-purple"></div>
                    </div>
                    <div className="flex justify-between text-xs text-muted-foreground mt-1">
                      <span>Utilized: SGD 87,500.00 (35%)</span>
                      <span>Available: SGD 162,500.00 (65%)</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </>
          )}

          {step === 3 && (
            <>
              <CardHeader>
                <CardTitle>Vendor Selection</CardTitle>
                <CardDescription>
                  Select the vendor for this purchase request.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-6">
                  <div className="grid gap-3">
                    <div className="grid gap-1">
                      <Label htmlFor="vendor">Vendor</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select vendor" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="abc">ABC ACMV Pte Ltd</SelectItem>
                          <SelectItem value="xyz">XYZ Contractors</SelectItem>
                          <SelectItem value="singapore">Singapore Cooling Systems</SelectItem>
                          <SelectItem value="global">Global HVAC Solutions</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="grid gap-1">
                      <Label htmlFor="contact-person">Contact Person</Label>
                      <Input id="contact-person" value="John Smith" readOnly disabled />
                    </div>
                    <div className="grid gap-1">
                      <Label htmlFor="contact-email">Contact Email</Label>
                      <Input id="contact-email" value="john@abcacmv.com" readOnly disabled />
                    </div>
                  </div>

                  <div className="grid gap-1">
                    <Label htmlFor="delivery-address">Delivery Address</Label>
                    <Textarea id="delivery-address" placeholder="Enter delivery address" rows={3} />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="grid gap-1">
                      <Label htmlFor="payment-terms">Payment Terms</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select payment terms" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="net30">Net 30</SelectItem>
                          <SelectItem value="net45">Net 45</SelectItem>
                          <SelectItem value="net60">Net 60</SelectItem>
                          <SelectItem value="custom">Custom</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="grid gap-1">
                      <Label htmlFor="estimated-delivery">Estimated Delivery Date</Label>
                      <Input id="estimated-delivery" type="date" />
                    </div>
                  </div>
                </div>
              </CardContent>
            </>
          )}

          {step === 4 && (
            <>
              <CardHeader>
                <CardTitle>Upload Documents</CardTitle>
                <CardDescription>
                  Upload the required documents for this purchase request.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-6">
                  <div className="grid gap-1">
                    <Label>Required Documents</Label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                      <div className="grid gap-1">
                        <Label htmlFor="quotation" className="text-sm">Quotation</Label>
                        <Input id="quotation" type="file" />
                      </div>
                      <div className="grid gap-1">
                        <Label htmlFor="budget-docs" className="text-sm">Budget Documents</Label>
                        <Input id="budget-docs" type="file" />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                      <div className="grid gap-1">
                        <Label htmlFor="delivery-schedule" className="text-sm">Delivery Schedule</Label>
                        <Input id="delivery-schedule" type="file" />
                      </div>
                      <div className="grid gap-1">
                        <Label htmlFor="post-tender" className="text-sm">Post-Tender Clarifications</Label>
                        <Input id="post-tender" type="file" />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                      <div className="grid gap-1">
                        <Label htmlFor="responsibility-matrix" className="text-sm">Responsibility Matrix</Label>
                        <Input id="responsibility-matrix" type="file" />
                      </div>
                      <div className="grid gap-1">
                        <Label htmlFor="contract-drawings" className="text-sm">Contract Drawings</Label>
                        <Input id="contract-drawings" type="file" />
                      </div>
                    </div>
                  </div>

                  <div className="grid gap-1">
                    <Label htmlFor="additional-notes">Additional Notes</Label>
                    <Textarea id="additional-notes" placeholder="Any additional information or special instructions" rows={3} />
                  </div>
                </div>
              </CardContent>
            </>
          )}

          {step === 5 && (
            <>
              <CardHeader>
                <CardTitle>Review & Submit</CardTitle>
                <CardDescription>
                  Review your purchase request details before submission.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-6">
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h3 className="text-sm font-medium text-muted-foreground">Request Information</h3>
                        <div className="mt-1 space-y-2">
                          <div className="flex justify-between">
                            <span className="text-sm">Type:</span>
                            <span className="text-sm font-medium">New Issuance</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-sm">Title:</span>
                            <span className="text-sm font-medium">ACMV Supply for Changi T5</span>
                          </div>
                        </div>
                      </div>
                      <div>
                        <h3 className="text-sm font-medium text-muted-foreground">Project Details</h3>
                        <div className="mt-1 space-y-2">
                          <div className="flex justify-between">
                            <span className="text-sm">Project:</span>
                            <span className="text-sm font-medium">Changi Airport T5</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-sm">Request Amount:</span>
                            <span className="text-sm font-medium">SGD 125,000.00</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h3 className="text-sm font-medium text-muted-foreground">Vendor Information</h3>
                        <div className="mt-1 space-y-2">
                          <div className="flex justify-between">
                            <span className="text-sm">Vendor:</span>
                            <span className="text-sm font-medium">ABC ACMV Pte Ltd</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-sm">Contact:</span>
                            <span className="text-sm font-medium">John Smith</span>
                          </div>
                        </div>
                      </div>
                      <div>
                        <h3 className="text-sm font-medium text-muted-foreground">Document Information</h3>
                        <div className="mt-1 space-y-2">
                          <div className="flex justify-between">
                            <span className="text-sm">Document Type:</span>
                            <span className="text-sm font-medium">Letter of Award (LOA)</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-sm">Uploaded Documents:</span>
                            <span className="text-sm font-medium">6 files</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="rounded-md border p-4 bg-muted/30">
                      <h3 className="text-sm font-medium">Notification Recipients</h3>
                      <div className="mt-2 space-y-1 text-sm">
                        <p><strong>TO:</strong> contracts@acmv.com, limhocktian@acmv.com</p>
                        <p><strong>CC:</strong> accounts@acmv.com, projectmanager@acmv.com</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-2">
                      <input type="checkbox" id="confirm" className="h-4 w-4 rounded border-gray-300" />
                      <label htmlFor="confirm" className="text-sm font-medium">
                        I confirm that all the information provided is accurate and complete.
                      </label>
                    </div>
                  </div>
                </div>
              </CardContent>
            </>
          )}

          <div className="flex items-center justify-between p-6 pt-0">
            <Button
              variant="outline"
              onClick={prevStep}
              disabled={step === 1}
            >
              Previous
            </Button>
            {step < totalSteps ? (
              <Button onClick={nextStep}>
                Next
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            ) : (
              <Button>
                Submit Request
              </Button>
            )}
          </div>
        </Card>
      </div>
    </MainLayout>
  );
}
