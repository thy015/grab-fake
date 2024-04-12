import Header from "./components/Header";
import Body_Home from "./components/Body_Home";
import Footer from "./components/Footer";
import { useState } from "react";
import Detail from "./components/Detail";
import { Routes, Route, Link } from "react-router-dom";
function App() {
  //read more button
  const [show, setShow] = useState(false);

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
