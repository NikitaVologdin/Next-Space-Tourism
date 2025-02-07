import { getCollection } from "../utils/getData";
import updateDocumentImagesProp from "../utils/updateDataImages";
import Slider from "@/components/Slider";

type TFetchedAstronaut = {
  name: string;
  bio: string;
  images: {
    png: string;
    webp: string;
  };
  role: string;
};

type TUpdatedAstronaut = {
  name: string;
  bio?: string;
  images: {
    [key: string]: {
      src: string;
      width: number;
      height: number;
    };
  };
  role?: string;
};

type TSlides = {
  name: string;
  subheading: string;
  description: string;
  images: {
    [key: string]: {
      src: string;
      width: number;
      height: number;
    };
  };
};

export default async function page() {
  const data = (await getCollection("crew")) as TFetchedAstronaut[];

  const dataWithImageProps = data.map(async (document) => {
    return (await updateDocumentImagesProp<TFetchedAstronaut>(
      document
    )) as unknown as TUpdatedAstronaut;
  });
  const resolvedData = await Promise.all(dataWithImageProps);

  const crewSlides = resolvedData.map((item) => {
    const newItem = { ...item, description: item.bio, subheading: item.role };
    delete newItem.bio;
    delete newItem.role;
    return newItem;
  }) as TSlides[];

  const controls = ["commander", "specialist", "pilot", "engineer"];

  return (
    <Slider
      slides={crewSlides}
      controls={controls}
      distance={false}
      hr={false}
      topControls={false}
      styleClass={"crew"}
    />
  );
}
