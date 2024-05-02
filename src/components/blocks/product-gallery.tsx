import { useState } from "react";
import Tab from "../tab";
import Gallery from "../gallery";

export interface IProducts {
  id: number;
  link: string;
  type: string;
}
function ProductGallery() {
  const [activeTab, setActiveTab] = useState<string>("all");
  const items: IProducts[] = [
    {
      id: 1,
      link: "https://images.unsplash.com/photo-1528158737955-bd50edbb9a85?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      type: "video",
    },
    {
      id: 2,
      link: "https://images.unsplash.com/photo-1528740561666-dc2479dc08ab?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29jb251dCUyMGJvdHRsZXxlbnwwfHwwfHx8MA%3D%3D",
      type: "image",
    },
    {
      id: 3,
      link: "https://images.unsplash.com/photo-1528158737955-bd50edbb9a85?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      type: "video",
    },
    {
      id: 4,
      link: "https://images.unsplash.com/photo-1528740561666-dc2479dc08ab?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29jb251dCUyMGJvdHRsZXxlbnwwfHwwfHx8MA%3D%3D",
      type: "image",
    },
    {
      id: 5,
      link: "https://images.unsplash.com/photo-1528740561666-dc2479dc08ab?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29jb251dCUyMGJvdHRsZXxlbnwwfHwwfHx8MA%3D%3D",
      type: "image",
    },
    {
      id: 6,
      link: "https://images.unsplash.com/photo-1528158737955-bd50edbb9a85?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      type: "video",
    },
    {
      id: 7,
      link: "https://images.unsplash.com/photo-1528158737955-bd50edbb9a85?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      type: "video",
    },
    {
      id: 8,
      link: "https://images.unsplash.com/photo-1528740561666-dc2479dc08ab?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29jb251dCUyMGJvdHRsZXxlbnwwfHwwfHx8MA%3D%3D",
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
        <Tab activeTab={activeTab} handleTabClick={handleTabClick} tab="image">
          Photos
        </Tab>
        <Tab activeTab={activeTab} handleTabClick={handleTabClick} tab="video">
          Videos
        </Tab>
      </div>
      <Gallery products={filteredItems} />
    </div>
  );
}

export default ProductGallery;
