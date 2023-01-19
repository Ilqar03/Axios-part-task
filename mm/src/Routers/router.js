import { createBrowserRouter } from "react-router-dom";
import AddPage from "../Pages/AddPage/AddPage";
import DetailPage from "../Pages/DetailPage/DetailPage";
import ProductPage from "../Pages/ProductPage/ProductPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ProductPage />,
  },
  {
    path: "/detailpage/:id",
    element: <DetailPage />,
  },
  {
    path: "/addpage",
    element: <AddPage />,
  },
]);

export default router;
