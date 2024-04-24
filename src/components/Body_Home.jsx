import "./CSS.css";
import WhatsGrabFood from "./WhatsGrabFood";
import FluidButton from "./FluidButton";
import { Routes, Route, Link } from "react-router-dom";
import food1 from "../images/food-1.png";
import food2 from "../images/food-2.png";
import food3 from "../images/food-3.png";
import food4 from "../images/food-4.png";
import arrowNext from "../images/arrow-next.png";
import arrowPrev from "../images/arrow-prev.png";
import backgroundimg from "../images/mon-an.jpg";
import location from "../images/location.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/bundle";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useRef } from "react";
function Body_Home() {
  // slider
  const sliderRef = useRef();
  //data
  const cardData = [
    {
      val: "0",
      img: food1,
      cardTitle: "McDonalds - Hồ Gươm",
      cardText: "Gà Rán - Burger, Món Quốc Tế",
      star: "4.5",
      min: "30",
      dist: "2km",
      describe: "50K off, combo trưa chỉ 40K, ngoài ra không tặng kèm gì",
    },
    {
      val: "1",
      img: food2,
      cardTitle: "Cơm Niêu Singapore",
      cardText: "Cơm",
      star: "4.3",
      min: "25",
      dist: "1,4km",
      describe:
        "Tặng ngay Trà Tắc Xí Muội 700ML khi đặt đơn tối thiểu 150.000₫",
    },
    {
      val: "2",
      img: food3,
      cardTitle: "CƠM THỐ BÁCH KHOA",
      cardText: "Cơm chay - Healthy - Đồ chay",
      star: "4.2",
      min: "28",
      dist: "2,4km",
      describe: "Lời nói đầu môi anh ơi trót lưỡi đầu môi",
    },
    {
      val: "3",
      img: food4,
      cardTitle: "Bánh Mì Cô Chun",
      cardText: "Bánh mì - xôi",
      star: "4.7",
      min: "20",
      dist: "1km",
      describe: "Phải xa đành thôi sao anh gian dối người ơi",
    },
  ];
  //categoriesData
  const categoriesData = [
    {
      cardTit: "Pizza",
      src: "https://pastaxi-manager.onepas.vn/content/uploads/articles/2amthuc/nhahang/10pizzangonsg/diem-danh-10-dia-chi-an-pizza-ngon-tuyet-o-Sai-gon-anh3.jpg",
    },
    {
      cardTit: "Trà Sữa",
      src: "https://cdn.tgdd.vn/Files/2021/08/10/1374160/hoc-cach-pha-tra-sua-o-long-dai-loan-thom-ngon-chuan-vi-ai-cung-me-202108100039248020.jpg",
    },
    {
      cardTit: "Cơm Tấm",
      src: "https://lamsonfood.com/wp-content/uploads/2022/02/com-tam-duoc-nhieu-nguoi-yeu-thich.jpg",
    },
    {
      cardTit: "Bánh Mì",
      src: "https://www.bigc.vn/files/cam-nang-mua-sam-27-11-2023-14-35-21/vao-bep-cung-go-27-11-2023-14-39-10/cach-lam-banh-mi-thit-nuong.jpg",
    },
    {
      cardTit: "Lẩu cá",
      src: "https://cdn.tgdd.vn/Files/2020/06/18/1263878/cach-nau-lau-ca-bop-thit-beo-mem-ngot-ma-khong-tanh-202202150950507162.jpg",
    },
    {
      cardTit: "Bún đậu",
      src: "https://static.vinwonders.com/production/bun-dau-mam-tom-ha-noi-1.jpg",
    },
    {
      cardTit: "Món Hàn",
      src:"https://images.fpt.shop/unsafe/filters:quality(90)/fptshop.com.vn/uploads/images/tin-tuc/162906/Originals/Tokbokki%2002.jpeg",
    },
    {
      cardTit: "Món Ấn",
      src:"https://goldensmiletravel.com/uploads/images/2023/09/06/image9-1676535943-928-width1500height1000-1693975156.jpg",
    },
    {
      cardTit: "Món Nhật",
      src:"https://cdn.tgdd.vn/Files/2020/07/23/1273077/doi-gio-cho-ca-gia-dinh-voi-mon-com-ca-ri-kieu-nhat-ban-tre-em-cung-an-duoc-202007231448514435.jpg",
    },
    {
      cardTit: "Món Trung",
      src:"https://daynauan.info.vn/wp-content/uploads/2019/05/dau-hu-tu-xuyen-noi-tieng.jpg",
    },
    {
      cardTit: "Bánh ướt lòng gà",
      src:"https://cdn.tgdd.vn/Files/2022/01/03/1408896/5-quan-banh-uot-long-ga-ngon-o-quan-10-tp-hcm-202201032312339468.jpg",
    },
    {
      cardTit: "Bánh bèo",
      src:"https://daylambanh.edu.vn/wp-content/uploads/2017/07/cach-lam-banh-beo-chay-1.jpg",
    },
  ];
  const whyShouldOrder=[
    {
      cause:'Nhanh nhất ',
      explain:'- GrabFood cung cấp dịch vụ giao đồ ăn nhanh nhất thị trường.'
    },
  ]
  return (
    <>
      <img
        src={backgroundimg}
        class="fluid-img w-full h-96 object-cover z-[-1]"
        alt="..."
      ></img>
      <div class="border-bottom h-20">.</div>

      <div className="container container-card">
        {/* swiper */}
        {/* words */}
        <div className="container-sm">
          <h2 className="small:mt-[350px] uu-dai mb-8 mt-48 relative text-3xl font-bold left-9">
            Ưu đãi GrabFood tại{" "}
            <span className="inputPlace text-Ggreen">InputPlace</span>
          </h2>
        </div>
      </div>
      <div className="swiper w-full medium:w-3/4 cursor-pointer">
        {/* nav */}
        <Swiper
          className="w-full xl:max-w-[1200px]"
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={4}
          onSwiper={(it) => (sliderRef.current = it)}
          onSlideChange={() => console.log("slide change")}
          breakpoints={{
            100: {
              slidesPerView: 1,
            },
            500: {
              slidesPerView: 2,
            },
            750: {
              slidesPerView: 3,
            },
            1133: {
              slidesPerView: 4,
            },
          }}
        >
          <div className="arrow-swiper flex w-full justify-between  z-[5] top-[37%] absolute ">
            <img
              className=""
              src={arrowPrev}
              onClick={() => sliderRef.current?.slidePrev()}
            ></img>
            <img
              src={arrowNext}
              onClick={() => sliderRef.current?.slideNext()}
            ></img>{" "}
          </div>

          {/* Data */}
          <div className="wrap-card flex justify-around flex-wrap ml-8 ">
            {/*    {cardData.map((card)=>( */}
            {cardData
              .flatMap((card) => [card, card])
              .map((card, index) => (
                <SwiperSlide key={index}>
                  <Link to={"/Detail"} style={{ textDecoration: "none" }}>
                    <div className="card border-0 w-72 medium:w-60 small:w-36 small:h-56 ">
                      <img
                        src={card.img}
                        className="card-img-top w-full h-36 "
                        alt="..."
                      />
                      <div className="card-body">
                        <h5 className="card-title">{card.cardTitle}</h5>
                        <p className="card-text">{card.cardText}</p>
                        <div className="flex items-center">
                          <img
                            className="w-6 mr-2"
                            src="	https://food.grab.com/static/images/icons/icon-star.svg"
                          ></img>
                          <span className="mr-4 star">{card.star}</span>
                          <img
                            className="mr-2"
                            src="https://food.grab.com/static/images/icons/icon-clock.svg"
                          />
                          <span className="mr-2 min">{card.min}</span>
                          <span className="mr-2">•</span>
                          <span className="dist">{card.dist}</span>
                        </div>
                        <div className="flex items-start mt-[10px]">
                          <img src="https://food.grab.com/static/images/icons/icon-promo-tag.svg"></img>
                          <p className="ml-2">{card.describe}</p>
                        </div>
                      </div>
                    </div>
                  </Link>
                </SwiperSlide>
              ))}
          </div>
        </Swiper>
      </div>
      {/* button */}
      {/* Seach box */}
      <div className="container container-card">
        <div className="ml-12 search-box">
          <div className="container-search-box shadow-sm p-3 mb-5 rounded w-[350px] h-96 z-3 absolute top-[16%] bg-white">
            <div className="wrap-input pt-6 pl-4">
              <h5 className="font-bold">Good Afternoon</h5>
              <h1 className="font-[650]">
                Where should we deliver your food today?
              </h1>
              <div className="flex items-center relative  mt-3 mb-3">
                <img
                  className="absolute left-0 ml-2"
                  src={location}
                  alt="Location"
                ></img>
                <input
                  className="search-input w-72 pt-2 pl-10 pb-2 border"
                  placeholder="Nhập địa chỉ của bạn"
                  type="text"
                ></input>
                <img
                  className="absolute right-0 mr-4"
                  src="https://food.grab.com/static/images/icons/icon-geo-button.svg"
                  alt="Geo Button"
                ></img>
              </div>
              <div>
                <button
                  type="button"
                  className="btn-search bg-Ggreen w-72 h-12 font-[650] text-white rounded-md hover:bg-green-700"
                >
                  Tìm kiếm
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Nav button */}
        <div className="container-sm container-button">
          <Link to={"/Detail"}>
            <button
              type="button"
              class="btn btn w-[96%] h-12 mt-[24px] ml-8 mb-8 btn-fluid small:ml-4"
            >
              See all promotion
            </button>
          </Link>
        </div>
        {/* Words */}
        <div className="container-sm">
          <h2 className="uu-dai mb-12 mt-8 ml-[-10px] relative text-3xl font-bold left-11">
            There's something for everyone!{" "}
          </h2>
        </div>
        {/* Food Category */}

        <div className="container">
          <Link to={"/Detail"} style={{ textDecoration: "none" }}>
            <div className="flex flex-wrap justify-around ml-3">
              {categoriesData.map((c, index) => (
                <div key={index} className="card border-0 w-72">
                  <img src={c.src} className="card-img-top h-44" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title mb-4 font-semibold">{c.cardTit}</h5>
                  </div>
                </div>
              ))}
            </div>
          </Link>
        </div>
        {/* Why */}
        <div className="container-sm">
          <h2 className="uu-dai mb-12 mt-12 relative text-3xl font-bold left-8">
            Vì sao bạn nên Order trên GrabFood?{" "}
          </h2>
          <ul className="block ml-10 w-[96%]">
            <li className="li-check mb-4 text-justify relative ">
              <span className="fw-bold">Nhanh nhất </span>
              <span>
                - GrabFood cung cấp dịch vụ giao đồ ăn nhanh nhất thị trường.
              </span>
            </li>
            <li className="li-check mb-4 text-justify relative">
              <span className="fw-bold">Dễ dàng nhất </span>
              <span>
                - Giờ đây, bạn chỉ cần thực hiện vài cú nhấp chuột hoặc chạm nhẹ
                là đã có thể đặt đồ ăn. Hãy đặt đồ ăn trực tuyến hoặc tải xuống
                siêu ứng dụng Grab của chúng tôi để có trải nghiệm nhanh hơn và
                thú vị hơn.
              </span>
            </li>
            <li className="li-check mb-4 text-justify relative">
              <span className="fw-bold why-words">Đáp ứng mọi nhu cầu </span>
              <span className="why-words">
                - Từ món ăn đặc sản địa phương đến các nhà hàng được ưa thích,
                nhiều lựa chọn đa dạng chắc chắn sẽ luôn làm hài lòng khẩu vị
                của bạn.
              </span>
            </li>
            <li className="li-check mb-4 text-justify relative">
              <span className="fw-bold">Thanh toán dễ dàng </span>
              <span>
                - Giao và nhận đồ ăn thật dễ dàng. Thanh toán bằng GrabPay thậm
                chí còn dễ dàng hơn nữa.
              </span>
            </li>
            <li className="li-check mb-4 text-justify relative">
              <span className="fw-bold">Nhiều quà tặng hơn </span>
              <span>
                - Tích điểm GrabRewards cho mỗi đơn hàng của bạn và sử dụng điểm
                thưởng để đổi lấy nhiều ưu đãi hơn.
              </span>
            </li>
          </ul>
        </div>
        {/* What is grab food */}
        <div className="container-sm">
          <h2 className="uu-dai mb-12 mt-12 relative text-3xl font-bold left-8">
            Những câu hỏi thường gặp{" "}
          </h2>
        </div>
        <WhatsGrabFood
          title="GrabFood là gì?"
          describe="Lunch, Bún Cá Chấm Gốc Đa - Vũ Thạnh for Dinner! We are here to satisfy your hunger with a wide selection of merchant partners in Vietnam. GrabFood là dịch vụ Giao đồ ăn nhanh nhất tại Việt Nam. Chúng tôi đã sắp xếp tất cả các món ăn, nhà hàng và thực phẩm yêu thích của bạn một cách hợp lý để giúp bạn tìm được đồ ăn dễ dàng và nhanh chóng nhất có thể. Tìm và đặt món ăn yêu thích trên khắp Việt Nam - đặt đồ ăn trực tuyến chỉ bằng vài thao tác, từ món Lifted Coffee & Brunch cho bữa sáng, đến Maazi Indian – Nhà Hàng Ấn Độ cho bữa trưa, đến Bún Cá Chấm Gốc Đa – Vũ Thạnh cho bữa tối! Hãy để chúng tôi xua tan cơn đói của bạn nhờ một loạt đối tác bán đồ ăn ở Việt Nam."
        ></WhatsGrabFood>
      </div>
      <FluidButton buttonText={"Read more"}></FluidButton>
    </>
  );
}

export default Body_Home;
