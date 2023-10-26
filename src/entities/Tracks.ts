import SimplifiedArtistObject from "./SimplifiedArtistObject";

interface SimplifiedTrackObject {
  artists: SimplifiedArtistObject[];
  name: string;
}
interface Tracks {
  items: SimplifiedTrackObject[];
}

export default Tracks;
