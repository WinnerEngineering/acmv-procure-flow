
import React from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import Dashboard from "./pages/Dashboard";
import VendorManagement from "./pages/VendorManagement";
import NewVendor from "./pages/NewVendor";
import PurchaseRequestWizard from "./pages/PurchaseRequestWizard";
import ReviewRequests from "./pages/ReviewRequests";
import ApprovedDocuments from "./pages/ApprovedDocuments";
import Settings from "./pages/Settings";
import NotFound from "./pages/NotFound";
import ProjectMasterList from "./pages/ProjectMasterList";
import { UserProvider } from "./contexts/UserContext";

const App = () => {
  const [queryClient] = React.useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <UserProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Navigate to="/dashboard" replace />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/vendors" element={<VendorManagement />} />
              <Route path="/vendors/new" element={<NewVendor />} />
              <Route path="/project-master" element={<ProjectMasterList />} />
              <Route path="/requests/new" element={<PurchaseRequestWizard />} />
              <Route path="/reviews" element={<ReviewRequests />} />
              <Route path="/documents" element={<ApprovedDocuments />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </UserProvider>
    </QueryClientProvider>
  );
};

export default App;
