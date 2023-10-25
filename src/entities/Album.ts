import ImageObject from "./ImageObject";
import SimplifiedArtistObject from "./SimplifiedArtistObject";

interface Album {
  id: string;
  name: string;
  album_type: string;
  total_tracks: number;
  release_date: string;
  images: ImageObject[];
  artists: SimplifiedArtistObject[];
}

export default Album;
