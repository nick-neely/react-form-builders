
/**
 * Downloads the given schema as a JSON file.
 * @param schema The schema object to download.
 * @param filename The name of the file to download.
 */
export const downloadSchema = (
  schema: any,
  filename: string = "formSchema.json"
) => {
  const schemaString = JSON.stringify(schema, null, 2);
  const blob = new Blob([schemaString], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
};
