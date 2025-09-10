// import React from "react";
// import { qassets } from "../assets/qassets";
// import { useNavigate } from "react-router-dom";

// const WelcomePage = () => {
//   const navigate = useNavigate();

//   const handleClick = () => {
//     navigate("/category");
//   };

//   return (
//     <div className="flex items-center justify-center h-[100vh] bg-black">
//       {qassets.entertainment}
//       <div className="h-[600px] w-[600px] bg-gradient-to-bl from-purple-500 via-pink-500 to-[#f70776] rounded-xl flex flex-col items-center justify-center gap-4">
//         <img className="w-52 h-52 rounded-full" src={qassets.welcome} alt="" />
//         <div className="w-[350px] h-[700px] mb-28 p-4 gap-4 rounded-xl flex flex-col items-center justify-center bg-black text-white">
//           <h1 className="ml-16 font-bold text-2xl ">
//             Welcome to the Interactive Quiz
//           </h1>
//           <p className="font-light">
//             Think fast, play smart! Dive into a world of fun questions and quick
//             challenges. Compete, learn, and see how high you can climb on the
//             leaderboard. Ready to quiz your way to the top?
//           </p>
//           <p className="font-bold text-lg mb-4">
//             "Turn your knowledge into glory!"
//           </p>
//           <div>
//             <button
//               onClick={handleClick}
//               className="w-56 h-10 bg-gradient-to-bl from-purple-500 via-pink-500 to-[#f70776] rounded-xl font-bold mb-4 text-black"
//             >
//               Let's Play
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default WelcomePage;



import React from "react";
import { qassets } from "../assets/qassets";
import { useNavigate } from "react-router-dom";

const WelcomePage = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/category");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-black p-4">
      {qassets.entertainment}
      <div className="w-full max-w-4xl bg-gradient-to-bl from-purple-500 via-pink-500 to-[#f70776] rounded-xl flex flex-col items-center justify-center gap-6 p-6 sm:p-8">
        <img
          className="w-32 h-32 sm:w-40 sm:h-40 md:w-52 md:h-52 rounded-full"
          src={qassets.welcome}
          alt="Welcome"
        />

        <div className="w-full max-w-md bg-black text-white p-6 rounded-xl flex flex-col items-center justify-center gap-4 text-center">
          <h1 className="text-xl sm:text-2xl font-bold">
            Welcome to the Interactive Quiz
          </h1>

          <p className="text-sm sm:text-base font-light">
            Think fast, play smart! Dive into a world of fun questions and quick
            challenges. Compete, learn, and see how high you can climb on the
            leaderboard. Ready to quiz your way to the top?
          </p>

          <p className="font-bold text-base sm:text-lg">
            "Turn your knowledge into glory!"
          </p>

          <button
            onClick={handleClick}
            className="w-full max-w-xs h-10 bg-gradient-to-bl from-purple-500 via-pink-500 to-[#f70776] rounded-xl font-bold text-black hover:scale-105 transition-transform duration-200"
          >
            Let's Play
          </button>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;



