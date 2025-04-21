
import { MainLayout } from "@/components/layout/MainLayout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { GeneralSettings } from "@/components/settings/GeneralSettings";
import { NotificationSettings } from "@/components/settings/NotificationSettings";
import { DocumentSettings } from "@/components/settings/DocumentSettings";
import { ReportSettings } from "@/components/settings/ReportSettings";

export default function Settings() {
  return (
    <MainLayout>
      <div className="max-w-5xl mx-auto space-y-6">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">System Settings</h2>
          <p className="text-muted-foreground">
            Configure system-wide settings for the procurement platform
          </p>
        </div>

        <Tabs defaultValue="general" className="w-full">
          <TabsList className="grid grid-cols-4 w-full mb-8">
            <TabsTrigger value="general">General</TabsTrigger>
            <TabsTrigger value="notifications">Reminders & Escalations</TabsTrigger>
            <TabsTrigger value="documents">Document Templates</TabsTrigger>
            <TabsTrigger value="reports">Reporting</TabsTrigger>
          </TabsList>
          
          <TabsContent value="general">
            <GeneralSettings />
          </TabsContent>
          
          <TabsContent value="notifications">
            <NotificationSettings />
          </TabsContent>
          
          <TabsContent value="documents">
            <DocumentSettings />
          </TabsContent>
          
          <TabsContent value="reports">
            <ReportSettings />
          </TabsContent>
        </Tabs>
      </div>
    </MainLayout>
  );
}
