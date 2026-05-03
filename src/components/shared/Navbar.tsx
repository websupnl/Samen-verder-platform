"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { href: "/", label: "Home" },
    { href: "/ouders", label: "Voor ouders" },
    { href: "/professionals", label: "Voor professionals" },
    { href: "/buddy", label: "Buddy worden" },
    { href: "/hoe-werkt-het", label: "Uitleg" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="docked full-width top-0 sticky z-50 bg-white/90 backdrop-blur-xl border-b border-outline-variant/20">
      <div className="flex justify-between items-center max-w-7xl mx-auto px-6 h-20">
        <Link href="/" className="flex items-center">
          <Image
            src="/images/favicon en icon voor logo.png"
            alt="Samen Verder"
            width={48}
            height={48}
            className="h-12 w-auto"
          />
          <span className="ml-2.5 text-2xl font-extrabold tracking-tight text-on-background font-headline">
            Samen Verder
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center space-x-8">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-on-background/70 hover:text-on-background transition-colors text-sm font-medium font-headline"
            >
              {l.label}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center space-x-4">
          <button
            onClick={() => window.dispatchEvent(new CustomEvent('open-anonymous-chat'))}
            className="px-5 py-2.5 rounded-full text-sm font-bold bg-surface-container-highest text-on-surface hover:bg-surface-variant transition-colors font-headline cursor-pointer"
          >
            Praat anoniem
          </button>
          <Link
            className="px-5 py-2.5 rounded-full text-sm font-bold bg-primary text-on-primary hover:bg-primary-dim transition-colors shadow-[0_4px_14px_rgba(49,51,48,0.06)] font-headline"
            href="/aanmelden"
          >
            Vraag een buddy aan
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-on-background p-2 hover:bg-primary-container/50 rounded-lg transition-all"
          aria-label="Menu openen"
        >
          <span className="material-symbols-outlined text-2xl">
            {menuOpen ? "close" : "menu"}
          </span>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-outline-variant/20">
          <div className="flex flex-col px-6 py-4 space-y-1">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className="text-on-background font-medium font-headline py-3 border-b border-outline-variant/10 last:border-0"
              >
                {l.label}
              </Link>
            ))}
            <div className="pt-4 flex flex-col gap-3">
              <button
                onClick={() => {
                  setMenuOpen(false);
                  window.dispatchEvent(new CustomEvent('open-anonymous-chat'));
                }}
                className="w-full px-5 py-3 rounded-full text-sm font-bold bg-surface-container-highest text-on-surface font-headline cursor-pointer"
              >
                Praat anoniem
              </button>
              <Link
                href="/aanmelden"
                onClick={() => setMenuOpen(false)}
                className="w-full px-5 py-3 rounded-full text-sm font-bold bg-primary text-on-primary text-center font-headline"
              >
                Vraag een buddy aan
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
