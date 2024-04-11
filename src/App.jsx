import Header from "./components/Header";
import Words from "./components/Words";
import SeachBox from "./components/SearchBox";
import CardHolder from "./components/CardHolder";
import FluidButton from "./components/FluidButton";
import FoodCategory from "./components/FoodCategory";
import BackGroundImg from "./components/BackGroundImg";
import WhyShouldOrder from "./components/WhyShouldOrder";
import WhatsGrabFood from "./components/WhatsGrabFood";
import NoEffectButton from "./components/NoEffectButton";
import Footer from "./components/Footer";
import { useState } from "react";
function App() {
  //read more button
  const[show, setShow]=useState(false)

  
  return (  
    <>
      <div>
        <Header></Header>
        <BackGroundImg></BackGroundImg>
        <Words words="Ưu đãi GrabFood tại " inputplace="InputPlace"></Words>
        <SeachBox></SeachBox>
      </div>
      <div>
        <CardHolder></CardHolder>
      </div>
      <NoEffectButton buttonText="See All Promotions" />
      <Words words="There's something for everyone!"></Words>
      <FoodCategory></FoodCategory>
      <Words words="Vì sao bạn nên Order trên GrabFood?"></Words>
      <WhyShouldOrder></WhyShouldOrder>
      <Words words="Những câu hỏi thường gặp"></Words>
      <WhatsGrabFood
        title="GrabFood là gì?"
        describe="Lunch, Bún Cá Chấm Gốc Đa - Vũ Thạnh for Dinner! We are here to satisfy your hunger with a wide selection of merchant partners in Vietnam. GrabFood là dịch vụ Giao đồ ăn nhanh nhất tại Việt Nam. Chúng tôi đã sắp xếp tất cả các món ăn, nhà hàng và thực phẩm yêu thích của bạn một cách hợp lý để giúp bạn tìm được đồ ăn dễ dàng và nhanh chóng nhất có thể. Tìm và đặt món ăn yêu thích trên khắp Việt Nam - đặt đồ ăn trực tuyến chỉ bằng vài thao tác, từ món Lifted Coffee & Brunch cho bữa sáng, đến Maazi Indian – Nhà Hàng Ấn Độ cho bữa trưa, đến Bún Cá Chấm Gốc Đa – Vũ Thạnh cho bữa tối! Hãy để chúng tôi xua tan cơn đói của bạn nhờ một loạt đối tác bán đồ ăn ở Việt Nam."
      ></WhatsGrabFood>
      <FluidButton buttonText="Read More">
      </FluidButton>
      <Footer>

      </Footer>
    </>
  );
}
export default App;
