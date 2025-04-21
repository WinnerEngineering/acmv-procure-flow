
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { FileText, Plus, Edit, Trash } from "lucide-react";
import { toast } from "sonner";

const documentFormSchema = z.object({
  enableVersioning: z.boolean(),
  maxVersions: z.string().min(1, { message: "Please enter maximum versions" }),
  defaultTemplateRegion: z.string().min(1, { message: "Please select a region" }),
});

type DocumentFormValues = z.infer<typeof documentFormSchema>;

const defaultValues: Partial<DocumentFormValues> = {
  enableVersioning: true,
  maxVersions: "10",
  defaultTemplateRegion: "SG",
};

type TemplateType = {
  id: string;
  name: string;
  type: "PO" | "WO" | "LOA";
  region: string;
  lastUpdated: string;
};

const mockTemplates: TemplateType[] = [
  { id: "1", name: "Standard Purchase Order", type: "PO", region: "SG", lastUpdated: "2024-04-10" },
  { id: "2", name: "Standard Work Order", type: "WO", region: "SG", lastUpdated: "2024-04-05" },
  { id: "3", name: "Letter of Award Template", type: "LOA", region: "SG", lastUpdated: "2024-03-22" },
  { id: "4", name: "Malaysia Purchase Order", type: "PO", region: "MY", lastUpdated: "2024-03-15" },
];

export function DocumentSettings() {
  const [templates, setTemplates] = useState<TemplateType[]>(mockTemplates);
  
  const form = useForm<DocumentFormValues>({
    resolver: zodResolver(documentFormSchema),
    defaultValues,
  });

  function onSubmit(data: DocumentFormValues) {
    toast.success("Document settings saved successfully");
    console.log("Document settings form submitted:", data);
  }

  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle>Document Version Control</CardTitle>
          <CardDescription>
            Configure document versioning and check-in/check-out settings
          </CardDescription>
        </CardHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <CardContent className="space-y-6">
              <FormField
                control={form.control}
                name="enableVersioning"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                    <div className="space-y-0.5">
                      <FormLabel className="text-base">Enable Document Versioning</FormLabel>
                      <FormDescription>
                        Track revisions of uploaded files and allow rollback to previous versions
                      </FormDescription>
                    </div>
                    <FormControl>
                      <Switch
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />

              {form.watch("enableVersioning") && (
                <FormField
                  control={form.control}
                  name="maxVersions"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Maximum Versions to Keep</FormLabel>
                      <FormControl>
                        <Input
                          type="number"
                          {...field}
                        />
                      </FormControl>
                      <FormDescription>
                        Number of historical versions to maintain per document
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              )}

              <FormField
                control={form.control}
                name="defaultTemplateRegion"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Default Template Region</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select default region" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="SG">Singapore</SelectItem>
                        <SelectItem value="MY">Malaysia</SelectItem>
                        <SelectItem value="ID">Indonesia</SelectItem>
                        <SelectItem value="TH">Thailand</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormDescription>
                      The default region for document templates
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </CardContent>
            <CardFooter>
              <Button type="submit">Save Version Settings</Button>
            </CardFooter>
          </form>
        </Form>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle>Document Templates</CardTitle>
            <CardDescription>
              Manage PO/WO/LOA templates for different regions and project types
            </CardDescription>
          </div>
          <Button className="gap-2">
            <Plus className="w-4 h-4" /> Add Template
          </Button>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Template Name</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Region</TableHead>
                <TableHead>Last Updated</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {templates.map((template) => (
                <TableRow key={template.id}>
                  <TableCell className="flex items-center gap-2">
                    <FileText className="w-4 h-4 text-muted-foreground" />
                    {template.name}
                  </TableCell>
                  <TableCell>{template.type}</TableCell>
                  <TableCell>{template.region}</TableCell>
                  <TableCell>{template.lastUpdated}</TableCell>
                  <TableCell className="flex gap-1">
                    <Button size="sm" variant="ghost"><Edit className="w-3 h-3"/></Button>
                    <Button size="sm" variant="ghost"><Trash className="w-3 h-3"/></Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
