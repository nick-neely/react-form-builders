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
  // Ref to store the form viewer instance
  const ref = useRef<IFormViewer>();

  const setRef = useCallback((viewer: IFormViewer | null) => {
    if (viewer) {
      // If you want to work with the internal FormViewer component in an imperative style
      ref.current = viewer;
      console.log(ref.current);
    }
  }, []);

  /**
   * Builds an array of components based on the rSuiteComponents array,
   * and filters out components that are not included in the allowedComponents array.
   *
   */
  const components = rSuiteComponents
    .map((c) => c.build())
    .filter((component) => allowedComponents.includes(component.meta.type));

  // Create a new BuilderView instance
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
