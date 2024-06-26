import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import * as React from "react";
export const Route = createRootRoute({
  component: React.memo(RootComponent),
});

function RootComponent() {
  return (
    <>
      <div className="p-2 flex gap-5">
        <Link to="/" className="[&.active]:font-bold">
          Home
        </Link>
        <Link to="/jQueryFormBuilder" className="[&.active]:font-bold">
          jQuery FormBuilder
        </Link>
        <Link to="/formioBuilder" className="[&.active]:font-bold">
          Form.io Builder
        </Link>
        <Link to="/formioRenderer" className="[&.active]:font-bold">
          Form.io Renderer
        </Link>
        <Link to="/formEngine" className="[&.active]:font-bold">
          Form Engine
        </Link>
        <Link to="/surveyJSCreator" className="[&.active]:font-bold">
          SurveyJS Creator
        </Link>
      </div>
      <hr />
      <Outlet />
      <TanStackRouterDevtools />
    </>
  );
}
