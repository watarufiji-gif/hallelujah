import Hero                   from "./components/Hero";
import ChalkboardSection       from "./components/ChalkboardSection";
import Features                from "./components/Features";
import InstagramEmbedSection   from "./components/InstagramEmbedSection";
import Footer                  from "./components/Footer";

export default function TopPage() {
  return (
    <>
      <Hero />
      <ChalkboardSection />
      <Features />
      <InstagramEmbedSection />
      <Footer />
    </>
  );
}
