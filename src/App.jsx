import Header from "./components/Header";
import Words from "./components/Words";
import SeachBox from "./components/SearchBox";
import CardHolder from "./components/CardHolder";
import FluidButton from "./components/FluidButton";
import FoodCategory from "./components/FoodCategory";
import BackGroundImg from "./components/BackGroundImg";
import WhyShouldOrder from "./components/WhyShouldOrder";
import WhatsGrabFood from "./components/WhatsGrabFood";
import { useState } from "react";
function App() {
  //read more button
  const[show, setShow]=useState(false)
  const handleClickReadMore = () => {
   setShow(!show)
  };
  
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
      <FluidButton buttonText="See All Promotions" />
      <Words words="There's something for everyone!"></Words>
      <FoodCategory></FoodCategory>
      <Words words="Vì sao bạn nên Order trên GrabFood?"></Words>
      <WhyShouldOrder></WhyShouldOrder>
      <Words words="Những câu hỏi thường gặp"></Words>
      <WhatsGrabFood
        title="GrabFood là gì?"
        describe="Lunch, Bún Cá Chấm Gốc Đa - Vũ Thạnh for Dinner! We are here to satisfy your hunger with a wide selection of merchant partners in Vietnam. GrabFood là dịch vụ Giao đồ ăn nhanh nhất tại Việt Nam. Chúng tôi đã sắp xếp tất cả các món ăn, nhà hàng và thực phẩm yêu thích của bạn một cách hợp lý để giúp bạn tìm được đồ ăn dễ dàng và nhanh chóng nhất có thể. Tìm và đặt món ăn yêu thích trên khắp Việt Nam - đặt đồ ăn trực tuyến chỉ bằng vài thao tác, từ món Lifted Coffee & Brunch cho bữa sáng, đến Maazi Indian – Nhà Hàng Ấn Độ cho bữa trưa, đến Bún Cá Chấm Gốc Đa – Vũ Thạnh cho bữa tối! Hãy để chúng tôi xua tan cơn đói của bạn nhờ một loạt đối tác bán đồ ăn ở Việt Nam."
      ></WhatsGrabFood>
          {show && (
        <WhatsGrabFood
          title="Làm cách nào để đặt đồ ăn ở Việt Nam?"
          describe={"Sau đây là cách đơn giản nhất để đặt đồ ăn qua GrabFood khi bạn ở Việt Nam:"}
          title_more="1. Tìm kiếm nhà hàng hoặc món ăn yêu thích "
          describe_more="- Nhập địa chỉ của bạn vào trang chủ. Xem các Nhà hàng và điểm ăn uống gần chỗ bạn trong danh sách của GrabFood. Chọn nhà hàng yêu thích, duyệt hết thực đơn và chọn món ăn bạn muốn đặt."
          title_more1="2. Kiểm tra & Thanh toán"
          describe_more1=" - Sau khi chắc chắn rằng bạn đã đặt đầy đủ các món theo nhu cầu, hãy nhấp vào tab “ORDER NOW” (ĐẶT MÓN NGAY) và nhập địa chỉ giao đồ ăn cuối cùng. Chọn phương thức thanh toán phù hợp nhất với bạn và thanh toán."
          title_more2="3. Giao hàng"
          describe_more2=" - GrabFood đã thiết kế một hành trình phục vụ khách hàng liền mạch để bạn có thể thưởng thức món ăn một cách trọn vẹn. Chúng tôi sẽ gửi cho bạn email và tin nhắn SMS tức thời xác nhận đơn đặt hàng của bạn và thời gian giao hàng dự kiến. Sau đó chúng tôi sẽ giao ngay đồ ăn cho bạn."
        />
      )}

       {show && (
        <WhatsGrabFood
          title="GrabFood có cung cấp dịch vụ giao đồ ăn 24x7 không?"
          describe={"Chúng tôi chỉ biết một điều duy nhất, đó là đồ ăn, vậy nên tất nhiên chúng tôi cung cấp dịch vụ này rồi. Xin lưu ý, mặc dù chúng tôi là đối tác giao đồ ăn phục vụ 24x7, nhưng một số nhà hàng trong danh mục của chúng tôi có thể hạn chế giao đồ ăn khuya hoặc có thể không phục vụ đối với các đơn đặt hàng. Tuy nhiên, chúng tôi đã liệt kê danh sách những nhà hàng phục vụ nhu cầu ăn khuya của bạn trong mục Late Night Delivery (Giao hàng khuya)."}
        />
      )}
  
        {show && (
        <WhatsGrabFood
          title="GrabFood có chấp nhận tiền mặt không?"
          describe={"Tất nhiên là có! GrabFood chấp nhận mọi hình thức thanh toán cho dịch vụ giao đồ ăn, bao gồm cả tiền mặt khi giao hàng tại Việt Nam."}
        />
      )}
      {show && (
        <WhatsGrabFood
          title="Tôi có thể thanh toán trực tuyến trên GrabFood cho đơn hàng của mình không?"
          describe={"GrabFood chấp nhận nhiều hình thức thanh toán cho các đơn đặt đồ ăn trực tuyến, bao gồm cả thanh toán trực tuyến tại Việt Nam bằng thẻ tín dụng, thẻ ghi nợ, PayPal hoặc trả tiền lúc nhận hàng. Hãy nhớ sử dụng Moca để tích điểm thưởng mà bạn có thể sử dụng để được giảm giá cho đơn hàng tiếp theo và cho các dịch vụ khác của Grab nhé."}
        />
      )}
       {show && (
        <WhatsGrabFood
          title="Tôi có thể đặt đồ ăn trên GrabFood cho người khác không?"
          describe={"Tất nhiên rồi, hãy chăm sóc những người thân yêu của mình bằng cách gửi những món ăn mà họ yêu thích đến tận nhà. Bạn chỉ cần cập nhật địa chỉ giao hàng và tên người nhận trước khi đặt đơn hàng của bạn."}
        />
      )}
      {show && (
        <WhatsGrabFood
          title="GrabFood tính phí giao đồ ăn như thế nào?"
          describe={"Phí giao hàng của chúng tôi phụ thuộc vào nhiều yếu tố hoạt động như khoảng cách từ vị trí của bạn đến nhà hàng. Bạn có thể kiểm tra phí giao hàng chính xác cần phải trả trước khi thanh toán tại mục thanh toán trên ứng dụng Grab. Ngoài ra còn có phần “Free Delivery” (Giao hàng miễn phí) liệt kê các nhà hàng gần chỗ bạn mà không tính phí giao hàng."}
        />
      )}
        {show && (
        <WhatsGrabFood
          title="Những nhà hàng nào được liệt kê trong GrabFood? "
          describe={"Chúng tôi có gì trên GrabFood? Chúng tôi tự hào có nhiều nhà hàng và món ăn nhất so với bất kỳ ứng dụng giao đồ ăn nào ở Việt Nam. Bạn có thể lựa chọn trong số hàng nghìn nhà hàng trên GrabFood Việt Nam. Bạn có thể đặt đồ ăn trực tuyến từ tất cả các điểm ăn uống yêu thích của Burger King, Jollibee, KFC, McDonalds, Long John Silver, Pastamania, Dominos Pizza, Pizza Hut, Subway!"}
          describe2="GrabFood cũng có mã khuyến mãi, ưu đãi và giảm giá có hạn dành riêng cho các nhà hàng trong danh mục. Bạn có thể được hưởng chiết khấu lớn và hàng loạt ưu đãi khác cho đơn đặt đồ ăn của mình. Giờ thì đặt đồ ăn thôi!"
        />
      )}
      {show && (
        <WhatsGrabFood
          title="GrabFood có áp dụng giá trị đơn hàng tối thiểu không?"
          describe={"Có! Nhưng bạn có thể trả số tiền chênh lệch nếu giá trị đơn hàng của bạn nhỏ hơn số tiền đặt hàng tối thiểu."}
        />
      )}
      <FluidButton buttonText={show ? "Read Less" : "Read More"} onClick={handleClickReadMore}>
      {show ? <WhatsGrabFood title="..." describe="..." /> : null}
      </FluidButton>
      
    </>
  );
}
export default App;
