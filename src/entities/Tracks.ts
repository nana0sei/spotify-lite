import Album from "./Album";
import SimplifiedArtistObject from "./SimplifiedArtistObject";

export interface SimplifiedTrackObject {
  id: string;
  artists: SimplifiedArtistObject[];
  name: string;
  track_number: number;
  explicit: boolean;
  duration_ms: number;
  album: Album;
  preview_url: string;
}
interface Tracks {
  total: number;
  items: SimplifiedTrackObject[];
}

export default Tracks;
