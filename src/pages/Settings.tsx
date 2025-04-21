
import { MainLayout } from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import { Users, Mail, Bell, Shield, Save } from "lucide-react";

export default function Settings() {
  return (
    <MainLayout>
      <div className="space-y-8">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Settings</h2>
          <p className="text-muted-foreground">Manage your account settings and system preferences.</p>
        </div>

        <Tabs defaultValue="profile">
          <div className="flex">
            <div className="w-[200px] border-r pr-4">
              <TabsList className="flex flex-col items-start h-auto bg-transparent p-0">
                <TabsTrigger 
                  value="profile" 
                  className="data-[state=active]:bg-transparent data-[state=active]:shadow-none justify-start px-2 py-1.5 w-full data-[state=active]:text-acmv-purple"
                >
                  <Users className="h-4 w-4 mr-2" />
                  Profile
                </TabsTrigger>
                <TabsTrigger 
                  value="notifications" 
                  className="data-[state=active]:bg-transparent data-[state=active]:shadow-none justify-start px-2 py-1.5 w-full data-[state=active]:text-acmv-purple"
                >
                  <Bell className="h-4 w-4 mr-2" />
                  Notifications
                </TabsTrigger>
                <TabsTrigger 
                  value="emails" 
                  className="data-[state=active]:bg-transparent data-[state=active]:shadow-none justify-start px-2 py-1.5 w-full data-[state=active]:text-acmv-purple"
                >
                  <Mail className="h-4 w-4 mr-2" />
                  Email Templates
                </TabsTrigger>
                <TabsTrigger 
                  value="security" 
                  className="data-[state=active]:bg-transparent data-[state=active]:shadow-none justify-start px-2 py-1.5 w-full data-[state=active]:text-acmv-purple"
                >
                  <Shield className="h-4 w-4 mr-2" />
                  Security
                </TabsTrigger>
              </TabsList>
            </div>
            <div className="flex-1 pl-6">
              <TabsContent value="profile" className="mt-0">
                <Card>
                  <CardHeader>
                    <CardTitle>Profile Information</CardTitle>
                    <CardDescription>
                      Update your account profile information.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="grid gap-1">
                        <Label htmlFor="first-name">First Name</Label>
                        <Input id="first-name" value="John" />
                      </div>
                      <div className="grid gap-1">
                        <Label htmlFor="last-name">Last Name</Label>
                        <Input id="last-name" value="Doe" />
                      </div>
                    </div>
                    <div className="grid gap-1">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" value="john.doe@acmvcontracting.com" />
                    </div>
                    <div className="grid gap-1">
                      <Label htmlFor="job-title">Job Title</Label>
                      <Input id="job-title" value="Contract Manager" />
                    </div>
                    <div className="grid gap-1">
                      <Label htmlFor="department">Department</Label>
                      <Input id="department" value="Contracts" />
                    </div>
                    <Separator />
                    <div className="flex justify-end">
                      <Button>
                        <Save className="h-4 w-4 mr-2" />
                        Save Changes
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="notifications" className="mt-0">
                <Card>
                  <CardHeader>
                    <CardTitle>Notification Preferences</CardTitle>
                    <CardDescription>
                      Control how you receive notifications.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-4">
                      <h3 className="text-sm font-medium">Email Notifications</h3>
                      <div className="grid gap-2">
                        <div className="flex items-center justify-between">
                          <Label htmlFor="new-request" className="flex-1">
                            New purchase request submitted
                          </Label>
                          <Switch id="new-request" defaultChecked />
                        </div>
                        <div className="flex items-center justify-between">
                          <Label htmlFor="request-approved" className="flex-1">
                            Purchase request approved
                          </Label>
                          <Switch id="request-approved" defaultChecked />
                        </div>
                        <div className="flex items-center justify-between">
                          <Label htmlFor="request-rejected" className="flex-1">
                            Purchase request rejected
                          </Label>
                          <Switch id="request-rejected" defaultChecked />
                        </div>
                        <div className="flex items-center justify-between">
                          <Label htmlFor="document-generated" className="flex-1">
                            New document generated
                          </Label>
                          <Switch id="document-generated" defaultChecked />
                        </div>
                        <div className="flex items-center justify-between">
                          <Label htmlFor="comment-added" className="flex-1">
                            Comment added to purchase request
                          </Label>
                          <Switch id="comment-added" defaultChecked />
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-sm font-medium">System Notifications</h3>
                      <div className="grid gap-2">
                        <div className="flex items-center justify-between">
                          <Label htmlFor="browser-notifications" className="flex-1">
                            Browser notifications
                          </Label>
                          <Switch id="browser-notifications" defaultChecked />
                        </div>
                        <div className="flex items-center justify-between">
                          <Label htmlFor="daily-digest" className="flex-1">
                            Daily email digest
                          </Label>
                          <Switch id="daily-digest" />
                        </div>
                      </div>
                    </div>

                    <Separator />
                    <div className="flex justify-end">
                      <Button>
                        <Save className="h-4 w-4 mr-2" />
                        Save Changes
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="emails" className="mt-0">
                <Card>
                  <CardHeader>
                    <CardTitle>Email Templates</CardTitle>
                    <CardDescription>
                      Customize email templates for various notifications.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <Tabs defaultValue="new-request">
                      <TabsList className="grid w-full grid-cols-3">
                        <TabsTrigger value="new-request">New Request</TabsTrigger>
                        <TabsTrigger value="approval">Approval</TabsTrigger>
                        <TabsTrigger value="rejection">Rejection</TabsTrigger>
                      </TabsList>
                      <TabsContent value="new-request" className="mt-4 space-y-4">
                        <div className="grid gap-1">
                          <Label htmlFor="subject-new">Email Subject</Label>
                          <Input id="subject-new" value="New Purchase Request: [Request ID]" />
                        </div>
                        <div className="grid gap-1">
                          <Label htmlFor="template-new">Email Template</Label>
                          <Textarea 
                            id="template-new" 
                            rows={10}
                            value={`Dear [Recipient Name],

A new purchase request has been submitted and requires your review.

Request Details:
- Request ID: [Request ID]
- Project: [Project Name]
- Title: [Request Title]
- Type: [Document Type]
- Amount: SGD [Amount]
- Requested By: [Requestor Name]

Please log in to the ACMV Procurement System to review this request.

Best regards,
ACMV Procurement Team`}
                          />
                        </div>
                        <div className="grid gap-1">
                          <Label>Available Variables</Label>
                          <div className="flex flex-wrap gap-2 text-sm">
                            <span className="inline-block bg-muted px-2 py-1 rounded">[Request ID]</span>
                            <span className="inline-block bg-muted px-2 py-1 rounded">[Project Name]</span>
                            <span className="inline-block bg-muted px-2 py-1 rounded">[Request Title]</span>
                            <span className="inline-block bg-muted px-2 py-1 rounded">[Document Type]</span>
                            <span className="inline-block bg-muted px-2 py-1 rounded">[Amount]</span>
                            <span className="inline-block bg-muted px-2 py-1 rounded">[Requestor Name]</span>
                            <span className="inline-block bg-muted px-2 py-1 rounded">[Recipient Name]</span>
                          </div>
                        </div>
                      </TabsContent>
                      <TabsContent value="approval" className="mt-4">
                        <div className="text-center p-4">
                          Approval email template settings
                        </div>
                      </TabsContent>
                      <TabsContent value="rejection" className="mt-4">
                        <div className="text-center p-4">
                          Rejection email template settings
                        </div>
                      </TabsContent>
                    </Tabs>

                    <Separator />
                    <div className="flex justify-end">
                      <Button>
                        <Save className="h-4 w-4 mr-2" />
                        Save Changes
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="security" className="mt-0">
                <Card>
                  <CardHeader>
                    <CardTitle>Security Settings</CardTitle>
                    <CardDescription>
                      Manage your account security settings.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-4">
                      <h3 className="text-sm font-medium">Change Password</h3>
                      <div className="grid gap-2">
                        <div className="grid gap-1">
                          <Label htmlFor="current-password">Current Password</Label>
                          <Input id="current-password" type="password" />
                        </div>
                        <div className="grid gap-1">
                          <Label htmlFor="new-password">New Password</Label>
                          <Input id="new-password" type="password" />
                        </div>
                        <div className="grid gap-1">
                          <Label htmlFor="confirm-password">Confirm New Password</Label>
                          <Input id="confirm-password" type="password" />
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-sm font-medium">Two-Factor Authentication</h3>
                      <div className="flex items-center justify-between">
                        <div>
                          <Label htmlFor="two-factor" className="text-base">Enable Two-Factor Authentication</Label>
                          <p className="text-sm text-muted-foreground">
                            Add an extra layer of security to your account
                          </p>
                        </div>
                        <Switch id="two-factor" />
                      </div>
                    </div>

                    <Separator />
                    <div className="flex justify-end">
                      <Button>
                        <Save className="h-4 w-4 mr-2" />
                        Save Changes
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </div>
          </div>
        </Tabs>
      </div>
    </MainLayout>
  );
}
