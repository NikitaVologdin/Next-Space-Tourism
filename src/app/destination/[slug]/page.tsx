import { getCollection } from "../../utils/getData";
import updateDocumentImagesProp from "../../utils/updateDataImages";
import Distance from "../../../ui/Distance";
import SlideImage from "@/ui/SlideImage";
import Controls from "@/ui/destination/Controls";
import Article from "@/ui/Article";

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

type props = {
  params: Promise<{ slug: string }>;
};

export default async function page({ params }: props) {
  const slug = (await params).slug;

  const data = (await getCollection("destinations")) as TFetchedDestination[];
  const document = data.find(
    (destination) => destination.name.toLowerCase() === slug
  )!;
  const destination = (await updateDocumentImagesProp<TFetchedDestination>(
    document
  )) as unknown as TUpdatedDestination;

  const dataSortedByTravelLength = data.sort((a, b) => {
    function getDays(string: string) {
      const arr = string.split(" ");
      const number = string.match(/\d/g)!.join("") as unknown as number;
      if (arr.includes("days")) return number;
      if (arr.includes("months")) return number * 30;
      if (arr.includes("years")) return number * 365;
    }
    const aTravelAmount = getDays(a.travel)!;
    const bTravelAmount = getDays(b.travel)!;

    return aTravelAmount - bTravelAmount;
  });
  const destinations = dataSortedByTravelLength.map((destination) =>
    destination.name.toLowerCase()
  );

  return (
    <>
      <SlideImage
        src={destination.images.png.src}
        width={destination.images.png.width}
        defaultWidth={445}
        height={destination.images.png.height}
        defaultHeight={445}
        alt={`Shows destination target – ${destination.name} planet`}
        priority={true}
      />
      <Article
        name={destination.name}
        description={destination.description}
        topControls={true}
        hr={true}
        className="destination__article"
      >
        <Controls refs={destinations} />
        <Distance distance={destination.distance} travel={destination.travel} />
      </Article>
    </>
  );
}
