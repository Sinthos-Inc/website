"use client";
import { useEffect, useState } from "react";
import { Brand } from "./brand";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    const desktop = window.matchMedia("(min-width: 641px)");
    const onResize = () => {
      if (desktop.matches) setOpen(false);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    document.addEventListener("keydown", onKey);
    desktop.addEventListener("change", onResize);
    return () => {
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("keydown", onKey);
      desktop.removeEventListener("change", onResize);
    };
  }, []);
  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
      <Brand />
      <nav
        id="navigation"
        aria-label="Main navigation"
        className={`nav ${open ? "open" : ""}`}
      >
        <a href="#mission" onClick={() => setOpen(false)}>
          Mission
        </a>
        <a href="#program" onClick={() => setOpen(false)}>
          First program
        </a>
        <a href="#development" onClick={() => setOpen(false)}>
          Development
        </a>
        <a
          className="nav-contact"
          href="mailto:subhro@sinthosinc.com"
          onClick={() => setOpen(false)}
        >
          Contact <span aria-hidden="true">↗</span>
        </a>
      </nav>
      <button
        className="menu-toggle"
        type="button"
        aria-label={open ? "Close navigation" : "Open navigation"}
        aria-expanded={open}
        aria-controls="navigation"
        onClick={() => setOpen(!open)}
      >
        <span />
        <span />
      </button>
    </header>
  );
}

export function CopyEmail() {
  const [status, setStatus] = useState("");
  async function copy() {
    try {
      await navigator.clipboard.writeText("subhro@sinthosinc.com");
      setStatus("Email address copied.");
    } catch {
      setStatus("Select and copy the email address above.");
    }
  }
  return (
    <>
      <button className="copy-email font-mono" type="button" onClick={copy}>
        COPY EMAIL <span aria-hidden="true">+</span>
      </button>
      <span className="copy-status" role="status">
        {status}
      </span>
    </>
  );
}

export function RevealMotion() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const elements = document.querySelectorAll<HTMLElement>(".reveal");
    // Content is visible without JavaScript; hide only elements still below the fold.
    elements.forEach((element) => {
      if (element.getBoundingClientRect().top < window.innerHeight)
        element.classList.add("visible");
    });
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        }),
      { threshold: 0.12 },
    );
    elements.forEach((element) => observer.observe(element));
    document.documentElement.classList.add("motion-ready");
    return () => {
      observer.disconnect();
      document.documentElement.classList.remove("motion-ready");
    };
  }, []);
  return null;
}
