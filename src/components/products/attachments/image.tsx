type TImageProps = {
  src: string;
  alt: string;
  styles?: string;
};
const Image = ({ src, alt, styles }: TImageProps) => {
  return (
    <>
      <img
        src={src}
        alt={alt}
        className={`h-full w-full  object-cover ${styles || ""}`}
      />
    </>
  );
};

export default Image;
