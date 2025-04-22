
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export function Services() {
  const services = [
    {
      title: "Equity Funds",
      description: "Strategic long-term investments in companies listed on the Nairobi Securities Exchange and select international markets.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8 text-finance-primary">
          <path d="m2 16 4-8 3 6 4-10 3 6 4-4"></path>
          <path d="M2 12h20"></path>
        </svg>
      ),
      link: "/services#equity"
    },
    {
      title: "Fixed Income",
      description: "Low-risk government and corporate bonds providing regular income and capital preservation strategies.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8 text-finance-primary">
          <path d="M6 10h12"></path>
          <path d="M6 6h12"></path>
          <path d="M6 14h12"></path>
          <path d="M6 18h12"></path>
          <rect width="16" height="20" x="4" y="2" rx="2" ry="2"></rect>
        </svg>
      ),
      link: "/services#fixed-income"
    },
    {
      title: "Real Estate",
      description: "Investment opportunities in Kenya's growing commercial and residential real estate market.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8 text-finance-primary">
          <path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"></path>
          <path d="M17 14v2"></path>
          <path d="M21 12v10"></path>
          <path d="M9 16v6"></path>
        </svg>
      ),
      link: "/services#real-estate"
    },
    {
      title: "Pension Management",
      description: "Expert retirement planning and pension fund management to help secure your future post-retirement.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8 text-finance-primary">
          <path d="M12.5 2H2v10.5H12.5V2Z"></path>
          <path d="M2 16a6 6 0 0 0 12 0"></path>
          <path d="M8 19v-4"></path>
          <path d="M22 7v-.5A2.5 2.5 0 0 0 19.5 4H16v4"></path>
          <path d="M19 10.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"></path>
          <path d="M22 12h-3"></path>
          <path d="M19.5 16v3"></path>
          <path d="M16 19h7"></path>
        </svg>
      ),
      link: "/services#pension"
    },
  ];

  return (
    <section className="py-16 bg-gray-50" id="services">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-finance-dark mb-4 font-playfair">
            Our Investment Solutions
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Tailored investment strategies designed for the East African market with global diversification
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="transition-all duration-300 hover:shadow-lg hover:border-finance-secondary border-2 border-transparent">
              <CardHeader>
                <div className="mb-4">{service.icon}</div>
                <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 min-h-[80px]">
                  {service.description}
                </CardDescription>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" className="text-finance-primary hover:text-finance-dark w-full justify-start px-0">
                  <Link to={service.link} className="flex items-center">
                    Learn More
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 ml-2">
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild variant="default" className="bg-finance-secondary hover:bg-finance-primary">
            <Link to="/services">View All Investment Solutions</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
