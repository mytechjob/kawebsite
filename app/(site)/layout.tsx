import { PageLayout } from "@/components/layout/page-layout";
import { NewNavPills } from "@/components/new/subnav";

/**
 * Layout for the main marketing site — home, platform, pricing, compare,
 * revenue intelligence, features, and solutions. `(site)` is a route group,
 * so it adds no URL segment: these pages live at `/`, `/platform`, etc.
 * Older pages (blog, business, about…) sit outside the group and bring
 * their own PageLayout, so they keep the classic MAIN_NAV header.
 */
export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return <PageLayout navContent={<NewNavPills />}>{children}</PageLayout>;
}
