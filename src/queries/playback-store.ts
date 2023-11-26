import { create } from "zustand";

interface PlaybackState {
  isPlaying: boolean;
  currentTrack: string | null;
}

interface PlaybackQueryStore {
  playbackState: PlaybackState;
  togglePlayback: () => void;
  setCurrentTrack: (id: string | null) => void;
}

const usePlaybackQueryStore = create<PlaybackQueryStore>()((set) => ({
  playbackState: {
    isPlaying: false,
    currentTrack: "",
  },
  togglePlayback: () =>
    set((state) => ({
      playbackState: {
        ...state.playbackState,
        isPlaying: !state.playbackState.isPlaying,
      },
    })),
  setCurrentTrack: (id) =>
    set((state) => ({
      playbackState: {
        ...state.playbackState,
        currentTrack: id,
      },
    })),
}));

export default usePlaybackQueryStore;
