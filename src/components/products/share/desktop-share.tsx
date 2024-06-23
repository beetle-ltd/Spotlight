import { shareMediums } from "@/constants/data-constants";
import { copyToClipboard } from "@/lib/copyToClipboard";
import { IProduct } from "@/models/Products";
import { MdCancel } from "react-icons/md";
import {
  EmailShareButton,
  TelegramShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share";
import { Button } from "../../ui/button";
import { toast } from "../../ui/use-toast";
import Medium from "../medium";
import { ShareMedium } from "@/hooks/use-share";

type TDesktopShareProps = {
  shareUrl: string;
  closePopUp: (val: boolean) => void;
  handleShare: ({ name }: { name: ShareMedium }) => void;
  storeName: string;
  item: IProduct;
};

const DesktopShare = ({
  closePopUp,
  shareUrl,
  handleShare,
}: TDesktopShareProps) => {
  const medium = shareMediums[0];

  const handleInstagramShare = () => {
    handleShare({ name: "Instagram" });
    if (!/Android|webOS|iPhone|iPad|iPod/i.test(navigator.userAgent)) {
      toast({
        description:
          "Instagram sharing works best on mobile devices. We've opened Instagram for you, but you'll need to manually copy and paste the content to share.",
      });
    }
  };

  return (
    <div className="">
      <div className="flex items-center justify-between pb-3">
        <p className="text-base">Share Post</p>
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

export default DesktopShare;
