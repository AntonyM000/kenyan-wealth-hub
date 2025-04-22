
import { Layout } from "@/components/layout/Layout";
import { Hero } from "@/components/home/Hero";
import { Services } from "@/components/home/Services";
import { Performance } from "@/components/home/Performance";
import { Team } from "@/components/home/Team";
import { Testimonials } from "@/components/home/Testimonials";
import { Contact } from "@/components/home/Contact";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <Services />
      <Performance />
      <Team />
      <Testimonials />
      <Contact />
    </Layout>
  );
};

export default Index;
