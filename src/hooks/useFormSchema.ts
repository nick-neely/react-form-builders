import { useContext } from "react";
import {
  FormSchemaContext,
  FormSchemaContextType,
} from "../contexts/FormSchemaContext";

/**
 * Custom hook that returns the form schema from the FormSchemaContext.
 * @returns The form schema from the FormSchemaContext, or null if not found.
 */
export const useFormSchema = (): FormSchemaContextType | null =>
  useContext(FormSchemaContext);
