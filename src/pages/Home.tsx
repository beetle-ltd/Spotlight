import { Container } from "@/App";
import Header from "@/components/blocks/header";
import Hero from "@/components/blocks/hero";
import ProductGallery from "@/components/blocks/product-gallery";
import { useToast } from "@/components/ui/use-toast";
import { useQuery } from "@tanstack/react-query";
// import { BASE_URL } from "@/constants/api-constants";
import { BASE_URL } from "@/constants/api-constants";
import axios from "axios";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

export default function Home() {
  const { storeName } = useParams();
  const { toast } = useToast();

  // store storeName in local storage
  useEffect(() => {
    if (!storeName) {
      return;
    }
    localStorage.setItem("store_name", storeName);
  }, [storeName]);

  const fetchUserStore = async () => {
    try {
      const response = await axios.get(
        `${BASE_URL}/api/v1/stores/links/search-username?username=${storeName}`
      );
      if (response.statusText === "OK") {
       localStorage.setItem("SPOTLIGHT_RECOMMENDATION_CATEGORIES", response.data.data.categories);
        return response.data;
       }
    } catch (error) {
      console.log(error);
      toast({
        description: "An error occured" + error,
      });
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
    return "loading please wait";
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
