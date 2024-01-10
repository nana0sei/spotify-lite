import { useParams } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import usePlaylist from "../../hooks/usePlaylist";
import PlaylistTracksHeader from "./PlaylistTracksHeader";
import useFormatQueryStore from "../../queries/format-store";
import PlaylistTrackItem from "./PlaylistTrackItem";
import PlaylistTrackSkeleton from "./PlaylistTrackSkeleton";

const PlaylistTracks = () => {
  const { id } = useParams();
  const { data: playlist, isLoading, error } = usePlaylist(id!);
  const skeletons = [1, 2, 3, 4, 5, 6];
  const { formatDuration } = useFormatQueryStore();

  if (isLoading)
    return (
      <Box paddingX={6}>
        <PlaylistTracksHeader />
        {skeletons.map((skeleton) => (
          <PlaylistTrackSkeleton key={skeleton} />
        ))}
      </Box>
    );
  if (error || !playlist) throw error;

  return (
    <>
      <Box paddingX={6}>
        <PlaylistTracksHeader />
        {playlist.tracks.items.map((t, index) => (
          <PlaylistTrackItem
            id={t.track.id}
            key={index}
            name={t.track.name}
            track_number={index + 1}
            artists={t.track.artists.map((a) => a.name)}
            added_at={t.added_at.slice(0, 10)}
            duration={formatDuration(t.track.duration_ms)}
            explicit={t.track.explicit}
            album={{
              link: `/albums/${t.track.album.id}`,
              name: t.track.album.name,
            }}
          />
        ))}
      </Box>
    </>
  );
};

export default PlaylistTracks;
