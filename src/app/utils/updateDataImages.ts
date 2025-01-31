import probe from "probe-image-size";
import fs from "fs";
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

export async function getImageSizes(url: string) {
  "use server";

  try {
    // Use process.cwd() for consistent path resolution
    const resolvedPath = path.join(process.cwd(), "public" + url);

    if (!fs.existsSync(resolvedPath)) {
      return null;
    }

    const readStream = fs.createReadStream(resolvedPath);
    const result = await probe(readStream);

    readStream.destroy();

    return {
      width: result.width,
      height: result.height,
    };
  } catch (error) {
    console.error("Error getting image sizes:", error);
    return null;
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
