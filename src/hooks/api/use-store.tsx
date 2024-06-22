import { addOrUpdateStore } from "@/lib/localstorage";
import { Store } from "@/models/Store";
import api from "@/services/api.service";
import { UseQueryOptions, useQuery } from "@tanstack/react-query";

export const useGetStore = (
  username: string,
  options?: UseQueryOptions<Store>
) => {
  return useQuery<Store>({
    queryKey: ["fetchStore", username],
    queryFn: () =>
      api
        .get(`/api/v1/stores/links/search-username?username=${username}`)
        .then((res) => {
          addOrUpdateStore(username, res.data.data?.categories);
          return res.data.data;
        }),
    retry: 1,
    retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),
    ...options,
  });
};
