import { rSuiteComponents } from "@react-form-builder/components-rsuite";
import { BuilderView, FormBuilder } from "@react-form-builder/designer";

const FormEngine = () => {
  const components = rSuiteComponents.map((c) => c.build());
  const builderView = new BuilderView(components);
  return <FormBuilder view={builderView} />;
};

export default FormEngine;
