import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import Homepage from "./pages/Homepage";
import SearchPage from "./pages/SearchPage";
import AlbumDetailPage from "./pages/AlbumDetailPage";
import ErrorPage from "./pages/ErrorPage";
import SearchResults from "./components/search/SearchResults";
import SearchDefault from "./components/search/SearchDefault";
import PlaylistDetailPage from "./pages/PlaylistDetailPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Homepage /> },
      {
        path: "search/",
        element: <SearchPage />,
        children: [
          { index: true, element: <SearchDefault /> },
          { path: ":q", element: <SearchResults /> },
        ],
      },
      { path: "albums/:id", element: <AlbumDetailPage /> },
      { path: "playlists/:id", element: <PlaylistDetailPage /> },
    ],
  },
]);

export default router;
