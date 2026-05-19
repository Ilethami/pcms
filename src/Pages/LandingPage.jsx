import Hero from "../Components/HeroSection";
import Features from "../Components/Features";
import Instructions from "../Components/Instructions";
import Media from "../Components/Media";

export default function Landing() {
  return (
    <>
      <Hero />
      <div className="flex flex-col">
        <Features />
        <Instructions />
        <Media />
      </div>
    </>
  );
}
