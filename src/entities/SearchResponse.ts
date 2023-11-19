import Album from "./Album";
import SimplifiedArtistObject from "./SimplifiedArtistObject";

interface SearchResponse {
  albums: {
    items: Album[];
  };

  artists: {
    items: SimplifiedArtistObject[];
  };
}

export default SearchResponse;
