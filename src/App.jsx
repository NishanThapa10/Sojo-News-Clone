import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Bookmarks, Category, Home, Layout, Login, News, NotFound } from "./pages";
import { useSelector } from "react-redux";
import { useEffect } from "react";

function App() {


  const darkMode = useSelector((state)=> state.darkMode.value);


  useEffect(()=>{
     document.body.style = darkMode ? "white" : "black";
    document.body.style.backgroundColor = darkMode? "#2A2D35":"white"
  },[darkMode]);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/news/:id" element={<News/>} />
          <Route path="/news/category/:id/:name" element={<Category/>} />
          <Route path="/bookmarks" element={<Bookmarks/>} />
        </Route>
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
