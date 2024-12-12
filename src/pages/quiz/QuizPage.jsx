import React from "react";
import Quiz from "../../components/Quiz/Quiz";
import Navbar from '../../components/Navbar/Navbar';
import "./QuizPage.css";

const QuizPage = () => {
  return (
    <div className="quiz-page">
      <Navbar />
      <Quiz />
    </div>
  );
};

export default QuizPage;
