import { BASE_URL } from "@/constants/api-constants";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useParams } from "react-router-dom";

export const useProductDetails = () => {
  const { productId } = useParams();

  const fetchProductById = async () => {
    try {
      const response = await axios.get(
        `${BASE_URL}/api/v1/stores/products/${productId}`
      );
      return response.data;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      throw new Error(error.message);
    }
  };

  const { data, isLoading, error } = useQuery({
    queryKey: ["fetchProductByLinkId"],
    queryFn: fetchProductById,
    enabled: !!productId,
  });

  return { productData: data?.data, isLoading, error };
};
