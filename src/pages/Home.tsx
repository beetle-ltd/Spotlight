/* eslint-disable @typescript-eslint/no-explicit-any */
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
import { useNavigate, useParams } from "react-router-dom";

export default function Home() {
  const { storeName } = useParams();
  const { toast } = useToast();
  const navigate = useNavigate();

  const MAX_QUEUE_HEIGHT = 20;

  // store storeName in local storage
  useEffect(() => {
    if (!storeName) {
      return;
    }
    localStorage.setItem("store_name", storeName);
  }, [storeName]);

  // Function to sort the storage object by timestamp
  function sortStorageByTimestamp(storage: any) {
    // Convert the object to an array of [key, value] pairs
    const entries = Object.entries(storage);

    // Sort the array based on the timestamp
    entries.sort((a, b) => a[1].timestamp - b[1].timestamp);

    // Convert the sorted array back to an object
    const sortedStorage = Object.fromEntries(entries);

    return sortedStorage;
  }

  function addOrUpdateStore(storeName, categories) {
    const data = localStorage.getItem("storeData");
    let storeData = data ? JSON.parse(data) : {};

    // Unix timestamp
    const now = Math.floor(Date.now() / 1000);

    // When i get to a page, i check for the localstorage
    if (storeName in storeData) {
      // Increase the count
      storeData[storeName].visits += 1;
      // Update the timestamp
      storeData[storeName].timestamp = now;
      storeData[storeName].cat = categories;
    } else {
      // Add new
      storeData[storeName] = {
        visits: 1,
        cat: categories,
        timestamp: now,
      };

      // Run the LRU algorithm
      // The least recently used algorithm here will be based on the timestamp of the entry and then by the number of times the page was visited

      // First check that the length of the object is not more than 20
      const queueHeight = Object.keys(storeData).length;
      // The extra can only be 1, because the algorithm is run after adding a new entry
      if (queueHeight > MAX_QUEUE_HEIGHT) {
        // Timestamp takes precendece
        // Order by timestamp
        const sortedStorage = sortStorageByTimestamp(storeData);

        // Now that we have sorted by timestamp, we then examine the lower half of the object and eliminate by the number of page visits
        const entries = Object.entries(sortedStorage);

        // Split the entries into the first 10 and the rest
        const firstTenEntries = entries.slice(0, 10);
        const restEntries = entries.slice(10);

        // Sort the second half by the number of visits
        restEntries.sort((a, b) => a[1].visits - b[1].visits);

        // Remove the entry with the least visits from the sorted second half
        restEntries.shift(); // Remove the first element, which has the least visits

        // Sore by timestamp
        const sortedEntries = sortStorageByTimestamp(restEntries);

        // Combine the two parts back into a single object
        const combinedEntries = firstTenEntries.concat(sortedEntries);

        // Save to storeData
        storeData = Object.fromEntries(combinedEntries);
      }
    }

    localStorage.setItem("storeData", JSON.stringify(storeData));
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
    console.log(error.message);
    // toast({
    //   description: error.message,
    // });
  }

  if (isLoading) {
    return "loading please wait";
  }

  if (!data) {
    navigate("/404");
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
