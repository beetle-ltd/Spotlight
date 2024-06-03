import { BASE_URL } from "@/constants/api-constants";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useParams } from "react-router-dom";

export const useProductDetails = () => {
  const { productId } = useParams();
  const {linkId} = useParams()
  console.log(linkId, productId)

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

  const fetchProductByLinkId = async () => {
    try {
        const response = await axios.get(
            `${BASE_URL}/api/v1/stores/links/product-share?link=${linkId}`)
      console.log(response)
        return response.data;
    }catch (error:any) {
        throw new Error(error.message);
    }
  }
  const qFn = linkId ? fetchProductByLinkId : fetchProductById

  const { data, isLoading, error } = useQuery({
    queryKey: ["fetchProductByLinkId"],
    queryFn:qFn,
    enabled: !!productId,
  });

  return { productData: data?.data, isLoading, error };
};
