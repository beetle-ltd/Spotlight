import CopyLink from "../assets/share_mediums/link.svg";
import Insta from "../assets/share_mediums/insta.svg";
import Twitter from "../assets/share_mediums/twitter.svg";
import Telegram from "../assets/share_mediums/telegram.svg";
import Message from "../assets/share_mediums/message.svg";
import Whatsapp from "../assets/share_mediums/whatsapp.svg";
export interface IShareMedium {
  name: string;
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
      icon: Insta,
    },
    twitter: {
      name: "Twitter",
      icon: Twitter,
    },
    tel: {
      name: "Telegram",
      icon: Telegram,
    },
    email: {
      name: "Message",
      icon: Message,
    },
    whatsapp: {
      name: "Whatsapp",
      icon: Whatsapp,
    },
  },
];
