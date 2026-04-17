import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Users, ClipboardList, TrendingUp, Clock } from "lucide-react";

export default function BuddyDashboard() {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-2xl font-bold text-sage-900">Buddy Dashboard</h1>
          <p className="text-sage-600">Beheer je matches en bekijk je voortgang.</p>
        </div>
        <Button>Nieuwe rapportage</Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="bg-white">
          <CardContent className="pt-6">
            <div className="flex items-center space-x-3 mb-2">
              <Users className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium text-sage-600">Actieve Matches</span>
            </div>
            <p className="text-3xl font-bold text-sage-900">2</p>
          </CardContent>
        </Card>
        <Card className="bg-white">
          <CardContent className="pt-6">
            <div className="flex items-center space-x-3 mb-2">
              <Clock className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium text-sage-600">Uren deze maand</span>
            </div>
            <p className="text-3xl font-bold text-sage-900">8.5</p>
          </CardContent>
        </Card>
        <Card className="bg-white">
          <CardContent className="pt-6">
            <div className="flex items-center space-x-3 mb-2">
              <ClipboardList className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium text-sage-600">Rapporten</span>
            </div>
            <p className="text-3xl font-bold text-sage-900">12</p>
          </CardContent>
        </Card>
        <Card className="bg-white">
          <CardContent className="pt-6">
            <div className="flex items-center space-x-3 mb-2">
              <TrendingUp className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium text-sage-600">Impact Score</span>
            </div>
            <p className="text-3xl font-bold text-sage-900">9.4</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Mijn Matches</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { name: "Maria Jansen", status: "Wekelijks contact", last: "2 dagen geleden" },
                { name: "Pieter Bakker", status: "Maandelijks contact", last: "5 dagen geleden" },
              ].map((match, i) => (
                <div key={i} className="flex items-center justify-between p-4 border border-sage-50 rounded-2xl hover:bg-sage-50 transition-colors">
                  <div className="flex items-center space-x-3">
                    <div className="h-10 w-10 rounded-full bg-sage-200" />
                    <div>
                      <p className="font-bold text-sage-900">{match.name}</p>
                      <p className="text-xs text-sage-500">{match.status}</p>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm">Details</Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Aanbevolen Trainingen</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { title: "Grenzen stellen", duration: "1.5 uur", level: "Basis" },
                { title: "Gesprekstechnieken", duration: "2 uur", level: "Gevorderd" },
              ].map((course, i) => (
                <div key={i} className="flex items-center justify-between p-4 border border-sage-50 rounded-2xl">
                  <div>
                    <p className="font-bold text-sage-900">{course.title}</p>
                    <p className="text-xs text-sage-500">{course.duration} • {course.level}</p>
                  </div>
                  <Button variant="outline" size="sm">Starten</Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
