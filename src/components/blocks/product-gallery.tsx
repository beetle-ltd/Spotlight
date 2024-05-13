import { useState } from "react";
import Tab from "../tab";
import Gallery from "../gallery";
import { Products } from "@/constants/products-constants";
import { AttachmentType } from "@/models/enums";

export type TTab = "ALL" | "PICTURE" | "VIDEO";

function ProductGallery() {
  const [activeTab, setActiveTab] = useState<TTab>("ALL");

  const handleTabClick = (tab: TTab) => {
    setActiveTab(tab);
  };

  const filteredProducts =
    activeTab === "ALL"
      ? Products
      : Products.filter((product) => product.attachments[0].type === activeTab);

  return (
    <div className="w-full sm:w-[70%] mt-10 mx-auto ">
      <div className="flex flex-row gap-x-3 mb-4 w-full  border-b-[.05px] border-gray-400 justify-center">
        <Tab activeTab={activeTab} handleTabClick={handleTabClick} tab="ALL">
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
      <Gallery products={filteredProducts} />
    </div>
  );
}

export default ProductGallery;
