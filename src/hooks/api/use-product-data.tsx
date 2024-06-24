import api from "@/services/api.service";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

export const useProductDetails = () => {
  const { productId } = useParams();

  const { data, isLoading, error } = useQuery({
    queryKey: ["fetchProductByLinkId"],
    queryFn: () =>
      api.get(`/api/v1/stores/products/${productId}`).then((res) => res.data),
    enabled: !!productId,
  });

  return { productData: data?.data, isLoading, error };
};
