import ImageObject from "./ImageObject";
import Tracks from "./Tracks";

interface PlaylistTrackObject {
  track: Tracks;
}

interface Playlist {
  id: string;
  followers: {
    total: number;
  };
  images: ImageObject[];
  name: string;
  owner: {
    display_name: string;
  };
  description: string | null;
  tracks: {
    items: PlaylistTrackObject[];
    total: number;
  };
}
export default Playlist;
