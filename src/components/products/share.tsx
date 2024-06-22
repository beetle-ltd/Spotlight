import { MdCancel } from "react-icons/md";
import { Button } from "../ui/button";
import { shareMediums } from "@/constants/data-constants";
import Medium from "./medium";
import {
  TwitterShareButton,
  TelegramShareButton,
  EmailShareButton,
  WhatsappShareButton,
} from "react-share";
import { copyToClipboard } from "@/lib/copyToClipboard";
import notify, {
  TEvent,
} from "@/services/notification-service/notification.service";
import { IProduct } from "@/models/Products";

type TShareProps = {
  shareUrl: string;
  closePopUp: (val: boolean) => void;
  storeName: string;
  item: IProduct;
};

const Share = ({ closePopUp, shareUrl, storeName, item }: TShareProps) => {
  const medium = shareMediums[0];

  const handleShare = async (medium: { name: string }) => {
    await notify(TEvent.SHARED, {
      storeUsername: storeName,
      productId: item.id,
      productName: item.name,
      medium: medium.name,
    });
  };

  const handleInstagramShare = () => {
    window.open(
      `https://www.instagram.com/share?url=${encodeURIComponent(shareUrl)}`,
      "_blank"
    );
    handleShare({ name: "Instagram" });
  };

  return (
    <div>
      <div className="flex items-center justify-between pb-3">
        <p className="text-md">Share Post</p>
        <Button variant={"ghost"} size={"sm"} onClick={() => closePopUp(false)}>
          <MdCancel size={20} />
        </Button>
      </div>
      <div className="w-full flex flex-wrap gap-x-4 gap-y-5">
        <div
          onClick={() => {
            copyToClipboard(shareUrl);
            handleShare({ name: "Link" });
          }}
        >
          <Medium medium={medium.bylink} />
        </div>
        <div onClick={handleInstagramShare}>
          <Medium medium={medium.instagram} />
        </div>
        <TwitterShareButton
          url={shareUrl}
          onShareWindowClose={() => handleShare({ name: "Twitter" })}
        >
          <Medium medium={medium.twitter} />
        </TwitterShareButton>
        <TelegramShareButton
          url={shareUrl}
          onShareWindowClose={() => handleShare({ name: "Telegram" })}
        >
          <Medium medium={medium.tel} />
        </TelegramShareButton>
        <EmailShareButton
          url={shareUrl}
          onShareWindowClose={() => handleShare({ name: "Email" })}
        >
          <Medium medium={medium.email} />
        </EmailShareButton>
        <WhatsappShareButton
          url={shareUrl}
          onShareWindowClose={() => handleShare({ name: "WhatsApp" })}
        >
          <Medium medium={medium.whatsapp} />
        </WhatsappShareButton>
      </div>
    </div>
  );
};

export default Share;
