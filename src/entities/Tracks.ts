import SimplifiedArtistObject from "./SimplifiedArtistObject";

export interface SimplifiedTrackObject {
  artists: SimplifiedArtistObject[];
  name: string;
  track_number: number;
  explicit: boolean;
  duration_ms: number;
}
interface Tracks {
  items: SimplifiedTrackObject[];
}

export default Tracks;
