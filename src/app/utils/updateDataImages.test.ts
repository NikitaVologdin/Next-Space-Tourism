import { expect, test, describe } from "vitest";
import { updateUrls } from "./updateDataImages";
import updateDocumentImagesProperty from "./updateDataImages";

test("updates images src", () => {
  const images = {
    portrait: "./assets/technology/image-launch-vehicle-portrait.jpg",
    landscape: "./assets/technology/image-launch-vehicle-landscape.jpg",
  };
  const target = {
    portrait: "/technology/image-launch-vehicle-portrait.jpg",
    landscape: "/technology/image-launch-vehicle-landscape.jpg",
  };
  const result = updateUrls(images);
  expect(result).toEqual(target);
});

// test("get images sizes", () => {});
// test("updateDocumentImagesProperty", () => {
//   const document = {
//     portrait: "./assets/technology/image-launch-vehicle-portrait.jpg",
//     landscape: "./assets/technology/image-launch-vehicle-landscape.jpg",
//   };
//   const target = {
//     landscape: {
//       src: "/technology/image-launch-vehicle-landscape.jpg",
//       width: 768,
//       height: 310,
//     },
//     portrait: {
//       src: "/technology/image-launch-vehicle-portrait.jpg",
//       width: 515,
//       height: 527,
//     },
//   };
//   const result = updateDocumentImagesProperty()
// });
