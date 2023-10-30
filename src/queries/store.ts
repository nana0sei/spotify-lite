import { create } from "zustand";

interface AlbumQuery{
    genreId?: string
}

interface AlbumQueryStore{
    albumQuery: AlbumQuery;
    setGenre: (genreId: string) => void;
}

const useAlbumQueryStore = create<AlbumQueryStore>((set) =>({
    albumQuery:{},
    setGenre:(genreId) => set((store) => ({albumQuery: {...store.albumQuery, genreId}}))
}));

export default useAlbumQueryStore;