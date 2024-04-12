import Header from "./components/Header";
import Body_Home from "./components/Body_Home";
import Footer from "./components/Footer";
import { useState } from "react";
import Detail from "./components/Detail";
import { Routes, Route, Link } from "react-router-dom";
function App() {

  return (
    <>
      <div>
        <Header></Header>
        <Body_Home></Body_Home>
      </div>
      <Footer></Footer>
    </>
  );
}
export default App;
