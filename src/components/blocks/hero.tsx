import { Store } from "@/models/Store";
import { FiPhone } from "react-icons/fi";
import { MdMailOutline } from "react-icons/md";
import { VscWand } from "react-icons/vsc";
import IconWithText from "../icon-with-text";
import ShopLogo from "../shop-logo";
import { Button } from "../ui/button";
import { stringToSlug } from "@/lib/stringToSlug";

interface IHeroProps {
  store: Store;
}

function Hero({ store }: IHeroProps) {
  return (
    <div className="mt-10 mb-16 sm:flex sm:items-center gap-x-8 ">
      <div className="flex justify-center items-center h-full pb-5">
        <ShopLogo
          logoImg={store.logo}
          alt={store.name}
          size={"default"}
          className="sm:w-52 sm:h-52  shadow-xl"
        />
      </div>
      <div>
        <h1 className="text-xl sm:text-3xl">{store.name}</h1>
        <Paragraph>{store.bio}</Paragraph>
        <div className="py-2 flex flex-col gap-y-2 justify-start sm:items-start">
          <IconWithText text={store.phoneNumber}>
            <FiPhone />
            <p className="text-sm">{store.phoneNumber}</p>
          </IconWithText>
          <IconWithText text={store.email}>
            <MdMailOutline />
            <p className="text-sm">{store.email}</p>
          </IconWithText>
          <IconWithText text={`${window.location.origin}/${store.link}`}>
            <p className="text-sm text-[#62ADF1]">
              {`${window.location.origin}/${stringToSlug(store.name)}`}
            </p>
          </IconWithText>
          <Button className="flex gap-x-2 items-center" size={"lg"}>
            <VscWand size={18} />
            Get business card
          </Button>
        </div>
      </div>
    </div>
  );
}

function Paragraph({ children }: { children: string }) {
  return (
    <p className="text-[#555] leading-7 text-sm sm:text-md pb-1">{children}</p>
  );
}

export default Hero;
