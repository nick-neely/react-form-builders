import { createLazyFileRoute } from "@tanstack/react-router";
import FormEngineBuilder from "../components/FormEngineBuilder";
import FormEngineViewer from "../components/FormEngineViewer";

export const Route = createLazyFileRoute("/formEngine")({
  component: FormEngineExample,
});

function FormEngineExample() {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen gap-4 p-4">
        <div className="w-full p-6 bg-white rounded-lg shadow-md">
          <h2 className="mb-4 text-2xl font-bold text-gray-800">
            Form Engine Builder
          </h2>
          <FormEngineBuilder />
        </div>
        <div className="w-full p-6 bg-white rounded-lg shadow-md">
          <h2 className="mb-4 text-2xl font-bold text-gray-800">
            Form Engine Viewer
          </h2>
          <FormEngineViewer />
        </div>
      </div>
    </>
  );
}
