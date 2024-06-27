import { ReactNode, createContext, useState } from "react";

export interface FormSchemaContextType {
  schema: { components: any[] };
  setSchema: React.Dispatch<React.SetStateAction<{ components: any[] }>>;
}

export const FormSchemaContext = createContext<FormSchemaContextType | null>(
  null
);

/**
 * Provides the FormSchemaContext to the application.
 * @param children - The child components to be wrapped by the FormSchemaProvider.
 */
export const FormSchemaProvider = ({ children }: { children: ReactNode }) => {
  const [schema, setSchema] = useState<{ components: any[] }>({
    components: [],
  });

  return (
    <FormSchemaContext.Provider value={{ schema, setSchema }}>
      {children}
    </FormSchemaContext.Provider>
  );
};
