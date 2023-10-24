import ImageObject from "./ImageObject";

interface Album {
  id: string;
  name: string;
  total_tracks: number;
  release_date: string;
  release_date_precision: "year";
  images: ImageObject[];
}

export default Album;
