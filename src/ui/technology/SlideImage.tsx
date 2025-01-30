import { getImageProps } from "next/image";

type TImage = {
  src: string;
  width: number;
  height: number;
  quality: number;
};

type props = {
  landscapeImage: TImage;
  portraitImage: TImage;
};

export default function SlideImage({ landscapeImage, portraitImage }: props) {
  const common = { alt: "", sizes: "100vw" };

  const {
    props: { srcSet: landscape, ...rest },
  } = getImageProps({
    ...common,
    width: landscapeImage.width,
    height: landscapeImage.height,
    quality: landscapeImage.quality,
    src: landscapeImage.src,
  });
  const {
    props: { srcSet: portrait },
  } = getImageProps({
    ...common,
    width: portraitImage.width,
    height: portraitImage.height,
    quality: portraitImage.quality,
    src: portraitImage.src,
  });
  return (
    <div className="technology__slide-image">
      <picture>
        <source srcSet={portrait} type="image/webp" media="(min-width:48em)" />
        <source srcSet={landscape} type="image/webp" media="(min-width:0em)" />
        <img {...rest} alt="" />
      </picture>
    </div>
  );
}
