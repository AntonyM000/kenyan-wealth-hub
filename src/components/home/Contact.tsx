
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export function Contact() {
  return (
    <section className="py-16 bg-finance-dark text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-playfair">
              Ready to Grow Your Wealth?
            </h2>
            <p className="text-lg text-gray-200 mb-8">
              Our financial advisors are ready to help you achieve your investment goals. 
              Schedule a consultation or request more information about our services.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-finance-primary/30 p-3 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-kenya-gold">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-kenya-gold">Call Us</h3>
                  <p className="text-gray-200">+254 (0) 722 123 456</p>
                  <p className="text-gray-200">+254 (0) 733 789 012</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-finance-primary/30 p-3 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-kenya-gold">
                    <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-kenya-gold">Email Us</h3>
                  <p className="text-gray-200">info@savannahcapital.co.ke</p>
                  <p className="text-gray-200">support@savannahcapital.co.ke</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-finance-primary/30 p-3 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-kenya-gold">
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-kenya-gold">Visit Us</h3>
                  <p className="text-gray-200">The Business Centre, 12th Floor</p>
                  <p className="text-gray-200">Westlands Road, Nairobi, Kenya</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white text-gray-800 rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold mb-6 text-finance-dark">Get in Touch</h3>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" placeholder="Your name" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" placeholder="Your email" required />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" placeholder="+254 7XX XXX XXX" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="interest">Interested In</Label>
                  <Select>
                    <SelectTrigger id="interest">
                      <SelectValue placeholder="Select an option" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="equity">Equity Funds</SelectItem>
                      <SelectItem value="fixed-income">Fixed Income</SelectItem>
                      <SelectItem value="real-estate">Real Estate Investments</SelectItem>
                      <SelectItem value="pension">Pension Management</SelectItem>
                      <SelectItem value="advisory">Wealth Advisory</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message">Your Message</Label>
                <Textarea id="message" placeholder="How can we help you?" rows={4} />
              </div>
              
              <Button type="submit" className="w-full bg-kenya-gold hover:bg-kenya-gold/90 text-black font-semibold py-3">
                Send Message
              </Button>
              
              <p className="text-xs text-gray-500 text-center mt-4">
                By submitting this form, you agree to our <a href="/privacy" className="underline hover:text-finance-primary">Privacy Policy</a>.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
