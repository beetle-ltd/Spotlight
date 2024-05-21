import { Container } from "@/App";
import Gallery from "@/components/gallery";
import Logo from "@/components/logo";
import { BASE_URL } from "@/constants/api-constants.ts";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { LuSearch } from "react-icons/lu";

import { toast } from "@/components/ui/use-toast.ts";

export default function Explore() {
  const id = localStorage.getItem("store_id") || "";
  const fetchRecommendedProducts = async () => {
    try {
      const response = await axios.get(
        `${BASE_URL}/api/v1/stores/links/${id}/product-recommendations?page=1&perPage=300`
      );
      if (response.statusText === "OK") {
        return response.data;
      }
    } catch (error) {
      console.log(error);
    }
  };
  const { data, error, isLoading } = useQuery({
    queryKey: ["fetchRecommendedProducts"],
    queryFn: fetchRecommendedProducts,
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
  const products = store.data;

  return (
    <div>
      <Container>
        <div className="flex flex-col gap-y-10 items-center py-5">
          <div className="hidden sm:block">
            <Logo url={`/stores/${id}`} />
          </div>
          <div className="flex items-center bg-gray-100 p-2 sm:p-4 w-full rounded-md text-gray-500">
            <div className="flex flex-1 items-center gap-x-3">
              <LuSearch size={18} className="cursor-pointer" />
              <input
                type="text"
                placeholder="Search..."
                className="w-full h-full appearance-none bg-transparent outline-none"
              />
            </div>
            <p>
              <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
                <span className="text-xs">⌘</span>K
              </kbd>
            </p>
          </div>
        </div>
      </Container>

      <div className="w-full sm:w-[70%] mt-10 mx-auto ">
        <Gallery products={products} />
      </div>
    </div>
  );
}
