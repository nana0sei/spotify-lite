import ImageObject from "./ImageObject";
import SimplifiedArtistObject from "./SimplifiedArtistObject";
import Tracks from "./Tracks";

interface Album {
  id: string;
  name: string;
  album_type: string;
  total_tracks: number;
  release_date: string;
  images: ImageObject[];
  artists: SimplifiedArtistObject[];
  tracks: Tracks;
}

export default Album;
