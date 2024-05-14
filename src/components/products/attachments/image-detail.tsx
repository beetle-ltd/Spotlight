import { Attachment } from "@/models/Attachment";
import Image from "./image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

type TImageDetailProps = {
  productName: string;
  attachments: Attachment[];
};
const ImageDetail = ({ productName, attachments }: TImageDetailProps) => {
  const attachmentSize = attachments.length;
  if (attachmentSize <= 1) {
    return <Image src={attachments[0].url} alt={productName} />;
  }

  return (
    <Carousel>
      <CarouselContent>
        {attachments.map((attachment) => (
          <CarouselItem key={attachment.id}>
            <Image
              src={attachment.url}
              alt={productName}
              styles="sm:h-[600px]"
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="ml-14" />
      <CarouselNext className="mr-14" />
    </Carousel>
  );
};

export default ImageDetail;
