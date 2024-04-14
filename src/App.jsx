import Header from "./components/Header";
import Body_Home from "./components/Body_Home";
import Detail from "./components/Detail";
import { Routes, Route } from "react-router-dom";
import Compre from "./components/Compre";


function App() {
 
  return (
    <>
      <div>
       <Header></Header>
        <Routes>
          <Route path="/" element={<Body_Home />} />
          <Route path="/Detail" element={<Detail />} />
          <Route path="/Compre" element={<Compre></Compre>} />
        </Routes>
        
      </div>
    </>
  );
}
export default App;
