import probe from "probe-image-size";
// import fs from "fs";
import path from "path";

export function updateUrls(images: { [key: string]: string }) {
  for (const key in images) {
    const image = images[key];
    const stringArray = image.split("/");
    stringArray.splice(0, 2);
    const result = "/" + stringArray.join("/");
    images[key] = result;
  }
  return images;
}

type document = {
  images: {
    [key: string]: string;
  };
};

async function getImageSizes(url: string) {
  const imagePath = path.join(process.cwd(), "/public" + url);

  try {
    const result = await probe(imagePath);
    // fs.createReadStream(path.join(process.cwd(), "/public" + url))
    return { width: result.width, height: result.height };
  } catch (e) {
    console.log(e);
  }
}

export default async function updateDocumentImagesProperty<T extends document>(
  document: T
) {
  const images = updateUrls(document.images);

  const updatedImages: { [key: string]: unknown } = {};
  for (const key in images) {
    const uri = images[key];
    const sizes = await getImageSizes(uri)!;
    updatedImages[key] = { src: uri, ...sizes };
  }
  const updatedDocument = { ...document, images: updatedImages };
  return updatedDocument;
}
