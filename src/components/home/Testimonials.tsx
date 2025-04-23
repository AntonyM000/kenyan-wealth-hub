
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

export function Testimonials() {
  const testimonials = [
    {
      quote: "ALA Capital has been instrumental in helping our family plan for retirement. Their understanding of local market conditions combined with global investment expertise has grown our portfolio beyond expectations.",
      author: "John Kamau",
      position: "Retired Bank Executive",
      company: "Nairobi"
    },
    {
      quote: "As a business owner, I needed a fund manager who understood both my personal investment goals and my company's pension scheme. The team at ALA has provided valuable guidance on both fronts.",
      author: "Esther Njeri",
      position: "CEO",
      company: "Mombasa Freight Services"
    },
    {
      quote: "Their real estate fund has provided excellent returns while allowing me to diversify my investments beyond the stock market. The quarterly reports and personalized service keep me confident in my investment decisions.",
      author: "Thomas Odhiambo",
      position: "Medical Doctor",
      company: "Kisumu"
    },
    {
      quote: "The team's deep knowledge of East African markets has been invaluable. In a time of global uncertainty, they've helped us navigate market volatility while maintaining strong returns for our corporate investments.",
      author: "Amina Hassan",
      position: "CFO",
      company: "Kenyan Harvest Group"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-finance-dark mb-4 font-playfair">
            What Our Clients Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Trusted by individuals, corporations, and institutions across Kenya
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 pl-4">
                <div className="p-1">
                  <Card className="border border-gray-200 h-full">
                    <CardContent className="flex flex-col p-6 h-full">
                      <div className="mb-4">
                        <svg width="45" height="36" viewBox="0 0 45 36" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-kenya-gold">
                          <path d="M13.1 36C11.0333 36 9.15 35.5 7.45 34.5C5.81667 33.4333 4.53333 32 3.6 30.2C2.66667 28.4 2.2 26.4 2.2 24.2C2.2 21.1333 2.96667 18.1667 4.5 15.3C6.1 12.3667 8.21667 9.76667 10.85 7.5C13.5833 5.23333 16.5833 3.43333 19.85 2.1L20.15 2L22.85 6.3L22.65 6.5C20.3167 7.9 18.2167 9.46667 16.35 11.2C14.55 12.9333 13.2333 14.7333 12.4 16.6C11.5667 18.4 11.45 20.2 12.05 22C12.4167 22.8667 12.9833 23.5333 13.75 24C14.5833 24.4 15.5 24.6 16.5 24.6C17.8333 24.6 19 24.1667 20 23.3C21 22.4333 21.5 21.2667 21.5 19.8C21.5 18.3333 21 17.1667 20 16.3C19 15.4333 17.8333 15 16.5 15H15.5V9H16.5C19.8333 9 22.5 10.0333 24.5 12.1C26.5 14.1 27.5 16.7 27.5 19.9C27.5 23 26.5 25.5667 24.5 27.6C22.5 29.6333 19.8333 30.6667 16.5 30.7C15.1667 32.5667 13.3333 34 11 35C10.6 35.1333 10.1667 35.2667 9.7 35.4C9.23333 35.5333 8.76667 35.6333 8.3 35.7C7.9 35.7667 7.36667 35.8333 6.7 35.9C6.1 35.9667 5.33333 36 4.4 36H13.1ZM35.15 36C33.0833 36 31.2 35.5 29.5 34.5C27.8667 33.4333 26.5833 32 25.65 30.2C24.7167 28.4 24.25 26.4 24.25 24.2C24.25 21.1333 25.0167 18.1667 26.55 15.3C28.15 12.3667 30.2667 9.76667 32.9 7.5C35.6333 5.23333 38.6333 3.43333 41.9 2.1L42.2 2L44.9 6.3L44.7 6.5C42.3667 7.9 40.2667 9.46667 38.4 11.2C36.6 12.9333 35.2833 14.7333 34.45 16.6C33.6167 18.4 33.5 20.2 34.1 22C34.4667 22.8667 35.0333 23.5333 35.8 24C36.6333 24.4 37.55 24.6 38.55 24.6C39.8833 24.6 41.05 24.1667 42.05 23.3C43.05 22.4333 43.55 21.2667 43.55 19.8C43.55 18.3333 43.05 17.1667 42.05 16.3C41.05 15.4333 39.8833 15 38.55 15H37.55V9H38.55C41.8833 9 44.55 10.0333 46.55 12.1C48.55 14.1 49.55 16.7 49.55 19.9C49.55 23 48.55 25.5667 46.55 27.6C44.55 29.6333 41.8833 30.6667 38.55 30.7C37.2167 32.5667 35.3833 34 33.05 35C32.65 35.1333 32.2167 35.2667 31.75 35.4C31.2833 35.5333 30.8167 35.6333 30.35 35.7C29.95 35.7667 29.4167 35.8333 28.75 35.9C28.15 35.9667 27.3833 36 26.45 36H35.15Z" fill="currentColor" />
                        </svg>
                      </div>
                      <p className="text-gray-700 mb-6 flex-grow italic">
                        {testimonial.quote}
                      </p>
                      <div>
                        <div className="font-bold text-finance-dark">{testimonial.author}</div>
                        <div className="text-sm text-gray-500">{testimonial.position}, {testimonial.company}</div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center mt-8">
            <CarouselPrevious className="static translate-y-0 mr-2" />
            <CarouselNext className="static translate-y-0" />
          </div>
        </Carousel>
      </div>
    </section>
  );
}
