// src/hooks/useRecommendedProducts.ts

import { transformData } from "@/lib/localstorage";
import api from "@/services/api.service";
import {
  useInfiniteQuery,
  UseInfiniteQueryOptions,
} from "@tanstack/react-query";

const PRODUCTS_PERPAGE = 100;
export interface RecommendedProduct {
  // Define the structure of a recommended product here
  id: string;
  name: string;
  // ... other properties
}

export interface RecommendedProductsResponse {
  data: RecommendedProduct[];
  meta: {
    currentPage: number;
    lastPage: number;
  };
  // ... other response properties if any
}

export const useRecommendedProducts = (
  options?: UseInfiniteQueryOptions<RecommendedProductsResponse>
) => {
  return useInfiniteQuery({
    queryKey: ["recommendedProducts"],
    queryFn: async () => {
      try {
        const storeData = JSON.parse(localStorage.getItem("storeData") || "{}");
        const postData = transformData(storeData);
        const response = await api.post(
          "/api/v1/stores/anonymous-recommendations",
          { data: postData, page: 1, perPage: PRODUCTS_PERPAGE }
        );
        return response.data;
      } catch (error) {
        console.error("Error fetching recommended products:", error);
        // Handle errors appropriately (e.g., display error message)
      }
    },
    initialPageParam: 1,
    ...options,
    getNextPageParam: (lastPage) =>
      lastPage.meta.currentPage < lastPage.meta.lastPage
        ? lastPage.meta.currentPage + 1
        : undefined,
    retry: 3, // Retry up to 3 times
    retryDelay: (attemptIndex) => Math.min(2000 * 2 ** attemptIndex, 60000), // Adjust delay for retries
  });
};
