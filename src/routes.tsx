import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import Homepage from "./pages/Homepage";
import SearchPage from "./pages/SearchPage";
import AlbumDetailPage from "./pages/AlbumDetailPage";
import ErrorPage from "./pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Homepage /> },
      { path: "search", element: <SearchPage /> },
      { path: "albums/:id", element: <AlbumDetailPage /> },
    ],
  },
]);

export default router;