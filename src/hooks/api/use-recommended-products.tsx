/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  useInfiniteQuery,
  UseInfiniteQueryOptions,
  InfiniteData,
} from "@tanstack/react-query";
import api from "@/services/api.service";
import { transformData } from "@/lib/localstorage";

const PRODUCTS_PERPAGE = 100;

// export interface RecommendedProduct {
//   id: string;
//   name: string;
//   // ... other properties
// }

export interface RecommendedProductsResponse {
  data: any;
  totalPages: number;
  currentPage: number;
  // ... other response properties if any
}

type InfiniteRecommendedProductsResponse =
  InfiniteData<RecommendedProductsResponse>;

export const useInfiniteRecommendedProducts = (
  options?: Omit<
    UseInfiniteQueryOptions<
      RecommendedProductsResponse,
      Error,
      InfiniteRecommendedProductsResponse
    >,
    "queryKey" | "queryFn"
  >
) => {
  return useInfiniteQuery<
    RecommendedProductsResponse,
    Error,
    InfiniteRecommendedProductsResponse
  >({
    queryKey: ["infiniteRecommendedProducts"],
    queryFn: async ({ pageParam = 1 }) => {
      const storeData = JSON.parse(localStorage.getItem("storeData") || "{}");
      const postData = transformData(storeData);
      const response = await api.post(
        "/api/v1/stores/anonymous-recommendations",
        {
          data: postData,
          page: pageParam,
          perPage: PRODUCTS_PERPAGE,
        }
      );
      return response.data;
    },
    getNextPageParam: (lastPage) => {
      if (lastPage?.data?.meta?.currentPage < lastPage?.data?.meta?.pageCount) {
        return lastPage?.data?.meta?.currentPage + 1;
      }
      return undefined;
    },
    ...options,
  });
};
