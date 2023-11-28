import { create } from "zustand";

interface PlaybackState {
  isPlaying: boolean;
  currentTrack: string;
}

interface PlaybackQueryStore {
  playbackState: PlaybackState;
  togglePlayback: () => void;
  setCurrentTrack: (id: string) => void;
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
