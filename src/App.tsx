import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Todo from "./pages/Todo";
import Movie from "./pages/Movie";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Todo" element={<Todo />} />
      <Route path="/Movie" element={<Movie />} />
    </Routes>
  );
}

export default App;
