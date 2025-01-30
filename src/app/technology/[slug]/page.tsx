import { getCollection } from "../../utils/getData";
import updateDocumentImagesProp from "../../utils/updateDataImages";
import SlideImage from "@/ui/technology/SlideImage";
import Controls from "@/ui/technology/Controls";
import Article from "@/ui/Article";
import { compareTechWithSlug } from "../../utils/findDocument";

//TODO:Images orientation landscape and portrait

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
    landscape: { src: string; width: number; height: number };
    portrait: { src: string; width: number; height: number };
  };
  description: string;
};

type props = {
  params: Promise<{ slug: string }>;
};

export default async function page({ params }: props) {
  const slug = (await params).slug;

  const data = (await getCollection("technology")) as TFetchedTech[];

  const document = data.find((tech) => {
    return compareTechWithSlug(tech.name, slug);
  })!;

  const technology = (await updateDocumentImagesProp<TFetchedTech>(
    document
  )) as unknown as TUpdatedTech;

  return (
    <>
      <SlideImage
        landscapeImage={{
          src: technology.images.landscape.src,
          width: technology.images.landscape.width,
          height: technology.images.landscape.height,
          quality: 100,
        }}
        portraitImage={{
          src: technology.images.portrait.src,
          width: technology.images.portrait.width,
          height: technology.images.portrait.height,
          quality: 100,
        }}
      />
      <Article
        name={technology.name}
        description={technology.description}
        topControls={true}
        subheading={"The terminology"}
        hr={false}
      >
        <Controls refs={["launch-vehicle", "spaceport", "space-capsule"]} />
      </Article>
    </>
  );
}
