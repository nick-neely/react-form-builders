import { Model } from "survey-core";
import "survey-core/defaultV2.min.css";
import { Survey } from "survey-react-ui";

// Sample Survey JSON
// const surveyJson = {
//   elements: [
//     {
//       name: "FirstName",
//       title: "Enter your first name:",
//       type: "text",
//     },
//     {
//       name: "LastName",
//       title: "Enter your last name:",
//       type: "text",
//     },
//   ],
// };

// Sample Survey JSON from online SurveyJS Service
// https://surveyjs.io/form-library/documentation/how-to-store-survey-results
const surveyOnlineJson = {
  surveyId: "b0dcd1a9-5ffa-4401-b2cb-288667132f08",
  surveyPostId: "03042e46-bac2-4be9-abc5-aa79575e8352",
  surveyShowDataSaving: true,
};

const storageItemKey = "my-survey";

// Function to save survey data to the local storage
function saveSurveyData(survey: { data: any; currentPageNo: any }) {
  const data = survey.data;
  data.pageNo = survey.currentPageNo;
  window.localStorage.setItem(storageItemKey, JSON.stringify(data));
}

const SurveyFormLibrary = () => {
  const survey = new Model(surveyOnlineJson);
  survey.onComplete.add((sender) => {
    console.log(JSON.stringify(sender.data, null, 3));
  });

  // Save survey results to the local storage
  survey.onValueChanged.add(saveSurveyData);
  survey.onCurrentPageChanged.add(saveSurveyData);

  // Restore survey results
  const previousData = window.localStorage.getItem(storageItemKey) || null;
  if (previousData) {
    const data = JSON.parse(previousData);
    survey.data = data;
    if (data.pageNo) {
      survey.currentPageNo = data.pageNo;
    }
  }

  // Empty the local storage after the survey is completed
  survey.onComplete.add(() => {
    window.localStorage.setItem(storageItemKey, "");
  });

  return <Survey model={survey} />;
};

export default SurveyFormLibrary;
