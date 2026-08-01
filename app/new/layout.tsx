import { PageLayout } from "@/components/layout/page-layout";
import { NewNavPills } from "@/components/new/subnav";

export default function NewLayout({ children }: { children: React.ReactNode }) {
  return <PageLayout navContent={<NewNavPills />}>{children}</PageLayout>;
}
