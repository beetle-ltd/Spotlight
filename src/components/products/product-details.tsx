import { IProduct } from "@/models/Products";
import { useState } from "react";
import { IoShareSocialOutline } from "react-icons/io5";
import { VscWand } from "react-icons/vsc";
import { Link, useLocation, useParams } from "react-router-dom";
// import videoFile from "../../assets/videos/vid1.mp4";
import { AttachmentType, CurrencyToSymbolMapping } from "@/models/enums";
import ShopLogo from "../shop-logo";
import { Button } from "../ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import ImageDetail from "./attachments/image-detail";
import VideoDetail from "./attachments/video-detail";
import Share from "./share";
import { trimAndCapitalize } from "@/lib/trimAndCapitalize";
type TProductDetailsProps = {
  item: IProduct;
};

const ProductDetails = ({ item }: TProductDetailsProps) => {
  const [popup, setPopup] = useState<boolean>(false);
  const location = useLocation();
  const attachmentType = item.attachments[0].type;
  const currentPath = location.pathname;
  const { storeName } = useParams();
  const _storeName =
    currentPath === "/explore" ? item.store.username : storeName;
  const shareUrl = `${window.location.origin}/${_storeName}/shared/${item.id}`;

  return (
    <div className="sm:grid grid-cols-[60%,40%] h-full border-0 ">
      <div className="w-full h-full relative mb-5 sm:mb-0">
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
      <div className="w-[90%] md:container mx-auto text-justify block sm:flex flex-col justify-center space-y-3 md:space-y-5">
        {currentPath === "/explore" && (
          <div className="flex self-start items-center gap-x-2">
            <ShopLogo
              size={"sm"}
              logoImg={item.store.logo}
              alt="d"
              className={"w-6 h-6 sm:w-8 sm:h-8"}
            />
            <Link to={`/${item.store.username}`}>
              <p className="text-xs sm:text-sm hover:underline cursor-pointer">
                {trimAndCapitalize(item.store.name)}
              </p>
            </Link>
          </div>
        )}

        <div>
          <p className="text-xl sm:text-2xl">{trimAndCapitalize(item.name)}</p>
          <p className="text-[#222] text-sm sm:text-md leading-6 py-2">
            {trimAndCapitalize(item.description)}
          </p>
        </div>

        <div className="flex items-center text-[#222]  text-xl sm:text-3xl gap-x-3">
          <p>
            {CurrencyToSymbolMapping[item.currency]} {item?.price}
          </p>
        </div>
        <div className="w-full grid grid-cols-2 items-center  pb-5 gap-x-2">
          <Button className="items-center gap-x-3 rounded-full p-0" size={"lg"}>
            <VscWand size={18} className="hidden md:block" />
            Download Card
          </Button>
          <Popover open={popup} onOpenChange={setPopup}>
            <PopoverTrigger asChild>
              <Button
                type="button"
                variant={"outline"}
                size={"lg"}
                className="gap-x-3 items-center rounded-full p-0"
              >
                <IoShareSocialOutline size={18} className="hidden md:block" />
                Share
              </Button>
            </PopoverTrigger>
            <PopoverContent>
              <Share
                closePopUp={(val) => setPopup(val)}
                shareUrl={shareUrl}
                storeName={_storeName}
                item={item}
              />
            </PopoverContent>
          </Popover>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
