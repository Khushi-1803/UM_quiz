import React from "react";
import { Routes, Route } from "react-router-dom";
import WelcomePage from "./pages/WelcomePage.jsx";
import Category from "./pages/Category.jsx";
import QuizPage from "./pages/QuizPage.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<WelcomePage />} />
      <Route path="/category" element={<Category />} />
      <Route path="/quiz" element={<QuizPage />} />
    </Routes>
  );
}

export default App;
