import { MdCancel } from "react-icons/md";
import { Button } from "../ui/button";
import { shareMediums } from "@/constants/data-constants";
import Medium from "./medium";
import {
  InstapaperShareButton,
  TwitterShareButton,
  TelegramShareButton,
  EmailShareButton,
  WhatsappShareButton,
} from "react-share";
import { copyToClipboard } from "@/lib/copyToClipboard";

type TShareProps = {
  shareUrl: string;
  closePopUp: (val: boolean) => void;
};

const Share = ({ closePopUp, shareUrl }: TShareProps) => {
  const medium = shareMediums[0];
  return (
    <div>
      <div className="flex items-center justify-between pb-3">
        <p className="text-md">Share Post</p>
        <Button variant={"ghost"} size={"sm"} onClick={() => closePopUp(false)}>
          <MdCancel size={20} />
        </Button>
      </div>
      <div className="w-full flex flex-wrap gap-x-4 gap-y-5">
        <div onClick={() => copyToClipboard(shareUrl)}>
          <Medium medium={medium.bylink} />
        </div>
        <InstapaperShareButton url={shareUrl}>
          <Medium medium={medium.instagram} />
        </InstapaperShareButton>
        <TwitterShareButton url={shareUrl}>
          <Medium medium={medium.twitter} />
        </TwitterShareButton>
        <TelegramShareButton url={shareUrl}>
          <Medium medium={medium.tel} />
        </TelegramShareButton>
        <EmailShareButton url={shareUrl}>
          <Medium medium={medium.email} />
        </EmailShareButton>
        <WhatsappShareButton url={shareUrl}>
          <Medium medium={medium.whatsapp} />
        </WhatsappShareButton>
      </div>
    </div>
  );
};

export default Share;
