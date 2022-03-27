import React from "react";
import { Routes, Route } from "react-router-dom";
import { Global } from "@emotion/react";
import { QueryClient, QueryClientProvider } from "react-query";

import Header from "./components/Header";
import Home from "./pages/Home";
import Todo from "./pages/Todo";
import Movie from "./pages/Movie";
import style from "./styles";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Global styles={style} />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Todo" element={<Todo />} />
        <Route path="/Movie" element={<Movie />} />
      </Routes>
    </QueryClientProvider>
  );
}

export default App;
