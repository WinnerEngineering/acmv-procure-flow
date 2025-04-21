
import { MainLayout } from "@/components/layout/MainLayout";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { useUser } from "@/contexts/UserContext";
import { RoleAuthorization } from "@/components/auth/RoleAuthorization";
import { FileOutput, Download, FileText, Printer } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function ApprovedDocuments() {
  const { user } = useUser();

  const documents = [
    { id: "PO-2023-001", title: "Air Handling Units", type: "PO", date: "2023-03-15", project: "Changi Airport T5", amount: "65,000.00" },
    { id: "WO-2023-002", title: "Duct Installation Works", type: "WO", date: "2023-03-18", project: "Marina Bay Sands", amount: "32,500.00" },
    { id: "LOA-2023-003", title: "Cooling Tower Supply", type: "LOA", date: "2023-03-22", project: "Jurong East Mall", amount: "128,000.00" },
    { id: "PO-2023-004", title: "Filter Replacements", type: "PO", date: "2023-03-25", project: "Changi Airport T5", amount: "8,500.00" },
  ];

  return (
    <MainLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Approved Documents</h2>
            <p className="text-muted-foreground">
              View and manage approved purchase orders, work orders, and letters of award
            </p>
          </div>
          {/* Removed RoleSwitcher from here */}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="col-span-3 md:col-span-1">
            <CardHeader>
              <CardTitle>Document Search</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="doc-id">Document ID</Label>
                <Input id="doc-id" placeholder="Enter document ID..." />
              </div>
              <div>
                <Label htmlFor="doc-type">Document Type</Label>
                <Select defaultValue="all">
                  <SelectTrigger id="doc-type">
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Types</SelectItem>
                    <SelectItem value="po">Purchase Order (PO)</SelectItem>
                    <SelectItem value="wo">Work Order (WO)</SelectItem>
                    <SelectItem value="loa">Letter of Award (LOA)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="date-range">Date Range</Label>
                <Select defaultValue="all">
                  <SelectTrigger id="date-range">
                    <SelectValue placeholder="Select range" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Time</SelectItem>
                    <SelectItem value="current-month">Current Month</SelectItem>
                    <SelectItem value="last-30">Last 30 Days</SelectItem>
                    <SelectItem value="last-90">Last 90 Days</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="project">Project</Label>
                <Select defaultValue="all">
                  <SelectTrigger id="project">
                    <SelectValue placeholder="Select project" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Projects</SelectItem>
                    <SelectItem value="changi">Changi Airport T5</SelectItem>
                    <SelectItem value="mbs">Marina Bay Sands</SelectItem>
                    <SelectItem value="jurong">Jurong East Mall</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button className="w-full">Search Documents</Button>
              
              <RoleAuthorization 
                requiredPermission={{ action: "export", resource: "approved_documents" }}
                fallback={
                  <Button variant="outline" className="w-full" disabled>
                    Export to ERP (Finance Only)
                  </Button>
                }
              >
                <Button variant="outline" className="w-full">
                  <Download className="mr-2 h-4 w-4" />
                  Export to ERP
                </Button>
              </RoleAuthorization>
            </CardContent>
          </Card>

          <Card className="col-span-3 md:col-span-2">
            <CardHeader>
              <CardTitle>Document List</CardTitle>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="all" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="all">All Documents</TabsTrigger>
                  <TabsTrigger value="recent">Recently Approved</TabsTrigger>
                  <TabsTrigger value="exported">Exported to ERP</TabsTrigger>
                </TabsList>
                
                <TabsContent value="all" className="mt-4">
                  <div className="space-y-4">
                    {documents.map((doc) => (
                      <div key={doc.id} className="flex items-center justify-between p-4 rounded-lg border">
                        <div className="flex items-start gap-4">
                          <div className="bg-acmv-purple-light p-3 rounded-lg">
                            <FileOutput className="h-6 w-6 text-acmv-purple" />
                          </div>
                          <div>
                            <h4 className="font-semibold">{doc.id}: {doc.title}</h4>
                            <p className="text-sm text-muted-foreground">
                              {doc.project} • {doc.date} • SGD {doc.amount}
                            </p>
                            <div className="mt-2">
                              <span className={`inline-block rounded-full px-2 py-1 text-xs font-semibold ${
                                doc.type === 'PO' 
                                  ? 'bg-blue-100 text-blue-800' 
                                  : doc.type === 'LOA'
                                  ? 'bg-purple-100 text-purple-800'
                                  : 'bg-green-100 text-green-800'
                              }`}>
                                {doc.type}
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <Button variant="ghost" size="sm">
                            <FileText className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <Printer className="h-4 w-4" />
                          </Button>
                          <RoleAuthorization 
                            requiredPermission={{ action: "manage", resource: "payments" }}
                          >
                            <Button variant="ghost" size="sm">
                              <Download className="h-4 w-4" />
                            </Button>
                          </RoleAuthorization>
                        </div>
                      </div>
                    ))}
                  </div>
                </TabsContent>
                
                <TabsContent value="recent" className="mt-4">
                  <div className="flex items-center justify-center h-40">
                    <p className="text-muted-foreground">No recently approved documents</p>
                  </div>
                </TabsContent>
                
                <TabsContent value="exported" className="mt-4">
                  <div className="flex items-center justify-center h-40">
                    <p className="text-muted-foreground">No exported documents</p>
                  </div>
                </TabsContent>
              </Tabs>
              
              <div className="mt-4 text-sm text-muted-foreground">
                {user && user.role === "finance_officer" ? 
                  "You have full access to export and manage payment records." :
                  "Note: Only Finance Officers can export documents to ERP."
                }
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </MainLayout>
  );
}
