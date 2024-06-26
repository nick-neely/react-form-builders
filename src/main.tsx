// import { Formio, Templates } from "@formio/react";
import { RouterProvider, createRouter } from "@tanstack/react-router";
// import tailwind from "@tsed/tailwind-formio";
import $ from "jquery";
import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { FormSchemaProvider } from "./contexts/FormSchemaContext";
import "./index.css";
import { routeTree } from "./routeTree.gen";

window.jQuery = $;
window.$ = $;

// Used for formio tailwind from @tsed/tailwind-formio
// Formio.use(tailwind);
// Templates.framework = "tailwind";

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
      <FormSchemaProvider>
        <RouterProvider router={router} />
      </FormSchemaProvider>
    </StrictMode>
  );
}
