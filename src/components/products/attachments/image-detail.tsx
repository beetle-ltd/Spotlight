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
      <CarouselContent className="h-full">
        {attachments.map((attachment) => (
          <CarouselItem key={attachment.id} className="h-full">
            <Image src={attachment.url} alt={productName} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="ml-14" />
      <CarouselNext className="mr-14" />
    </Carousel>
  );
};

export default ImageDetail;
