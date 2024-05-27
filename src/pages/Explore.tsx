import { Container } from "@/App";
import Gallery from "@/components/gallery";
import Logo from "@/components/logo";
import ModalManager from "@/components/modal-manager";
import { toast } from "@/components/ui/use-toast.ts";
import { BASE_URL } from "@/constants/api-constants.ts";
import { useAutoComplete } from "@/hooks/use-autocomplete";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { LuSearch } from "react-icons/lu";
import { useParams } from "react-router-dom";

export default function Explore() {
  const storeUsername = localStorage.getItem("store_name") || "";
  const { productId } = useParams();

  const {
    textValue,
    bindInput,
    bindOptions,
    bindOption,
    isBusy,
    suggestions,
    selectedIndex,
  } = useAutoComplete({
    onChange: (value) => console.log(value),
    delay: 1000,
    source: async (search) => {
      try {
        const res = await axios.get(
          `${BASE_URL}/api/v1/stores/links/search-products?storeUsername=${storeUsername}&name=${search}`
        );
        const data = await res.data.data;
        return data;
      } catch (e) {
        return [];
      }
    },
  });

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
        <div className="flex flex-col gap-y-10 items-center py-5 sm:py-10">
          <div className="block">
            <Logo url={`/${storeUsername}`} />
          </div>
          <div className="flex items-center relative bg-gray-100 p-2 sm:p-4 w-full rounded-md text-gray-500">
            <div className="w-full">
              <div className="flex items-center gap-x-2 w-full">
                <LuSearch size={20} />
                <input
                  placeholder="Search"
                  className="flex-grow outline-none bg-transparent"
                  {...bindInput}
                />
              </div>
              {textValue && (
                <ul
                  {...bindOptions}
                  className="w-full bg-white scroll-smooth absolute left-0 top-10 sm:top-16 z-20 max-h-[260px] overflow-x-hidden overflow-y-auto"
                >
                  {isBusy && (
                    <div className="w-4 h-4 border-2 border-dashed rounded-full border-gray-500 animate-spin mx-auto"></div>
                  )}
                  {suggestions.length === 0 && !isBusy && (
                    <li className="text-center">Not Found</li>
                  )}
                  {suggestions.map((_, index) => (
                    <li
                      className={
                        `flex items-center h-[40px] p-2 hover:bg-gray-200 cursor-pointer py-2 ` +
                        (selectedIndex === index && "bg-gray-200")
                      }
                      key={index}
                      {...bindOption}
                    >
                      <div className="flex items-center space-x-2">
                        {/* <HiUser /> */}

                        <div>
                          <img
                            src={suggestions[index].store.logo}
                            alt={suggestions[index].store.name}
                            className="h-6 w-6 rounded-full"
                          />
                        </div>
                        <p className="text-sm">{suggestions[index].name}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
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
