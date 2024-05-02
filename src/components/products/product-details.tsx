import { IoPricetag, IoShareSocialOutline } from "react-icons/io5";
import { VscWand } from "react-icons/vsc";
import { IProducts } from "../blocks/product-gallery";
import InStock from "../instock";
import { Button } from "../ui/button";

type Props = {
  item: IProducts;
};

const ProductDetails = ({ item }: Props) => {
  return (
    <div className="sm:flex h-full">
      <div className="w-full h-full relative">
        <img
          src={item.link}
          className="max-h-[500px] xl:max-h-[700px] aspect-[3/4] w-full object-cover"
        />
        <InStock />
      </div>
      <div className="container sm:flex flex-col justify-center">
        <h1 className="text-3xl font-semibold">{item?.title}</h1>
        <p className="text-[#222] text-lg leading-7 pb-1">
          {item?.description}
        </p>
        <div className="flex gap-2 text-[#031734]">
          {item.categories &&
            item?.categories.map((c, idx) => <p key={idx}>#{c}</p>)}
        </div>
        <div className="flex items-center text-[#222] font-semibold text-xl gap-x-3 py-5">
          <IoPricetag />
          <p> &#8358;{item?.price || 50}</p>
        </div>
        <div className="flex items-center gap-x-3  pb-5">
          <Button className="items-center gap-3 w-full" size={"lg"}>
            <VscWand size={18} />
            Get business card
          </Button>
          <Button
            variant={"ghost"}
            size={"lg"}
            className="gap-3 items-center w-full bg-gray-200"
          >
            <IoShareSocialOutline size={18} />
            Share
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
