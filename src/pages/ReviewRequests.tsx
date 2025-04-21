
import { MainLayout } from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { FileText, Search, Filter, Check, X, MessageSquare } from "lucide-react";

export default function ReviewRequests() {
  // This would be fetched from an API in a real application
  const pendingRequests = [
    { 
      id: "PR-2023-001", 
      project: "Changi Airport T5", 
      type: "PO", 
      title: "ACMV Maintenance Equipment",
      vendor: "ABC ACMV Pte Ltd",
      amount: "75,000.00", 
      requestedBy: "Sarah Chen",
      requestedOn: "2023-04-15" 
    },
    { 
      id: "PR-2023-005", 
      project: "Marina Bay Sands", 
      type: "LOA", 
      title: "Cooling Tower Installation",
      vendor: "Singapore Cooling Systems",
      amount: "125,000.00", 
      requestedBy: "David Lee",
      requestedOn: "2023-04-14" 
    },
    { 
      id: "PR-2023-008", 
      project: "Jurong East Mall", 
      type: "WO", 
      title: "Ventilation System Repair",
      vendor: "Global HVAC Solutions",
      amount: "42,500.00", 
      requestedBy: "Michael Tan",
      requestedOn: "2023-04-12" 
    },
  ];

  return (
    <MainLayout>
      <div className="space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Pending Reviews</h2>
            <p className="text-muted-foreground">Review and process purchase requests.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-1 space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold">Request Queue</h3>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="icon">
                  <Filter className="h-4 w-4" />
                </Button>
                <div className="relative">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder="Search requests..."
                    className="pl-8"
                  />
                </div>
              </div>
            </div>

            <Tabs defaultValue="pending">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="pending">Pending</TabsTrigger>
                <TabsTrigger value="reviewed">Reviewed</TabsTrigger>
              </TabsList>
              <TabsContent value="pending" className="mt-4 space-y-4">
                {pendingRequests.map((request) => (
                  <Card 
                    key={request.id}
                    className="cursor-pointer hover:border-acmv-purple transition-colors"
                  >
                    <CardContent className="p-4">
                      <div className="flex items-start justify-between">
                        <div>
                          <div className="flex items-center gap-2">
                            <FileText className="h-4 w-4 text-acmv-purple" />
                            <p className="font-semibold">{request.id}</p>
                          </div>
                          <h4 className="mt-2 font-medium">{request.title}</h4>
                          <p className="text-sm text-muted-foreground mt-1">{request.project}</p>
                          <div className="flex items-center gap-2 mt-2">
                            <span 
                              className={`inline-block rounded-full px-2 py-1 text-xs font-semibold ${
                                request.type === 'PO' 
                                  ? 'bg-blue-100 text-blue-800' 
                                  : request.type === 'LOA'
                                  ? 'bg-purple-100 text-purple-800'
                                  : 'bg-green-100 text-green-800'
                              }`}
                            >
                              {request.type}
                            </span>
                            <span className="text-sm text-muted-foreground">SGD {request.amount}</span>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-xs text-muted-foreground">Requested by</p>
                          <p className="text-sm font-medium">{request.requestedBy}</p>
                          <p className="text-xs text-muted-foreground mt-2">Requested on</p>
                          <p className="text-sm">{request.requestedOn}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>
              <TabsContent value="reviewed" className="mt-4">
                <div className="text-center text-sm text-muted-foreground p-4">
                  No reviewed requests to display
                </div>
              </TabsContent>
            </Tabs>
          </div>

          <div className="md:col-span-2">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>PR-2023-005: Cooling Tower Installation</CardTitle>
                    <CardDescription>Letter of Award (LOA) • SGD 125,000.00</CardDescription>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="gap-1">
                      <MessageSquare className="h-4 w-4" />
                      Comments
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-sm font-medium text-muted-foreground">Request Details</h4>
                        <div className="grid grid-cols-2 gap-2 mt-2">
                          <div>
                            <p className="text-xs text-muted-foreground">Project</p>
                            <p className="text-sm font-medium">Marina Bay Sands</p>
                          </div>
                          <div>
                            <p className="text-xs text-muted-foreground">Project Code</p>
                            <p className="text-sm font-medium">P-2023-002</p>
                          </div>
                          <div>
                            <p className="text-xs text-muted-foreground">Request Type</p>
                            <p className="text-sm font-medium">New Issuance</p>
                          </div>
                          <div>
                            <p className="text-xs text-muted-foreground">Requested Amount</p>
                            <p className="text-sm font-medium">SGD 125,000.00</p>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h4 className="text-sm font-medium text-muted-foreground">Vendor Information</h4>
                        <div className="grid grid-cols-2 gap-2 mt-2">
                          <div>
                            <p className="text-xs text-muted-foreground">Vendor</p>
                            <p className="text-sm font-medium">Singapore Cooling Systems</p>
                          </div>
                          <div>
                            <p className="text-xs text-muted-foreground">Contact Person</p>
                            <p className="text-sm font-medium">David Lee</p>
                          </div>
                          <div>
                            <p className="text-xs text-muted-foreground">Payment Terms</p>
                            <p className="text-sm font-medium">Net 60</p>
                          </div>
                          <div>
                            <p className="text-xs text-muted-foreground">Delivery Date</p>
                            <p className="text-sm font-medium">2023-06-15</p>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h4 className="text-sm font-medium text-muted-foreground">Description</h4>
                        <p className="text-sm mt-2">
                          Purchase of cooling tower equipment for the Marina Bay Sands expansion project. This includes installation and setup as per the attached quotation and specifications.
                        </p>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <h4 className="text-sm font-medium text-muted-foreground">Uploaded Documents</h4>
                        <div className="grid grid-cols-1 gap-2 mt-2">
                          <div className="flex items-center justify-between p-2 rounded-md border">
                            <div className="flex items-center gap-2">
                              <FileText className="h-4 w-4 text-acmv-purple" />
                              <span className="text-sm">Quotation.pdf</span>
                            </div>
                            <Button variant="ghost" size="sm">View</Button>
                          </div>
                          <div className="flex items-center justify-between p-2 rounded-md border">
                            <div className="flex items-center gap-2">
                              <FileText className="h-4 w-4 text-acmv-purple" />
                              <span className="text-sm">Budget_Documents.pdf</span>
                            </div>
                            <Button variant="ghost" size="sm">View</Button>
                          </div>
                          <div className="flex items-center justify-between p-2 rounded-md border">
                            <div className="flex items-center gap-2">
                              <FileText className="h-4 w-4 text-acmv-purple" />
                              <span className="text-sm">Technical_Specifications.pdf</span>
                            </div>
                            <Button variant="ghost" size="sm">View</Button>
                          </div>
                          <div className="flex items-center justify-between p-2 rounded-md border">
                            <div className="flex items-center gap-2">
                              <FileText className="h-4 w-4 text-acmv-purple" />
                              <span className="text-sm">Contract_Drawings.pdf</span>
                            </div>
                            <Button variant="ghost" size="sm">View</Button>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h4 className="text-sm font-medium text-muted-foreground">Preview Document</h4>
                        <div className="mt-2 aspect-[3/4] bg-muted rounded-md flex items-center justify-center">
                          <Button variant="outline">Preview Generated LOA</Button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4 border-t pt-4">
                    <h4 className="text-sm font-medium">Review Decision</h4>
                    <RadioGroup defaultValue="approve">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="approve" id="approve" />
                        <Label htmlFor="approve" className="flex items-center">
                          <Check className="mr-1 h-4 w-4 text-green-500" />
                          Approve
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="approve-with-comments" id="approve-with-comments" />
                        <Label htmlFor="approve-with-comments" className="flex items-center">
                          <MessageSquare className="mr-1 h-4 w-4 text-blue-500" />
                          Approve with Comments
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="reject" id="reject" />
                        <Label htmlFor="reject" className="flex items-center">
                          <X className="mr-1 h-4 w-4 text-red-500" />
                          Reject
                        </Label>
                      </div>
                    </RadioGroup>

                    <div className="grid gap-1">
                      <Label htmlFor="comments">Comments</Label>
                      <Textarea id="comments" placeholder="Add your review comments here..." rows={3} />
                    </div>

                    <div className="flex justify-end gap-3">
                      <Button variant="outline">Cancel</Button>
                      <Button>Submit Review</Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
