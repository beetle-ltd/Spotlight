import { IProduct } from "@/models/Products";
import { AttachmentType, CurrencyToSymbolMapping } from "@/models/enums";
import { IoPricetag } from "react-icons/io5";
import Image from "./attachments/image";
import Video from "./attachments/video";
import { ProductIcon } from "./product";

const ProductSingle = ({
  item,
  handleClick,
}: {
  item: IProduct;
  handleClick: (val: boolean) => void;
}) => {
  const attachmentType = item.attachments[0].type;
  const attachmentSize = item.attachments.length;
  return (
    <div
      key={item.id}
      className={`relative aspect-ratio w-[100%] bg-gray-200 overflow-hidden cursor-pointer ${
        attachmentType === AttachmentType.VIDEO ? "row-span-2" : "row-span-1"
      }`}
      style={{
        aspectRatio: attachmentType === AttachmentType.VIDEO ? "1/2" : "2/2",
      }}
      onClick={() => handleClick(true)}
    >
      {/* Replace with your actual content */}
      {/* <div className="w-full h-full bg-gray-400 animate-pulse">
          </div> */}

      <div className="flex items-center justify-center text-white text-xl gap-x-3 absolute inset-0 bg-black opacity-0 hover:opacity-75 transition-opacity duration-300">
        <IoPricetag />
        <p>
          {CurrencyToSymbolMapping[item.currency]} {item?.price}
        </p>
      </div>
      <div className="absolute top-2 right-4">
        <ProductIcon type={attachmentType} size={attachmentSize} />
      </div>
      {attachmentType === AttachmentType.VIDEO ? (
        <Video
          src={item.attachments[0].url}
          poster={item.attachments[0].pictureUrl || ""}
        />
      ) : (
        <Image
          src={item.attachments[0].url}
          alt={item.name}
          styles="transition-all hover:scale-105 aspect-[3/4]"
        />
      )}
    </div>
  );
};

export default ProductSingle;
