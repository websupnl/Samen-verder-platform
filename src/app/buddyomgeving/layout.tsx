import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { 
  LayoutDashboard, 
  MessageSquare, 
  Users, 
  Settings, 
  LogOut,
  ClipboardList,
  GraduationCap
} from "lucide-react";

export default function BuddyLayout({
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
            Buddyomgeving
          </div>
        </div>
        
        <nav className="flex-1 px-4 space-y-1">
          <Link href="/buddyomgeving" className="flex items-center space-x-3 px-3 py-2 text-sm font-medium text-primary bg-sage-50 rounded-xl">
            <LayoutDashboard className="h-5 w-5" />
            <span>Dashboard</span>
          </Link>
          <Link href="/buddyomgeving/berichten" className="flex items-center space-x-3 px-3 py-2 text-sm font-medium text-sage-600 hover:text-primary hover:bg-sage-50 rounded-xl transition-colors">
            <MessageSquare className="h-5 w-5" />
            <span>Berichten</span>
          </Link>
          <Link href="/buddyomgeving/matches" className="flex items-center space-x-3 px-3 py-2 text-sm font-medium text-sage-600 hover:text-primary hover:bg-sage-50 rounded-xl transition-colors">
            <Users className="h-5 w-5" />
            <span>Mijn Matches</span>
          </Link>
          <Link href="/buddyomgeving/rapportage" className="flex items-center space-x-3 px-3 py-2 text-sm font-medium text-sage-600 hover:text-primary hover:bg-sage-50 rounded-xl transition-colors">
            <ClipboardList className="h-5 w-5" />
            <span>Rapportage</span>
          </Link>
          <Link href="/buddyomgeving/trainingen" className="flex items-center space-x-3 px-3 py-2 text-sm font-medium text-sage-600 hover:text-primary hover:bg-sage-50 rounded-xl transition-colors">
            <GraduationCap className="h-5 w-5" />
            <span>Trainingen</span>
          </Link>
        </nav>

        <div className="p-4 border-t border-sage-100 space-y-1">
          <Link href="/buddyomgeving/instellingen" className="flex items-center space-x-3 px-3 py-2 text-sm font-medium text-sage-600 hover:text-primary hover:bg-sage-50 rounded-xl transition-colors">
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
          <h2 className="font-semibold text-sage-900">Buddy Panel | Welkom, Sarah</h2>
          <div className="flex items-center space-x-4">
            <div className="h-8 w-8 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold">S</div>
          </div>
        </header>
        <div className="p-8">
          {children}
        </div>
      </main>
    </div>
  );
}
