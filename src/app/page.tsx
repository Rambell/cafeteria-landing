import Navbar from "@/components/ui/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Menu from "@/components/sections/Menu";
import Gallery from "@/components/sections/Gallery";
import Hours from "@/components/sections/Hours";
import Reserva from "@/components/sections/Reserva";
import Footer from "@/components/ui/Footer";
import Map from "@/components/sections/Map";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Menu />
      <Gallery />
      <Hours />
      <Reserva />
      <Map/>
      <Footer />
    </main>
  );
}