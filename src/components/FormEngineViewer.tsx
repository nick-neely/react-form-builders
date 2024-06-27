import {
  RsLocalizationWrapper,
  formEngineRsuiteCssLoader,
  ltrCssLoader,
  rSuiteComponents,
  rtlCssLoader,
} from "@react-form-builder/components-rsuite";
import {
  BiDi,
  FormViewer,
  IFormViewer,
  createView,
} from "@react-form-builder/core";
import { useCallback, useRef } from "react";

const componentsMetadata = rSuiteComponents.map(
  (definer) => definer.build().model
);

/**
 * Represents an empty form in JSON format.
 */
const emptyForm = `
{
  "version": "1",
  "tooltipType": "RsTooltip",
  "errorType": "RsErrorMessage",
  "form": {
    "key": "Screen",
    "type": "Screen",
    "props": {},
    "children": [
      {
        "key": "name",
        "type": "RsInput",
        "props": {
          "placeholder": {
            "value": "Enter you name"
          },
          "label": {
            "value": "Name"
          }
        },
        "schema": {
          "validations": [
            {
              "key": "required"
            }
          ]
        },
        "tooltipProps": {
          "text": {
            "value": "Name"
          }
        }
      },
      {
        "key": "password",
        "type": "RsInput",
        "props": {
          "label": {
            "value": "Password"
          },
          "passwordMask": {
            "value": true
          }
        },
        "schema": {
          "validations": [
            {
              "key": "required"
            }
          ]
        },
        "tooltipProps": {
          "text": {
            "value": "Password"
          },
          "placement": {
            "value": "left"
          }
        }
      },
      {
        "key": "submit",
        "type": "RsButton",
        "props": {
          "children": {
            "value": "Login"
          },
          "color": {
            "value": "blue"
          },
          "appearance": {
            "value": "primary"
          }
        }
      }
    ]
  }
}
`;

const formName = "Example";

/**
 * Retrieves a form based on the provided name.
 * @param name - The name of the form to retrieve. If not provided, the default form will be returned.
 * @returns A Promise that resolves to the requested form.
 * @throws An error if the requested form is not found.
 */
async function getFormFn(name?: string) {
  if (name === formName) return emptyForm;
  throw new Error(`Form '${name}' is not found.`);
}

const view = createView(componentsMetadata)
  // The following parameters are required for correct CSS loading in LTR and RTL modes
  .withViewerWrapper(RsLocalizationWrapper)
  .withCssLoader(BiDi.LTR, ltrCssLoader)
  .withCssLoader(BiDi.RTL, rtlCssLoader)
  .withCssLoader("common", formEngineRsuiteCssLoader);
const FormEngineViewer = () => {
  const ref = useRef<IFormViewer>();

  const setRef = useCallback((viewer: IFormViewer | null) => {
    // If you want to work with the internal FormViewer component in an imperative style
    if (viewer) {
      ref.current = viewer;
      console.log(ref.current);
    }
  }, []);
  return (
    <FormViewer
      view={view}
      getForm={getFormFn}
      formName={formName}
      initialData={{}}
      viewerRef={setRef}
    />
  );
};

export default FormEngineViewer;
