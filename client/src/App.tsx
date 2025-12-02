import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Layout from "@/components/layout";
import Home from "@/pages/home";
import Product from "@/pages/product";
import Pricing from "@/pages/pricing";
import Blog from "@/pages/blog";
import About from "@/pages/about";
import Contact from "@/pages/contact";
import Solutions from "@/pages/solutions";
import General from "@/pages/general";
import EmployeeSupport from "@/pages/employee-support";
import CustomerSupport from "@/pages/customer-support";
import OperationsSupport from "@/pages/operations-support";
import ProfessionalServices from "@/pages/professional-services";
import B2B from "@/pages/b2b";
import FrontLineOperations from "@/pages/front-line-operations";
import Enterprise from "@/pages/enterprise";
import Sales from "@/pages/sales";
import SMB from "@/pages/smb";
import SoloExperts from "@/pages/solo-experts";
import { ThemeProvider } from "next-themes";

function Router() {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={General} />
        <Route path="/product" component={Product} />
        <Route path="/pricing" component={Pricing} />
        <Route path="/blog" component={Blog} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/solutions" component={Solutions} />
        <Route path="/general" component={Home} />
        <Route path="/employee-support" component={EmployeeSupport} />
        <Route path="/customer-support" component={CustomerSupport} />
        <Route path="/operations-support" component={OperationsSupport} />
        
        {/* New Use Case Routes */}
        <Route path="/professional-services" component={ProfessionalServices} />
        <Route path="/b2b" component={B2B} />
        <Route path="/front-line-operations" component={FrontLineOperations} />
        <Route path="/enterprise" component={Enterprise} />
        <Route path="/sales" component={Sales} />
        <Route path="/smb" component={SMB} />
        <Route path="/solo-experts" component={SoloExperts} />

        <Route component={NotFound} />
      </Switch>
    </Layout>
  );
}

function App() {
  return (
    <ThemeProvider defaultTheme="dark" attribute="class">
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
