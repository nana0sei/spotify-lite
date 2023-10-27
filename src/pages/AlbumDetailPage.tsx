import { Card } from "@chakra-ui/react";
import AlbumHeader from "../components/AlbumHeader";
import TrackList from "../components/TrackList";

const AlbumDetailPage = () => {
  return (
    <>
      <Card>
        <AlbumHeader />
        <TrackList />
      </Card>
    </>
  );
};

export default AlbumDetailPage;
