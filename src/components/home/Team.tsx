
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export function Team() {
  const team = [
    {
      name: "Dr. James Kariuki",
      position: "Chief Executive Officer",
      bio: "20+ years in investment management with expertise in East African markets",
      image: "https://images.unsplash.com/photo-1628149308683-76da346f326c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      name: "Elizabeth Mwangi",
      position: "Chief Investment Officer",
      bio: "Former financial analyst at Morgan Stanley with MBA from Harvard Business School",
      image: "https://images.unsplash.com/photo-1548207775-a7676e36f20a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      name: "David Ochieng",
      position: "Head of Fixed Income",
      bio: "15+ years specializing in bond markets and monetary policy analysis",
      image: "https://images.unsplash.com/photo-1605602517387-ec78b947335e?q=80&w=1950&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      name: "Grace Kimani",
      position: "Director of Research",
      bio: "Former economist at Central Bank of Kenya with PhD in Economics",
      image: "https://plus.unsplash.com/premium_photo-1661963374633-ebd3e79f7b9d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-finance-dark mb-4 font-playfair">
            Our Leadership Team
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Experienced financial professionals with deep knowledge of African markets
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <Card key={index} className="overflow-hidden border-0 shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="h-56 overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                />
              </div>
              <CardHeader className="pb-2">
                <CardTitle className="text-xl font-bold text-finance-dark">{member.name}</CardTitle>
                <CardDescription className="text-finance-primary font-medium">
                  {member.position}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{member.bio}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild variant="outline" className="border-finance-primary text-finance-primary hover:bg-finance-primary hover:text-white">
            <Link to="/about#team">View Full Team</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
