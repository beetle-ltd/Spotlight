import { Container } from "@/App";
import Gallery from "@/components/gallery";
import Logo from "@/components/logo";
import { toast } from "@/components/ui/use-toast.ts";
import { BASE_URL } from "@/constants/api-constants.ts";
import { useAutoComplete } from "@/hooks/use-autocomplete";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { LuSearch } from "react-icons/lu";

export default function Explore() {
  const storeUsername = localStorage.getItem("store_name") || "";
  const storeData = localStorage.getItem("storeData") || {};
  const PRODUCTS_PERPAGE = 100;

  const {
    textValue,
    bindInput,
    bindOptionsKey,
    bindOptionsStores,
    bindOptionKey,
    bindOptionStore,
    isBusy,
    suggestions,
    selectedIndex,
    isProductError,
    isProductLoading,
    productsByKeyword,
  } = useAutoComplete({
    // onChange: (value) => console.log(value),
    delay: 1000,
    source: async (search) => {
      try {
        const res = await axios.get(
          `${BASE_URL}/api/v1/stores/explore?name=${search}`
        );
        const keywords = await res.data.data.keywords;
        const stores = await res.data.data.stores;
        return {
          keywords,
          stores,
        };
      } catch (e) {
        return [];
      }
    },
  });

  const fetchRecommendedProducts = async () => {
    const RECOMMENDED_URL = `${BASE_URL}/api/v1/stores/links/product-recommendations`;
    try {
      const response = await axios.post(RECOMMENDED_URL, {
        storeData,
        page: 1,
        perPage: PRODUCTS_PERPAGE,
      });
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

  if (error || isProductError) {
    toast({
      description: error.message,
    });
  }

  if (isLoading || isProductLoading) {
    return "lOADING PLEASE WAIT";
  }
  const store = data.data;
  const products = store.data;

  return (
    <div>
      <Container>
        <div className="flex flex-col gap-y-10 items-center py-5 sm:py-10">
          <div className="block">
            <Logo url={`/${storeUsername}`} />
          </div>
          <div className="flex items-center relative bg-gray-100 p-3 sm:p-4 w-full rounded-md text-gray-500">
            <div className="w-full">
              <div className="flex items-center gap-x-2 w-full">
                <LuSearch size={20} />
                <input
                  placeholder="Search"
                  className="flex-grow outline-none bg-transparent"
                  {...bindInput}
                />
              </div>
              {/* {textValue && (
                <ul
                  {...bindOptions}
                  className="shadow-lg w-full bg-white scroll-smooth absolute left-0 top-12 sm:top-14 z-20 max-h-[260px] overflow-x-hidden overflow-y-auto"
                >
                  {isBusy && (
                    <div className="w-4 h-4 border-2 border-dashed rounded-full border-gray-500 animate-spin mx-auto my-5"></div>
                  )}
                  {suggestions.keywords &&
                    suggestions.keywords.map((_, index) => (
                      <li
                        className={
                          `flex items-center h-[40px] p-2 hover:bg-gray-200 cursor-pointer py-2 ` +
                          (selectedIndex === index && "bg-gray-200")
                        }
                        key={index}
                        {...bindOption}
                      >
                        <div className="flex items-center space-x-2">
                          <div>
                            <LuSearch size={20} />
                          </div>
                          <p className="text-sm">
                            {suggestions.keywords[index].name}
                          </p>
                        </div>
                      </li>
                    ))}
                  {suggestions.stores &&
                    suggestions.stores.map((_, index) => (
                      <li
                        className={
                          `flex items-center h-[40px] p-2 hover:bg-gray-200 cursor-pointer py-2 ` +
                          (selectedIndex === index && "bg-gray-200")
                        }
                        key={index}
                        {...bindOption}
                      >
                        <div className="flex items-center space-x-2">
                          <div>
                            <img
                              src={suggestions.stores[index].logo}
                              alt={suggestions.stores[index].name}
                              className={"w-6 h-6 rounded-full"}
                            />
                          </div>
                          <p className="text-sm">
                            {suggestions.stores[index].name}
                          </p>
                        </div>
                      </li>
                    ))}
                </ul>
              )} */}
              {textValue && (
                <div className="shadow-lg w-full bg-white scroll-smooth absolute left-0 top-12 sm:top-14 z-20 max-h-[260px] overflow-x-hidden overflow-y-auto">
                  {isBusy && (
                    <div className="w-4 h-4 border-2 border-dashed rounded-full border-gray-500 animate-spin mx-auto my-5"></div>
                  )}
                  {suggestions.keywords && (
                    <ul {...bindOptionsKey} id="keywordsList">
                      {suggestions.keywords.map((_, index) => (
                        <li
                          className={
                            `flex items-center h-[40px] p-2 hover:bg-gray-200 cursor-pointer py-2 ` +
                            (selectedIndex === index && "bg-gray-200")
                          }
                          key={index}
                          id={`keywordListItem-${index}`}
                          {...bindOptionKey}
                        >
                          <div className="flex items-center space-x-2">
                            <div>
                              <LuSearch size={20} />
                            </div>
                            <p className="text-sm">
                              {suggestions.keywords[index].name}
                            </p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  )}
                  {suggestions.stores && (
                    <ul {...bindOptionsStores} id="storesList">
                      {suggestions.stores.map((_, index) => (
                        <li
                          className={
                            `flex items-center h-[40px] p-2 hover:bg-gray-200 cursor-pointer py-2 ` +
                            (selectedIndex === index && "bg-gray-200")
                          }
                          key={index}
                          id={`storeListItem-${index}`}
                          {...bindOptionStore}
                        >
                          <div className="flex items-center space-x-2">
                            <div>
                              <img
                                src={suggestions.stores[index].logo}
                                alt={suggestions.stores[index].name}
                                className={"w-6 h-6 rounded-full"}
                              />
                            </div>
                            <p className="text-sm">
                              {suggestions.stores[index].name}
                            </p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
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
        {productsByKeyword &&
        productsByKeyword.data &&
        productsByKeyword?.data.length > 0 ? (
          <Gallery products={productsByKeyword?.data} />
        ) : (
          <Gallery products={products} />
        )}
      </div>
    </div>
  );
}
