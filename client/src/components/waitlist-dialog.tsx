import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";

interface WaitlistFormData {
  fullName: string;
  email: string;
  company: string;
  role: string;
  automationGoal: string;
}

const roleOptions = [
  "Finance / Accounting",
  "Legal",
  "Compliance",
  "Internal Audit / Risk",
  "Private Equity / M&A",
  "Operations",
  "IT / Data",
  "Other",
];

export default function WaitlistDialog({ children }: { children: React.ReactNode }) {
  const [formData, setFormData] = useState<WaitlistFormData>({
    fullName: "",
    email: "",
    company: "",
    role: "",
    automationGoal: "",
  });
  const [open, setOpen] = useState(false);
  const { toast } = useToast();

  const mutation = useMutation({
    mutationFn: async (data: WaitlistFormData) => {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      
      if (!response.ok) {
        throw new Error("Failed to join waitlist");
      }
      
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Thanks — you're on the Early Access list",
        description: "We'll reach out shortly.",
      });
      setOpen(false);
      setFormData({ fullName: "", email: "", company: "", role: "", automationGoal: "" });
    },
    onError: () => {
      toast({
        title: "Something went wrong",
        description: "Please try again later.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutation.mutate(formData);
  };

  const updateField = (field: keyof WaitlistFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Join Early Access</DialogTitle>
          <DialogDescription>
            Get product updates, demo access, and first priority onboarding.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="grid gap-4 py-4">
          <div className="grid gap-2">
            <Label htmlFor="fullName">Full Name</Label>
            <Input
              id="fullName"
              type="text"
              placeholder="John Doe"
              value={formData.fullName}
              onChange={(e) => updateField("fullName", e.target.value)}
              required
              data-testid="input-fullName"
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email">Work Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="john@company.com"
              value={formData.email}
              onChange={(e) => updateField("email", e.target.value)}
              required
              data-testid="input-email"
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="company">Company</Label>
            <Input
              id="company"
              type="text"
              placeholder="Acme Inc."
              value={formData.company}
              onChange={(e) => updateField("company", e.target.value)}
              required
              data-testid="input-company"
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="role">Role</Label>
            <Select
              value={formData.role}
              onValueChange={(value) => updateField("role", value)}
              required
            >
              <SelectTrigger data-testid="select-role">
                <SelectValue placeholder="Select your role" />
              </SelectTrigger>
              <SelectContent>
                {roleOptions.map((role) => (
                  <SelectItem key={role} value={role}>
                    {role}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="automationGoal">What are you hoping to automate?</Label>
            <Textarea
              id="automationGoal"
              placeholder="Describe your use case..."
              value={formData.automationGoal}
              onChange={(e) => updateField("automationGoal", e.target.value)}
              className="resize-none"
              rows={3}
              data-testid="input-automationGoal"
            />
          </div>
          <Button type="submit" className="w-full" disabled={mutation.isPending || !formData.role} data-testid="button-submit">
            {mutation.isPending ? "Submitting..." : "Request Early Access"}
          </Button>
          <p className="text-xs text-muted-foreground text-center">
            We'll only use this to contact you about Early Access and onboarding. No spam.
          </p>
        </form>
      </DialogContent>
    </Dialog>
  );
}
