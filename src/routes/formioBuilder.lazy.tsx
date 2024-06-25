import { createLazyFileRoute } from "@tanstack/react-router";
import FormioBuilder from "../components/FormioBuilder";

export const Route = createLazyFileRoute("/formioBuilder")({
  component: formioBuilderExample,
});

function formioBuilderExample() {
  return <FormioBuilder />;
}
