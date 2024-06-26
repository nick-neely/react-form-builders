import {
  RsLocalizationWrapper,
  formEngineRsuiteCssLoader,
  ltrCssLoader,
  rSuiteComponents,
  rtlCssLoader,
} from "@react-form-builder/components-rsuite";
import { BiDi, IFormViewer } from "@react-form-builder/core";
import { BuilderView, FormBuilder } from "@react-form-builder/designer";
import { useCallback, useRef } from "react";

const allowedComponents = [
  "RsInput",
  "RsSignature",
  "RsTextArea",
  "RsHeader",
  "RsImage",
  "RsLink",
];

const FormEngineBuilder = () => {
  const ref = useRef<IFormViewer>();

  const setRef = useCallback((viewer: IFormViewer | null) => {
    if (viewer) {
      ref.current = viewer;
      console.log(ref.current);
    }
  }, []);

  // Used for Form Builder
  const components = rSuiteComponents
    .map((c) => c.build())
    .filter((component) => allowedComponents.includes(component.meta.type));

  const builderView = new BuilderView(components)
    .withViewerWrapper(RsLocalizationWrapper)
    .withCssLoader(BiDi.LTR, ltrCssLoader)
    .withCssLoader(BiDi.RTL, rtlCssLoader)
    .withCssLoader("common", formEngineRsuiteCssLoader);

  return (
    <>
      <FormBuilder
        view={builderView}
        onFormDataChange={({ data, errors }) => {
          console.log("onFormDataChange", { data, errors });
        }}
        viewerRef={setRef}
      />
    </>
  );
};

export default FormEngineBuilder;
