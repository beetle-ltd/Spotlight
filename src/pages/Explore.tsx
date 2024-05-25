import { Container } from "@/App";
import Gallery from "@/components/gallery";
import Logo from "@/components/logo";
import ModalManager from "@/components/modal-manager";
import { toast } from "@/components/ui/use-toast.ts";
import { BASE_URL } from "@/constants/api-constants.ts";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { LuSearch } from "react-icons/lu";
import { useParams } from "react-router-dom";
export default function Explore() {
  const storeUsername = localStorage.getItem("store_name") || "";
  const { productId } = useParams();

  // const {
  //   bindInput,
  //   bindOptions,
  //   bindOption,
  //   isBusy,
  //   suggestions,
  //   selectedIndex,
  // } = useAutoComplete({
  //   onChange: (value) => console.log(value),
  //   delay: 1000,
  //   source: async (search) => {
  //     try {
  //       const res = await fetch(
  //         `${process.env.apiBase}/user/search?q=${search}`
  //       );
  //       const data = await res.json();
  //       return data.map((d) => ({ value: d._id, label: d.name }));
  //     } catch (e) {
  //       return [];
  //     }
  //   },
  // });
  const fetchRecommendedProducts = async () => {
    try {
      const response = await axios.get(
        `${BASE_URL}/api/v1/stores/links/product-recommendations?storeUsername=${storeUsername}&page=1&perPage=300`
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
      {productId && <ModalManager productId={productId} />}
      <Container>
        <div className="flex flex-col gap-y-10 items-center py-5">
          <div className="block">
            <Logo url={`/${storeUsername}`} />
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
