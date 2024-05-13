import { Product } from "@/models/Products";
import { AttachmentType, Currency } from "@/models/enums";

export const Products: Product[] = [
  {
    id: 1,
    name: "Kate's Chilly Chicken Pies",
    price: "1999.99",
    currency: Currency.NGN,
    categories: ["Food and Beverages"],
    stocked: 50,
    attachments: [
      {
        id: 1,
        url: "https://example.com/product-video.mp4",
        pictureUrl: "https://example.com/product-video-thumbnail.jpg",
        type: AttachmentType.PICTURE,
      },
      {
        id: 2,
        url: "https://example.com/product-image.jpg",
        type: AttachmentType.PICTURE,
      },
    ],
  },
];
