import CopyLink from "../assets/share_mediums/link.svg";
import Insta from "../assets/share_mediums/insta.svg";
import Twitter from "../assets/share_mediums/twitter.svg";
import Telegram from "../assets/share_mediums/telegram.svg";
import Message from "../assets/share_mediums/message.svg";
import Whatsapp from "../assets/share_mediums/whatsapp.svg";
import {
  InstapaperShareButton,
  TwitterShareButton,
  TelegramShareButton,
  WhatsappShareButton,
  EmailShareButton,
} from "react-share";

export interface IShareMedium {
  name: string;
  medium?: any;
  icon: string;
}
export const shareMediums = [
  {
    bylink: {
      name: "Copy Link",
      icon: CopyLink,
    },
    instagram: {
      name: "Instagram",
      medium: InstapaperShareButton,
      icon: Insta,
    },
    twitter: {
      name: "Twitter",
      medium: TwitterShareButton,
      icon: Twitter,
    },
    tel: {
      name: "Telegram",
      medium: TelegramShareButton,
      icon: Telegram,
    },
    email: {
      name: "Message",
      medium: EmailShareButton,
      icon: Message,
    },
    whatsapp: {
      name: "Whatsapp",
      medium: WhatsappShareButton,
      icon: Whatsapp,
    },
  },
];
