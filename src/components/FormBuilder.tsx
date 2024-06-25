import "formBuilder";
import "jquery-ui-sortable";
import { useEffect, useRef } from "react";

declare global {
  interface JQuery {
    formBuilder(options: FormBuilderProps): JQuery;
  }
}

interface FormField {
  type: string;
  subtype?: string;
  label?: string;
  className?: string;
  name?: string;
  values?: Array<{
    label: string;
    value: string;
    selected?: boolean;
  }>;
}

// FormBuilderProps expecting formData as an array of FormField objects
interface FormBuilderProps {
  formData: FormField[];
}

export const FormBuilder = ({ formData }: FormBuilderProps) => {
  const fbRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (fbRef.current) {
      // Clear existing formBuilder instances if any
      while (fbRef.current.firstChild) {
        fbRef.current.removeChild(fbRef.current.firstChild);
      }

      $(fbRef.current).formBuilder({ formData });
      console.log("Form Initialized");
    }
  }, [formData]);

  return <div id="fb-editor" ref={fbRef} />;
};
