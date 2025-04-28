
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const About = () => {
  const team = [
    {
      name: "Dr. James Kariuki",
      position: "Chief Executive Officer",
      bio: "Dr. Kariuki has over 20 years of experience in investment management with expertise in East African markets. Prior to founding ALA Capital, he was a senior fund manager at a leading global asset management firm. James holds a PhD in Finance from Harvard University.",
      image: "https://images.unsplash.com/photo-1605602517387-ec78b947335e?q=80&w=1950&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      name: "Elizabeth Mwangi",
      position: "Chief Investment Officer",
      bio: "Elizabeth is a former financial analyst at Morgan Stanley with an MBA from Harvard Business School. She oversees the firm's investment strategies and manages our flagship equity fund. With her global perspective and local insights, Elizabeth has consistently delivered market-beating returns.",
      image: "https://images.unsplash.com/photo-1563132337-f159f484226c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      name: "David Ochieng",
      position: "Head of Fixed Income",
      bio: "David brings over 15 years of experience specializing in bond markets and monetary policy analysis. He previously worked at the Central Bank of Kenya and holds a Masters in Economics from the London School of Economics. David's expertise in fixed income markets has made our bond funds among the most stable performers in the region.",
      image: "https://images.unsplash.com/photo-1561515075-551b90143acb?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      name: "Grace Kimani",
      position: "Director of Research",
      bio: "Grace is a former economist at the Central Bank of Kenya with a PhD in Economics from Stanford University. Her research team provides the analytical foundation for all our investment decisions, combining rigorous quantitative analysis with qualitative understanding of local market dynamics.",
      image: "https://images.unsplash.com/photo-1512361436605-a484bdb34b5f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      name: "Michael Wainaina",
      position: "Head of Real Estate Investments",
      bio: "With over 15 years in the Kenyan real estate sector, Michael leads our property investment funds. His background in urban planning and development has been crucial in identifying high-potential projects across East Africa.",
      image: "https://images.unsplash.com/photo-1648522168784-067e98df88c0?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      name: "Janet Kamau",
      position: "Chief Risk Officer",
      bio: "Janet ensures our investments meet regulatory standards while protecting client assets. Her previous experience at KPMG and the Capital Markets Authority provides valuable oversight to our investment processes.",
      image: "https://images.unsplash.com/photo-1579634151863-8ddedd098251?q=80&w=2022&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <div className="relative py-16 bg-finance-dark text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 font-playfair">About ALA Capital</h1>
            <p className="text-xl text-gray-200 mb-6">
              Kenya's leading investment management firm with a focus on delivering exceptional returns through deep local expertise and global insights.
            </p>
          </div>
        </div>
      </div>

      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-finance-dark mb-6 font-playfair">Our Story</h2>
              <p className="text-gray-700 mb-4">
                Founded in 2008, ALA Capital started with a vision to provide world-class investment management services tailored specifically for the East African market. What began as a small team managing KSh 100 million in assets has grown to become one of Kenya's leading fund managers with over KSh 25 billion under management.
              </p>
              <p className="text-gray-700 mb-4">
                Our name "ALA" represents our deep roots in the East African landscape, while also embodying our forward-looking approach to finding growth opportunities across diverse economic environments.
              </p>
              <p className="text-gray-700">
                Today, we serve thousands of individual investors, corporations, and institutional clients, providing them with investment solutions that navigate local market complexities while tapping into global opportunities.
              </p>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1770&q=80" 
                alt="ALA Capital Office" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-finance-dark mb-6 font-playfair">Our Values</h2>
            <p className="text-gray-700">
              At ALA Capital, our core values guide every investment decision and client interaction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="bg-finance-light inline-block p-3 rounded-full mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-finance-primary">
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="m8 12 3 3 5-5"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-finance-dark">Integrity</h3>
              <p className="text-gray-600">
                We maintain the highest ethical standards, providing transparent information and always putting our clients' interests first.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="bg-finance-light inline-block p-3 rounded-full mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-finance-primary">
                  <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                  <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-finance-dark">Innovation</h3>
              <p className="text-gray-600">
                We continuously seek new investment opportunities and approaches, blending traditional financial wisdom with cutting-edge research and technology.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="bg-finance-light inline-block p-3 rounded-full mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-finance-primary">
                  <path d="M18 6 7 17l-5-5"></path>
                  <path d="m22 10-7.5 7.5L13 16"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-finance-dark">Excellence</h3>
              <p className="text-gray-600">
                We strive for exceptional performance in everything we do, from investment returns to client service and operational efficiency.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16 bg-white" id="team">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-finance-dark mb-6 font-playfair">Our Leadership Team</h2>
            <p className="text-gray-700">
              Our experienced team combines deep local knowledge with global financial expertise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="h-64 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-finance-dark mb-1">{member.name}</h3>
                  <p className="text-finance-primary font-medium mb-4">{member.position}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-finance-dark text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 font-playfair">Ready to Start Your Investment Journey?</h2>
            <p className="text-lg text-gray-200 mb-8">
              Our team of financial advisors is ready to help you build a secure financial future with tailored investment strategies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-kenya-gold hover:bg-kenya-gold/90 text-black font-semibold">
                <Link to="/services">
                  Explore Our Services
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <Link to="/contact">
                  Contact Us
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
