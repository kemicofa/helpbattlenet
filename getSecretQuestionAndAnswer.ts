import getFirstname from "./getFirstname.ts";
import getLastname from "./getLastname.ts";
import getRandomNumber from "./getRandomNumber.ts";

const secretQuestionsAndAnswers = [
  ["2.Name of your first pet?", getFirstname()],
  ["3.Name of your second pet?", getFirstname()],
  ["5.What was your childhood nickname?", getFirstname()],
  ["6.Who was your childhood hero?", getFirstname()],
  ["10.Your favorite sports team or player?", getFirstname()],
  ["14.If you could change your name, what would it be? ", getFirstname()],
  ["16.What was the surname of your favourite teacher? ", getFirstname()],
  ["17.What was the street you lived on in high school?", getLastname()],
  ["18.Best friend in high school? ", getFirstname()],
];

const getSecretQuestionAndAnswer = () => {
  return secretQuestionsAndAnswers[
    getRandomNumber(secretQuestionsAndAnswers.length)
  ];
};

export default getSecretQuestionAndAnswer;
