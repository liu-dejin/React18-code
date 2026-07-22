import { createRoot } from "react-dom/client";
import "./index.css";

import { router } from "./router";
import { RouterProvider } from "react-router-dom";
import { getChannelsApi } from "./apis/list";

getChannelsApi().then((res) => {
  console.log(res.data.data.channels);
});

createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />,
);
