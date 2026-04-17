import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { FileText, Edit, Layout, Image as ImageIcon, Eye, ExternalLink } from "lucide-react";

export default function BeheerContentPage() {
  const pages = [
    { title: "Homepagina", slug: "/", lastModified: "18 apr 2024", author: "Admin" },
    { title: "Over Ons", slug: "/over-ons", lastModified: "15 apr 2024", author: "Admin" },
    { title: "Hoe Werkt Het", slug: "/hoe-werkt-het", lastModified: "12 apr 2024", author: "Redacteur" },
    { title: "Buddy Worden", slug: "/buddy", lastModified: "10 apr 2024", author: "Admin" },
    { title: "Veelgestelde Vragen", slug: "/faq", lastModified: "05 apr 2024", author: "Redacteur" },
  ];

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-sage-900">Content Management</h1>
          <p className="text-sage-600">Beheer de teksten en pagina's van de publieke website.</p>
        </div>
        <div className="flex space-x-3">
          <Button variant="outline">
            <ImageIcon className="h-4 w-4 mr-2" />
            Media Library
          </Button>
          <Button className="bg-primary hover:bg-primary-dim">
            <Layout className="h-4 w-4 mr-2" />
            Nieuwe Pagina
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="md:col-span-3">
          <CardHeader>
            <CardTitle className="text-lg">Website Pagina's</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {pages.map((page, i) => (
                <div key={i} className="flex items-center justify-between p-4 border border-sage-50 rounded-2xl hover:bg-sage-50 transition-colors group">
                  <div className="flex items-center space-x-4">
                    <div className="h-10 w-10 rounded-xl bg-sage-100 flex items-center justify-center text-primary">
                      <FileText className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-sage-900">{page.title}</h4>
                      <p className="text-xs text-sage-400">{page.slug} • Gewijzigd op {page.lastModified} door {page.author}</p>
                    </div>
                  </div>
                  <div className="flex space-x-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Button variant="ghost" size="sm">
                      <Eye className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-sm font-bold uppercase tracking-wider text-sage-400">Status</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-sage-600">Gepubliceerd</span>
                  <span className="text-sm font-bold text-sage-900">12</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-sage-600">Concepten</span>
                  <span className="text-sm font-bold text-sage-900">3</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-sage-600">Ter review</span>
                  <span className="text-sm font-bold text-orange-500">1</span>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-sage-900 text-white">
            <CardContent className="p-6">
              <h4 className="font-bold mb-2">Hulp nodig?</h4>
              <p className="text-xs text-sage-300 mb-4">Bekijk de handleiding voor het werken met het CMS systeem.</p>
              <Button size="sm" className="w-full bg-white text-sage-900 hover:bg-sage-100">Handleiding</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
