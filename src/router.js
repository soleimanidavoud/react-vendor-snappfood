import { createBrowserRouter } from "react-router-dom";
import Vendors from "./pages/Vendors/Vendors";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Vendors />,
  },
]);

export default router;
