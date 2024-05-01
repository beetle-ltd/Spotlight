import { useState } from "react";
import Tab from "../tab";

function ProductGallery() {
  const [activeTab, setActiveTab] = useState<string>("all");
  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  // const filteredItems =
  //   activeTab === "all"
  //     ? items
  //     : items.filter((item) => item.type === activeTab);

  return (
    <div className="w-full sm:w-[70%] mt-10 ">
      <div className="flex flex-row gap-x-3 mb-4 w-full  border-b rounded-md border-gray-600 justify-center">
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
    </div>
  );
}

export default ProductGallery;
