import { useContext } from "react";
import {
  FormSchemaContext,
  FormSchemaContextType,
} from "../contexts/FormSchemaContext";

export const useFormSchema = (): FormSchemaContextType | null =>
  useContext(FormSchemaContext);
