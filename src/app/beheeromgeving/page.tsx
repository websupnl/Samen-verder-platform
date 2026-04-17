import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Users, MessageSquare, Heart, ShieldCheck, TrendingUp } from "lucide-react";

export default function BeheerDashboard() {
  const stats = [
    { label: "Totaal Ouders", value: "124", icon: Users, color: "text-blue-600" },
    { label: "Actieve Buddy's", value: "42", icon: Heart, color: "text-red-600" },
    { label: "Lopende Chats", value: "18", icon: MessageSquare, color: "text-green-600" },
    { label: "Matches Vandaag", value: "5", icon: ShieldCheck, color: "text-purple-600" },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-sage-900">Systeemoverzicht</h1>
        <p className="text-sage-600">Real-time statistieken van het Samen Verder platform.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <Card key={i}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-sage-500">{stat.label}</p>
                  <p className="text-2xl font-bold text-sage-900 mt-1">{stat.value}</p>
                </div>
                <div className={`h-12 w-12 rounded-xl bg-sage-50 flex items-center justify-center ${stat.color}`}>
                  <stat.icon className="h-6 w-6" />
                </div>
              </div>
              <div className="mt-4 flex items-center text-xs text-green-600 font-medium">
                <TrendingUp className="h-3 w-3 mr-1" />
                <span>+12% sinds vorige week</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Recente Aanmeldingen</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="flex items-center justify-between py-2 border-b last:border-0 border-sage-50">
                  <div className="flex items-center space-x-3">
                    <div className="h-8 w-8 rounded-full bg-sage-100 flex items-center justify-center text-sage-500 font-bold text-xs">
                      {String.fromCharCode(64 + i)}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-sage-900">Anonieme Ouder #{1000 + i}</p>
                      <p className="text-xs text-sage-500">2 uur geleden</p>
                    </div>
                  </div>
                  <span className="text-xs font-bold px-2 py-1 bg-blue-50 text-blue-600 rounded-full">NIEUW</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Systeem Status</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-medium">
                  <span className="text-sage-500">Database Belasting</span>
                  <span className="text-sage-900">24%</span>
                </div>
                <div className="h-2 w-full bg-sage-100 rounded-full overflow-hidden">
                  <div className="h-full bg-green-500 w-[24%]" />
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-medium">
                  <span className="text-sage-500">AI Response Time</span>
                  <span className="text-sage-900">1.2s</span>
                </div>
                <div className="h-2 w-full bg-sage-100 rounded-full overflow-hidden">
                  <div className="h-full bg-blue-500 w-[45%]" />
                </div>
              </div>
              <div className="pt-4">
                <div className="p-4 rounded-xl bg-sage-900 text-on-primary text-xs font-mono">
                  [SUCCESS] Database connection established.<br/>
                  [INFO] OpenAI API is responding within limits.<br/>
                  [INFO] Vercel deployment: production.
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
