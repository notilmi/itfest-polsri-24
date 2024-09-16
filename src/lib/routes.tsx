import { createBrowserRouter } from "react-router-dom";

import LandingLayout from "@/layouts/landing";
import ErrorPage from "@/pages/default/error-pages";
import LandingPage from "@/pages/landing";
import AboutPage from "@/pages/about";
import CompanyEvent from "@/pages/companyEvent";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/companyEvent",
        element: <CompanyEvent />,
      }
    ],
  },
]);

export default router;
