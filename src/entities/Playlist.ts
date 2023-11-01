import ImageObject from "./ImageObject";

interface Playlist {
  id: string;
  followers: {
    total: number;
  };
  images: ImageObject;
  name: string;
  owner: string;
}
export default Playlist;
