import { useSearch } from "@/hooks/use-search";
import { IProduct } from "@/models/Products";
import { AttachmentType } from "@/models/enums";
import { useState } from "react";
import Gallery from "../gallery";
import Tab from "../tab";
import { Button } from "../ui/button";

export type TTab = "ALL" | AttachmentType;

interface IProductsGalleryProps {
  products: IProduct[];
  categories: string[];
}
function ProductGallery({ products, categories }: IProductsGalleryProps) {
  const [activeTab, setActiveTab] = useState<TTab>("ALL");
  const [category, setCategory] = useState<string>("");
  const { searchTerm } = useSearch();

  const handleTabClick = (tab: TTab) => {
    setActiveTab(tab);
  };

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCategory(e.target.value);
  };

  // filter by tabs
  const filteredProductsByTabs =
    activeTab === "ALL"
      ? products
      : products.filter((product) => product.attachments[0].type === activeTab);

  // filter by categories
  const filteredProductsByCategories =
    category === ""
      ? filteredProductsByTabs
      : filteredProductsByTabs.filter((product) =>
          product.categories.includes(category)
        );

  // filter by search
  const filteredProducts =
    searchTerm === ""
      ? filteredProductsByCategories
      : filteredProductsByCategories.filter(
          (product) =>
            product.name.includes(searchTerm?.toLowerCase()) ||
            product.description.includes(searchTerm?.toLowerCase())
        );

  const getNoResultsMessage = () => {
    if (searchTerm) {
      return `No products found matching "${searchTerm}".`;
    } else if (activeTab !== "ALL") {
      return `No ${activeTab.toLowerCase()} products found.`;
    } else if (category !== "") {
      return `No products found in the "${category}" category.`;
    } else {
      return "No products found matching your criteria.";
    }
  };

  return (
    <div className="w-full min-h-[40dvh] mt-10 mx-auto pb-10 ">
      <div className="mx-auto w-full md:w-[90%]">
        <div className="w-[90%] mx-auto sm:w-full">
          <div className="flex flex-col sm:flex-row w-full gap-y-4 sm:gap-y-0 sm:gap-x-4 mb-4 justify-between">
            <div
              id="tabs"
              className="flex flex-wrap items-cente gap-x-5 md:gap-x-2 w-full md:w-auto"
            >
              <Tab
                activeTab={activeTab}
                handleTabClick={handleTabClick}
                tab="ALL"
              >
                All
              </Tab>
              <Tab
                activeTab={activeTab}
                handleTabClick={handleTabClick}
                tab={AttachmentType.PICTURE}
              >
                Photos
              </Tab>
              <Tab
                activeTab={activeTab}
                handleTabClick={handleTabClick}
                tab={AttachmentType.VIDEO}
              >
                Videos
              </Tab>
            </div>
            <div id="categories" className="w-full sm:w-auto">
              <Button
                className="rounded-full hover:text-gray-800 w-full sm:w-auto"
                variant="outline"
              >
                <select
                  className="text-xs bg-transparent outline-none text-gray-500 hover:text-gray-800 w-full sm:max-w-[150px] cursor-pointer"
                  onChange={handleCategoryChange}
                >
                  <option value="">All Categories</option>
                  {categories.map((cx, idx) => (
                    <option value={cx} key={`${cx}-${idx}`}>
                      {cx}
                    </option>
                  ))}
                </select>
              </Button>
            </div>
          </div>
        </div>
        <Gallery
          products={filteredProducts}
          getNoResultsMessage={getNoResultsMessage}
        />
      </div>
    </div>
  );
}

export default ProductGallery;
