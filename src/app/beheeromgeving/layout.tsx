import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { 
  BarChart3, 
  Users, 
  ShieldCheck, 
  Settings, 
  LogOut,
  FileText,
  Bell
} from "lucide-react";

export default function BeheerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-slate-50">
      {/* Sidebar */}
      <aside className="w-64 bg-slate-900 text-white flex flex-col">
        <div className="p-6">
          <Link href="/" className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-lg bg-primary" />
            <span className="text-xl font-bold tracking-tight">
              Samen Verder
            </span>
          </Link>
          <div className="mt-2 text-[10px] font-bold text-slate-400 uppercase tracking-wider">
            Beheeromgeving
          </div>
        </div>
        
        <nav className="flex-1 px-4 mt-4 space-y-1">
          <Link href="/beheeromgeving" className="flex items-center space-x-3 px-3 py-2 text-sm font-medium text-white bg-white/10 rounded-xl transition-colors">
            <BarChart3 className="h-5 w-5" />
            <span>Statistieken</span>
          </Link>
          <Link href="/beheeromgeving/gebruikers" className="flex items-center space-x-3 px-3 py-2 text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5 rounded-xl transition-colors">
            <Users className="h-5 w-5" />
            <span>Gebruikers</span>
          </Link>
          <Link href="/beheeromgeving/matches" className="flex items-center space-x-3 px-3 py-2 text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5 rounded-xl transition-colors">
            <ShieldCheck className="h-5 w-5" />
            <span>Matches Beheren</span>
          </Link>
          <Link href="/beheeromgeving/content" className="flex items-center space-x-3 px-3 py-2 text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5 rounded-xl transition-colors">
            <FileText className="h-5 w-5" />
            <span>CMS / Content</span>
          </Link>
        </nav>

        <div className="p-4 border-t border-slate-800 space-y-1">
          <Link href="/beheeromgeving/instellingen" className="flex items-center space-x-3 px-3 py-2 text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5 rounded-xl transition-colors">
            <Settings className="h-5 w-5" />
            <span>Instellingen</span>
          </Link>
          <Button variant="ghost" className="w-full justify-start text-slate-400 hover:text-white hover:bg-white/5 rounded-xl mt-4">
            <LogOut className="h-5 w-5 mr-3" />
            <span>Uitloggen</span>
          </Button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-8">
          <h2 className="font-semibold text-slate-900">Admin Dashboard</h2>
          <div className="flex items-center space-x-4">
            <button className="p-2 text-slate-400 hover:text-slate-600 relative">
              <Bell className="h-5 w-5" />
              <span className="absolute top-2 right-2 h-2 w-2 bg-red-500 rounded-full border-2 border-white"></span>
            </button>
            <div className="h-8 w-8 rounded-full bg-slate-200" />
          </div>
        </header>
        <div className="p-8">
          {children}
        </div>
      </main>
    </div>
  );
}
