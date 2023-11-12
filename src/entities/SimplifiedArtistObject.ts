import ImageObject from "./ImageObject";

interface SimplifiedArtistObject {
  id: string;
  name: string;
  images: ImageObject[];
  type: string;
}

export default SimplifiedArtistObject;
