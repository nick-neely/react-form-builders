// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import { JoyDoc } from "@joyfill/components";

let form: unknown;

async function uploadTemplate() {
  console.log("files:" + JSON.stringify(form.files));
  console.log("fields" + JSON.stringify(form.fields));

  const options = {
    method: "POST",
    headers: {
      accept: "application/json",
      authorization: "",
    },
    body: {
      stage: "published",
      files: [form.files],
      fields: [form.fields],
    },
  };

  const result = await fetch("https://api-joy.joyfill.io/v1/templates", options)
    .then((response) => response.json())
    .then((response) => console.log(response))
    .catch((err) => console.error(err));

  console.log(result);
}

const templateResponse = await fetch(
  "https://api-joy.joyfill.io/v1/templates/<IDENTIFIER>",
  {
    method: "GET",
    mode: "cors",
    headers: {
      Authorization: "Bearer <ACCESS_TOKEN>",
      "Content-Type": "application/json",
    },
  }
);

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
const template = templateResponse.data;

const Joyfill = () => {
  const save = async () => {
    console.log(form);
    await uploadTemplate();
  };

  return (
    <div className="container mx-auto flex flex-col">
      <button
        className="bg-blue-500 text-white font-bold py-2 px-4 rounded w-1/2 self-center my-3"
        onClick={save}
      >
        SAVE
      </button>
      <div className="w-3/4 pl-5 ml-5 mb-3">
        <JoyDoc
          mode="edit"
          onChange={(_changelogs: unknown, doc: unknown) => (form = doc)}
        />
      </div>

      <JoyDoc mode="fill" doc={form} />
    </div>
  );
};

export default Joyfill;
