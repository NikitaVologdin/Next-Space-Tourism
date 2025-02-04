import { getCollection } from "../../utils/getData";
import updateDocumentImagesProp from "../../utils/updateDataImages";
import SlideImage from "@/ui/SlideImage";
import Controls from "@/ui/crew/Controls";
import Article from "@/ui/Article";
import { compareRoleWithSlug } from "../../utils/findDocument";

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
  bio: string;
  images: {
    [key: string]: {
      src: string;
      width: number;
      height: number;
    };
  };
  role: string;
};

type props = {
  params: Promise<{ slug: string }>;
};

export default async function page({ params }: props) {
  const slug = (await params).slug;

  const data = (await getCollection("crew")) as TFetchedAstronaut[];

  const document = data.find((astronaut) => {
    return compareRoleWithSlug(astronaut.role, slug);
  })!;

  const astronaut = (await updateDocumentImagesProp<TFetchedAstronaut>(
    document
  )) as unknown as TUpdatedAstronaut;
  // console.log(astronaut);
  //1 - 700
  //2 - 640
  //3 - 645
  //4 - 645
  return (
    <>
      <Article
        name={astronaut.name}
        description={astronaut.bio}
        topControls={false}
        subheading={astronaut.role}
        hr={false}
      >
        <Controls refs={["commander", "specialist", "pilot", "engineer"]} />
      </Article>
      <SlideImage
        src={astronaut.images.png.src}
        width={astronaut.images.png.width}
        defaultWidth={445}
        height={astronaut.images.png.height}
        defaultHeight={445}
        alt={`Shows destination target – ${astronaut.name} planet`}
        priority={true}
      />
    </>
  );
}
