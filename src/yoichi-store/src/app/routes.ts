import { createBrowserRouter } from "react-router";
import Root from "./layouts/Root";
import Home from "./pages/Home";
import SNS from "./pages/SNS";
import Vellence from "./pages/brands/Vellence";
import Myuui from "./pages/brands/Myuui";
import YoichiOriginal from "./pages/brands/YoichiOriginal";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "sns", Component: SNS },
    ],
  },
  // Brand pages: intentionally outside the Root layout so each brand keeps
  // its own distinct visual identity. Not linked from the main navigation.
  { path: "/brands/vellence", Component: Vellence },
  { path: "/brands/myuui", Component: Myuui },
  { path: "/brands/yoichi-original", Component: YoichiOriginal },
]);
