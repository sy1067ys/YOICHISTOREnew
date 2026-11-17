import { createBrowserRouter, redirect } from "react-router";
import Root from "./layouts/Root";
import Home from "./pages/Home";
import SNS from "./pages/SNS";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "sns", Component: SNS },
      // 存在しないURL(削除したブランドページなど)はホームへ戻す
      { path: "*", loader: () => redirect("/") },
    ],
  },
]);
