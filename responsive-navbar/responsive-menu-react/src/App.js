import React from "react";
import Navbar from "./components/Navbar";
import {Routes,Route} from "react-router-dom";
import Home from "./Pages/Home";
import AboutMe from "./Pages/AboutMe";
import Blog from "./Pages/Blog";
import WorksLayout from "./Pages/Works";
import Categories from "./Pages/Works/Categories";
import Card from "./Pages/Works/Card";
import Works from "./Pages/Works/Works";

function App() {
  return (
    <React.Fragment>
      <Navbar/> 
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<AboutMe />}/>
        <Route path="/blog" element={<Blog />}/>
        <Route path="/works" element={<WorksLayout />}>
          <Route index={true} element={<Works/>}/>
          <Route path="categories" element={<Categories/>}/>
          <Route path="card/:url" element={<Card/>}/>
        </Route>
      </Routes>
    </React.Fragment>
  );
}

export default App;
