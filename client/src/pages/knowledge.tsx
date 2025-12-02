import { useEffect } from "react";

export default function Knowledge() {
  useEffect(() => {
    const projectId = "445bf037-2104-410b-9bbb-8ca826b5f325";
    const apiUrl = "https://9164b327-0e18-471e-b229-2e644431bb88-00-q9w8znn9mffn.worf.replit.dev/api/embed/" + projectId;
    
    const script = document.createElement('script');
    script.src = "https://9164b327-0e18-471e-b229-2e644431bb88-00-q9w8znn9mffn.worf.replit.dev/page-embed.js";
    script.async = true;
    script.onload = function() {
      if ((window as any).KBPageEmbed) {
        (window as any).KBPageEmbed.init({
          projectId: projectId,
          apiUrl: apiUrl,
          securityMode: "simple",
          pageSlug: "YOUR_PAGE_SLUG",
          showNavigation: true,
          showSearch: true,
          showBreadcrumbs: true,
          theme: "light",
          width: "100%",
          height: "600px",
          primaryColor: "#00D4FF",
          accentColor: "#00D4FF"
        });
      }
    };
    document.head.appendChild(script);

    return () => {
      const existingScript = document.querySelector(`script[src="${script.src}"]`);
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  return (
    <div className="flex flex-col gap-0">
      <section className="py-12 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div id="kb-page-embed" data-page-slug="YOUR_PAGE_SLUG" data-testid="knowledge-embed"></div>
        </div>
      </section>
    </div>
  );
}
