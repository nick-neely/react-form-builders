import { createLazyFileRoute } from "@tanstack/react-router";
import FormioRender from "../components/FormioRenderer";

export const Route = createLazyFileRoute("/formioRenderer")({
  component: formioRenderExample,
});

function formioRenderExample() {
  return <FormioRender />;
}
