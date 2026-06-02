import { useEffect } from "react";
import { useLocation } from "wouter";

/**
 * On route change, scroll to the top — or to the #anchor if the URL has a hash.
 * A short delay lets lazily-rendered sections mount before we scroll to them.
 */
export function ScrollManager() {
  const [location] = useLocation();

  useEffect(() => {
    const hash = window.location.hash;

    if (hash && hash.length > 1) {
      const id = decodeURIComponent(hash.slice(1));
      const tryScroll = (attempt = 0) => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        } else if (attempt < 5) {
          setTimeout(() => tryScroll(attempt + 1), 60);
        }
      };
      tryScroll();
      return;
    }

    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [location]);

  return null;
}
