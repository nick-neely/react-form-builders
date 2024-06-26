import "formBuilder";
import "jquery-ui-sortable";
import {useEffect, useRef, useState} from "react";

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
  const initialized = useRef<boolean>(false);

  useEffect(() => {
    if (fbRef.current && !initialized.current) {
      $(fbRef.current).formBuilder({ formData });
      console.log("Form Initialized");
      initialized.current = true;
    }
  }, [initialized.current, fbRef.current]);

  return <>
    <div>hello :)</div>
    <div id="fb-editor" ref={fbRef} />;
  </>
};
