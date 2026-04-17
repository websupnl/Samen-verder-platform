import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Users, Search, Filter, MoreVertical, UserPlus } from "lucide-react";

export default function BeheerGebruikersPage() {
  const users = [
    { id: 1, name: "Maria Jansen", role: "Ouder", email: "maria@example.com", joined: "12 jan 2024", status: "Actief" },
    { id: 2, name: "Sarah de Vries", role: "Buddy", email: "sarah@example.com", joined: "15 feb 2024", status: "Actief" },
    { id: 3, name: "Pieter Bakker", role: "Ouder", email: "pieter@example.com", joined: "03 mar 2024", status: "In afwachting" },
    { id: 4, name: "Jan de Groot", role: "Buddy", email: "jan@example.com", joined: "20 mar 2024", status: "Actief" },
    { id: 5, name: "Annelies Bos", role: "Professional", email: "annelies@jeugdzorg.nl", joined: "01 apr 2024", status: "Actief" },
  ];

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-sage-900">Gebruikersbeheer</h1>
          <p className="text-sage-600">Beheer alle accounts en rollen binnen het platform.</p>
        </div>
        <Button className="bg-primary hover:bg-primary-dim">
          <UserPlus className="h-4 w-4 mr-2" />
          Gebruiker toevoegen
        </Button>
      </div>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="text-lg">Alle Gebruikers</CardTitle>
          <div className="flex space-x-2">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-sage-400" />
              <input 
                type="text" 
                placeholder="Zoeken..." 
                className="pl-10 pr-4 py-2 border border-sage-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
            </div>
            <Button variant="outline" size="sm">
              <Filter className="h-4 w-4 mr-2" />
              Filter
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-sage-100">
                  <th className="pb-3 font-semibold text-sage-900">Naam</th>
                  <th className="pb-3 font-semibold text-sage-900">Rol</th>
                  <th className="pb-3 font-semibold text-sage-900">E-mail</th>
                  <th className="pb-3 font-semibold text-sage-900">Lid sinds</th>
                  <th className="pb-3 font-semibold text-sage-900">Status</th>
                  <th className="pb-3 font-semibold text-sage-900 text-right">Acties</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-sage-50">
                {users.map((user) => (
                  <tr key={user.id} className="hover:bg-sage-50/50 transition-colors">
                    <td className="py-4">
                      <div className="flex items-center">
                        <div className="h-8 w-8 rounded-full bg-sage-100 text-primary flex items-center justify-center font-bold text-xs mr-3">
                          {user.name.charAt(0)}
                        </div>
                        <span className="text-sm font-medium text-sage-900">{user.name}</span>
                      </div>
                    </td>
                    <td className="py-4 text-sm text-sage-600">{user.role}</td>
                    <td className="py-4 text-sm text-sage-600">{user.email}</td>
                    <td className="py-4 text-sm text-sage-600">{user.joined}</td>
                    <td className="py-4 text-sm">
                      <span className={`px-2 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                        user.status === 'Actief' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
                      }`}>
                        {user.status}
                      </span>
                    </td>
                    <td className="py-4 text-right">
                      <Button variant="ghost" size="sm">
                        <MoreVertical className="h-4 w-4 text-sage-400" />
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
