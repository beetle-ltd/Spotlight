import { useState } from "react";
import Tab from "../tab";
import Gallery from "../gallery";

export interface IProducts {
  id: number;
  type: string;
}
function ProductGallery() {
  const [activeTab, setActiveTab] = useState<string>("all");
  const items: IProducts[] = [
    {
      id: 1,
      type: "video",
    },
    {
      id: 2,
      type: "image",
    },
    {
      id: 3,
      type: "video",
    },
    {
      id: 4,
      type: "image",
    },
    {
      id: 5,
      type: "image",
    },
    {
      id: 6,
      type: "video",
    },
    {
      id: 7,
      type: "video",
    },
    {
      id: 8,
      type: "image",
    },
  ];

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  const filteredItems =
    activeTab === "all"
      ? items
      : items.filter((item) => item.type === activeTab);

  return (
    <div className="w-full sm:w-[70%] mt-10 mx-auto ">
      <div className="flex flex-row gap-x-3 mb-4 w-full  border-b-[.05px] border-gray-400 justify-center">
        <Tab activeTab={activeTab} handleTabClick={handleTabClick} tab="all">
          All
        </Tab>
        <Tab activeTab={activeTab} handleTabClick={handleTabClick} tab="photos">
          Photos
        </Tab>
        <Tab activeTab={activeTab} handleTabClick={handleTabClick} tab="videos">
          Videos
        </Tab>
      </div>
      <Gallery products={filteredItems} />
    </div>
  );
}

export default ProductGallery;
