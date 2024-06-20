import { IProduct } from "@/models/Products";
import { AttachmentType } from "@/models/enums";
import { useState } from "react";
import Gallery from "../gallery";
import Tab from "../tab";
import { Button } from "../ui/button";
import { Container } from "@/App";

export type TTab = "ALL" | AttachmentType;

interface IProductsGalleryProps {
  products: IProduct[];
}
function ProductGallery({ products }: IProductsGalleryProps) {
  const [activeTab, setActiveTab] = useState<TTab>("ALL");

  const handleTabClick = (tab: TTab) => {
    setActiveTab(tab);
  };

  const filteredProducts =
    activeTab === "ALL"
      ? products
      : products.filter((product) => product.attachments[0].type === activeTab);

  return (
    <div className="w-full mt-10 mx-auto pb-10 ">
      <Container>
        <div className="flex w-[90%] md:w-full flex-row gap-x-3 mb-4 mx-auto justify-between">
          <div id="tabs">
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
          <div id="categories">
            <Button
              className=" rounded-full hover:text-gray-800"
              variant="outline"
            >
              <select className="text-xs bg-transparent outline-none text-gray-500 hover:text-gray-800">
                <option>Categories</option>
                <option value="1">1</option>
              </select>
            </Button>
          </div>
        </div>
        <Gallery products={filteredProducts} />
      </Container>
    </div>
  );
}

export default ProductGallery;
