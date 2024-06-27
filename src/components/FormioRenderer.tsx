import { Form } from "@formio/react";
import React, { useState } from "react";
import { useFormSchema } from "../hooks/useFormSchema";
import { downloadSchema } from "../utils/schemaUtils";

const FormioRender = () => {
  const formSchemaContext = useFormSchema();
  const [submissionData, setSubmissionData] = useState(null);

  // Check if formSchemaContext is not null
  if (!formSchemaContext) {
    return <div>Loading form schema...</div>;
  }

  const { schema } = formSchemaContext;

  // Handler for form submission
  const handleSubmit = (data) => {
    setSubmissionData(data);
  };

  return (
    <div className="m-4">
      <div className="p-4 border border-gray-200 rounded-lg shadow-md">
        <Form form={schema} onSubmit={handleSubmit} />
      </div>
      {submissionData && (
        <div className="mt-4 p-4 bg-white border border-gray-200 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold">Submission Data</h2>
          <pre className="text-sm overflow-x-auto">
            {JSON.stringify(submissionData, null, 2)}
          </pre>
          <button
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
            onClick={() =>
              downloadSchema(submissionData, "submissionData.json")
            }
          >
            Download JSON
          </button>
        </div>
      )}
    </div>
  );
};

export default FormioRender;
