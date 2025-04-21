
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "sonner";

const reportFormSchema = z.object({
  enableBudgetTracking: z.boolean(),
  defaultDateRange: z.string().min(1, { message: "Please select a default date range" }),
  budgetVarianceThreshold: z.string().min(1, { message: "Please enter a threshold" }),
  defaultExportFormat: z.string().min(1, { message: "Please select a format" }),
  enabledReportTypes: z.array(z.string()).refine((value) => value.length > 0, {
    message: "You must select at least one report type",
  }),
});

type ReportFormValues = z.infer<typeof reportFormSchema>;

const defaultValues: Partial<ReportFormValues> = {
  enableBudgetTracking: true,
  defaultDateRange: "last-30-days",
  budgetVarianceThreshold: "10",
  defaultExportFormat: "excel",
  enabledReportTypes: ["budget-vs-spend", "vendor-performance", "approval-times"],
};

const reportTypes = [
  {
    id: "budget-vs-spend",
    label: "Budget vs. Spend Tracking",
  },
  {
    id: "vendor-performance",
    label: "Vendor Performance Report",
  },
  {
    id: "approval-times",
    label: "Approval Times Analysis",
  },
  {
    id: "project-expenditure",
    label: "Project Expenditure Report",
  },
  {
    id: "payment-status",
    label: "Payment Status Report",
  },
];

export function ReportSettings() {
  const form = useForm<ReportFormValues>({
    resolver: zodResolver(reportFormSchema),
    defaultValues,
  });

  function onSubmit(data: ReportFormValues) {
    toast.success("Reporting settings saved successfully");
    console.log("Reporting settings form submitted:", data);
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Reporting & Analytics</CardTitle>
          <CardDescription>
            Configure budget tracking, custom reports, and analytics settings
          </CardDescription>
        </CardHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <CardContent className="space-y-6">
              <FormField
                control={form.control}
                name="enableBudgetTracking"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                    <div className="space-y-0.5">
                      <FormLabel className="text-base">Enable Budget vs. Spend Tracking</FormLabel>
                      <FormDescription>
                        Visualize pre-cost vs. actual issued amounts based on projects
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

              {form.watch("enableBudgetTracking") && (
                <FormField
                  control={form.control}
                  name="budgetVarianceThreshold"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Budget Variance Alert Threshold</FormLabel>
                      <FormControl>
                        <div className="flex items-center">
                          <Input
                            type="number"
                            className="w-24 rounded-r-none"
                            {...field}
                          />
                          <span className="bg-muted px-3 py-2 border border-l-0 rounded-r-md">%</span>
                        </div>
                      </FormControl>
                      <FormDescription>
                        Alert when actual spend exceeds budgeted amount by this percentage
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              )}

              <FormField
                control={form.control}
                name="defaultDateRange"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Default Date Range for Reports</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select default date range" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="today">Today</SelectItem>
                        <SelectItem value="last-7-days">Last 7 Days</SelectItem>
                        <SelectItem value="last-30-days">Last 30 Days</SelectItem>
                        <SelectItem value="this-month">This Month</SelectItem>
                        <SelectItem value="last-month">Last Month</SelectItem>
                        <SelectItem value="this-quarter">This Quarter</SelectItem>
                        <SelectItem value="this-year">This Year</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormDescription>
                      The default time period shown in reports and analytics
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="defaultExportFormat"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Default Export Format</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select export format" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="excel">Excel (.xlsx)</SelectItem>
                        <SelectItem value="csv">CSV</SelectItem>
                        <SelectItem value="pdf">PDF</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormDescription>
                      The default format when exporting reports
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="enabledReportTypes"
                render={() => (
                  <FormItem>
                    <div className="mb-4">
                      <FormLabel className="text-base">Enabled Report Types</FormLabel>
                      <FormDescription>
                        Select which report types are available in the system
                      </FormDescription>
                    </div>
                    {reportTypes.map((item) => (
                      <FormField
                        key={item.id}
                        control={form.control}
                        name="enabledReportTypes"
                        render={({ field }) => {
                          return (
                            <FormItem
                              key={item.id}
                              className="flex flex-row items-start space-x-3 space-y-0 py-2"
                            >
                              <FormControl>
                                <Checkbox
                                  checked={field.value?.includes(item.id)}
                                  onCheckedChange={(checked) => {
                                    return checked
                                      ? field.onChange([...field.value, item.id])
                                      : field.onChange(
                                          field.value?.filter(
                                            (value) => value !== item.id
                                          )
                                        )
                                  }}
                                />
                              </FormControl>
                              <FormLabel className="font-normal">
                                {item.label}
                              </FormLabel>
                            </FormItem>
                          )
                        }}
                      />
                    ))}
                    <FormMessage />
                  </FormItem>
                )}
              />
            </CardContent>
            <CardFooter>
              <Button type="submit">Save Report Settings</Button>
            </CardFooter>
          </form>
        </Form>
      </Card>
    </div>
  );
}
