import { createBrowserRouter } from "react-router";

import { frontRoutes } from "./front.tsx";
import { backRoutes } from "./back.tsx";

export const router = createBrowserRouter([...frontRoutes, ...backRoutes]);
