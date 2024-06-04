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
import {useNavigate, useParams} from "react-router-dom";

export default function Home() {
  const { storeName } = useParams();
  const { toast } = useToast();
  const navigate = useNavigate()

  // store storeName in local storage
  useEffect(() => {
    if (!storeName) {
      return;
    }
    localStorage.setItem("store_name", storeName);
  }, [storeName]);

  function addOrUpdateStore(storeName, categories) {
    const storeData = localStorage.getItem('storeData');
    const data = storeData ? JSON.parse(storeData) : {};

    if (data[storeName]) {
      // Store exists, add new categories if they don't exist
      categories.forEach(category => {
        if (!data[storeName].includes(category)) {
          data[storeName].push(category);
        }
      });
    } else {
      // Store doesn't exist, add it with its categories
      data[storeName] = categories;
    }

    localStorage.setItem('storeData', JSON.stringify(data));
  }
  const fetchUserStore = async () => {
    try {
      const response = await axios.get(
        `${BASE_URL}/api/v1/stores/links/search-username?username=${storeName}`
      );
      if (response.statusText === "OK") {
       addOrUpdateStore(storeName, response.data.data.categories);
        return response.data;
       }
    } catch (error) {
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
    console.log(error.message)
    // toast({
    //   description: error.message,
    // });
  }

  if (isLoading) {
    return "loading please wait";
  }

  if(!data) {
    navigate("/404")
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
