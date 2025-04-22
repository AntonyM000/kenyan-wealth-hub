
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export function Hero() {
  return (
    <div className="relative">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-finance-dark/90 to-finance-dark/70 z-10"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2426&q=80')",
          backgroundPosition: "center"
        }}
      ></div>
      
      {/* Content */}
      <div className="container relative z-20 mx-auto px-4 py-20 md:py-32 lg:py-40">
        <div className="max-w-2xl">
          <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Grow Your Wealth With Kenya's Premier Fund Manager
          </h1>
          
          <p className="text-lg md:text-xl text-gray-200 mb-8">
            Expert financial management with deep local knowledge and global perspective. Let us help you build a secure financial future.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="bg-kenya-gold hover:bg-kenya-gold/90 text-kenya-black font-semibold">
              <Link to="/services">
                Explore Our Funds
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              <Link to="/contact">
                Get Started
              </Link>
            </Button>
          </div>
          
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="flex flex-col items-center bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <span className="text-kenya-gold text-3xl font-bold">15+</span>
              <span className="text-white text-sm">Years Experience</span>
            </div>
            <div className="flex flex-col items-center bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <span className="text-kenya-gold text-3xl font-bold">KSh 25B+</span>
              <span className="text-white text-sm">Assets Managed</span>
            </div>
            <div className="flex flex-col items-center bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <span className="text-kenya-gold text-3xl font-bold">12,000+</span>
              <span className="text-white text-sm">Happy Clients</span>
            </div>
            <div className="flex flex-col items-center bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <span className="text-kenya-gold text-3xl font-bold">18.5%</span>
              <span className="text-white text-sm">5-Year Returns</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
