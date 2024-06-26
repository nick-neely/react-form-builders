
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import { JoyDoc} from '@joyfill/components';
import "bootstrap/dist/css/bootstrap.css";


let form: unknown;

const Joyfill = () => {
    return (
        <div className="container-fluid d-flex flex-col">
            <button className={"btn btn-primary w-50 align-self-center mt-3 mb-3"} onClick={save}>SAVE</button>
            <div className={"w-75 ps-5 ms-5 mb-3"}>
                <JoyDoc
                    mode="edit"
                    onChange={(_changelogs: unknown, doc: unknown) => form = doc}
                />
            </div>

            <JoyDoc
            mode="fill"
            doc={form}
            />

        </div>

    );
}

const save = async () => {


    console.log(form);
    await uploadTemplate();
}


async function uploadTemplate(){
    console.log("files:" + JSON.stringify(form.files));
    console.log("fields" + JSON.stringify(form.fields));


    const options = {
        method: 'POST',
        headers: {
            accept: 'application/json',
            authorization: ""},
        body: {
            stage: 'published',
            files: [form.files],
            fields: [form.fields]}
        };

    const result = await fetch('https://api-joy.joyfill.io/v1/templates', options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));

    console.log(result);
}


const templateResponse = await fetch("https://api-joy.joyfill.io/v1/templates/<IDENTIFIER>", {
    method: 'GET',
    mode: 'cors',
    headers: {
        "Authorization": 'Bearer <ACCESS_TOKEN>',
        "Content-Type": 'application/json'
    }
});

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
const template = templateResponse.data;

export default Joyfill;