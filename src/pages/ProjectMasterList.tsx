
import { MainLayout } from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Plus, Edit, Trash, Import, Export } from "lucide-react";

export default function ProjectMasterList() {
  return (
    <MainLayout>
      <div className="max-w-3xl mx-auto space-y-8">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Project Master List</h2>
          <p className="text-muted-foreground mb-2">
            Managed by <span className="font-semibold text-acmv-gray">QS Department</span>
          </p>
          <div className="bg-yellow-100 border border-yellow-300 text-yellow-900 px-4 py-2 rounded flex items-center gap-2 mb-2">
            <span className="text-xs font-medium">Role restricted: Only QS can edit projects</span>
          </div>
        </div>
        <div className="flex items-center gap-2 mb-4">
          <Button disabled className="gap-2" variant="outline">
            <Plus className="w-4 h-4"/> Add Project
          </Button>
          <Button disabled className="gap-2" variant="outline">
            <Import className="w-4 h-4"/> Import CSV
          </Button>
          <Button disabled className="gap-2" variant="outline">
            <Export className="w-4 h-4"/> Export CSV
          </Button>
        </div>
        <div className="rounded-md border bg-white/90 p-2">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Project Code</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Location</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>PRJ-2301</TableCell>
                <TableCell>Changi T5 ACMV Expansion</TableCell>
                <TableCell>
                  <span className="inline-block rounded-full px-2 py-1 text-xs font-semibold bg-green-100 text-green-800">
                    Active
                  </span>
                </TableCell>
                <TableCell>Changi, SG</TableCell>
                <TableCell>Internal</TableCell>
                <TableCell className="flex gap-1">
                  <Button size="xs" disabled variant="ghost"><Edit className="w-3 h-3"/></Button>
                  <Button size="xs" disabled variant="ghost"><Trash className="w-3 h-3"/></Button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>PRJ-2302</TableCell>
                <TableCell>Marina Bay MEP Retrofit</TableCell>
                <TableCell>
                  <span className="inline-block rounded-full px-2 py-1 text-xs font-semibold bg-yellow-100 text-yellow-800">
                    Inactive
                  </span>
                </TableCell>
                <TableCell>Marina Bay, SG</TableCell>
                <TableCell>External</TableCell>
                <TableCell className="flex gap-1">
                  <Button size="xs" disabled variant="ghost"><Edit className="w-3 h-3"/></Button>
                  <Button size="xs" disabled variant="ghost"><Trash className="w-3 h-3"/></Button>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
        <div className="text-xs text-muted-foreground mt-2">Bulk import/export actions and all CRUD operations will be available for QS soon.</div>
      </div>
    </MainLayout>
  );
}
