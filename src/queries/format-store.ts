import { create } from "zustand";

interface FormatQueryStore {
  formatDuration: (ms: number | number) => string;
  formatAlbumLength: (ms: number) => string;
  setProjectType: (total_tracks?: number, project?: string) => string;
}

const useFormatQueryStore = create<FormatQueryStore>(() => ({
  formatDuration: (ms) => {
    // Calculate minutes and seconds
    const totalSeconds = Math.floor(ms / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;

    // Format the result as "min:sec"
    const formattedTime = `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
    return formattedTime;
  },

  formatAlbumLength: (ms) => {
    // Calculate hours, minutes, and seconds
    const totalSeconds = Math.floor(ms / 1000);
    const hours = Math.floor(totalSeconds / 3600);
    const remainingSeconds = totalSeconds % 3600;
    const minutes = Math.floor(remainingSeconds / 60);
    const seconds = remainingSeconds % 60;

    // Format the result as "hours:min:sec"
    const formattedTime = `${
      hours === 0 ? "" : `${hours} hr `
    } ${minutes} min ${seconds} sec`;

    return formattedTime;
  },

  setProjectType: (total_tracks?: number, project?: string) => {
    let projectType = "";
    project === "album"
      ? (projectType = "Album")
      : project === "compilation"
      ? (projectType = "Compilation")
      : project === "single" && total_tracks === 1
      ? (projectType = "Single")
      : (projectType = "EP");

    return projectType;
  },
}));

export default useFormatQueryStore;
