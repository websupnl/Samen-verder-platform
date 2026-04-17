"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { Menu, X } from "lucide-react";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Ouders", href: "/ouders" },
  { name: "Buddy worden", href: "/buddy" },
  { name: "Hoe werkt het", href: "/hoe-werkt-het" },
  { name: "Wat nu?", href: "/wat-nu" },
  { name: "Professionals", href: "/professionals" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-sage-100 bg-white/80 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-lg bg-primary" />
              <span className="text-xl font-bold tracking-tight text-sage-900">
                Samen Verder
              </span>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "rounded-md px-3 py-2 text-sm font-medium transition-colors",
                    pathname === item.href
                      ? "text-primary"
                      : "text-sage-600 hover:text-primary"
                  )}
                >
                  {item.name}
                </Link>
              ))}
              <Button asChild size="sm" className="ml-4">
                <Link href="/aanmelden">Aanmelden</Link>
              </Button>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center rounded-md p-2 text-sage-600 hover:bg-sage-50 hover:text-primary focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-sage-100">
          <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "block rounded-md px-3 py-2 text-base font-medium",
                  pathname === item.href
                    ? "text-primary bg-sage-50"
                    : "text-sage-600 hover:text-primary hover:bg-sage-50"
                )}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="mt-4 px-3">
              <Button asChild className="w-full">
                <Link href="/aanmelden" onClick={() => setIsOpen(false)}>
                  Aanmelden
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
