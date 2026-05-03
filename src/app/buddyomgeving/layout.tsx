"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/ui/Button";
import {
  LayoutDashboard,
  MessageSquare,
  Users,
  Settings,
  LogOut,
  ClipboardList,
  GraduationCap,
  Menu,
  X,
} from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/buddyomgeving", label: "Dashboard", icon: LayoutDashboard },
  { href: "/buddyomgeving/berichten", label: "Berichten", icon: MessageSquare },
  { href: "/buddyomgeving/matches", label: "Mijn Matches", icon: Users },
  { href: "/buddyomgeving/rapportage", label: "Rapportage", icon: ClipboardList },
  { href: "/buddyomgeving/trainingen", label: "Trainingen", icon: GraduationCap },
];

function SidebarContent({ pathname, onNav }: { pathname: string; onNav?: () => void }) {
  return (
    <div className="flex flex-col h-full">
      <div className="p-6">
        <Link href="/" className="flex items-center gap-2.5" onClick={onNav}>
          <Image src="/images/favicon en icon voor logo.png" alt="Samen Verder" width={36} height={36} className="h-9 w-9 rounded-xl" />
          <span className="text-lg font-bold tracking-tight text-sage-900">Samen Verder</span>
        </Link>
        <div className="mt-1.5 text-[10px] font-bold text-primary uppercase tracking-wider">
          Buddyomgeving
        </div>
      </div>

      <nav className="flex-1 px-4 space-y-1">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            onClick={onNav}
            className={cn(
              "flex items-center space-x-3 px-3 py-2.5 text-sm font-medium rounded-xl transition-colors",
              pathname === item.href
                ? "text-primary bg-sage-50"
                : "text-sage-600 hover:text-primary hover:bg-sage-50"
            )}
          >
            <item.icon className="h-5 w-5 shrink-0" />
            <span>{item.label}</span>
          </Link>
        ))}
      </nav>

      <div className="p-4 border-t border-sage-100 space-y-1">
        <Link
          href="/buddyomgeving/instellingen"
          onClick={onNav}
          className={cn(
            "flex items-center space-x-3 px-3 py-2.5 text-sm font-medium rounded-xl transition-colors",
            pathname === "/buddyomgeving/instellingen"
              ? "text-primary bg-sage-50"
              : "text-sage-600 hover:text-primary hover:bg-sage-50"
          )}
        >
          <Settings className="h-5 w-5 shrink-0" />
          <span>Instellingen</span>
        </Link>
        <Button asChild variant="ghost" className="w-full justify-start text-red-600 hover:text-red-700 hover:bg-red-50 rounded-xl">
          <Link href="/" onClick={onNav}>
            <LogOut className="h-5 w-5 mr-3 shrink-0" />
            <span>Uitloggen</span>
          </Link>
        </Button>
      </div>
    </div>
  );
}

export default function BuddyLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-sage-50/50">
      {/* Desktop sidebar */}
      <aside className="hidden lg:flex w-64 bg-white border-r border-sage-100 flex-col shrink-0">
        <SidebarContent pathname={pathname} />
      </aside>

      {/* Mobile overlay */}
      {open && (
        <div className="fixed inset-0 z-40 lg:hidden" onClick={() => setOpen(false)}>
          <div className="absolute inset-0 bg-black/40" />
        </div>
      )}

      {/* Mobile drawer */}
      <aside className={cn(
        "fixed inset-y-0 left-0 z-50 w-64 bg-white border-r border-sage-100 flex flex-col transition-transform duration-200 lg:hidden",
        open ? "translate-x-0" : "-translate-x-full"
      )}>
        <button
          onClick={() => setOpen(false)}
          className="absolute top-4 right-4 p-1.5 rounded-lg text-sage-400 hover:text-sage-700 hover:bg-sage-50"
        >
          <X className="h-5 w-5" />
        </button>
        <SidebarContent pathname={pathname} onNav={() => setOpen(false)} />
      </aside>

      {/* Main */}
      <main className="flex-1 overflow-y-auto min-w-0">
        <header className="h-16 bg-white border-b border-sage-100 flex items-center justify-between px-4 md:px-8 sticky top-0 z-30">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setOpen(true)}
              className="lg:hidden p-2 rounded-lg text-sage-600 hover:bg-sage-50"
            >
              <Menu className="h-5 w-5" />
            </button>
            <h2 className="font-semibold text-sage-900 text-sm md:text-base">Buddy Panel | Welkom, Sarah</h2>
          </div>
          <div className="h-8 w-8 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold text-sm">S</div>
        </header>
        <div className="p-4 md:p-8">
          {children}
        </div>
      </main>
    </div>
  );
}
