import { Form, FormBuilder } from "@formio/react";
import ReactJson from "@microlink/react-json-view";
import { useFormSchema } from "../hooks/useFormSchema";
import "../styles/FormioBuilder.css";
import { downloadSchema } from "../utils/schemaUtils";

const FormioBuilder = () => {
  interface Field {
    key: string;
    ignore: boolean;
  }
  const formSchemaContext = useFormSchema();

  // Handle null
  if (!formSchemaContext) {
    console.error("FormSchemaContext is null");
    return null;
  }

  const { schema, setSchema } = formSchemaContext;

  const onFormChange = (schema) => {
    setSchema({ ...schema, components: [...schema.components] });
  };

  // Function to generate common editForm configurations
  const generateEditFormConfig = (
    componentKey: string,
    additionalDisplayFields: Field[] = [],
    additionalDataFields: Field[] = []
  ) => {
    const baseDisplayFields = [
      ...commonIgnoredFields,
      ...additionalDisplayFields,
    ];
    const baseDataFields = [
      ...commonIgnoredFields.filter(
        (field) => !additionalDisplayFields.some((adf) => adf.key === field.key)
      ),
      ...additionalDataFields,
    ];

    return [
      ...ignoredTabsConfig,
      {
        key: "display",
        ignore: false,
        components: baseDisplayFields,
      },
      {
        key: "data",
        ignore: additionalDataFields.length === 0, // Ignore if no additional data fields
        components: baseDataFields,
      },
    ];
  };

  const ignoredTabsConfig: Field[] = [
    { key: "api", ignore: true },
    { key: "validation", ignore: true },
    { key: "conditional", ignore: true },
    { key: "logic", ignore: true },
    { key: "layout", ignore: true },
  ];

  const commonIgnoredFields: Field[] = [
    { key: "placeholder", ignore: true },
    { key: "tooltip", ignore: true },
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
  ];

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
      textfield: generateEditFormConfig("textfield"),
      textarea: generateEditFormConfig(
        "textarea",
        [{ key: "rows", ignore: true }],
        [
          { key: "inputFormat", ignore: true },
          { key: "persistent", ignore: true },
          { key: "protected", ignore: true },
          { key: "dbIndex", ignore: true },
          { key: "multiple", ignore: true },
          { key: "case", ignore: true },
          { key: "encrypted", ignore: true },
          { key: "truncateMultipleSpaces", ignore: true },
          { key: "redrawOn", ignore: true },
          { key: "clearOnHide", ignore: true },
          { key: "customDefaultValue", ignore: true },
          { key: "calculateValue", ignore: true },
          { key: "calculateServer", ignore: true },
          { key: "allowCalculateOverride", ignore: true },
        ]
      ),
      content: generateEditFormConfig("content", [
        { key: "customClass", ignore: true },
      ]),
      checkbox: [...ignoredTabsConfig],
      select: [...ignoredTabsConfig],
      radio: [...ignoredTabsConfig],
      signature: [...ignoredTabsConfig],
    },
  };

  return (
    <>
      <div className="m-2 mt-3">
        <FormBuilder
          form={schema}
          onChange={onFormChange}
          options={builderOptions}
        />
      </div>
      <div className="my-4 p-4 border border-gray-200 rounded-lg shadow-md">
        <div className="font-bold text-lg mb-2 text-center">
          Form JSON Schema
        </div>
        <div className="text-center">
          <ReactJson src={schema} name={null} collapsed={true} />
        </div>
      </div>

      <div className="my-4 p-4 border border-gray-200 rounded-lg shadow-md flex flex-col items-center">
        <div className="font-bold text-lg mb-2 text-center">Form Controls</div>
        <div className="flex gap-4">
          <button
            className="w-64 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => downloadSchema(schema, "formSchema.json")}
          >
            Download
          </button>
        </div>
      </div>
    </>
  );
};

export default FormioBuilder;
