
import { MainLayout } from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { ChevronLeft } from "lucide-react";
import { Link } from "react-router-dom";

export default function NewVendor() {
  return (
    <MainLayout>
      <div className="space-y-8">
        <div className="flex items-center">
          <Button variant="ghost" size="sm" asChild className="mr-2">
            <Link to="/vendors">
              <ChevronLeft className="h-4 w-4" />
              Back
            </Link>
          </Button>
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Add New Vendor</h2>
            <p className="text-muted-foreground">Register a new supplier or subcontractor.</p>
          </div>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Vendor Information</CardTitle>
            <CardDescription>
              Enter the basic details of the vendor you want to register in the system.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6">
              <div className="grid gap-3">
                <div className="grid gap-1">
                  <Label htmlFor="vendor-type">Vendor Type</Label>
                  <RadioGroup defaultValue="supplier" className="flex gap-4">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="supplier" id="supplier" />
                      <Label htmlFor="supplier">Supplier</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="subcontractor" id="subcontractor" />
                      <Label htmlFor="subcontractor">Subcontractor</Label>
                    </div>
                  </RadioGroup>
                </div>
              </div>

                <div className="grid gap-3">
                  <div className="grid gap-1">
                    <Label htmlFor="company-name">Company Name</Label>
                    <Input id="company-name" placeholder="Enter company name" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="grid gap-1">
                    <Label htmlFor="contact-person">Contact Person</Label>
                    <Input id="contact-person" placeholder="Enter contact person name" />
                  </div>
                  <div className="grid gap-1">
                    <Label htmlFor="designation">Designation</Label>
                    <Input id="designation" placeholder="Enter designation" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="grid gap-1">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" placeholder="Enter email address" type="email" />
                  </div>
                  <div className="grid gap-1">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" placeholder="Enter phone number" />
                  </div>
                </div>

                <div className="grid gap-1">
                  <Label htmlFor="address">Address</Label>
                  <Textarea id="address" placeholder="Enter company address" rows={3} />
                </div>

                <div className="grid gap-1">
                  <Label htmlFor="services">Services/Products Offered</Label>
                  <Textarea id="services" placeholder="Describe the services or products offered" rows={3} />
                </div>

                <div className="grid gap-1">
                  <Label>Documents</Label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="grid gap-1">
                      <Label htmlFor="company-profile" className="text-sm">Company Profile</Label>
                      <Input id="company-profile" type="file" />
                    </div>
                    <div className="grid gap-1">
                      <Label htmlFor="acra" className="text-sm">ACRA Registration</Label>
                      <Input id="acra" type="file" />
                    </div>
                  </div>
                </div>

                <div className="flex justify-end gap-3">
                  <Button variant="outline" asChild>
                    <Link to="/vendors">Cancel</Link>
                  </Button>
                  <Button>Submit</Button>
                </div>
              </div>
          </CardContent>
        </Card>
      </div>
    </MainLayout>
  );
}
