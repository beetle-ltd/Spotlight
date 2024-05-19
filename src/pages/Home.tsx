import { Container } from "@/App";
import Header from "@/components/blocks/header";
import Hero from "@/components/blocks/hero";
import ProductGallery from "@/components/blocks/product-gallery";
import { useToast } from "@/components/ui/use-toast";
import { useQuery } from "@tanstack/react-query";
// import { BASE_URL } from "@/constants/api-constants";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function Home() {
  const { id } = useParams();
  const { toast } = useToast();

  const fetchUserStore = async () => {
    try {
      const response = await axios.get(
        `http://13.60.94.217/api/v1/stores/links/${id}`
      );
      if (response.statusText === "OK") {
        return response.data;
      }
    } catch (error) {
      console.log(error);
    }
  };

  const { data, error, isLoading } = useQuery({
    queryKey: ["fetchStore"],
    queryFn: fetchUserStore,
  });

  if (error) {
    toast({
      description: error.message,
    });
  }

  if (isLoading) {
    return "lOADING PLEASE WAIT";
  }

  const store = data.data;
  const products = store.products;

  return (
    <div>
      <Container>
        <Header />
        <Hero store={store} />
      </Container>
      <ProductGallery products={products} />
    </div>
  );
}
