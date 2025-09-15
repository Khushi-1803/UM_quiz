
import React from "react";
import { qassets } from "../assets/qassets";
import { useNavigate } from "react-router-dom";

const WelcomePage = () => {
  const navigate = useNavigate();
  const handleClick = () => navigate("/category");

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4">
      {/* ===== DESKTOP / LAPTOP UI (visible on lg and up) ===== */}
      <div className="hidden lg:flex items-center justify-center">
        <div className="w-[600px] rounded-2xl bg-gradient-to-r from-pink-500 via-purple-500 to-fuchsia-600 p-8 flex flex-col items-center">
        
          <img
            src={qassets.welcome}
            alt="Welcome avatar"
            className="w-52 h-52 rounded-full object-cover ring-8 ring-black/60 -mt-28 shadow-lg"
          />

          {/* Inner black card (auto height; no fixed large heights) */}
          <div className="w-full max-w-[380px] bg-black text-white p-6 rounded-xl mt-5">
            <h1 className="text-2xl font-bold text-center">
              Welcome to the Interactive Quiz
            </h1>

            <p className="mt-3 text-sm leading-relaxed text-center">
              Think fast, play smart! Dive into a world of fun questions and quick
              challenges. Compete, learn, and see how high you can climb on the
              leaderboard. Ready to quiz your way to the top?
            </p>

            <p className="mt-4 font-bold text-center">"Turn your knowledge into glory!"</p>

            <div className="mt-6 flex justify-center">
              <button
                onClick={handleClick}
                className="px-8 py-2 rounded-full bg-gradient-to-bl from-purple-500 via-pink-500 to-[#f70776] font-semibold text-black shadow-md hover:scale-105 transition-transform"
              >
                Let's Play
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ===== MOBILE UI (visible below lg) ===== */}
      <div className="lg:hidden w-full max-w-md bg-gradient-to-br from-pink-500 via-purple-500 to-fuchsia-600 rounded-2xl p-6 shadow-xl">
        <div className="flex flex-col items-center gap-4">
          <img
            src={qassets.welcome}
            alt="Welcome avatar"
            className="w-28 h-28 rounded-full object-cover ring-4 ring-black/50 shadow-md"
          />

          <div className="w-full bg-black/90 text-white p-4 rounded-lg text-center">
            <h1 className="text-lg font-bold">Welcome to the Interactive Quiz</h1>

            <p className="mt-2 text-sm leading-relaxed">
              Think fast, play smart — quick questions and short challenges. Compete,
              learn, and climb the leaderboard. Ready to quiz your way to the top?
            </p>

            <p className="mt-3 font-semibold italic">"Turn your knowledge into glory!"</p>

            <button
              onClick={handleClick}
              className="mt-4 w-full py-2 rounded-full bg-gradient-to-bl from-purple-500 via-pink-500 to-[#f70776] font-semibold text-black hover:scale-105 transition-transform"
            >
              Let's Play
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;
