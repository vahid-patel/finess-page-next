import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Pricing from "@/components/Pricing";
import Programs from "@/components/Programs";
import Testimonials from "@/components/Testimonials";
import WhyChoooseUs from "@/components/WhyChoooseUs";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar/>
      <Hero/>
      <Programs/>
      <WhyChoooseUs/>
      <Testimonials/>
      <Pricing/>
    </main>
  );
}
