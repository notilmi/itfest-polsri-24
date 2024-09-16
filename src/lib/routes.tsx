import { createBrowserRouter } from "react-router-dom";

import LandingLayout from "@/layouts/landing";
import ErrorPage from "@/pages/default/error-pages";
import LandingPage from "@/pages/landing";
import AboutPage from "@/pages/about";
import DashboardLayout from "@/layouts/dashboard";
import DashboardPage from "@/pages/dashboard";

const router = createBrowserRouter([
  {
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
    ],
  },
  {
    element: <DashboardLayout />,
    children: [
      {
        path: "/dashboard",
        element: <DashboardPage />,
      },
    ],
  },
]);

export default router;
