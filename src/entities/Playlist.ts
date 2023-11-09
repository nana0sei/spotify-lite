import ImageObject from "./ImageObject";

interface Playlist {
  id: string;
  followers: {
    total: number;
  };
  images: ImageObject[];
  name: string;
  owner: string;
  description: string | null;
}
export default Playlist;
