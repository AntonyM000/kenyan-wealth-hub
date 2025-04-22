
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export function Performance() {
  // Sample performance data
  const performanceData = [
    {
      fund: "Savannah Equity Growth Fund",
      oneYear: "18.4%",
      threeYear: "52.7%",
      fiveYear: "87.5%",
      benchmark: "NSE 20 Share Index",
      benchmarkOneYear: "13.2%",
      color: "bg-kenya-gold"
    },
    {
      fund: "East African Bond Fund",
      oneYear: "12.6%",
      threeYear: "38.2%",
      fiveYear: "68.3%",
      benchmark: "Kenya Govt Bond Index",
      benchmarkOneYear: "10.8%",
      color: "bg-finance-primary"
    },
    {
      fund: "Kenya Real Estate Income Fund",
      oneYear: "15.2%",
      threeYear: "43.9%",
      fiveYear: "76.2%",
      benchmark: "Kenya Property Index",
      benchmarkOneYear: "11.9%",
      color: "bg-finance-secondary"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-finance-dark mb-4 font-playfair">
            Our Performance Track Record
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Consistently delivering strong returns for our investors across market cycles
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">
          {performanceData.map((fund, index) => (
            <Card key={index} className="border border-gray-200 overflow-hidden">
              <div className={`h-2 w-full ${fund.color}`}></div>
              <CardHeader>
                <CardTitle className="text-lg font-bold">{fund.fund}</CardTitle>
                <CardDescription>vs {fund.benchmark}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center mb-4">
                  <div className="text-center">
                    <p className="text-sm text-gray-500">1 Year</p>
                    <p className="text-2xl font-bold text-finance-dark">{fund.oneYear}</p>
                    <p className="text-xs text-gray-500">vs {fund.benchmarkOneYear}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-sm text-gray-500">3 Year</p>
                    <p className="text-2xl font-bold text-finance-dark">{fund.threeYear}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-sm text-gray-500">5 Year</p>
                    <p className="text-2xl font-bold text-finance-dark">{fund.fiveYear}</p>
                  </div>
                </div>
                
                <div className="relative pt-6">
                  <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
                    <div className={`shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center ${fund.color}`} style={{ width: '80%' }}></div>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span>Fund Performance</span>
                    <span>Benchmark</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 p-6 bg-gray-50 rounded-lg border border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0 md:mr-6">
              <h3 className="text-xl font-bold text-finance-dark mb-2">Want to see how our funds can work for you?</h3>
              <p className="text-gray-600">Access detailed performance reports and prospectuses for all our funds.</p>
            </div>
            <Button asChild className="whitespace-nowrap bg-finance-primary hover:bg-finance-dark">
              <Link to="/performance">
                View Detailed Performance
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
