import { FiPhone } from "react-icons/fi";
import ShopLogo from "../shop-logo";
import IconWithText from "../icon-with-text";
import { MdMailOutline } from "react-icons/md";
import { Button } from "../ui/button";
import { VscWand } from "react-icons/vsc";

function Hero() {
  return (
    <div className="my-10 sm:flex sm:items-start gap-x-8">
      <div className="flex justify-center">
        <ShopLogo className="sm:p-10" />
      </div>
      <div>
        <h1 className="text-xl sm:text-3xl">Tiwa Hair</h1>
        <Paragraph>
          Tiwahair is a generative hair business that import synthetic, natural
          ,brazillian made hair accessories.
        </Paragraph>
        <Paragraph>
          We are the best dealers in hair products from chinese hair to indian
          and ghanian hair. We have custom hair gel and creams to help you.
        </Paragraph>
        <div className="mt-3 flex flex-col gap-y-2 justify-start sm:items-start">
          <IconWithText text="+234-000-000-000">
            <FiPhone />
            <p className="text-sm">+234-000-000-000</p>
          </IconWithText>
          <IconWithText text="mail@mail.com">
            <MdMailOutline />
            <p className="text-sm">mail@mail.com</p>
          </IconWithText>
          <IconWithText text="https://spotlight.com/tiwahair">
            <p className="text-sm text-[#62ADF1]">
              https://spotlight.com/tiwahair
            </p>
          </IconWithText>
          <Button className="mt-3 flex gap-x-2 items-center" size={"lg"}>
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
