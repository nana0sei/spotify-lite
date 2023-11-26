import { create } from "zustand";

interface PlaybackQueryStore {
  isPlaying: boolean;
  togglePlayback: () => void;
}

const usePlaybackQueryStore = create<PlaybackQueryStore>()((set) => ({
  isPlaying: false,
  togglePlayback: () => set((state) => ({ isPlaying: !state.isPlaying })),
}));

export default usePlaybackQueryStore;
