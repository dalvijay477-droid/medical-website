import Hero from "./components/Hero";
import Products from "./components/Products";
import ProductSlider from "./components/ProductSlider";
import Stats from "./components/Stats";
import ContactForm from "./components/ContactForm";
import OTSolutions from "./components/OTSolutions";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <Products />
      <ProductSlider />
      <OTSolutions />
      <ContactForm />
    </>
  );
}
