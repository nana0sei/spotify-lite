import Album from "./Album";

export default interface NewRelease {
  albums: {
    items: Album[];
  };
}
