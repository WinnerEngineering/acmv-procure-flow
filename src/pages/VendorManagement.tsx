
import { MainLayout } from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Plus, Search, Filter } from "lucide-react";
import { Link } from "react-router-dom";

export default function VendorManagement() {
  // This would be fetched from an API in a real application
  const vendors = [
    { id: 1, name: "ABC ACMV Pte Ltd", category: "Supplier", status: "Approved", contact: "John Smith", email: "john@abcacmv.com" },
    { id: 2, name: "XYZ Contractors", category: "Subcontractor", status: "Pending", contact: "Jane Doe", email: "jane@xyzcontractors.com" },
    { id: 3, name: "Singapore Cooling Systems", category: "Supplier", status: "Approved", contact: "David Lee", email: "david@sgcooling.com" },
    { id: 4, name: "Global HVAC Solutions", category: "Supplier", status: "Approved", contact: "Sarah Chen", email: "sarah@globalhvac.com" },
    { id: 5, name: "Precision Engineering", category: "Subcontractor", status: "Rejected", contact: "Michael Tan", email: "michael@precision.com" },
  ];

  return (
    <MainLayout>
      <div className="space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Vendor Management</h2>
            <p className="text-muted-foreground">Manage suppliers and subcontractors.</p>
          </div>
          <Button asChild>
            <Link to="/vendors/new">
              <Plus className="mr-2 h-4 w-4" />
              Add New Vendor
            </Link>
          </Button>
        </div>

        <Tabs defaultValue="all">
          <div className="flex items-center justify-between mb-4">
            <TabsList className="grid w-[400px] grid-cols-3">
              <TabsTrigger value="all">All Vendors</TabsTrigger>
              <TabsTrigger value="suppliers">Suppliers</TabsTrigger>
              <TabsTrigger value="subcontractors">Subcontractors</TabsTrigger>
            </TabsList>
            <div className="flex items-center gap-2">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search vendors..."
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
                      <th className="h-10 px-2 text-left font-medium">Name</th>
                      <th className="h-10 px-2 text-left font-medium">Category</th>
                      <th className="h-10 px-2 text-left font-medium">Status</th>
                      <th className="h-10 px-2 text-left font-medium">Contact Person</th>
                      <th className="h-10 px-2 text-left font-medium">Email</th>
                      <th className="h-10 px-2 text-left font-medium">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {vendors.map((vendor) => (
                      <tr 
                        key={vendor.id} 
                        className="border-b transition-colors hover:bg-muted/50"
                      >
                        <td className="p-2 font-medium">{vendor.name}</td>
                        <td className="p-2">{vendor.category}</td>
                        <td className="p-2">
                          <span 
                            className={`inline-block rounded-full px-2 py-1 text-xs font-semibold ${
                              vendor.status === 'Approved' 
                                ? 'bg-green-100 text-green-800' 
                                : vendor.status === 'Rejected'
                                ? 'bg-red-100 text-red-800'
                                : 'bg-yellow-100 text-yellow-800'
                            }`}
                          >
                            {vendor.status}
                          </span>
                        </td>
                        <td className="p-2">{vendor.contact}</td>
                        <td className="p-2">{vendor.email}</td>
                        <td className="p-2">
                          <div className="flex items-center gap-2">
                            <Button variant="ghost" size="sm">View</Button>
                            <Button variant="ghost" size="sm">Edit</Button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="suppliers">
            <div className="text-center p-4">
              Filter to show only suppliers
            </div>
          </TabsContent>

          <TabsContent value="subcontractors">
            <div className="text-center p-4">
              Filter to show only subcontractors
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </MainLayout>
  );
}
