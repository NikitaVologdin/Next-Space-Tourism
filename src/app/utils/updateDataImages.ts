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

// async function getImageSizes(url: string) {
//   "use server";
//   const resolvedPath = path.resolve("./public" + url);
//   // const joinedPath = path.join(process.cwd(), "/public" + url);
//   // console.log("IMG PATH =>", resolvedPath);
//   // console.log("IMG URL =>", url);
//   console.log("Current Working Directory:", process.cwd());
//   console.log(
//     "Resolved Image Path:",
//     path.resolve("./public/destination/image-moon.png")
//   );

//   try {
//     const result = await probe(fs.createReadStream(resolvedPath));
//     // const data = fs.readFileSync(resolvedPath);
//     // const result = probe.sync(data)!;

//     return { width: result.width, height: result.height };
//   } catch (e) {
//     console.log(e);
//   }
// }

export async function getImageSizes(url: string) {
  "use server";

  try {
    // Use process.cwd() for consistent path resolution
    const resolvedPath = path.join(process.cwd(), "public" + url);

    console.log("Full Image Path:", resolvedPath);

    // Check if file exists before reading
    if (!fs.existsSync(resolvedPath)) {
      console.error("File does not exist:", resolvedPath);

      // Log additional context for debugging
      console.log("Current Working Directory:", process.cwd());
      console.log("Attempted URL:", url);
      console.log(
        "All files in public directory:",
        fs.readdirSync(path.join(process.cwd(), "public"))
      );

      return null;
    }

    // Create read stream and probe image
    const readStream = fs.createReadStream(resolvedPath);
    const result = await probe(readStream);

    // Close the stream after probing
    readStream.destroy();

    return {
      width: result.width,
      height: result.height,
    };
  } catch (error) {
    console.error("Error getting image sizes:", error);

    // Log the full error for more detailed debugging
    console.log("Detailed Error:", JSON.stringify(error, null, 2));

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
