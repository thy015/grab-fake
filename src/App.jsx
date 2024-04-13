import Header from "./components/Header";
import Body_Home from "./components/Body_Home";
import Footer from "./components/Footer";
import { useState } from "react";
import Detail from "./components/Detail";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <div>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Body_Home />} />
          <Route path="/Detail" element={<Detail />} />
        </Routes>
      </div>

      <Footer></Footer>
    </>
  );
}
export default App;
