import Hero from "../Components/HeroSection";
import Features from "../Components/Features";
import Instructions from "../Components/Instructions";
import Media from "../Components/Media";
import Footer from "../Components/Footer";

export default function Landing() {
  return (
    <>
      <Hero />
      <div className="flex flex-col">
        <Features />
        <Instructions />
        <Media />
        <Footer />
      </div>
    </>
  );
}
