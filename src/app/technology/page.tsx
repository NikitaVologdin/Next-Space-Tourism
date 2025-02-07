import { getCollection } from "@/app/utils/getData";
import updateDocumentImagesProp from "@/app/utils/updateDataImages";
import Slider from "@/components/TechnologySlider";

type TFetchedTech = {
  name: string;
  images: {
    landscape: string;
    portrait: string;
  };
  description: string;
};

type TUpdatedTech = {
  name: string;
  images: {
    landscape: { src: string; width: number; height: number; quality: number };
    portrait: { src: string; width: number; height: number; quality: number };
  };
  description: string;
};

export default async function page() {
  const data = (await getCollection("technology")) as TFetchedTech[];

  const dataWithImageProps = data.map(async (document) => {
    return (await updateDocumentImagesProp<TFetchedTech>(
      document
    )) as unknown as TUpdatedTech;
  });
  const technologySlides = await Promise.all(dataWithImageProps);
  const controls = ["launch vehicle", "spaceport", "space capsule"];

  return (
    <Slider
      slides={technologySlides}
      controls={controls}
      distance={false}
      hr={false}
      topControls={false}
      styleClass={"technology"}
    />
  );
}
