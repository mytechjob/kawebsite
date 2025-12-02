import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useMutation } from "@tanstack/react-query";

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  company: z.string().min(2, "Company name is required"),
  role: z.string().min(1, "Please select a role"),
  interest: z.string().min(1, "Please select an interest"),
  message: z.string().min(10, "Message must be at least 10 characters")
});

export default function Contact() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      role: "",
      interest: "",
      message: ""
    }
  });

  const mutation = useMutation({
    mutationFn: async (values: z.infer<typeof formSchema>) => {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      
      if (!response.ok) {
        throw new Error("Failed to submit contact form");
      }
      
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Message Sent",
        description: "Thank you for contacting us. We'll be in touch shortly."
      });
      form.reset();
    },
    onError: () => {
      toast({
        title: "Something went wrong",
        description: "Please try again later.",
        variant: "destructive",
      });
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    mutation.mutate(values);
  }

  return (
    <div className="flex flex-col gap-0">
      <section className="py-24 bg-secondary/20">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6 font-display">Get in Touch</h1>
          <p className="text-xl text-muted-foreground">
            Let's discuss how Knowledge Agents can transform your document workflows
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
            <div>
              <h2 className="text-2xl font-bold mb-8">Send us a message</h2>
              <div className="p-8 bg-card border border-border rounded-2xl shadow-sm">
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full Name</FormLabel>
                          <FormControl>
                            <Input placeholder="John Doe" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Work Email</FormLabel>
                            <FormControl>
                              <Input placeholder="john@company.com" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="company"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Company Name</FormLabel>
                            <FormControl>
                              <Input placeholder="Acme Inc." {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="role"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Your Role</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select role" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="executive">Executive / C-Level</SelectItem>
                                <SelectItem value="manager">Manager / Director</SelectItem>
                                <SelectItem value="analyst">Analyst / Specialist</SelectItem>
                                <SelectItem value="it">IT / Technical</SelectItem>
                                <SelectItem value="other">Other</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="interest"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Interest</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select option" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="demo">Request a Demo</SelectItem>
                                <SelectItem value="pricing">Pricing Information</SelectItem>
                                <SelectItem value="partnership">Partnership Opportunities</SelectItem>
                                <SelectItem value="support">Technical Support</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Message</FormLabel>
                          <FormControl>
                            <Textarea placeholder="Tell us about your needs..." className="min-h-[120px]" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button type="submit" className="w-full h-12 text-base" disabled={mutation.isPending}>
                      {mutation.isPending ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                </Form>
              </div>
            </div>

            <div className="flex flex-col gap-8">
              <div className="p-8 bg-card border border-border rounded-2xl">
                <div className="w-12 h-12 bg-gradient-to-br from-accent to-teal-400 rounded-xl flex items-center justify-center text-xl mb-6">📧</div>
                <h3 className="text-xl font-bold mb-4">Email Us</h3>
                <div className="space-y-3 text-muted-foreground">
                  <p><strong className="text-primary">Sales:</strong> sales@knowledgeagents.ai</p>
                  <p><strong className="text-primary">Support:</strong> support@knowledgeagents.ai</p>
                  <p><strong className="text-primary">General:</strong> info@knowledgeagents.ai</p>
                </div>
              </div>

              <div className="p-8 bg-card border border-border rounded-2xl">
                <div className="w-12 h-12 bg-gradient-to-br from-accent to-teal-400 rounded-xl flex items-center justify-center text-xl mb-6">💼</div>
                <h3 className="text-xl font-bold mb-4">Sales Team</h3>
                <p className="text-muted-foreground mb-4">Schedule a personalized demo with our sales team to see Knowledge Agents in action.</p>
                <div className="text-sm text-muted-foreground">
                  <strong>Hours:</strong> Monday - Friday<br/>
                  9:00 AM - 6:00 PM EST
                </div>
              </div>

              <div className="p-8 bg-card border border-border rounded-2xl">
                <div className="w-12 h-12 bg-gradient-to-br from-accent to-teal-400 rounded-xl flex items-center justify-center text-xl mb-6">🏢</div>
                <h3 className="text-xl font-bold mb-4">Headquarters</h3>
                <p className="text-muted-foreground">
                  Knowledge Agents Inc.<br/>
                  123 Innovation Drive<br/>
                  San Francisco, CA 94105<br/>
                  United States
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
