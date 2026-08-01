import { PageLayout } from "@/components/layout/page-layout";
import { AinativeSubnav } from "@/components/ainative/subnav";

export default function AinativeLayout({ children }: { children: React.ReactNode }) {
  return (
    <PageLayout>
      <AinativeSubnav />
      {children}
    </PageLayout>
  );
}
