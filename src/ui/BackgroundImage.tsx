import { getImageProps } from "next/image";

type TBackground = {
  src: string;
  width: number;
  height: number;
  quality: number;
};

type props = {
  desktopBackground: TBackground;
  tabletBackground: TBackground;
  mobileBackground: TBackground;
};

export default function BackgroundImage({
  desktopBackground,
  tabletBackground,
  mobileBackground,
}: props) {
  const common = { alt: "", sizes: "100vw" };

  const {
    props: { srcSet: desktop },
  } = getImageProps({
    ...common,
    width: desktopBackground.width,
    height: desktopBackground.height,
    quality: desktopBackground.quality,
    src: desktopBackground.src,
  });

  const {
    props: { srcSet: tablet },
  } = getImageProps({
    ...common,
    width: tabletBackground.width,
    height: tabletBackground.height,
    quality: tabletBackground.quality,
    src: tabletBackground.src,
  });

  const {
    props: { srcSet: mobile, ...rest },
  } = getImageProps({
    ...common,
    width: mobileBackground.width,
    height: mobileBackground.height,
    quality: mobileBackground.quality,
    src: mobileBackground.src,
  });

  return (
    <picture>
      <source srcSet={desktop} type="image/webp" media="(min-width:64em)" />
      <source srcSet={tablet} type="image/webp" media="(min-width:48em)" />
      <source srcSet={mobile} type="image/webp" media="(min-width:0em)" />
      <img {...rest} className="background" alt="" />
    </picture>
  );
}
