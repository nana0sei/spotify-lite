import ImageObject from "./ImageObject";

interface SimplifiedPlaylistObject {
  id: string;
  followers: {
    total: number;
  };
  images: ImageObject[];
  name: string;
  owner: string;
  description: string | null;
}

export interface FeaturedPlaylists {
  playlists: {
    items: SimplifiedPlaylistObject[];
  };
}
