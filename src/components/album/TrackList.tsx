import { useParams } from "react-router-dom";
import useAlbum from "../../hooks/useAlbum";
import { Box } from "@chakra-ui/react";
import TracklistHeader from "./TracklistHeader";
import TracklistSkeleton from "./TracklistSkeleton";
import useFormatQueryStore from "../../queries/format-store";
import TrackItem from "./TrackItem";

const TrackList = () => {
  const { id } = useParams();
  const { data: album, isLoading, error } = useAlbum(id!);
  const { formatDuration } = useFormatQueryStore();
  const skeletons = [1, 2, 3, 4, 5, 6];

  if (isLoading)
    return (
      <Box paddingX={10} fontSize="sm">
        <TracklistHeader />
        {skeletons.map((skeleton) => (
          <TracklistSkeleton key={skeleton} />
        ))}
      </Box>
    );
  if (error || !album) throw error;

  return (
    <>
      <Box paddingX={10} fontSize="sm">
        <TracklistHeader />
        {album.tracks.items.map((tracks, index) => (
          <TrackItem
            id={tracks.id}
            explicit={tracks.explicit}
            name={tracks.name}
            artists={tracks.artists.map((a) => a.name)}
            key={index}
            duration={formatDuration(tracks.duration_ms)}
            num={tracks.track_number}
          />
        ))}
      </Box>
    </>
  );
};

export default TrackList;
