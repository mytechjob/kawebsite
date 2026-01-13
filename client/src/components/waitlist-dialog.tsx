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
          <DialogTitle>Learn More</DialogTitle>
          <DialogDescription>
            Get product updates, demo access, and priority onboarding.
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
            <Input
              id="role"
              type="text"
              placeholder="e.g., Finance Manager, Legal Counsel, Compliance Officer"
              value={formData.role}
              onChange={(e) => updateField("role", e.target.value)}
              required
              data-testid="input-role"
            />
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
          <Button type="submit" className="w-full" disabled={mutation.isPending} data-testid="button-submit">
            {mutation.isPending ? "Submitting..." : "Submit"}
          </Button>
          <p className="text-xs text-muted-foreground text-center">
            We'll only use this to contact you about Knowledge Agents. No spam.
          </p>
        </form>
      </DialogContent>
    </Dialog>
  );
}
