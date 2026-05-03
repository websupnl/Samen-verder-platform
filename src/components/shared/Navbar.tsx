"use client";

import Link from "next/link";
import Image from "next/image";

export const Navbar = () => {
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
        <div className="hidden md:flex items-center space-x-8">
          <Link
            className="text-on-background/70 hover:text-on-background transition-colors text-sm font-medium font-headline"
            href="/"
          >
            Home
          </Link>
          <Link
            className="text-on-background/70 hover:text-on-background transition-colors text-sm font-medium font-headline"
            href="/ouders"
          >
            Voor ouders
          </Link>
          <Link
            className="text-on-background/70 hover:text-on-background transition-colors text-sm font-medium font-headline"
            href="/professionals"
          >
            Voor professionals
          </Link>
          <Link
            className="text-on-background/70 hover:text-on-background transition-colors text-sm font-medium font-headline"
            href="/buddy"
          >
            Buddy worden
          </Link>
          <Link
            className="text-on-background/70 hover:text-on-background transition-colors text-sm font-medium font-headline"
            href="/hoe-werkt-het"
          >
            Uitleg
          </Link>
          <Link
            className="text-on-background/70 hover:text-on-background transition-colors text-sm font-medium font-headline"
            href="/contact"
          >
            Contact
          </Link>
        </div>
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
        {/* Mobile Menu Toggle (Visual Only) */}
        <button className="md:hidden text-on-background p-2 hover:bg-primary-container/50 rounded-lg transition-all">
          <span className="material-symbols-outlined text-2xl">menu</span>
        </button>
      </div>
    </nav>
  );
};
