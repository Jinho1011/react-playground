import React from "react";
import { Routes, Route } from "react-router-dom";
import { Global } from "@emotion/react";
import { QueryClient, QueryClientProvider } from "react-query";

import Header from "./components/Header";
import Home from "./pages/Home";
import Todo from "./pages/Todo";
import Movie from "./pages/Movie";
import Detail from "./pages/Detail";
import style from "./styles";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Global styles={style} />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todo" element={<Todo />} />
        <Route path="/movie" element={<Movie />} />
        <Route path="/movie/:id" element={<Detail />} />
      </Routes>
    </QueryClientProvider>
  );
}

export default App;
