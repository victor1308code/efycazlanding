"use client";

import { useEffect } from "react";

export function ScrollObserver() {
  useEffect(() => {
    // Verifica se IntersectionObserver está disponível
    if (typeof window === "undefined" || !("IntersectionObserver" in window)) {
      document.querySelectorAll(".fade-in-section").forEach((el) => {
        el.classList.add("is-visible");
      });
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            // Desconecta o elemento após animar para performance ótima
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    const elements = document.querySelectorAll(".fade-in-section");
    elements.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
    };
  }, []);

  return null;
}
