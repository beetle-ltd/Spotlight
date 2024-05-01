import { Container } from "@/App";
import Header from "@/components/blocks/header";
import Hero from "@/components/blocks/hero";
import ProductGallery from "@/components/blocks/product-gallery";

export default function Home() {
  return (
    <div>
      <Container>
        <Header />
        <Hero />
      </Container>
      <ProductGallery />
    </div>
  );
}
