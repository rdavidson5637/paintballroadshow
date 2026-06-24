import { useEffect } from "react";

export function useFadeUp(...deps: unknown[]) {
  useEffect(() => {
    const elements = document.querySelectorAll(".fade-up:not(.visible)");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, deps);
}
