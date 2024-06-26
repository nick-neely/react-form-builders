import { rSuiteComponents } from "@react-form-builder/components-rsuite";
import { BuilderView, FormBuilder } from "@react-form-builder/designer";

const allowedComponents = [
  "RsInput",
  "RsSignature",
  "RsTextArea",
  "RsHeader",
  "RsImage",
  "RsLink",
];

const FormEngine = () => {
  const components = rSuiteComponents
    .map((c) => c.build())
    .filter((component) => allowedComponents.includes(component.meta.type));

  const builderView = new BuilderView(components);
  return <FormBuilder view={builderView} />;
};

export default FormEngine;
