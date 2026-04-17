import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { ClipboardList, Plus, FileText, Download } from "lucide-react";

export default function BuddyRapportagePage() {
  const reports = [
    { id: 1, date: "15 april 2024", match: "Maria Jansen", type: "Wekelijks verslag", status: "Ingediend" },
    { id: 2, date: "8 april 2024", match: "Maria Jansen", type: "Wekelijks verslag", status: "Ingediend" },
    { id: 3, date: "1 april 2024", match: "Maria Jansen", type: "Maandelijkse evaluatie", status: "Geaccepteerd" },
    { id: 4, date: "25 maart 2024", match: "Pieter Bakker", type: "Intake verslag", status: "Geaccepteerd" },
  ];

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-sage-900">Rapportages</h1>
          <p className="text-sage-600">Beheer en verstuur je verslagen over je matches.</p>
        </div>
        <Button className="bg-primary hover:bg-primary-dim">
          <Plus className="h-4 w-4 mr-2" />
          Nieuwe rapportage
        </Button>
      </div>

      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-center">
              <ClipboardList className="h-5 w-5 mr-2 text-primary" />
              Recente Rapportages
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-sage-100">
                    <th className="pb-3 font-semibold text-sage-900">Datum</th>
                    <th className="pb-3 font-semibold text-sage-900">Match</th>
                    <th className="pb-3 font-semibold text-sage-900">Type</th>
                    <th className="pb-3 font-semibold text-sage-900">Status</th>
                    <th className="pb-3 font-semibold text-sage-900 text-right">Acties</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-sage-50">
                  {reports.map((report) => (
                    <tr key={report.id} className="hover:bg-sage-50/50 transition-colors">
                      <td className="py-4 text-sm text-sage-600">{report.date}</td>
                      <td className="py-4 text-sm font-medium text-sage-900">{report.match}</td>
                      <td className="py-4 text-sm text-sage-600">{report.type}</td>
                      <td className="py-4 text-sm">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          report.status === 'Geaccepteerd' ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'
                        }`}>
                          {report.status}
                        </span>
                      </td>
                      <td className="py-4 text-right">
                        <div className="flex justify-end space-x-2">
                          <Button variant="ghost" size="sm" title="Bekijken">
                            <FileText className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm" title="Downloaden">
                            <Download className="h-4 w-4" />
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
