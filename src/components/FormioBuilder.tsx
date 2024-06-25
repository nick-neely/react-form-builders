import { Form, FormBuilder } from "@formio/react";
import ReactJson from "@microlink/react-json-view";
import { useState } from "react";
import "../styles/FormioBuilder.css";

const FormioBuilder = () => {
  const [jsonSchema, setSchema] = useState({ components: [] });
  const onFormChange = (schema) => {
    setSchema({ ...schema, components: [...schema.components] });
  };

  const builderOptions = {
    // Builder sidebar configuration option passed to the form builder
    builder: {
      basic: false,
      advanced: false,
      data: false,
      layout: false,
      premium: false,
      customBasic: {
        title: "Components",
        default: true,
        weight: 0,
        components: {
          textfield: true,
          textarea: true,
          checkbox: true,
          select: true,
          radio: true,
          signature: true,
          content: true,
        },
      },
    },
    editForm: {
      textfield: [
        {
          key: "display",
          ignore: false,
          components: [
            {
              key: "placeholder",
              ignore: true,
            },
            {
              key: "tooltip",
              ignore: true,
            },
            { key: "widget.type", ignore: true },
            { key: "labelPosition", ignore: true },
            { key: "inputMask", ignore: true },
            { key: "displayMask", ignore: true },
            { key: "applyMaskOn", ignore: true },
            { key: "allowMultipleMasks", ignore: true },
            { key: "tabindex", ignore: true },
            { key: "autocomplete", ignore: true },
            { key: "mask", ignore: true },
            { key: "showWordCount", ignore: true },
            { key: "showCharCount", ignore: true },
            { key: "hidden", ignore: true },
            { key: "hideLabel", ignore: true },
            { key: "disabled", ignore: true },
            { key: "tableView", ignore: true },
            { key: "modalEdit", ignore: true },
            { key: "tabindex", ignore: true },
            { key: "customClass", ignore: true },
          ],
        },
        {
          key: "data",
          ignore: true,
        },
        {
          key: "api",
          ignore: true,
        },
        {
          key: "validation",
          ignore: true,
        },
        {
          key: "conditional",
          ignore: true,
        },
        {
          key: "logic",
          ignore: true,
        },
        {
          key: "layout",
          ignore: true,
        },
      ],
      textarea: [
        {
          key: "display",
          ignore: false,
          components: [
            {
              key: "placeholder",
              ignore: true,
            },
            {
              key: "tooltip",
              ignore: true,
            },
            { key: "widget.type", ignore: true },
            { key: "labelPosition", ignore: true },
            { key: "inputMask", ignore: true },
            { key: "displayMask", ignore: true },
            { key: "applyMaskOn", ignore: true },
            { key: "allowMultipleMasks", ignore: true },
            { key: "tabindex", ignore: true },
            { key: "autocomplete", ignore: true },
            { key: "mask", ignore: true },
            { key: "showWordCount", ignore: true },
            { key: "showCharCount", ignore: true },
            { key: "hidden", ignore: true },
            { key: "hideLabel", ignore: true },
            { key: "disabled", ignore: true },
            { key: "tableView", ignore: true },
            { key: "modalEdit", ignore: true },
            { key: "tabindex", ignore: true },
            { key: "customClass", ignore: true },
            { key: "rows", ignore: true },
          ],
        },
        {
          key: "data",
          ignore: false,
          components: [
            { key: "inputFormat", ignore: true },
            { key: "rows", ignore: true },
            { key: "persistent", ignore: true },
            { key: "case", ignore: true },
            { key: "redrawOn", ignore: true },
            { key: "truncateMultipleSpaces", ignore: true },
            { key: "encrypted", ignore: true },
            { key: "protected", ignore: true },
            { key: "dbIndex", ignore: true },
            { key: "clearOnHide", ignore: true },
            { key: "defaultValue", ignore: true },
            { key: "calculateValue", ignore: true },
            { key: "calculateServer", ignore: true },
            { key: "allowCalculateOverride", ignore: true },
          ],
        },
        {
          key: "api",
          ignore: true,
        },
        {
          key: "validation",
          ignore: true,
        },
        {
          key: "conditional",
          ignore: true,
        },
        {
          key: "logic",
          ignore: true,
        },
        {
          key: "layout",
          ignore: true,
        },
      ],
      content: [
        {
          key: "display",
          ignore: false,
          components: [
            { key: "customClass", ignore: true },
            { key: "refreshOnChange", ignore: true },
            { key: "hidden", ignore: true },
            { key: "modalEdit", ignore: true },
          ],
        },
        {
          key: "api",
          ignore: true,
        },
        {
          key: "validation",
          ignore: true,
        },
        {
          key: "conditional",
          ignore: true,
        },
        {
          key: "logic",
          ignore: true,
        },
        {
          key: "layout",
          ignore: true,
        },
      ],
      checkbox: [
        {
          key: "api",
          ignore: true,
        },
        {
          key: "validation",
          ignore: true,
        },
        {
          key: "conditional",
          ignore: true,
        },
        {
          key: "logic",
          ignore: true,
        },
        {
          key: "layout",
          ignore: true,
        },
      ],
      select: [
        {
          key: "api",
          ignore: true,
        },
        {
          key: "validation",
          ignore: true,
        },
        {
          key: "conditional",
          ignore: true,
        },
        {
          key: "logic",
          ignore: true,
        },
        {
          key: "layout",
          ignore: true,
        },
      ],
      radio: [
        {
          key: "api",
          ignore: true,
        },
        {
          key: "validation",
          ignore: true,
        },
        {
          key: "conditional",
          ignore: true,
        },
        {
          key: "logic",
          ignore: true,
        },
        {
          key: "layout",
          ignore: true,
        },
      ],
      signature: [
        {
          key: "api",
          ignore: true,
        },
        {
          key: "validation",
          ignore: true,
        },
        {
          key: "conditional",
          ignore: true,
        },
        {
          key: "logic",
          ignore: true,
        },
        {
          key: "layout",
          ignore: true,
        },
      ],
    },
  };

  return (
    <>
      <div className="m-2 mt-3">
        <FormBuilder
          form={jsonSchema}
          onChange={onFormChange}
          options={builderOptions}
        />
      </div>
      <div className="my-4 p-4 border border-gray-200 rounded-lg shadow-md">
        <div className="font-bold text-lg mb-2 text-center">
          Form JSON Schema
        </div>
        <div className="text-center">
          <ReactJson src={jsonSchema} name={null} collapsed={true} />
        </div>
      </div>

      <div className="my-4 p-4 border border-gray-200 rounded-lg shadow-md">
        <div className="font-bold text-lg mb-2 text-center">
          As Rendered Form
        </div>
        <div>
          <Form form={jsonSchema} />
        </div>
      </div>
    </>
  );
};

export default FormioBuilder;
