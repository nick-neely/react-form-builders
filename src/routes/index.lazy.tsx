import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/")({
  component: () => (
    <div className="flex justify-center items-center h-screen bg-gray-50">
      <div className="max-w-lg w-full bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">
          FormBuilder Collection
        </h1>
        <p className="text-gray-600 mb-4">
          Welcome to the FormBuilder Collection! This project showcases various
          drag-and-drop form builders implemented in React, leveraging Vite for
          an optimized development experience.
        </p>
        <p className="text-gray-600 mb-4">
          Explore different form builders and their functionalities:
        </p>
        <ul className="list-disc pl-5 mb-4">
          <li className="text-gray-600">
            <strong>jQueryFormBuilder:</strong> OSS - Drag-and-drop, but
            struggles with React and TypeScript integration.
          </li>
          <li className="text-gray-600">
            <strong>Form.io:</strong> OSS - Best OSS option with customization,
            JSON schema, but uses Bootstrap for styling.
          </li>
          <li className="text-gray-600">
            <strong>FormEngine:</strong> License Required - Easy implementation,
            supports JSON schema, custom components, and more.
          </li>
          <li className="text-gray-600">
            <strong>SurveyJS:</strong> License Required - Intuitive,
            self-hosted, excellent documentation, supports JSON, localization.
          </li>
          <li className="text-gray-600">
            <strong>Joyfill:</strong> License Required - User-friendly but
            requires their services for JSON schema management.
          </li>
        </ul>
        <div className="bg-gray-100 p-4 rounded-lg mb-4">
          <p className="text-sm text-gray-800">
            <strong>Top Picks:</strong>
          </p>
          <ul className="list-disc pl-5 text-sm text-gray-800">
            <li>Form.io for an OSS option.</li>
            <li>SurveyJS for the overall best pick.</li>
          </ul>
        </div>
      </div>
    </div>
  ),
});
