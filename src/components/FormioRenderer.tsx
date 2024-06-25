// src/FormioRender.tsx
import { Form } from "@formio/react";
import { useFormSchema } from "../hooks/useFormSchema";

const FormioRender = () => {
  const formSchemaContext = useFormSchema();

  // Check if formSchemaContext is not null
  if (!formSchemaContext) {
    return <div>Loading form schema...</div>;
  }

  const { schema } = formSchemaContext;

  return (
    <div className="m-4 p-4 border border-gray-200 rounded-lg shadow-md">
      <div>
        <Form form={schema} />
      </div>
    </div>
  );
};

export default FormioRender;
