import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

export const Route = createRootRoute({
  component: () => (
    <>
      <div className="p-2 flex gap-2">
        <Link to="/" className="[&.active]:font-bold">
          Home
        </Link>
        |
        <Link to="/jQueryFormBuilder" className="[&.active]:font-bold">
          jQuery FormBuilder
        </Link>
        |
        <Link to="/formio" className="[&.active]:font-bold">
          Form.io Designer
        </Link>
      </div>
      <hr />
      <Outlet />
      <TanStackRouterDevtools />
    </>
  ),
});
