import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { 
  LayoutDashboard, 
  MessageSquare, 
  User, 
  Settings, 
  LogOut,
  Heart,
  Calendar
} from "lucide-react";

export default function OuderLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-sage-50/50">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-sage-100 flex flex-col">
        <div className="p-6">
          <Link href="/" className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-lg bg-primary" />
            <span className="text-xl font-bold tracking-tight text-sage-900">
              Samen Verder
            </span>
          </Link>
          <div className="mt-2 text-[10px] font-bold text-primary uppercase tracking-wider">
            Ouderomgeving
          </div>
        </div>
        
        <nav className="flex-1 px-4 space-y-1">
          <Link href="/ouderomgeving" className="flex items-center space-x-3 px-3 py-2 text-sm font-medium text-primary bg-sage-50 rounded-xl">
            <LayoutDashboard className="h-5 w-5" />
            <span>Dashboard</span>
          </Link>
          <Link href="/ouderomgeving/berichten" className="flex items-center space-x-3 px-3 py-2 text-sm font-medium text-sage-600 hover:text-primary hover:bg-sage-50 rounded-xl transition-colors">
            <MessageSquare className="h-5 w-5" />
            <span>Berichten</span>
          </Link>
          <Link href="/ouderomgeving/buddy" className="flex items-center space-x-3 px-3 py-2 text-sm font-medium text-sage-600 hover:text-primary hover:bg-sage-50 rounded-xl transition-colors">
            <Heart className="h-5 w-5" />
            <span>Mijn Buddy</span>
          </Link>
          <Link href="/ouderomgeving/agenda" className="flex items-center space-x-3 px-3 py-2 text-sm font-medium text-sage-600 hover:text-primary hover:bg-sage-50 rounded-xl transition-colors">
            <Calendar className="h-5 w-5" />
            <span>Agenda</span>
          </Link>
        </nav>

        <div className="p-4 border-t border-sage-100 space-y-1">
          <Link href="/ouderomgeving/profiel" className="flex items-center space-x-3 px-3 py-2 text-sm font-medium text-sage-600 hover:text-primary hover:bg-sage-50 rounded-xl transition-colors">
            <User className="h-5 w-5" />
            <span>Profiel</span>
          </Link>
          <Link href="/ouderomgeving/instellingen" className="flex items-center space-x-3 px-3 py-2 text-sm font-medium text-sage-600 hover:text-primary hover:bg-sage-50 rounded-xl transition-colors">
            <Settings className="h-5 w-5" />
            <span>Instellingen</span>
          </Link>
          <Button variant="ghost" className="w-full justify-start text-red-600 hover:text-red-700 hover:bg-red-50 rounded-xl mt-4">
            <LogOut className="h-5 w-5 mr-3" />
            <span>Uitloggen</span>
          </Button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        <header className="h-16 bg-white border-b border-sage-100 flex items-center justify-between px-8">
          <h2 className="font-semibold text-sage-900">Welkom terug, Maria</h2>
          <div className="flex items-center space-x-4">
            <div className="h-8 w-8 rounded-full bg-sage-200" />
          </div>
        </header>
        <div className="p-8">
          {children}
        </div>
      </main>
    </div>
  );
}
