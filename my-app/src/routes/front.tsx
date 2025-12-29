import type { RouteObject } from "react-router";
import FrontLayout from "@/Layout/Fornt";
import Home from "@/views/Front/home";

export const frontRoutes: RouteObject[] = [
  {
    path: "/",
    element: <FrontLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "home",
        element: <Home />,
      },
    ],
  },
];
