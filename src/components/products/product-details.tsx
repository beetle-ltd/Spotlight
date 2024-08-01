import { IProduct } from "@/models/Products";
import { Link, useLocation, useParams } from "react-router-dom";
// import videoFile from "../../assets/videos/vid1.mp4";
import { getWhatsAppLink } from "@/lib/getWhatsappLink";
import { trimAndCapitalize } from "@/lib/trimAndCapitalize";
import { AttachmentType, CurrencyToSymbolMapping } from "@/models/enums";
import { SEO } from "@/seo";
import { BsWhatsapp } from "react-icons/bs";
import ShopLogo from "../shop-logo";
import { Button } from "../ui/button";
import { toast } from "../ui/use-toast";
import ImageDetail from "./attachments/image-detail";
import VideoDetail from "./attachments/video-detail";
import Share from "./share";
type TProductDetailsProps = {
  item: IProduct;
  storePhone: string;
};

const ProductDetails = ({ item, storePhone }: TProductDetailsProps) => {
  // const [loading, setLoading] = useState(false);

  const location = useLocation();
  const attachmentType = item.attachments[0].type;
  const currentPath = location.pathname;
  const { storeName } = useParams();
  const _storeName =
    currentPath === "/explore" ? item.store.username : storeName;
  const shareUrl = `${window.location.origin}/${_storeName}/shared/${item.id}`;

  const handleSendMessage = (productName: string) => {
    const message = `Hey there! 👋 I just spotted ${productName} on your website on **Spotlight**. 🛍️✨ Can we chat about it? 😊`;
    const whaLink = getWhatsAppLink(storePhone ?? "", message);
    if (whaLink == "no-link") {
      toast({
        description: "No Phone Number",
      });
      return;
    }
    window.open(whaLink, "_blank");
  };
  // const downloadImage = (imageUrl: string) => {
  //   setLoading(true);
  //   fetch(imageUrl)
  //     .then((response) => response.blob())
  //     .then((blob) => {
  //       const url = window.URL.createObjectURL(blob);
  //       const link = document.createElement("a");
  //       link.href = url;
  //       link.download = "bloom_main.png"; // or any other name you want
  //       document.body.appendChild(link);
  //       link.click();
  //       document.body.removeChild(link);
  //       window.URL.revokeObjectURL(url);
  //       setLoading(false);
  //     })
  //     .catch((error) => {
  //       console.error("Error downloading image:", error);
  //       setLoading(false);
  //     });
  // };

  return (
    <>
      <SEO
        title={trimAndCapitalize(item.name)}
        description={trimAndCapitalize(item.description)}
        image={
          item.attachments[0].type === AttachmentType.VIDEO
            ? item.attachments[0].pictureUrl
            : item.attachments[0].url
        }
        url={`https://myspotlight.me/${item?.store?.name || storeName}/shared/${
          item.id
        }`}
        currency={CurrencyToSymbolMapping[item.currency]}
        price={item.price}
      />
      <div className="sm:grid grid-cols-[60%,40%] h-full border-0 ">
        <div className="w-full h-full relative mb-5 sm:mb-0">
          {attachmentType === AttachmentType.VIDEO ? (
            <VideoDetail
              src={item.attachments[0].url}
              alt={item.name}
              hash={item.attachments[0].blurHash}
            />
          ) : (
            <ImageDetail
              productName={item.name}
              attachments={item.attachments}
            />
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
            <p className="text-xl sm:text-2xl">
              {trimAndCapitalize(item.name)}
            </p>
            <p className="text-[#222] text-sm sm:text-md leading-6 py-2">
              {trimAndCapitalize(item.description)}
            </p>
          </div>

          <div className="flex items-center text-[#222]  text-3xl sm:text-3xl gap-x-3">
            <p>
              {CurrencyToSymbolMapping[item.currency]} {item?.price}
            </p>
          </div>
          <div className="w-full grid grid-cols-2 items-center  pb-5 gap-x-2">
            <Button
              className="items-center gap-x-3 rounded-full p-0"
              size={"lg"}
              onClick={() => handleSendMessage(item.name)}
            >
              <BsWhatsapp size={18} className="hidden md:block" />
              Send a Message
            </Button>
            <Share shareUrl={shareUrl} storeName={_storeName} item={item} />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
