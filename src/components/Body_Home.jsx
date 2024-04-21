import "./CSS.css";
import WhatsGrabFood from "./WhatsGrabFood";
import FluidButton from "./FluidButton";
import { Routes, Route, Link } from "react-router-dom";
import food1 from "../images/food-1.png";
import food2 from "../images/food-2.png";
import food3 from "../images/food-3.png";
import food4 from "../images/food-4.png";
import backgroundimg from "../images/mon-an.jpg";
import location from "../images/location.png";
function Body_Home() {
  return (
    <>
      <img src={backgroundimg} class="fluid-img w-full h-96 object-cover z-[-1]" alt="..."></img>
      <div class="border-bottom h-20">.</div>
      {/* words */}
      <div className="container-sm">
      <h2 className="uu-dai mb-12 mt-12 relative text-3xl font-bold left-11">
            Ưu đãi GrabFood tại <span className="inputPlace text-Ggreen">InputPlace</span></h2>
      </div>
      {/* Card holder */}
      <div className="container">
        {/* nav */}
        <Link to={"/Detail"} style={{ textDecoration: "none" }}>
          <div className="containerCard">
            <div className="card border-0" style={{ width: "280px" }}>
              <img src={food1} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">McDonald's - Hồ Gươm</h5>
                <p className="card-text">Gà Rán - Burger, Món Quốc Tế</p>

                <img
                  className="span-star"
                  src="	https://food.grab.com/static/images/icons/icon-star.svg"
                ></img>
                <span className="card-text span-card">4.3</span>
                <span className="card-text span-clock">
                  <img
                    src="https://food.grab.com/static/images/icons/icon-clock.svg"
                    alt=""
                    srcset=""
                  />
                  <span className="card-text span-card">30 phút</span>
                  <span className="card-text span-clock">•</span>
                  <span className="card-text span-card">2km</span>
                </span>
                <p className="card-text">
                  <small className="text-body-secondary">
                    <img src="https://food.grab.com/static/images/icons/icon-promo-tag.svg"></img>
                    <span className="card-text span-card">
                      50K off, combo trưa chỉ 40K, ngoài ra không tặng kèm gì{" "}
                    </span>{" "}
                  </small>
                </p>
              </div>
            </div>
            <div className="card border-0" style={{ width: "280px" }}>
              <img src={food2} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Cơm Niêu Singapore</h5>
                <p className="card-text">Cơm</p>

                <img
                  className="span-star"
                  src="	https://food.grab.com/static/images/icons/icon-star.svg"
                ></img>
                <span className="card-text span-card">4.6</span>
                <span className="card-text span-clock">
                  <img
                    src="https://food.grab.com/static/images/icons/icon-clock.svg"
                    alt=""
                    srcset=""
                  />
                  <span className="card-text span-card">20 phút</span>
                  <span className="card-text span-clock">•</span>
                  <span className="card-text span-card">1,8km</span>
                </span>
                <p className="card-text">
                  <small className="text-body-secondary">
                    <img src="https://food.grab.com/static/images/icons/icon-promo-tag.svg"></img>
                    <span className="card-text span-card">
                      Tặng ngay Trà Tắc Xí Muội 700ML khi đặt đơn tối thiểu
                      150.000₫{" "}
                    </span>{" "}
                  </small>
                </p>
              </div>
            </div>
            <div className="card border-0" style={{ width: "280px" }}>
              <img src={food3} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">CƠM THỐ BÁCH KHOA</h5>
                <p className="card-text">Cơm Chay - Salad Healthy - Đồ Chay</p>

                <img
                  className="span-star"
                  src="	https://food.grab.com/static/images/icons/icon-star.svg"
                ></img>
                <span className="card-text span-card">4.5</span>
                <span className="card-text span-clock">
                  <img
                    src="https://food.grab.com/static/images/icons/icon-clock.svg"
                    alt=""
                    srcset=""
                  />
                  <span className="card-text span-card">15 phút</span>
                  <span className="card-text span-clock">•</span>
                  <span className="card-text span-card">1km</span>
                </span>
                <p className="card-text">
                  <small className="text-body-secondary">
                    <img src="https://food.grab.com/static/images/icons/icon-promo-tag.svg"></img>
                    <span className="card-text span-card">
                      Lời nói đầu môi anh ơi trót lưỡi đầu môi{" "}
                    </span>{" "}
                  </small>
                </p>
              </div>
            </div>
            <div className="card border-0" style={{ width: "280px" }}>
              <img src={food4} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Bánh Mì Cô Chun</h5>
                <p className="card-text">Bánh Mì - Xôi</p>

                <img
                  className="span-star"
                  src="	https://food.grab.com/static/images/icons/icon-star.svg"
                ></img>
                <span className="card-text span-card">3.9</span>
                <span className="card-text span-clock">
                  <img
                    src="https://food.grab.com/static/images/icons/icon-clock.svg"
                    alt=""
                    srcset=""
                  />
                  <span className="card-text span-card">35 phút</span>
                  <span className="card-text span-clock">•</span>
                  <span className="card-text span-card">2,4km</span>
                </span>
                <p className="card-text">
                  <small className="text-body-secondary">
                    <img src="https://food.grab.com/static/images/icons/icon-promo-tag.svg"></img>
                    <span className="card-text span-card">
                      Phải xa đành thôi sao anh gian dối người ơi
                    </span>{" "}
                  </small>
                </p>
              </div>
            </div>
          </div>
        </Link>
        {/* Seach box */}
    
            <div className="ml-12 search-box">
              <div className="container-search-box shadow-sm p-3 mb-5 rounded w-[350px] h-96 z-3 absolute top-[16%] bg-white">
                <div className="wrap-input pt-6 pl-4">
                  <h5 className="font-bold">Good Afternoon</h5>
                  <h1 className="font-[650]">Where should we deliver your food today?</h1>
                  <div className="flex items-center relative  mt-3 mb-3">
                    <img className="absolute left-0 ml-2" src={location} alt="Location"></img>
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
                    <button type="button" className="btn-search bg-Ggreen w-72 h-12 font-[650] text-white rounded-md hover:bg-green-700">
                      Tìm kiếm
                    </button>
                  </div>
                </div>
              </div>
            </div>
       

        {/* Nav button */}
        <div className="container-sm container-button">
          <Link to={"/Detail"}>
            <button type="button" class="btn btn-fluid">
              See all promotion
            </button>
          </Link>
        </div>
{/* Words */}
        <div className="container-sm">
      <h2 className="uu-dai mb-12 mt-12 relative text-3xl font-bold left-11">
            There's something for everyone! </h2>
      </div>
        {/* Food Category */}
        <div className="container">
          <Link to={"/Detail"} style={{ textDecoration: "none" }}>
            <div className="containerCard">
              <div className="card border-0" style={{ width: "280px" }}>
                <img
                  src="https://pastaxi-manager.onepas.vn/content/uploads/articles/2amthuc/nhahang/10pizzangonsg/diem-danh-10-dia-chi-an-pizza-ngon-tuyet-o-Sai-gon-anh3.jpg"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">Pizza</h5>
                </div>
              </div>
              <div className="card border-0" style={{ width: "280px" }}>
                <img
                  src="https://cdn.tgdd.vn/Files/2021/08/10/1374160/hoc-cach-pha-tra-sua-o-long-dai-loan-thom-ngon-chuan-vi-ai-cung-me-202108100039248020.jpg"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">Trà Sữa</h5>
                </div>
              </div>
              <div className="card border-0" style={{ width: "280px" }}>
                <img
                  src="https://lamsonfood.com/wp-content/uploads/2022/02/com-tam-duoc-nhieu-nguoi-yeu-thich.jpg"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">Cơm Tấm</h5>
                </div>
              </div>
              <div className="card border-0" style={{ width: "280px" }}>
                <img
                  src="https://www.bigc.vn/files/cam-nang-mua-sam-27-11-2023-14-35-21/vao-bep-cung-go-27-11-2023-14-39-10/cach-lam-banh-mi-thit-nuong.jpg"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">Bánh Mì</h5>
                </div>
              </div>
              <div className="card border-0" style={{ width: "280px" }}>
                <img
                  src="https://cdn.tgdd.vn/Files/2020/06/18/1263878/cach-nau-lau-ca-bop-thit-beo-mem-ngot-ma-khong-tanh-202202150950507162.jpg"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">Lẩu cá</h5>
                </div>
              </div>
              <div className="card border-0" style={{ width: "280px" }}>
                <img
                  src="https://static.vinwonders.com/production/bun-dau-mam-tom-ha-noi-1.jpg"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">Bún đậu</h5>
                </div>
              </div>
              <div className="card border-0" style={{ width: "280px" }}>
                <img
                  src="https://images.fpt.shop/unsafe/filters:quality(90)/fptshop.com.vn/uploads/images/tin-tuc/162906/Originals/Tokbokki%2002.jpeg"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">Món Hàn</h5>
                </div>
              </div>
              <div className="card border-0" style={{ width: "280px" }}>
                <img
                  src="https://goldensmiletravel.com/uploads/images/2023/09/06/image9-1676535943-928-width1500height1000-1693975156.jpg"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">Món Ấn</h5>
                </div>
              </div>
              <div className="card border-0" style={{ width: "280px" }}>
                <img
                  src="https://cdn.tgdd.vn/Files/2020/07/23/1273077/doi-gio-cho-ca-gia-dinh-voi-mon-com-ca-ri-kieu-nhat-ban-tre-em-cung-an-duoc-202007231448514435.jpg"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">Món Nhật</h5>
                </div>
              </div>
              <div className="card border-0" style={{ width: "280px" }}>
                <img
                  src="https://daynauan.info.vn/wp-content/uploads/2019/05/dau-hu-tu-xuyen-noi-tieng.jpg"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">Món Trung</h5>
                </div>
              </div>
              <div className="card border-0" style={{ width: "280px" }}>
                <img
                  src="https://cdn.tgdd.vn/Files/2022/01/03/1408896/5-quan-banh-uot-long-ga-ngon-o-quan-10-tp-hcm-202201032312339468.jpg"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">Bánh ướt lòng gà</h5>
                </div>
              </div>
              <div className="card border-0" style={{ width: "280px" }}>
                <img
                  src="https://daylambanh.edu.vn/wp-content/uploads/2017/07/cach-lam-banh-beo-chay-1.jpg"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">Bánh bèo</h5>
                </div>
              </div>
            </div>
          </Link>
        </div>
        {/* Why */}
        <div className="container-sm">
      <h2 className="uu-dai mb-12 mt-12 relative text-3xl font-bold left-11">
           Vì sao bạn nên Order trên GrabFood? </h2>
      </div>
        <div className="container-sm">
          <ul className="list-unstyled">
            <li className="li-check">
              <div className="spacing-order">
                <div></div>
                <span className="fw-bold why-words">Nhanh nhất </span>
                <span className="why-words">
                  - GrabFood cung cấp dịch vụ giao đồ ăn nhanh nhất thị trường.
                </span>
              </div>
            </li>
            <li className="li-check">
              <div className="spacing-order">
                <span className="fw-bold why-words">Dễ dàng nhất </span>
                <span className="why-words">
                  - Giờ đây, bạn chỉ cần thực hiện vài cú nhấp chuột hoặc chạm
                  nhẹ là đã có thể đặt đồ ăn. Hãy đặt đồ ăn trực tuyến hoặc tải
                  xuống siêu ứng dụng Grab của chúng tôi để có trải nghiệm nhanh
                  hơn và thú vị hơn.
                </span>
              </div>
            </li>
            <li className="li-check">
              <div className="spacing-order">
                <span className="fw-bold why-words">Đáp ứng mọi nhu cầu </span>
                <span className="why-words">
                  - Từ món ăn đặc sản địa phương đến các nhà hàng được ưa thích,
                  nhiều lựa chọn đa dạng chắc chắn sẽ luôn làm hài lòng khẩu vị
                  của bạn.
                </span>
              </div>
            </li>
            <li className="li-check">
              <div className="spacing-order">
                <span className="fw-bold why-words">Thanh toán dễ dàng </span>
                <span className="why-words">
                  - Giao và nhận đồ ăn thật dễ dàng. Thanh toán bằng GrabPay
                  thậm chí còn dễ dàng hơn nữa.
                </span>
              </div>
            </li>
            <li className="li-check">
              <div className="spacing-order">
                <span className="fw-bold why-words">Nhiều quà tặng hơn </span>
                <span className="why-words">
                  - Tích điểm GrabRewards cho mỗi đơn hàng của bạn và sử dụng
                  điểm thưởng để đổi lấy nhiều ưu đãi hơn.
                </span>
              </div>
            </li>
          </ul>
        </div>
        {/* What is grab food */}
        <div className="container-sm">
      <h2 className="uu-dai mb-12 mt-12 relative text-3xl font-bold left-11">
            Những câu hỏi thường gặp </h2>
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
