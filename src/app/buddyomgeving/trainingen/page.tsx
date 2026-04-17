import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { GraduationCap, PlayCircle, CheckCircle2, Clock } from "lucide-react";

export default function BuddyTrainingenPage() {
  const courses = [
    { 
      title: "Basisvaardigheden Buddy", 
      duration: "2 uur", 
      status: "Voltooid", 
      progress: 100,
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=400"
    },
    { 
      title: "Grenzen stellen en bewaken", 
      duration: "1.5 uur", 
      status: "In progress", 
      progress: 65,
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=400"
    },
    { 
      title: "Gesprekstechnieken", 
      duration: "3 uur", 
      status: "Nog niet gestart", 
      progress: 0,
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=400"
    },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-sage-900">Trainingen</h1>
        <p className="text-sage-600">Breid je kennis uit en word een nog betere buddy.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course, i) => (
          <Card key={i} className="overflow-hidden">
            <div className="h-40 bg-sage-200 relative">
              <img 
                src={course.image} 
                alt={course.title}
                className="w-full h-full object-cover"
              />
              {course.status === 'Voltooid' && (
                <div className="absolute top-2 right-2 bg-green-500 text-white p-1 rounded-full">
                  <CheckCircle2 className="h-5 w-5" />
                </div>
              )}
            </div>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">{course.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center text-sm text-sage-500 mb-4">
                <Clock className="h-4 w-4 mr-1" />
                {course.duration}
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-medium">
                  <span className="text-sage-600">{course.status}</span>
                  <span className="text-primary">{course.progress}%</span>
                </div>
                <div className="h-2 bg-sage-100 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-primary transition-all duration-500" 
                    style={{ width: `${course.progress}%` }}
                  />
                </div>
              </div>

              <Button className="w-full mt-6" variant={course.status === 'Voltooid' ? 'secondary' : 'default'}>
                {course.status === 'Voltooid' ? 'Opnieuw bekijken' : 'Verdergaan'}
                <PlayCircle className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="bg-primary text-white">
        <CardContent className="p-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center mb-6 md:mb-0">
              <div className="h-16 w-16 rounded-2xl bg-white/20 flex items-center justify-center mr-6">
                <GraduationCap className="h-8 w-8" />
              </div>
              <div>
                <h2 className="text-xl font-bold">Certificaten</h2>
                <p className="text-sage-100">Download je behaalde certificaten voor je portfolio.</p>
              </div>
            </div>
            <Button variant="secondary" className="bg-white text-primary hover:bg-sage-50">
              Bekijk certificaten
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
