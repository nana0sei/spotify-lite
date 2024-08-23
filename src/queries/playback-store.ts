import { create } from "zustand";

interface PlaybackQueryStore {
  isPlaying: boolean;
  currentTrack: string;
  togglePlayback: () => void;
  setCurrentTrack: (id: string) => void;
}

const usePlaybackQueryStore = create<PlaybackQueryStore>()((set) => ({
  isPlaying: false,
  currentTrack: "",
  togglePlayback: () =>
    set((state) => ({
      ...state,
      isPlaying: !state.isPlaying,
    })),
  setCurrentTrack: (id) =>
    set((state) => ({
      ...state,
      currentTrack: id,
      isPlaying: true,
    })),
}));

export default usePlaybackQueryStore;
