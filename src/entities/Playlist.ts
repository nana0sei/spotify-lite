import ImageObject from "./ImageObject";
import { SimplifiedTrackObject } from "./Tracks";

interface PlaylistTrackObject {
  track: SimplifiedTrackObject;
  added_at: string;
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
