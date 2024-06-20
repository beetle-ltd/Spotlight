import { Store } from "@/models/Store";
import { Dot } from "lucide-react";
import { BsWhatsapp } from "react-icons/bs";
import { VscWand } from "react-icons/vsc";
import IconWithText from "../icon-with-text";
import ShopLogo from "../shop-logo";
import { Button } from "../ui/button";

interface IHeroProps {
  store: Store;
}

function Hero({ store }: IHeroProps) {
  return (
    <div className="mt-10 mb-16 flex flex-col items-center justify-center">
      <div className="flex justify-center items-center h-full pb-10">
        <ShopLogo
          logoImg={store.logo}
          alt={store.name}
          size={"default"}
          className="sm:w-52 sm:h-52 h-44 w-44 grid place-items-center border-4 border-black"
        />
      </div>
      <div className={"max-w-[700px] text-center"}>
        <h1 className="text-3xl sm:text-3xl font-bold">{store.name}</h1>
        <Paragraph>{store.bio}</Paragraph>
        <div className="py-2 text-center flex flex-col justify-center items-center gap-y-5">
          <div className="flex gap-x-1 items-center">
            {store.phoneNumber && (
              <IconWithText text={store.phoneNumber}>
                <p className="text-xs text-gray-400">{store.phoneNumber}</p>
              </IconWithText>
            )}
            <Dot className="mb-1 text-gray-400" />
            <IconWithText text={store.email}>
              <p className="text-xs text-gray-400">{store.email}</p>
            </IconWithText>
          </div>

          <div className="flex items-center gap-x-5">
            <Button
              className="flex gap-x-2 items-center rounded-full"
              size={"lg"}
            >
              <VscWand size={18} />
              Get business card
            </Button>
            <Button
              className="flex gap-x-2 items-center rounded-full"
              size={"lg"}
              variant="outline"
            >
              <BsWhatsapp size={18} className="mb-1" />
              Send a Message
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

function Paragraph({ children }: { children: string }) {
  return (
    <p className="text-[#555] leading-7 text-sm sm:text-md pt-2 pb-1">
      {children}
    </p>
  );
}

export default Hero;
