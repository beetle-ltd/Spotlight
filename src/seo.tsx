import React from "react";
import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description: string;
  image: string;
  url: string;
  price?: string;
  currency?: string;
}

export const SEO: React.FC<SEOProps> = ({
  title,
  description,
  image,
  url,
  price,
  currency,
}) => (
  <Helmet>
    <title>{title}</title>
    <meta name="description" content={description} />

    {/* Open Graph / Facebook */}
    <meta property="og:type" content="product" />
    <meta property="og:url" content={url} />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:image" content={image} />
    {price && <meta property="product:price:amount" content={price} />}
    {currency && <meta property="product:price:currency" content={currency} />}

    {/* Twitter */}
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:url" content={url} />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
    <meta name="twitter:image" content={image} />
  </Helmet>
);
