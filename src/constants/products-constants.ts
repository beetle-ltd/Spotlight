import { IProduct } from "@/models/Products";
import { AttachmentType, Currency } from "@/models/enums";
import video1 from "../assets/videos/vid1.mp4";
import video2 from "../assets/videos/vid2.mp4";
import video3 from "../assets/videos/vid1.mp4";
export const Products: IProduct[] = [
  {
    id: "bde4f7c3-5c4e-4a78-a48e-2a1b9f082f8d",
    name: "Kate's Chilly Chicken Pies",
    price: "1999.99",
    currency: Currency.NGN,
    categories: ["Food and Beverages"],
    stocked: 50,
    attachments: [
      {
        id: "92a6e8f5-17e1-4fc7-ae4d-8b7f6dcf6a01",
        url: "https://www.thecookingcollective.com.au/wp-content/uploads/2023/10/chicken-pie-recipe.jpg",
        type: AttachmentType.PICTURE,
      },
      {
        id: "fa07e90a-632c-4f9f-96ec-61e85dce1c92",
        url: "https://www.stephiecooks.com/wp-content/uploads/2011/11/side-view-slice-chicken-pot-pie-hero.jpg",
        type: AttachmentType.PICTURE,
      },
    ],
  },
  {
    id: "b107eee8-7f42-4e93-8bb9-c977a7f69615",
    name: "Smartphone",
    description: "High-end smartphone with advanced features",
    price: "1999.99",
    currency: Currency.NGN,
    categories: ["Electronics", "Smartphones", "Gadgets"],
    stocked: 50,
    attachments: [
      {
        id: "942d8b0a-23e6-477f-952b-21b90cfc4a2e",
        url: "https://cloudfront-us-east-2.images.arcpublishing.com/reuters/MWG2II5FBJOWZJMS2ZJRD3QFCI.jpg",
        type: AttachmentType.PICTURE,
      },
      {
        id: "38ebf777-ca83-433d-a44d-f60854dc9b16",
        url: "https://cloudfront-us-east-2.images.arcpublishing.com/reuters/MWG2II5FBJOWZJMS2ZJRD3QFCI.jpg",
        type: AttachmentType.PICTURE,
      },
      {
        id: "38ebf777-ca83-433d-a44d-f60854dc9b16",
        url: "https://cloudfront-us-east-2.images.arcpublishing.com/reuters/MWG2II5FBJOWZJMS2ZJRD3QFCI.jpg",
        type: AttachmentType.PICTURE,
      },
    ],
  },
  {
    id: "dba78c99-45e2-45c4-ae4c-44868ad2c6f1",
    name: "Laptop",
    description: "Thin and lightweight laptop with powerful performance",
    price: "2199.99",
    currency: Currency.NGN,
    categories: ["Electronics", "Laptops", "Computers"],
    stocked: 15,
    attachments: [
      {
        id: "e01a30bc-f414-4b40-9e17-935d2f15d27f",
        url: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        type: AttachmentType.PICTURE,
      },
      // {
      //   id: "6ed49c91-f43a-49fc-88d1-0431a482b25a",
      //   url: "https://example.com/product-image4.jpg",
      //   type: AttachmentType.PICTURE,
      // },
    ],
  },
  {
    id: "54b6ee9c-95c9-43ef-a90f-79b28b7b7b7b",
    name: "Bead Bracelet",
    description: "Handmade bead bracelet with intricate designs",
    price: "49.99",
    currency: Currency.NGN,
    categories: ["Fashion", "Accessories", "Jewelry"],
    stocked: 30,
    attachments: [
      {
        id: "61a1d0ff-0525-45f0-8b86-d14b4e69774e",
        url: video3,
        pictureUrl: "https://example.com/product-video1-thumbnail.jpg",
        type: AttachmentType.VIDEO,
      },
    ],
  },
  {
    id: "a06d31bc-6d25-4415-aa67-2539240be7be",
    name: "Classic Crocs",
    description: "Comfortable and stylish classic crocs",
    price: "34.99",
    currency: Currency.NGN,
    categories: ["Fashion", "Footwear", "Shoes"],
    stocked: 20,
    attachments: [
      {
        id: "9c3dab4d-55cf-45ee-a36c-cc2c3c133159",
        url: video1,
        pictureUrl:
          "https://media.istockphoto.com/id/184147386/photo/slippers.jpg?s=612x612&w=0&k=20&c=7N-gi7O2VTtgTP1oSLWZPXjUyUuXIHRdpc8wXo7Qsgk=",
        type: AttachmentType.VIDEO,
      },
    ],
  },
  {
    id: "f5d470ff-6d5d-4f0d-b5a5-57189b26a2b2",
    name: "Embroidered Cap",
    description: "Stylish cap with embroidered logo",
    price: "24.99",
    currency: Currency.NGN,
    categories: ["Fashion", "Accessories", "Headwear"],
    stocked: 25,
    attachments: [
      {
        id: "6716c073-805a-439d-8055-fd0b29419d1d",
        url: video2,
        pictureUrl:
          "https://media.istockphoto.com/id/1450130413/photo/a-navy-blue-baseball-cap-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=xa45Lt2DWIdPRxF7A-30N1jOUBFr4HVIYZhbybC_lhE=",
        type: AttachmentType.VIDEO,
      },
    ],
  },
];
