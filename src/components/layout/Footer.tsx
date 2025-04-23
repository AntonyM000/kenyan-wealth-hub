
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="bg-finance-dark text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold">ALA<span className="text-kenya-gold">Capital</span></h3>
            <p className="text-sm text-gray-300 max-w-xs">
              Kenya's premier fund management company, specializing in African markets and global opportunities.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-kenya-gold">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a href="#" className="text-white hover:text-kenya-gold">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </a>
              <a href="#" className="text-white hover:text-kenya-gold">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-kenya-gold transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-kenya-gold transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-kenya-gold transition-colors">Our Services</Link></li>
              <li><Link to="/performance" className="text-gray-300 hover:text-kenya-gold transition-colors">Performance</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-kenya-gold transition-colors">Contact Us</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><Link to="/services" className="text-gray-300 hover:text-kenya-gold transition-colors">Equity Funds</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-kenya-gold transition-colors">Fixed Income</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-kenya-gold transition-colors">Real Estate Investments</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-kenya-gold transition-colors">Pension Management</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-kenya-gold transition-colors">Wealth Advisory</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <address className="not-italic text-gray-300 space-y-2">
              <p>The Business Centre</p>
              <p>Westlands Road, Nairobi</p>
              <p>Kenya</p>
              <p className="pt-2">+254 (0) 722 123 456</p>
              <p>info@alacapital.co.ke</p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">© 2025 ALA Capital. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="text-sm text-gray-400 hover:text-white">Privacy Policy</Link>
            <Link to="/terms" className="text-sm text-gray-400 hover:text-white">Terms of Service</Link>
            <Link to="/cookies" className="text-sm text-gray-400 hover:text-white">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
