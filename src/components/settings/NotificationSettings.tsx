
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { toast } from "sonner";

const notificationFormSchema = z.object({
  enableReminders: z.boolean(),
  reminderDays: z.string().min(1, { message: "Please enter days" }),
  enableEscalation: z.boolean(),
  escalationDays: z.string().min(1, { message: "Please enter days" }),
  notifyApproversByEmail: z.boolean(),
  notifyRequestorOnApproval: z.boolean(),
  notifyRequestorOnRejection: z.boolean(),
});

type NotificationFormValues = z.infer<typeof notificationFormSchema>;

const defaultValues: Partial<NotificationFormValues> = {
  enableReminders: true,
  reminderDays: "3",
  enableEscalation: true,
  escalationDays: "5",
  notifyApproversByEmail: true,
  notifyRequestorOnApproval: true,
  notifyRequestorOnRejection: true,
};

export function NotificationSettings() {
  const form = useForm<NotificationFormValues>({
    resolver: zodResolver(notificationFormSchema),
    defaultValues,
  });

  function onSubmit(data: NotificationFormValues) {
    toast.success("Notification settings saved successfully");
    console.log("Notification settings form submitted:", data);
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Reminders & Escalations</CardTitle>
          <CardDescription>
            Configure how the system reminds users of pending actions and escalates overdue items
          </CardDescription>
        </CardHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Reminder Settings</h3>
                
                <FormField
                  control={form.control}
                  name="enableReminders"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                      <div className="space-y-0.5">
                        <FormLabel className="text-base">Enable Automatic Reminders</FormLabel>
                        <FormDescription>
                          Send reminders for pending approvals
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

                {form.watch("enableReminders") && (
                  <FormField
                    control={form.control}
                    name="reminderDays"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Send Reminder After</FormLabel>
                        <FormControl>
                          <div className="flex items-center">
                            <Input
                              type="number"
                              className="w-24 rounded-r-none"
                              {...field}
                            />
                            <span className="bg-muted px-3 py-2 border border-l-0 rounded-r-md">days</span>
                          </div>
                        </FormControl>
                        <FormDescription>
                          Number of days after which a reminder is sent for pending approvals
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                )}
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-medium">Escalation Settings</h3>
                
                <FormField
                  control={form.control}
                  name="enableEscalation"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                      <div className="space-y-0.5">
                        <FormLabel className="text-base">Enable Automatic Escalations</FormLabel>
                        <FormDescription>
                          Escalate to higher authority if not acted upon within SLA
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

                {form.watch("enableEscalation") && (
                  <FormField
                    control={form.control}
                    name="escalationDays"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Escalate After</FormLabel>
                        <FormControl>
                          <div className="flex items-center">
                            <Input
                              type="number"
                              className="w-24 rounded-r-none"
                              {...field}
                            />
                            <span className="bg-muted px-3 py-2 border border-l-0 rounded-r-md">days</span>
                          </div>
                        </FormControl>
                        <FormDescription>
                          Number of days after which an approval is escalated to the next level
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                )}
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-medium">Email Notification Settings</h3>
                
                <FormField
                  control={form.control}
                  name="notifyApproversByEmail"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                      <div className="space-y-0.5">
                        <FormLabel className="text-base">Notify Approvers by Email</FormLabel>
                        <FormDescription>
                          Send emails to approvers when they have pending items
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

                <FormField
                  control={form.control}
                  name="notifyRequestorOnApproval"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                      <div className="space-y-0.5">
                        <FormLabel className="text-base">Notify Requestor on Approval</FormLabel>
                        <FormDescription>
                          Send emails to requestors when their requests are approved
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

                <FormField
                  control={form.control}
                  name="notifyRequestorOnRejection"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                      <div className="space-y-0.5">
                        <FormLabel className="text-base">Notify Requestor on Rejection</FormLabel>
                        <FormDescription>
                          Send emails to requestors when their requests are rejected
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
              </div>
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
