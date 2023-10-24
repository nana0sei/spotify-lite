interface Album {
  id: string;
  name: string;
  total_tracks: number;
  release_date: string;
  images: {
    url: string;
  };
}

export default Album;
