
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Contact = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <div className="relative py-16 bg-finance-dark text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 font-playfair">Get in Touch</h1>
            <p className="text-xl text-gray-200 mb-6">
              Our team of financial experts is ready to help you achieve your investment goals. Reach out to us today.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-finance-dark mb-6 font-playfair">Let's Start a Conversation</h2>
              <p className="text-lg text-gray-600 mb-8">
                Whether you're looking to start investing, need advice on your current portfolio, or want to learn more about our services, we're here to help.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-finance-light p-3 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-finance-primary">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-finance-dark mb-1">Call Us</h3>
                    <p className="text-gray-600">+254 (0) 722 123 456</p>
                    <p className="text-gray-600">+254 (0) 733 789 012</p>
                    <p className="text-sm text-gray-500 mt-1">Monday-Friday, 8:00 AM - 5:00 PM EAT</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-finance-light p-3 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-finance-primary">
                      <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-finance-dark mb-1">Email Us</h3>
                    <p className="text-gray-600">info@alacapital.co.ke</p>
                    <p className="text-gray-600">support@alacapital.co.ke</p>
                    <p className="text-sm text-gray-500 mt-1">We usually respond within 24 hours</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-finance-light p-3 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-finance-primary">
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-finance-dark mb-1">Visit Us</h3>
                    <p className="text-gray-600">The Business Centre, 12th Floor</p>
                    <p className="text-gray-600">Westlands Road, Nairobi, Kenya</p>
                    <p className="text-sm text-gray-500 mt-1">Open for in-person consultations by appointment</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-12">
                <h3 className="text-xl font-bold text-finance-dark mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <a href="#" className="bg-finance-light p-3 rounded-full text-finance-primary hover:bg-finance-primary hover:text-white transition-colors duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                    </svg>
                  </a>
                  <a href="#" className="bg-finance-light p-3 rounded-full text-finance-primary hover:bg-finance-primary hover:text-white transition-colors duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                    </svg>
                  </a>
                  <a href="#" className="bg-finance-light p-3 rounded-full text-finance-primary hover:bg-finance-primary hover:text-white transition-colors duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect x="2" y="9" width="4" height="12"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                  </a>
                  <a href="#" className="bg-finance-light p-3 rounded-full text-finance-primary hover:bg-finance-primary hover:text-white transition-colors duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            
            <div>
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-finance-dark">Contact Form</CardTitle>
                  <CardDescription>Fill in the form below and we'll get back to you as soon as possible.</CardDescription>
                </CardHeader>
                <CardContent>
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
                    
                    <Button type="submit" className="w-full bg-finance-primary hover:bg-finance-dark font-semibold py-3">
                      Send Message
                    </Button>
                    
                    <p className="text-xs text-gray-500 text-center mt-4">
                      By submitting this form, you agree to our <a href="/privacy" className="underline hover:text-finance-primary">Privacy Policy</a>.
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-finance-dark mb-6 font-playfair">Our Location</h2>
            <p className="text-lg text-gray-600">
              Visit our office in Nairobi's Westlands business district.
            </p>
          </div>
          
          <div className="rounded-lg overflow-hidden shadow-lg">
            <div className="aspect-w-16 aspect-h-9 h-[400px] relative">
              {/* Placeholder for an actual map integration */}
              <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                <div className="text-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-16 w-16 text-gray-400 mx-auto mb-4">
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                  <p className="text-xl font-bold text-gray-600">ala Capital</p>
                  <p className="text-gray-500">The Business Centre, 12th Floor</p>
                  <p className="text-gray-500">Westlands Road, Nairobi, Kenya</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-finance-dark mb-6 font-playfair">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600">
              Find answers to common questions about contacting and working with us.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-bold text-finance-dark mb-2">What should I bring to an initial consultation?</h3>
              <p className="text-gray-600">For your first meeting, it's helpful to bring information about your current investments, financial goals, and any relevant financial statements. This allows us to provide more tailored advice during our discussion.</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-bold text-finance-dark mb-2">How quickly can I expect a response to my inquiry?</h3>
              <p className="text-gray-600">We typically respond to all inquiries within 24 business hours. For urgent matters, we recommend calling our office directly for immediate assistance.</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-bold text-finance-dark mb-2">Is there a minimum investment amount to work with Ala Capital?</h3>
              <p className="text-gray-600">Our minimum investment amounts vary by fund, starting from KSh 50,000 for fixed income funds. However, we're happy to discuss your specific situation during an initial consultation regardless of your investment amount.</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-bold text-finance-dark mb-2">Can I schedule a virtual consultation?</h3>
              <p className="text-gray-600">Yes, we offer virtual consultations via video conference for clients who prefer not to visit our office in person. Simply indicate your preference when scheduling your appointment.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-finance-dark text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 font-playfair">Ready to Take the Next Step?</h2>
            <p className="text-lg text-gray-200 mb-8">
              Join thousands of satisfied investors who have trusted Ala Capital with their financial future. Our team is ready to help you achieve your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-kenya-gold hover:bg-kenya-gold/90 text-black font-semibold">
                Schedule a Consultation
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                Download Our Brochure
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
