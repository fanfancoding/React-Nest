import type { RouteObject } from "react-router";
import LoginPage from "../views/Back/login";

export const backRoutes: RouteObject[] = [
  {
    path: "/TarzanLogin",
    element: <LoginPage />,
  },
];
