import "survey-core/defaultV2.min.css";
import "survey-creator-core/survey-creator-core.min.css";
import { SurveyCreator, SurveyCreatorComponent } from "survey-creator-react";

const creatorOptions = {
  showLogicTab: true,
  isAutoSave: true,
  showThemeTab: true,
};

const defaultJson = {
  pages: [
    {
      name: "Name",
      elements: [
        {
          name: "FirstName",
          title: "Enter your first name:",
          type: "text",
        },
        {
          name: "LastName",
          title: "Enter your last name:",
          type: "text",
        },
      ],
    },
  ],
};

const SurveyCreatorWidget = () => {
  const creator = new SurveyCreator(creatorOptions);
  creator.text =
    window.localStorage.getItem("survey-json") || JSON.stringify(defaultJson);
  creator.saveSurveyFunc = (
    saveNo: any,
    callback: (arg0: any, arg1: boolean) => void
  ) => {
    window.localStorage.setItem("survey-json", creator.text);
    callback(saveNo, true);
  };
  return <SurveyCreatorComponent creator={creator} />;
};

export default SurveyCreatorWidget;
