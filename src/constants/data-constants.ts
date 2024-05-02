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
export const shareMediums: IShareMedium[] = [
  {
    name: "Copy Link",
    icon: CopyLink,
  },
  {
    name: "Instagram",
    icon: Insta,
  },
  {
    name: "Twitter",
    icon: Twitter,
  },
  {
    name: "Telegram",
    icon: Telegram,
  },
  {
    name: "Message",
    icon: Message,
  },
  {
    name: "Whatsapp",
    icon: Whatsapp,
  },
];
