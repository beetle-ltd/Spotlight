import { useState } from "react";
import { IoPricetag, IoShareSocialOutline } from "react-icons/io5";
import { VscWand } from "react-icons/vsc";
import { useLocation } from "react-router-dom";
import videoFile from "../../assets/videos/vid1.mp4";
import { IProducts } from "../blocks/product-gallery";
import InStock from "../instock";
import ShopLogo from "../shop-logo";
import { Button } from "../ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import VideoDetail from "./attachments/video-detail";
import Share from "./share";

type Props = {
  item: IProducts;
};

const ProductDetails = ({ item }: Props) => {
  const [popup, setPopup] = useState<boolean>(false);
  const location = useLocation();

  return (
    <div className="sm:flex h-full border-0">
      <div className="w-full h-full relative rounded-md">
        {item.link.includes("mp4") ? (
          <VideoDetail src={videoFile} alt={item.title} />
        ) : (
          <img
            src={item.link}
            className="h-full w-full object-cover transition-all hover:scale-105 aspect-[3/4]"
          />
        )}

        {/* <InStock /> */}
      </div>
      <div className="container mx-auto text-justify sm:flex flex-col justify-center">
        {location.pathname === "/explore" && (
          <div className="flex self-start items-center gap-x-3 pt-3">
            <ShopLogo size={"sm"} />
            <p className="text-xl">Tiwa Hair</p>
          </div>
        )}

        <h1 className="text-3xl font-semibold">{item?.title}</h1>
        <p className="text-[#222] text-lg leading-7 pb-1">
          {item?.description}
        </p>
        <div className="flex gap-2 text-[#031734]">
          {item.categories &&
            item?.categories.map((c, idx) => <p key={idx}>#{c}</p>)}
        </div>
        <div className="flex items-center text-[#222] font-semibold text-xl gap-x-3 py-5">
          <IoPricetag />
          <p> &#8358;{item?.price || 50}</p>
        </div>
        <div className="w-full flex items-center pb-5 gap-x-3">
          <Button className="items-center gap-x-3" size={"default"}>
            <VscWand size={18} />
            Get business card
          </Button>
          <Popover open={popup} onOpenChange={setPopup}>
            <PopoverTrigger asChild>
              <Button
                variant={"ghost"}
                size={"default"}
                className="gap-x-3 items-center bg-gray-200"
              >
                <IoShareSocialOutline size={18} />
                Share
              </Button>
            </PopoverTrigger>
            <PopoverContent>
              <Share closePopUp={(val) => setPopup(val)} />
            </PopoverContent>
          </Popover>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
