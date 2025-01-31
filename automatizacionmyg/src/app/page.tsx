import ProductCatalog from "./components/Catalogo";
import ContactSection from "./components/Contacto";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <>
      <Hero />
      <ProductCatalog />
      <ContactSection />
    </>
  );
}
