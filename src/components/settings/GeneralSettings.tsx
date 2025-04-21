
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";

const generalFormSchema = z.object({
  baseCurrency: z.string().min(1, { message: "Please select a base currency" }),
  poApprovalThreshold: z.string().min(1, { message: "Please enter a PO approval threshold" }),
  woApprovalThreshold: z.string().min(1, { message: "Please enter a WO approval threshold" }),
  maxFileSize: z.string().min(1, { message: "Please enter maximum file size" }),
});

type GeneralFormValues = z.infer<typeof generalFormSchema>;

const defaultValues: Partial<GeneralFormValues> = {
  baseCurrency: "SGD",
  poApprovalThreshold: "10000",
  woApprovalThreshold: "5000",
  maxFileSize: "10",
};

export function GeneralSettings() {
  const form = useForm<GeneralFormValues>({
    resolver: zodResolver(generalFormSchema),
    defaultValues,
  });

  function onSubmit(data: GeneralFormValues) {
    toast.success("Settings saved successfully");
    console.log("Settings form submitted:", data);
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Currency & Thresholds</CardTitle>
          <CardDescription>
            Configure the base currency and approval thresholds for the system
          </CardDescription>
        </CardHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <CardContent className="space-y-6">
              <FormField
                control={form.control}
                name="baseCurrency"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Base Currency</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select base currency" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="SGD">SGD - Singapore Dollar</SelectItem>
                        <SelectItem value="USD">USD - US Dollar</SelectItem>
                        <SelectItem value="EUR">EUR - Euro</SelectItem>
                        <SelectItem value="MYR">MYR - Malaysian Ringgit</SelectItem>
                        <SelectItem value="IDR">IDR - Indonesian Rupiah</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormDescription>
                      The primary currency used for all calculations and reports.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="poApprovalThreshold"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>PO Approval Threshold</FormLabel>
                    <FormControl>
                      <div className="flex items-center">
                        <span className="bg-muted px-3 py-2 border border-r-0 rounded-l-md">$</span>
                        <Input
                          type="number"
                          className="rounded-l-none"
                          {...field}
                        />
                      </div>
                    </FormControl>
                    <FormDescription>
                      Purchase Orders above this amount require additional approval
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="woApprovalThreshold"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>WO Approval Threshold</FormLabel>
                    <FormControl>
                      <div className="flex items-center">
                        <span className="bg-muted px-3 py-2 border border-r-0 rounded-l-md">$</span>
                        <Input
                          type="number"
                          className="rounded-l-none"
                          {...field}
                        />
                      </div>
                    </FormControl>
                    <FormDescription>
                      Work Orders above this amount require additional approval
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="maxFileSize"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Maximum File Size</FormLabel>
                    <FormControl>
                      <div className="flex items-center">
                        <Input
                          type="number"
                          className="rounded-r-none"
                          {...field}
                        />
                        <span className="bg-muted px-3 py-2 border border-l-0 rounded-r-md">MB</span>
                      </div>
                    </FormControl>
                    <FormDescription>
                      Maximum allowed size for uploaded documents
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </CardContent>
            <CardFooter>
              <Button type="submit">Save Changes</Button>
            </CardFooter>
          </form>
        </Form>
      </Card>
    </div>
  );
}
