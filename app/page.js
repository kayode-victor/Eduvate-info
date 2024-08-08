import Details from "@/components/Details";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Offers from "@/components/Offers";
import Service from "@/components/Service";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <div className="w-full h-screen overflow-x-hidden">
      <Header />
      <Hero />
      <Service />
      <Details />
      <Offers />
      <Testimonials />
    </div>
  );
}
