import { getCollection } from "../utils/getData";
import updateDocumentImagesProp from "../utils/updateDataImages";
import Slider from "@/components/Slider";

type TFetchedDestination = {
  name: string;
  description: string;
  images: {
    png: string;
    webp: string;
  };
  subheading?: string;
  distance: string;
  travel: string;
};

type TUpdatedDestination = {
  name: string;
  description: string;
  images: {
    [key: string]: {
      src: string;
      width: number;
      height: number;
    };
  };
  distance: string;
  travel: string;
};

export default async function page() {
  const data = (await getCollection("destinations")) as TFetchedDestination[];
  const updatedData = data.map(async (destination) => {
    return (await updateDocumentImagesProp<TFetchedDestination>(
      destination
    )) as unknown as TUpdatedDestination;
  });
  const destinations = await Promise.all(updatedData);
  const sortedDestinations = destinations.sort((a, b) => {
    function getDays(string: string) {
      const arr = string.split(" ");
      const number = string.match(/\d/g)!.join("") as unknown as number;
      if (arr.includes("days")) return number;
      if (arr.includes("months")) return number * 30;
      if (arr.includes("years")) return number * 365;
    }
    const aTravelAmount = getDays(a.travel!)!;
    const bTravelAmount = getDays(b.travel!)!;

    return aTravelAmount - bTravelAmount;
  });

  const controls = sortedDestinations.map((destination) =>
    destination.name.toLowerCase()
  );

  return (
    <Slider
      slides={sortedDestinations}
      controls={controls}
      distance={true}
      hr={true}
      topControls={true}
      styleClass={"destination"}
    />
  );
}
