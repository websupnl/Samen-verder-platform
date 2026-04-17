import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Calendar as CalendarIcon, Clock, Plus } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function OuderAgendaPage() {
  const appointments = [
    { date: "18 April", time: "14:00", title: "Gesprek met Jeugdbescherming", buddy: "Sarah aanwezig", type: "Belangrijk" },
    { date: "22 April", time: "10:30", title: "Koffie met Sarah", buddy: "Wandeling", type: "Informeel" },
  ];

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-sage-900">Agenda</h1>
          <p className="text-sage-600">Je afspraken en belangrijke momenten.</p>
        </div>
        <Button className="bg-primary hover:bg-primary-dim">
          <Plus className="h-4 w-4 mr-2" />
          Afspraak toevoegen
        </Button>
      </div>

      <div className="grid gap-6">
        {appointments.map((app, i) => (
          <Card key={i}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-6">
                  <div className="flex flex-col items-center justify-center h-16 w-16 rounded-2xl bg-primary/10 text-primary">
                    <span className="text-xs font-bold uppercase">{app.date.split(' ')[1]}</span>
                    <span className="text-xl font-bold">{app.date.split(' ')[0]}</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-sage-900">{app.title}</h3>
                    <div className="flex items-center space-x-4 mt-1">
                      <div className="flex items-center text-sm text-sage-500">
                        <Clock className="h-4 w-4 mr-1 text-sage-400" />
                        {app.time}
                      </div>
                      <div className="flex items-center text-sm text-sage-500">
                        <CalendarIcon className="h-4 w-4 mr-1 text-sage-400" />
                        {app.buddy}
                      </div>
                    </div>
                  </div>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase ${
                  app.type === 'Belangrijk' ? 'bg-red-100 text-red-700' : 'bg-sage-100 text-sage-700'
                }`}>
                  {app.type}
                </span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
