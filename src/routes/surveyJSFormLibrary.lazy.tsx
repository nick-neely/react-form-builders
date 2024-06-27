import { createLazyFileRoute } from "@tanstack/react-router";
import SurveyFormLibrary from "../components/SurveyFormLibrary";

export const Route = createLazyFileRoute("/surveyJSFormLibrary")({
  component: SurveyJSFormLibraryExample,
});

function SurveyJSFormLibraryExample() {
  return <SurveyFormLibrary />;
}
