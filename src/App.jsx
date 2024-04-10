
import Header from "./components/Header"
import Words from "./components/Words"
import SeachBox from "./components/SearchBox"
import CardHolder from "./components/CardHolder"
import FluidButton from "./components/FluidButton"
import FoodCategory from "./components/FoodCategory"
import BackGroundImg from "./components/BackGroundImg"
import WhyShouldOrder from "./components/WhyShouldOrder"
import WhatIsGrabFood from "./components/WhatIsGrabFood"
function App(){
  return <><div><Header></Header>
  <BackGroundImg></BackGroundImg>
  <Words words="Ưu đãi GrabFood tại "inputplace="InputPlace"></Words>
  <SeachBox></SeachBox></div>
  <div>
    <CardHolder></CardHolder>
  </div>
  <FluidButton buttonText="See All Promotions"/>
  <Words words="There's something for everyone!"></Words>
  <FoodCategory></FoodCategory>
  <Words words="Vì sao bạn nên Order trên GrabFood?"></Words>
  <WhyShouldOrder ></WhyShouldOrder>
  <Words words="Những câu hỏi thường gặp"></Words>

  </>
}
export default App