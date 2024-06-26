import { createLazyFileRoute } from "@tanstack/react-router";
import FormEngine from "../components/FormEngine";

export const Route = createLazyFileRoute("/formEngine")({
  component: FormEngineExample,
});

function FormEngineExample() {
  return <FormEngine />;
}
