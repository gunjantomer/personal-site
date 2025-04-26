import { AssetFields } from "contentful";

// Our simplified version of an image asset.
// We don't need all the data that Contentful gives us.
export interface ContentImage {
  src: string;
  alt: string;
  width: number;
  height: number;
}

// A function to transform a Contentful image asset
// into our own ContentImage object.
export function parseContentfulContentImage(
  asset?: AssetFields
): ContentImage | null {
  if (!asset) {
    return null;
  }

  return {
    src: asset.file?.url || "",
    alt: asset.description || "",
    width: asset.file?.details?.image?.width || 0,
    height: asset.file?.details?.image?.height || 0,
  };
}
