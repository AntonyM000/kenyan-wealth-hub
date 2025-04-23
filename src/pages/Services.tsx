
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      id: "equity",
      title: "Equity Funds",
      description: "Strategic long-term investments in companies listed on the Nairobi Securities Exchange and select international markets. Our equity funds target growth-oriented investors looking for capital appreciation over time.",
      features: [
        "Ala East African Equity Fund",
        "Kenya Top 50 Companies Fund",
        "Africa Growth Markets Fund",
        "Global Emerging Markets Fund",
      ],
      minInvestment: "KSh 100,000",
      fees: "1.5% annual management fee",
      returns: "14.7% average annual return (5-year)",
      riskLevel: "Moderate to High",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-10 w-10 text-finance-primary">
          <path d="m2 16 4-8 3 6 4-10 3 6 4-4"></path>
          <path d="M2 12h20"></path>
        </svg>
      )
    },
    {
      id: "fixed-income",
      title: "Fixed Income",
      description: "Low-risk government and corporate bonds providing regular income and capital preservation strategies. Our fixed income funds offer stability with competitive yields for income-focused investors.",
      features: [
        "Kenya Government Bond Fund",
        "East African Corporate Bond Fund",
        "Money Market Fund",
        "Income Builder Fund",
      ],
      minInvestment: "KSh 50,000",
      fees: "0.8% annual management fee",
      returns: "9.5% average annual return (5-year)",
      riskLevel: "Low to Moderate",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-10 w-10 text-finance-primary">
          <path d="M6 10h12"></path>
          <path d="M6 6h12"></path>
          <path d="M6 14h12"></path>
          <path d="M6 18h12"></path>
          <rect width="16" height="20" x="4" y="2" rx="2" ry="2"></rect>
        </svg>
      )
    },
    {
      id: "real-estate",
      title: "Real Estate",
      description: "Investment opportunities in Kenya's growing commercial and residential real estate market. Our property funds provide exposure to prime real estate without the complexity of direct ownership.",
      features: [
        "Kenya Commercial Property Fund",
        "Residential Development Fund",
        "East African REIT",
        "Mixed-Use Property Fund",
      ],
      minInvestment: "KSh 500,000",
      fees: "1.8% annual management fee",
      returns: "12.8% average annual return (5-year)",
      riskLevel: "Moderate",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-10 w-10 text-finance-primary">
          <path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"></path>
          <path d="M17 14v2"></path>
          <path d="M21 12v10"></path>
          <path d="M9 16v6"></path>
        </svg>
      )
    },
    {
      id: "pension",
      title: "Pension Management",
      description: "Expert retirement planning and pension fund management to help secure your future post-retirement. Our pension solutions cater to both individual retirement plans and corporate pension schemes.",
      features: [
        "Individual Retirement Plans",
        "Corporate Pension Schemes",
        "Pension Fund Management",
        "Retirement Planning Advisory",
      ],
      minInvestment: "KSh 10,000 monthly",
      fees: "1.0% annual management fee",
      returns: "10.2% average annual return (5-year)",
      riskLevel: "Customizable",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-10 w-10 text-finance-primary">
          <path d="M12.5 2H2v10.5H12.5V2Z"></path>
          <path d="M2 16a6 6 0 0 0 12 0"></path>
          <path d="M8 19v-4"></path>
          <path d="M22 7v-.5A2.5 2.5 0 0 0 19.5 4H16v4"></path>
          <path d="M19 10.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"></path>
          <path d="M22 12h-3"></path>
          <path d="M19.5 16v3"></path>
          <path d="M16 19h7"></path>
        </svg>
      )
    },
    {
      id: "advisory",
      title: "Wealth Advisory",
      description: "Personalized financial planning and investment advisory services tailored to your specific goals and circumstances. Our team of experienced advisors provides holistic wealth management solutions.",
      features: [
        "Financial Planning",
        "Investment Advisory",
        "Estate Planning",
        "Tax-Efficient Strategies",
      ],
      minInvestment: "KSh 1,000,000 portfolio",
      fees: "0.5-1.2% based on portfolio size",
      returns: "Personalized strategies",
      riskLevel: "Customized to client needs",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-10 w-10 text-finance-primary">
          <circle cx="12" cy="12" r="10"></circle>
          <path d="M12 2a7 7 0 0 0-7 7"></path>
          <path d="M12 2a7 7 0 0 1 7 7"></path>
          <path d="M12 22a7 7 0 0 1-7-7"></path>
          <path d="M12 22a7 7 0 0 0 7-7"></path>
        </svg>
      )
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <div className="relative py-16 bg-finance-dark text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 font-playfair">Our Investment Solutions</h1>
            <p className="text-xl text-gray-200 mb-6">
              Diversified investment strategies tailored for the East African market, combining local expertise with global best practices.
            </p>
          </div>
        </div>
      </div>

      {/* Services Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-finance-dark mb-6 font-playfair">
              Comprehensive Investment Solutions
            </h2>
            <p className="text-lg text-gray-600">
              From equity and fixed income to real estate and pension management, we offer a full spectrum of investment options designed to meet your financial goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {services.slice(0, 3).map((service, index) => (
              <Card key={index} className="border-2 border-transparent hover:border-finance-secondary transition-all duration-300">
                <CardHeader>
                  <div className="mb-4">{service.icon}</div>
                  <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
                  <CardDescription className="text-gray-600">
                    {service.description.split('.')[0] + '.'}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-500">Min Investment:</span>
                      <span className="text-sm font-medium">{service.minInvestment}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-500">Returns:</span>
                      <span className="text-sm font-medium">{service.returns}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-500">Risk Level:</span>
                      <span className="text-sm font-medium">{service.riskLevel}</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" className="w-full justify-center" asChild>
                    <a href={`#${service.id}`}>Learn More</a>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Services Tabs */}
      <section className="py-16 bg-gray-50" id="services-detail">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-finance-dark mb-6 font-playfair">
              Our Fund Categories
            </h2>
            <p className="text-lg text-gray-600">
              Explore our diverse range of investment funds designed to meet different financial goals and risk appetites.
            </p>
          </div>

          <Tabs defaultValue="equity" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-5">
              {services.map((service) => (
                <TabsTrigger key={service.id} value={service.id}>{service.title}</TabsTrigger>
              ))}
            </TabsList>
            
            {services.map((service) => (
              <TabsContent key={service.id} value={service.id} className="mt-8">
                <div className="bg-white rounded-lg shadow-md p-8" id={service.id}>
                  <div className="flex flex-col md:flex-row md:items-start gap-6 mb-8">
                    <div className="bg-finance-light p-4 rounded-full">{service.icon}</div>
                    <div>
                      <h3 className="text-2xl font-bold text-finance-dark mb-3">{service.title}</h3>
                      <p className="text-gray-600 mb-4">{service.description}</p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                        <div>
                          <h4 className="font-semibold text-finance-primary mb-2">Key Features</h4>
                          <ul className="text-gray-600 space-y-1">
                            {service.features.map((feature, idx) => (
                              <li key={idx} className="flex items-start gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-finance-primary shrink-0 mt-0.5">
                                  <polyline points="20 6 9 17 4 12"></polyline>
                                </svg>
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="space-y-3">
                          <div>
                            <h4 className="font-semibold text-finance-primary mb-1">Minimum Investment</h4>
                            <p className="text-gray-600">{service.minInvestment}</p>
                          </div>
                          <div>
                            <h4 className="font-semibold text-finance-primary mb-1">Management Fees</h4>
                            <p className="text-gray-600">{service.fees}</p>
                          </div>
                          <div>
                            <h4 className="font-semibold text-finance-primary mb-1">Historical Performance</h4>
                            <p className="text-gray-600">{service.returns}</p>
                          </div>
                          <div>
                            <h4 className="font-semibold text-finance-primary mb-1">Risk Level</h4>
                            <p className="text-gray-600">{service.riskLevel}</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex flex-col sm:flex-row gap-4">
                        <Button className="bg-finance-primary hover:bg-finance-dark" asChild>
                          <Link to="/contact">Inquire About This Fund</Link>
                        </Button>
                        <Button variant="outline" className="border-finance-primary text-finance-primary hover:bg-finance-primary hover:text-white">
                          Download Fund Prospectus
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* How to Invest */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-finance-dark mb-6 font-playfair">
              How to Invest With Us
            </h2>
            <p className="text-lg text-gray-600">
              Getting started with Ala Capital is simple and straightforward.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="bg-finance-light w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-finance-primary">1</span>
              </div>
              <h3 className="text-lg font-bold mb-2">Initial Consultation</h3>
              <p className="text-gray-600 text-sm">Meet with our advisors to discuss your financial goals and risk tolerance.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-finance-light w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-finance-primary">2</span>
              </div>
              <h3 className="text-lg font-bold mb-2">Investment Proposal</h3>
              <p className="text-gray-600 text-sm">Receive a personalized investment strategy aligned with your objectives.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-finance-light w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-finance-primary">3</span>
              </div>
              <h3 className="text-lg font-bold mb-2">Account Setup</h3>
              <p className="text-gray-600 text-sm">Complete the necessary documentation and fund your investment account.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-finance-light w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-finance-primary">4</span>
              </div>
              <h3 className="text-lg font-bold mb-2">Ongoing Management</h3>
              <p className="text-gray-600 text-sm">We actively manage your investments with regular reporting and reviews.</p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" className="bg-kenya-gold hover:bg-kenya-gold/90 text-kenya-black font-semibold">
              <Link to="/contact">
                Start Your Investment Journey
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-finance-dark mb-6 font-playfair">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600">
              Get answers to common questions about investing with Ala Capital.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-bold text-finance-dark mb-2">What is the minimum amount I can invest?</h3>
              <p className="text-gray-600">Our minimum investment amounts vary by fund, starting from KSh 50,000 for fixed income funds to KSh 500,000 for real estate funds. We also offer monthly contribution plans starting from KSh 10,000.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-bold text-finance-dark mb-2">How often will I receive reports on my investments?</h3>
              <p className="text-gray-600">We provide monthly performance statements, quarterly detailed reports, and annual comprehensive reviews. You can also access your portfolio information anytime through our secure client portal.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-bold text-finance-dark mb-2">Can I withdraw my investment before the maturity date?</h3>
              <p className="text-gray-600">Yes, most of our funds allow for redemptions with varying notice periods depending on the fund type. Fixed income and equity funds typically have shorter redemption periods, while real estate funds may have longer lock-up periods.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-bold text-finance-dark mb-2">How are your funds regulated?</h3>
              <p className="text-gray-600">Ala Capital is regulated by the Capital Markets Authority (CMA) of Kenya. All our funds comply with the relevant regulatory requirements and are subject to regular audits and reporting.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-bold text-finance-dark mb-2">Do you offer investment services for non-Kenyan residents?</h3>
              <p className="text-gray-600">Yes, we offer investment services to international clients interested in East African markets. We have specific funds designed for foreign investors that comply with international regulatory standards.</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
