import { createLazyFileRoute } from "@tanstack/react-router";
import SurveyCreatorWidget from "../components/SurveyCreatorWidget";

export const Route = createLazyFileRoute("/surveyJSCreator")({
  component: SurveyCreatorJSExample,
});

function SurveyCreatorJSExample() {
  return <SurveyCreatorWidget />;
}
