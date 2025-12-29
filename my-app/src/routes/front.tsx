import type { RouteObject } from "react-router";
import FrontLayout from "@/Layout/Fornt";
import Home from "@/views/Front/home";
import Technology from "@/views/Front/writing/tech";
import Essay from "@/views/Front/writing/essay";
import Archives from "@/views/Front/writing/archives";
import Game from "@/views/Front/news/game";
import Book from "@/views/Front/news/book";
import Movie from "@/views/Front/news/movie";
import Me from "@/views/Front/about/me";
import Website from "@/views/Front/about/website";
import Message from "@/views/Front/about/message";
import Link from "@/views/Front/link";

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
      {
        path: "writing/technology",
        element: <Technology />,
      },
      {
        path: "writing/essay",
        element: <Essay />,
      },
      {
        path: "writing/archives",
        element: <Archives />,
      },
      {
        path: "news/game",
        element: <Game />,
      },
      {
        path: "news/book",
        element: <Book />,
      },
      {
        path: "news/movie",
        element: <Movie />,
      },
      {
        path: "link",
        element: <Link />,
      },
      {
        path: "about/me",
        element: <Me />,
      },
      {
        path: "about/website",
        element: <Website />,
      },
      {
        path: "about/message",
        element: <Message />,
      },
    ],
  },
];
