import Image from "next/image";

interface GalleryImage {
  mobile: string;
  tablet: string;
  desktop: string;
}

interface GalleryProps {
  gallery: {
    first: GalleryImage;
    second: GalleryImage;
    third: GalleryImage;
  };
}

interface GalleryImageProps {
  imageSrc: GalleryImage;
  altText: string;
  lastImage?: boolean;
}

const GalleryImage = ({
  imageSrc,
  altText,
  lastImage,
}: GalleryImageProps) => {
  return (
    <>
      <Image
        src={imageSrc.mobile}
        width={327}
        height={174}
        alt={altText}
        className={`rounded-lg smd:w-[500px] lg:w-full md:hidden`}
      />

      <Image
        src={imageSrc.tablet}
        width={lastImage ? 395 : 277}
        height={lastImage ? 368 : 174}
        alt={altText}
        className={`rounded-lg hidden md:block lg:hidden`}
      />

      <Image
        src={imageSrc.desktop}
        width={lastImage ? 635 : 445}
        height={lastImage ? 592 : 280}
        alt={altText}
        className={`rounded-lg hidden lg:block`}
      />
    </>
  );
};

const Gallery = ({ gallery }: GalleryProps) => {
  const generateAltText = (imageUrl: string) => {
    const productNameMatch = imageUrl.match(/product-(.*?)\//);
    const productName = productNameMatch
      ? productNameMatch[1]
      : "Product Image";
    return productName;
  };

  return (
    <div className="flex flex-col items-center md:flex-row md:justify-center md:gap-x-4 xl:gap-x-8">
      <div className="mb-5 md:mb-0">
        <div className="mb-5 xl:mb-8">
          <GalleryImage
            imageSrc={gallery.first}
            altText={generateAltText(gallery.first.mobile)}
          />
        </div>

        <div>
          <GalleryImage
            imageSrc={gallery.second}
            altText={generateAltText(gallery.first.mobile)}
          />
        </div>
      </div>

      <div className="mb-5 md:mb-0">
        <GalleryImage
          imageSrc={gallery.third}
          altText={generateAltText(gallery.first.mobile)}
          lastImage={true}
        />
      </div>
    </div>
  );
};
export default Gallery;
