import { createLazyFileRoute } from "@tanstack/react-router";
import { FormBuilder } from "../components/FormBuilder";

export const Route = createLazyFileRoute("/jQueryFormBuilder")({
  component: jQueryFormBuilder,
});

window.jQuery = $;
window.$ = $;

function jQueryFormBuilder() {
  const formData = [
    {
      type: "header",
      subtype: "h1",
      label: "formBuilder Example",
    },
    {
      type: "text",
      label: "First Name",
      className: "form-control",
      name: "first-name",
      subtype: "text",
    },
    {
      type: "text",
      label: "Last Name",
      className: "form-control",
      name: "last-name",
      subtype: "text",
    },
  ];
  return <FormBuilder formData={formData} />;
}
