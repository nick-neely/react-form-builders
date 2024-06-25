import { createLazyFileRoute } from "@tanstack/react-router";
import FormioBuilder from "../components/FormioBuilder";

export const Route = createLazyFileRoute("/formio")({
  component: formioBuilderExample,
});

function formioBuilderExample() {
  return <FormioBuilder />;
}
