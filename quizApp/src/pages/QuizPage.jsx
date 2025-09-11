import React, { useRef, useState } from "react";
import { data } from "../assets/data.js";
import { qassets } from "../assets/qassets.js";
import { useLocation } from "react-router-dom";

const QuizPage = () => {
  // let [index, setIndex] = useState(0); //for obtaing the index
  // let [question, setQuestion] = useState(data[index]); //
  let [lock, setLock] = useState(false); //after selection of one option , can't choose another option
  let [score, setScore] = useState(0);
  let [result, setResult] = useState(false); //for result

  const { state } = useLocation();
  const selectedCategory = state?.category;

  const filteredData = data.filter((q) => q.category === selectedCategory);

  // update initial states to use filtered data
  let [index, setIndex] = useState(0);
  let [question, setQuestion] = useState(filteredData[0]);

  //for heighlighting correct option
  let option1 = useRef(null);
  let option2 = useRef(null);
  let option3 = useRef(null);
  let option4 = useRef(null);
  let option_array = [option1, option2, option3, option4];

  //for checking the answer
  const checkAnswer = (e, ans) => {
    if (lock === false) {
      if (question.ans === ans) {
        e.target.classList.add("Correct");
        setLock(true);
        setScore((prev) => prev + 1);
      } else {
        e.target.classList.add("Wrong");
        setLock(true);
        option_array[question.ans - 1].current.classList.add("Correct");
      }
    }
  };
  //next button
  const next = () => {
    if (lock === true) {
      if (index === filteredData.length - 1) {
        setResult(true);
        return 0;
      }
      setIndex(++index);
      setQuestion(filteredData[index]);
      setLock(false);
      option_array.map((option) => {
        option.current.classList.remove("Wrong");
        option.current.classList.remove("Correct");
        return null;
      });
    }
  };
  //for reset button
  const reset = () => {
    setIndex(0);
    setQuestion(data[0]);
    setScore(0);
    setLock(false);
    setResult(false);
  };
  return (
    <div className="h-[100vh] flex flex-col items-center justify-center bg-black">
      <div className="h-[550px] w-[550px] bg-gradient-to-bl from-purple-500 via-pink-500 to-[#f70776] rounded-xl'>">
        <div className="flex items-center justify-center">
          <h1 className="font-extrabold text-2xl font-serif mb-4 mt-4">
            Quiz App
          </h1>
        </div>
        <hr />
        {result ? (
          <></>
        ) : (
          <>
            <h2 className="font-medium text-xl pl-8 mt-8 mb-4">
              {index + 1}. {question.question}
            </h2>
            <ul className="flex flex-col gap-6 items-center justify-center mt-8">
              <li
                ref={option1}
                onClick={(e) => {
                  checkAnswer(e, 1);
                }}
                className="font-normal text-lg bg-black text-white w-[450px] h-10 grid items-center pl-4 rounded-lg "
              >
                {question.option1}
              </li>
              <li
                ref={option2}
                onClick={(e) => {
                  checkAnswer(e, 2);
                }}
                className="font-normal text-lg bg-black text-white w-[450px] h-10 grid items-center pl-4 rounded-lg "
              >
                {question.option2}
              </li>
              <li
                ref={option3}
                onClick={(e) => {
                  checkAnswer(e, 3);
                }}
                className="font-normal text-lg bg-black text-white w-[450px] h-10 grid items-center pl-4 rounded-lg "
              >
                {question.option3}
              </li>
              <li
                ref={option4}
                onClick={(e) => {
                  checkAnswer(e, 4);
                }}
                className="font-normal text-lg bg-black text-white w-[450px] h-10 grid items-center pl-4 rounded-lg "
              >
                {question.option4}
              </li>
            </ul>
            <div className="flex items-center justify-center mt-6">
              <button
                onClick={next}
                className="bg-black text-white font-semibold text-lg w-48 h-10 rounded-lg hover:bg-pink-300 hover:text-black"
              >
                Next
              </button>
            </div>
            <div className="flex items-center justify-center mt-6">
              {index + 1} of {filteredData.length} Questions
            </div>
          </>
        )}
        {result ? (
          <>
            <div className="h-96 w-96 bg-black text-white flex flex-col items-center justify-center m-auto mt-11 rounded-lg">
              <img className="mb-8" src={qassets.winner} alt="" />
              <h1 className="font-bold text-2xl mb-1">congratulations,</h1>
              <h2 className="font-semibold text-xl">
                You Scored {score} out of {filteredData.length}
              </h2>
              <button
                className="h-10 w-28 text-black rounded-lg mt-16 bg-gradient-to-bl from-purple-500 via-pink-500 to-[#f70776]"
                onClick={reset}
              >
                Reset
              </button>
            </div>
          </>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default QuizPage;
