import { RouterProvider, createRouter } from "@tanstack/react-router";
import $ from "jquery";
import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { routeTree } from "./routeTree.gen";

window.jQuery = $;
window.$ = $;

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

const rootelement = document.getElementById("root")!;
if (!rootelement.innerHTML) {
  const root = ReactDOM.createRoot(rootelement);
  root.render(
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  );
}
