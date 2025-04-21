
import { MainLayout } from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Plus, Search, Filter, Edit, Trash, FileOutput, Import } from "lucide-react";
import { Link } from "react-router-dom";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export default function VendorManagement() {
  // Fake data for demonstration
  const vendors = [
    { id: 1, name: "ABC ACMV Pte Ltd", category: "Supplier", status: "Approved", contact: "John Smith", email: "john@abcacmv.com" },
    { id: 2, name: "XYZ Contractors", category: "Subcontractor", status: "Pending", contact: "Jane Doe", email: "jane@xyzcontractors.com" },
    { id: 3, name: "Singapore Cooling Systems", category: "Supplier", status: "Approved", contact: "David Lee", email: "david@sgcooling.com" },
    { id: 4, name: "Global HVAC Solutions", category: "Supplier", status: "Approved", contact: "Sarah Chen", email: "sarah@globalhvac.com" },
    { id: 5, name: "Precision Engineering", category: "Subcontractor", status: "Rejected", contact: "Michael Tan", email: "michael@precision.com" },
  ];

  // Filter vendors for "Pending" tab demo
  const pendingVendors = vendors.filter((v) => v.status === "Pending");

  return (
    <MainLayout>
      <div className="max-w-5xl mx-auto space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Vendor Management</h2>
            <p className="text-muted-foreground">Manage, approve, and maintain all vendor records.</p>
          </div>
          <Button asChild>
            <Link to="/vendors/new">
              <Plus className="mr-2 h-4 w-4" />
              Add New Vendor
            </Link>
          </Button>
        </div>
        <Tabs defaultValue="all">
          <div className="flex items-center justify-between mb-4 gap-3 flex-wrap">
            <TabsList className="grid w-fit grid-cols-2">
              <TabsTrigger value="all">Registered Vendors</TabsTrigger>
              <TabsTrigger value="pending">Pending Approvals</TabsTrigger>
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
            <div className="flex items-center gap-2 mb-4">
              <Button disabled className="gap-2" variant="outline">
                <Import className="w-4 h-4"/> Import CSV
              </Button>
              <Button disabled className="gap-2" variant="outline">
                <FileOutput className="w-4 h-4"/> Export CSV
              </Button>
            </div>
            <div className="rounded-md border bg-white/90 p-2">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Category</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Contact</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {vendors.map((vendor) => (
                    <TableRow key={vendor.id}>
                      <TableCell>{vendor.name}</TableCell>
                      <TableCell>{vendor.category}</TableCell>
                      <TableCell>
                        <span className={`inline-block rounded-full px-2 py-1 text-xs font-semibold ${
                          vendor.status === 'Approved' ? 'bg-green-100 text-green-800'
                          : vendor.status === 'Rejected' ? 'bg-red-100 text-red-800'
                          : 'bg-yellow-100 text-yellow-800'
                        }`}>{vendor.status}</span>
                      </TableCell>
                      <TableCell>{vendor.contact}</TableCell>
                      <TableCell>{vendor.email}</TableCell>
                      <TableCell className="flex gap-1">
                        <Button size="sm" disabled={vendor.status !== "Approved"} variant="ghost"><Edit className="w-3 h-3" /></Button>
                        <Button size="sm" disabled variant="ghost"><Trash className="w-3 h-3" /></Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
            <div className="text-xs text-muted-foreground mt-2">
              Bulk actions and vendor CRUD coming soon.
            </div>
          </TabsContent>
          <TabsContent value="pending">
            <div className="rounded-md border bg-white/90 p-2">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Category</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Contact</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {pendingVendors.length === 0 && (
                    <TableRow>
                      <TableCell colSpan={6} className="text-center italic text-muted-foreground">
                        No pending vendors.
                      </TableCell>
                    </TableRow>
                  )}
                  {pendingVendors.map((vendor) => (
                    <TableRow key={vendor.id}>
                      <TableCell>{vendor.name}</TableCell>
                      <TableCell>{vendor.category}</TableCell>
                      <TableCell>
                        <span className="inline-block rounded-full px-2 py-1 text-xs font-semibold bg-yellow-100 text-yellow-800">
                          Pending
                        </span>
                      </TableCell>
                      <TableCell>{vendor.contact}</TableCell>
                      <TableCell>{vendor.email}</TableCell>
                      <TableCell className="flex gap-1">
                        <Button size="sm" disabled variant="ghost"><Edit className="w-3 h-3" /></Button>
                        <Button size="sm" disabled variant="ghost"><Trash className="w-3 h-3" /></Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
            <div className="text-xs text-muted-foreground mt-2">Approvals require appropriate permissions.</div>
          </TabsContent>
        </Tabs>
      </div>
    </MainLayout>
  );
}
