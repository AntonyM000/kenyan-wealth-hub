
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "react-router-dom";

const Performance = () => {
  const performanceData = {
    equity: {
      title: "Equity Funds Performance",
      description: "Our equity funds focus on long-term capital appreciation through investments in listed companies across East Africa and select international markets.",
      funds: [
        {
          name: "Ala East African Equity Fund",
          performance: {
            "1yr": "17.8%",
            "3yr": "51.2%",
            "5yr": "84.6%",
            "10yr": "176.3%"
          },
          benchmark: {
            name: "NSE 20 Share Index",
            "1yr": "12.4%"
          },
          relativePerformance: "+5.4%",
          aum: "KSh 8.5 Billion",
          riskRating: "Moderate to High",
          color: "bg-kenya-gold"
        },
        {
          name: "Kenya Top 50 Companies Fund",
          performance: {
            "1yr": "15.6%",
            "3yr": "45.8%",
            "5yr": "76.2%",
            "10yr": "153.7%"
          },
          benchmark: {
            name: "NSE All Share Index",
            "1yr": "11.8%"
          },
          relativePerformance: "+3.8%",
          aum: "KSh 5.2 Billion",
          riskRating: "Moderate",
          color: "bg-finance-primary"
        },
        {
          name: "Africa Growth Markets Fund",
          performance: {
            "1yr": "19.3%",
            "3yr": "54.7%",
            "5yr": "92.1%",
            "10yr": "198.5%"
          },
          benchmark: {
            name: "MSCI Emerging Frontier Markets Africa ex SA",
            "1yr": "14.2%"
          },
          relativePerformance: "+5.1%",
          aum: "KSh 3.8 Billion",
          riskRating: "High",
          color: "bg-finance-secondary"
        }
      ]
    },
    fixed: {
      title: "Fixed Income Funds Performance",
      description: "Our fixed income funds provide regular income and capital preservation through investments in government and corporate bonds.",
      funds: [
        {
          name: "Kenya Government Bond Fund",
          performance: {
            "1yr": "11.6%",
            "3yr": "35.4%",
            "5yr": "62.8%",
            "10yr": "134.2%"
          },
          benchmark: {
            name: "Kenya Govt Bond Index",
            "1yr": "10.2%"
          },
          relativePerformance: "+1.4%",
          aum: "KSh 6.2 Billion",
          riskRating: "Low",
          color: "bg-kenya-gold"
        },
        {
          name: "East African Corporate Bond Fund",
          performance: {
            "1yr": "12.8%",
            "3yr": "38.6%",
            "5yr": "67.4%",
            "10yr": "145.6%"
          },
          benchmark: {
            name: "EA Corporate Bond Index",
            "1yr": "11.3%"
          },
          relativePerformance: "+1.5%",
          aum: "KSh 4.1 Billion",
          riskRating: "Low to Moderate",
          color: "bg-finance-primary"
        },
        {
          name: "Money Market Fund",
          performance: {
            "1yr": "9.4%",
            "3yr": "28.7%",
            "5yr": "52.1%",
            "10yr": "115.3%"
          },
          benchmark: {
            name: "91-Day T-Bill Rate",
            "1yr": "8.6%"
          },
          relativePerformance: "+0.8%",
          aum: "KSh 7.5 Billion",
          riskRating: "Very Low",
          color: "bg-finance-secondary"
        }
      ]
    },
    realestate: {
      title: "Real Estate Funds Performance",
      description: "Our real estate funds provide exposure to Kenya's growing property market with a focus on consistent income and capital appreciation.",
      funds: [
        {
          name: "Kenya Commercial Property Fund",
          performance: {
            "1yr": "15.2%",
            "3yr": "44.5%",
            "5yr": "76.8%",
            "10yr": "162.4%"
          },
          benchmark: {
            name: "Kenya Property Index",
            "1yr": "11.7%"
          },
          relativePerformance: "+3.5%",
          aum: "KSh 4.8 Billion",
          riskRating: "Moderate",
          color: "bg-kenya-gold"
        },
        {
          name: "Residential Development Fund",
          performance: {
            "1yr": "13.8%",
            "3yr": "41.6%",
            "5yr": "72.3%",
            "10yr": "154.2%"
          },
          benchmark: {
            name: "Kenya Residential Property Price Index",
            "1yr": "10.4%"
          },
          relativePerformance: "+3.4%",
          aum: "KSh 3.2 Billion",
          riskRating: "Moderate to High",
          color: "bg-finance-primary"
        },
        {
          name: "East African REIT",
          performance: {
            "1yr": "14.5%",
            "3yr": "43.2%",
            "5yr": "74.8%",
            "10yr": "158.6%"
          },
          benchmark: {
            name: "EA REIT Index",
            "1yr": "11.2%"
          },
          relativePerformance: "+3.3%",
          aum: "KSh 5.5 Billion",
          riskRating: "Moderate",
          color: "bg-finance-secondary"
        }
      ]
    },
    pension: {
      title: "Pension Funds Performance",
      description: "Our pension funds are designed to provide long-term growth and security for retirement planning with a balanced approach to risk and return.",
      funds: [
        {
          name: "Ala Retirement Growth Fund",
          performance: {
            "1yr": "14.2%",
            "3yr": "42.8%",
            "5yr": "75.2%",
            "10yr": "165.4%"
          },
          benchmark: {
            name: "Kenya Pension Fund Benchmark",
            "1yr": "11.6%"
          },
          relativePerformance: "+2.6%",
          aum: "KSh 6.4 Billion",
          riskRating: "Moderate",
          color: "bg-kenya-gold"
        },
        {
          name: "Balanced Pension Fund",
          performance: {
            "1yr": "12.8%",
            "3yr": "38.5%",
            "5yr": "68.3%",
            "10yr": "146.8%"
          },
          benchmark: {
            name: "Kenya Pension Fund Benchmark",
            "1yr": "11.6%"
          },
          relativePerformance: "+1.2%",
          aum: "KSh 4.9 Billion",
          riskRating: "Moderate",
          color: "bg-finance-primary"
        },
        {
          name: "Conservative Pension Fund",
          performance: {
            "1yr": "10.6%",
            "3yr": "32.4%",
            "5yr": "58.7%",
            "10yr": "125.3%"
          },
          benchmark: {
            name: "Kenya Pension Fund Benchmark",
            "1yr": "9.8%"
          },
          relativePerformance: "+0.8%",
          aum: "KSh 3.8 Billion",
          riskRating: "Low to Moderate",
          color: "bg-finance-secondary"
        }
      ]
    }
  };

  return (
    <Layout>
      {/* Hero Section */}
      <div className="relative py-16 bg-finance-dark text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 font-playfair">Performance Track Record</h1>
            <p className="text-xl text-gray-200 mb-6">
              Our consistent long-term performance demonstrates our investment expertise and commitment to delivering excellent returns for our clients.
            </p>
          </div>
        </div>
      </div>

      {/* Performance Highlights */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-finance-dark mb-6 font-playfair">
              Performance Highlights
            </h2>
            <p className="text-lg text-gray-600">
              Our funds have consistently outperformed their benchmarks across different asset classes and market cycles.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg text-finance-dark">Assets Under Management</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-4xl font-bold text-finance-primary mb-1">KSh 25B+</p>
                <p className="text-sm text-gray-500">Trusted by thousands of investors</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg text-finance-dark">Average Annual Return</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-4xl font-bold text-finance-primary mb-1">14.5%</p>
                <p className="text-sm text-gray-500">Across all funds (5-year)</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg text-finance-dark">Benchmark Outperformance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-4xl font-bold text-finance-primary mb-1">+3.2%</p>
                <p className="text-sm text-gray-500">Average annual alpha</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg text-finance-dark">Client Satisfaction</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-4xl font-bold text-finance-primary mb-1">94%</p>
                <p className="text-sm text-gray-500">Client retention rate</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Detailed Performance Tabs */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-finance-dark mb-6 font-playfair">
              Fund Performance By Category
            </h2>
            <p className="text-lg text-gray-600">
              Detailed performance metrics for our diverse range of investment funds.
            </p>
          </div>

          <Tabs defaultValue="equity" className="max-w-5xl mx-auto">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4">
              <TabsTrigger value="equity">Equity</TabsTrigger>
              <TabsTrigger value="fixed">Fixed Income</TabsTrigger>
              <TabsTrigger value="realestate">Real Estate</TabsTrigger>
              <TabsTrigger value="pension">Pension</TabsTrigger>
            </TabsList>
            
            {Object.entries(performanceData).map(([key, category]) => (
              <TabsContent key={key} value={key} className="mt-8">
                <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                  <h3 className="text-2xl font-bold text-finance-dark mb-3">{category.title}</h3>
                  <p className="text-gray-600 mb-6">{category.description}</p>
                  
                  <div className="space-y-8">
                    {category.funds.map((fund, index) => (
                      <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                        <div className={`h-2 w-full ${fund.color}`}></div>
                        <div className="p-6">
                          <h4 className="text-xl font-bold text-finance-dark mb-1">{fund.name}</h4>
                          <div className="flex flex-col md:flex-row md:items-end gap-4 mb-4">
                            <div className="flex-grow">
                              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
                                <div className="text-center">
                                  <p className="text-sm text-gray-500">1 Year</p>
                                  <p className="text-2xl font-bold text-finance-dark">{fund.performance["1yr"]}</p>
                                </div>
                                <div className="text-center">
                                  <p className="text-sm text-gray-500">3 Year</p>
                                  <p className="text-2xl font-bold text-finance-dark">{fund.performance["3yr"]}</p>
                                </div>
                                <div className="text-center">
                                  <p className="text-sm text-gray-500">5 Year</p>
                                  <p className="text-2xl font-bold text-finance-dark">{fund.performance["5yr"]}</p>
                                </div>
                                <div className="text-center">
                                  <p className="text-sm text-gray-500">10 Year</p>
                                  <p className="text-2xl font-bold text-finance-dark">{fund.performance["10yr"]}</p>
                                </div>
                              </div>
                            </div>
                            <div className="md:border-l md:border-gray-200 md:pl-4">
                              <div className="grid grid-cols-1 gap-2">
                                <div>
                                  <p className="text-sm text-gray-500">VS {fund.benchmark.name}</p>
                                  <p className="text-lg font-semibold text-emerald-600">{fund.relativePerformance}</p>
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                  <div>
                                    <p className="text-sm text-gray-500">AUM</p>
                                    <p className="text-base font-medium">{fund.aum}</p>
                                  </div>
                                  <div>
                                    <p className="text-sm text-gray-500">Risk</p>
                                    <p className="text-base font-medium">{fund.riskRating}</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          
                          <div className="relative pt-6">
                            <p className="text-sm text-gray-500 mb-2">Performance vs Benchmark (1 Year)</p>
                            <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
                              <div className={`shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center ${fund.color}`} style={{ width: '80%' }}></div>
                            </div>
                            <div className="flex justify-between text-xs">
                              <span>Fund: {fund.performance["1yr"]}</span>
                              <span>Benchmark: {fund.benchmark["1yr"]}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="text-center mt-8">
                  <Button className="bg-finance-primary hover:bg-finance-dark">
                    Download Detailed {category.title} Report
                  </Button>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Investment Approach */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-finance-dark mb-6 font-playfair">Our Investment Approach</h2>
              <p className="text-gray-700 mb-4">
                Our consistent performance is the result of a disciplined investment process that combines in-depth research, robust risk management, and a focus on long-term value creation.
              </p>
              
              <div className="space-y-4 mt-6">
                <div className="flex gap-3">
                  <div className="bg-finance-light p-2 rounded-full h-10 w-10 flex items-center justify-center shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-finance-primary">
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="M12 16v-4"></path>
                      <path d="M12 8h.01"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-finance-dark mb-1">Research-Driven Decisions</h3>
                    <p className="text-gray-600">Our investment decisions are based on rigorous research conducted by our team of experienced analysts with deep knowledge of local markets.</p>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <div className="bg-finance-light p-2 rounded-full h-10 w-10 flex items-center justify-center shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-finance-primary">
                      <path d="M5 22h14"></path>
                      <path d="M5 2h14"></path>
                      <path d="M17 22v-4.172a2 2 0 0 0-.586-1.414L12 12l-4.414 4.414A2 2 0 0 0 7 17.828V22"></path>
                      <path d="M7 2v4.172a2 2 0 0 0 .586 1.414L12 12l4.414-4.414A2 2 0 0 0 17 6.172V2"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-finance-dark mb-1">Risk Management</h3>
                    <p className="text-gray-600">We employ sophisticated risk management techniques to protect capital while pursuing attractive returns across different market environments.</p>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <div className="bg-finance-light p-2 rounded-full h-10 w-10 flex items-center justify-center shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-finance-primary">
                      <path d="M12 2v20"></path>
                      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-finance-dark mb-1">Value Creation</h3>
                    <p className="text-gray-600">We focus on identifying quality investments that can deliver sustainable returns over the long term, rather than chasing short-term market trends.</p>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <div className="bg-finance-light p-2 rounded-full h-10 w-10 flex items-center justify-center shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-finance-primary">
                      <path d="M7 20h10"></path>
                      <path d="M10 20c5.5-2.5.8-6.4 3-10"></path>
                      <path d="M9.5 9.4c1.1.8 1.8 2.2 2 3.6"></path>
                      <path d="M14.1 6.5c3.4.9 5.9 4.6 5.9 9"></path>
                      <path d="M4 15.5c0-4.4 2.5-8.1 5.9-9"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-finance-dark mb-1">Local Expertise</h3>
                    <p className="text-gray-600">Our deep understanding of East African markets gives us a competitive edge in identifying unique investment opportunities that others might miss.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative h-[500px] rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1770&q=80" 
                alt="Investment Team at Work" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-finance-dark text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 font-playfair">Ready to Invest with a Proven Track Record?</h2>
              <p className="text-lg text-gray-200 mb-8">
                Join thousands of satisfied investors who trust Ala Capital with their financial future. Our consistent performance speaks for itself.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-kenya-gold hover:bg-kenya-gold/90 text-black font-semibold">
                  <Link to="/contact">
                    Start Investing
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  <Link to="/services">
                    View Our Funds
                  </Link>
                </Button>
              </div>
            </div>
            <div className="p-8 bg-finance-primary/20 rounded-lg">
              <h3 className="text-xl font-bold mb-4 text-kenya-gold">Latest Performance Updates</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center border-b border-white/10 pb-3">
                  <span className="font-medium">Ala East African Equity Fund</span>
                  <span className="text-emerald-400">+17.8% YTD</span>
                </div>
                <div className="flex justify-between items-center border-b border-white/10 pb-3">
                  <span className="font-medium">Kenya Government Bond Fund</span>
                  <span className="text-emerald-400">+11.6% YTD</span>
                </div>
                <div className="flex justify-between items-center border-b border-white/10 pb-3">
                  <span className="font-medium">Kenya Commercial Property Fund</span>
                  <span className="text-emerald-400">+15.2% YTD</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium">Ala Retirement Growth Fund</span>
                  <span className="text-emerald-400">+14.2% YTD</span>
                </div>
              </div>
              <p className="text-sm text-gray-300 mt-6">
                * Performance data as of March 31, 2025. Past performance is not indicative of future results.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Performance;
