import { IProduct } from "@/models/Products";
import { useState } from "react";
import { IoPricetag, IoShareSocialOutline } from "react-icons/io5";
import { VscWand } from "react-icons/vsc";
import { useLocation } from "react-router-dom";
// import videoFile from "../../assets/videos/vid1.mp4";
import { shareMediums } from "@/constants/data-constants";
import { AttachmentType } from "@/models/enums";
import { WhatsappShareButton } from "react-share";
import ShopLogo from "../shop-logo";
import { Button } from "../ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import ImageDetail from "./attachments/image-detail";
import VideoDetail from "./attachments/video-detail";
import Medium from "./medium";

type TProductDetailsProps = {
  item: IProduct;
};

const ProductDetails = ({ item }: TProductDetailsProps) => {
  const [popup, setPopup] = useState<boolean>(false);
  const location = useLocation();
  const attachmentType = item.attachments[0].type;

  return (
    <div className="sm:grid grid-cols-[55%,45%] h-full border-0 ">
      <div className="w-full h-full sm:h-[700px] relative rounded-md bg-green-600 mb-5 sm:mb-0">
        {attachmentType === AttachmentType.VIDEO ? (
          <VideoDetail src={item.attachments[0].url} alt={item.name} />
        ) : (
          <ImageDetail productName={item.name} attachments={item.attachments} />
        )}

        {/* <InStock /> */}
      </div>
      <div className="container mx-auto text-justify sm:flex flex-col justify-center">
        {location.pathname === "/explore" && (
          <div className="flex self-start items-center gap-x-2 pb-5">
            <ShopLogo size={"sm"} logoImg={item.store.logo} alt="d" />
            <p className="text-sm sm:text-xl">{item.store.name}</p>
          </div>
        )}

        <h1 className="text-2xl sm:text-3xl font-semibold">{item.name}</h1>
        <p className="text-[#222] text-sm sm:text-lg leading-7 pb-1">
          {item.description}
        </p>
        <div className="flex gap-2 text-[#031734] text-xs sm:text-sm">
          {item.categories &&
            item?.categories.map((c, idx) => <p key={c + "-" + idx}>#{c}</p>)}
        </div>
        <div className="flex items-center text-[#222] font-semibold text-lg sm:text-xl gap-x-3 py-3 sm:py-5">
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
                variant={"ghost"}
                size={"default"}
                className="gap-x-3 items-center bg-gray-200"
              >
                <IoShareSocialOutline size={18} />
                Share
              </Button>
            </PopoverTrigger>
            <PopoverContent>
              {/* <Share closePopUp={(val) => setPopup(val)} /> */}

              <div className="flex items-center justify-between pb-3">
                <WhatsappShareButton
                  url={`${window.location}/explore/${item.id}`}
                >
                  <Medium medium={shareMediums[0].whatsapp} />
                </WhatsappShareButton>
              </div>
            </PopoverContent>
          </Popover>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
