import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { 
  Users, 
  UserPlus, 
  CheckCircle, 
  AlertCircle,
  TrendingUp,
  TrendingDown
} from "lucide-react";

export default function BeheerDashboard() {
  const stats = [
    { label: "Totaal Ouders", value: "142", change: "+12%", up: true, icon: Users },
    { label: "Totaal Buddies", value: "89", change: "+5%", up: true, icon: UserPlus },
    { label: "Actieve Matches", value: "64", change: "+18%", up: true, icon: CheckCircle },
    { label: "Wachtlijst", value: "12", change: "-2%", up: false, icon: AlertCircle },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Beheer Overzicht</h1>
        <p className="text-slate-500">Real-time statistieken van het platform.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <Card key={i}>
            <CardContent className="pt-6">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm font-medium text-slate-500">{stat.label}</p>
                  <p className="text-3xl font-bold text-slate-900 mt-1">{stat.value}</p>
                </div>
                <div className="p-2 bg-slate-100 rounded-lg text-slate-600">
                  <stat.icon className="h-5 w-5" />
                </div>
              </div>
              <div className="mt-4 flex items-center space-x-2">
                {stat.up ? (
                  <TrendingUp className="h-4 w-4 text-emerald-500" />
                ) : (
                  <TrendingDown className="h-4 w-4 text-rose-500" />
                )}
                <span className={`text-xs font-bold ${stat.up ? 'text-emerald-600' : 'text-rose-600'}`}>
                  {stat.change}
                </span>
                <span className="text-xs text-slate-400">vs. vorige maand</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
        <Card>
          <CardHeader>
            <CardTitle>Nieuwe Aanmeldingen</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { name: "Jeroen K.", role: "Buddy", time: "10 min geleden" },
                { name: "Annet S.", role: "Ouder", time: "45 min geleden" },
                { name: "Karel de G.", role: "Buddy", time: "3 uur geleden" },
                { name: "Sanne V.", role: "Ouder", time: "5 uur geleden" },
              ].map((user, i) => (
                <div key={i} className="flex items-center justify-between p-3 bg-slate-50 rounded-xl">
                  <div className="flex items-center space-x-3">
                    <div className="h-8 w-8 rounded-full bg-slate-200" />
                    <div>
                      <p className="text-sm font-bold text-slate-900">{user.name}</p>
                      <p className="text-xs text-slate-500">{user.role}</p>
                    </div>
                  </div>
                  <span className="text-[10px] font-medium text-slate-400">{user.time}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Openstaande Matches</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <div className="h-12 w-12 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center mb-4">
                <CheckCircle className="h-6 w-6" />
              </div>
              <p className="font-medium text-slate-900">Alles bijgewerkt!</p>
              <p className="text-sm text-slate-500 max-w-[200px] mt-1">Er zijn momenteel geen ouders die wachten op een directe match.</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
