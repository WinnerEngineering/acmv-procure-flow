
import { MainLayout } from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, Filter, FileText, Download, Eye } from "lucide-react";

export default function ApprovedDocuments() {
  // This would be fetched from an API in a real application
  const approvedDocuments = [
    { 
      id: "PR-2023-002", 
      project: "Marina Bay Sands", 
      type: "WO",
      title: "Chiller Maintenance",
      vendor: "ABC ACMV Pte Ltd",
      amount: "85,000.00", 
      approvedBy: "Lim Hock Tian",
      approvedOn: "2023-04-12",
      documentNumber: "WO-2023-104"
    },
    { 
      id: "PR-2023-009", 
      project: "Tampines Hub", 
      type: "PO",
      title: "Air Handling Units",
      vendor: "Singapore Cooling Systems",
      amount: "62,500.00", 
      approvedBy: "Lim Hock Tian",
      approvedOn: "2023-04-10",
      documentNumber: "PO-2023-088"
    },
    { 
      id: "PR-2022-156", 
      project: "Changi Airport T5", 
      type: "LOA",
      title: "Ventilation System Installation",
      vendor: "Global HVAC Solutions",
      amount: "145,000.00", 
      approvedBy: "Lim Hock Tian",
      approvedOn: "2023-03-28",
      documentNumber: "LOA-2023-021"
    },
    { 
      id: "PR-2022-149", 
      project: "Jurong East Mall", 
      type: "PO",
      title: "Ducting Components",
      vendor: "XYZ Contractors",
      amount: "37,250.00", 
      approvedBy: "Lim Hock Tian",
      approvedOn: "2023-03-25",
      documentNumber: "PO-2023-075"
    },
  ];

  return (
    <MainLayout>
      <div className="space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Approved Documents</h2>
            <p className="text-muted-foreground">View and download approved purchase documents.</p>
          </div>
        </div>

        <Tabs defaultValue="all">
          <div className="flex items-center justify-between mb-4">
            <TabsList className="grid w-[400px] grid-cols-4">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="po">PO</TabsTrigger>
              <TabsTrigger value="wo">WO</TabsTrigger>
              <TabsTrigger value="loa">LOA</TabsTrigger>
            </TabsList>
            <div className="flex items-center gap-2">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search documents..."
                  className="w-[250px] pl-8"
                />
              </div>
              <Button variant="outline" size="icon">
                <Filter className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <TabsContent value="all">
            <div className="rounded-md border">
              <div className="relative w-full overflow-auto">
                <table className="w-full caption-bottom text-sm">
                  <thead className="border-b bg-muted/50">
                    <tr>
                      <th className="h-10 px-2 text-left font-medium">Document #</th>
                      <th className="h-10 px-2 text-left font-medium">Request ID</th>
                      <th className="h-10 px-2 text-left font-medium">Project</th>
                      <th className="h-10 px-2 text-left font-medium">Type</th>
                      <th className="h-10 px-2 text-left font-medium">Title</th>
                      <th className="h-10 px-2 text-left font-medium">Vendor</th>
                      <th className="h-10 px-2 text-left font-medium">Amount (SGD)</th>
                      <th className="h-10 px-2 text-left font-medium">Approved On</th>
                      <th className="h-10 px-2 text-left font-medium">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {approvedDocuments.map((doc) => (
                      <tr 
                        key={doc.id} 
                        className="border-b transition-colors hover:bg-muted/50"
                      >
                        <td className="p-2 font-medium">{doc.documentNumber}</td>
                        <td className="p-2">{doc.id}</td>
                        <td className="p-2">{doc.project}</td>
                        <td className="p-2">
                          <span 
                            className={`inline-block rounded-full px-2 py-1 text-xs font-semibold ${
                              doc.type === 'PO' 
                                ? 'bg-blue-100 text-blue-800' 
                                : doc.type === 'LOA'
                                ? 'bg-purple-100 text-purple-800'
                                : 'bg-green-100 text-green-800'
                            }`}
                          >
                            {doc.type}
                          </span>
                        </td>
                        <td className="p-2">{doc.title}</td>
                        <td className="p-2">{doc.vendor}</td>
                        <td className="p-2">{doc.amount}</td>
                        <td className="p-2">{doc.approvedOn}</td>
                        <td className="p-2">
                          <div className="flex items-center gap-2">
                            <Button variant="ghost" size="icon">
                              <Eye className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="icon">
                              <Download className="h-4 w-4" />
                            </Button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="po">
            <div className="text-center p-4">
              Filter to show only Purchase Orders
            </div>
          </TabsContent>

          <TabsContent value="wo">
            <div className="text-center p-4">
              Filter to show only Work Orders
            </div>
          </TabsContent>

          <TabsContent value="loa">
            <div className="text-center p-4">
              Filter to show only Letters of Award
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </MainLayout>
  );
}
