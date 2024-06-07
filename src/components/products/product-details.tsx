import { IProduct } from "@/models/Products";
import { useState } from "react";
import { IoPricetag, IoShareSocialOutline } from "react-icons/io5";
import { VscWand } from "react-icons/vsc";
import { useLocation, useParams } from "react-router-dom";
// import videoFile from "../../assets/videos/vid1.mp4";
import { AttachmentType } from "@/models/enums";
import ShopLogo from "../shop-logo";
import { Button } from "../ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import ImageDetail from "./attachments/image-detail";
import VideoDetail from "./attachments/video-detail";
import Share from "./share";

type TProductDetailsProps = {
  item: IProduct;
};

const ProductDetails = ({ item }: TProductDetailsProps) => {
  const [popup, setPopup] = useState<boolean>(false);
  const location = useLocation();
  const attachmentType = item.attachments[0].type;
  const currentPath = location.pathname;
  const { storeName } = useParams();
  const shareUrl = `${window.location.origin}/${
    currentPath === "/explore" ? item.store.username : storeName
  }/shared/${item.id}`;

  return (
    <div className="sm:grid grid-cols-[55%,45%] h-full border-0 ">
      <div className="w-full h-full relative rounded-md mb-5 sm:mb-0">
        {attachmentType === AttachmentType.VIDEO ? (
          <VideoDetail
            src={item.attachments[0].url}
            alt={item.name}
            hash={item.attachments[0].blurHash}
          />
        ) : (
          <ImageDetail productName={item.name} attachments={item.attachments} />
        )}

        {/* <InStock /> */}
      </div>
      <div className="container mx-auto text-justify block sm:flex flex-col justify-center">
        {currentPath === "/explore" && (
          <div className="flex self-start items-center gap-x-2 pb-5 py-3">
            <ShopLogo
              size={"sm"}
              logoImg={item.store.logo}
              alt="d"
              className={"w-8 h-8"}
            />
            <p className="text-sm sm:text-base hover:underline cursor-pointer">
              {item.store.name}
            </p>
          </div>
        )}

        <h1 className="text-2xl sm:text-2xl font-semibold">{item.name}</h1>
        <p className="text-[#222] text-sm sm:text-md leading-6 py-2">
          {item.description}
        </p>
        <div className="text-[#031734] flex flex-wrap text-xs text-justify">
          {item.categories &&
            item?.categories.map((c, idx) => (
              <p key={c + "-" + idx} className={"pr-1"}>
                #{c.trim()}
              </p>
            ))}
        </div>
        <div className="flex items-center text-[#222] font-semibold text-lg sm:text-xl gap-x-3 py-3 sm:py-3">
          <IoPricetag />
          <p> &#8358;{item.price}</p>
        </div>
        <div className="w-full grid grid-cols-2 items-center pb-5 gap-x-3">
          <Button className="items-center gap-x-3" size={"default"}>
            <VscWand size={16} />
            Get business card
          </Button>
          <Popover open={popup} onOpenChange={setPopup}>
            <PopoverTrigger asChild>
              <Button
                type="button"
                variant={"ghost"}
                size={"default"}
                className="gap-x-3 items-center bg-gray-200"
              >
                <IoShareSocialOutline size={18} />
                Share
              </Button>
            </PopoverTrigger>
            <PopoverContent>
              <Share closePopUp={(val) => setPopup(val)} shareUrl={shareUrl} />
            </PopoverContent>
          </Popover>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
