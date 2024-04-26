import { Drawer } from "antd";
import "./CSS.css";
import { Checkbox } from "antd";
import { useState } from "react";
import { Link } from "react-router-dom";
import add from "../images/add.png";
import cardData from "./cardData1";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/bundle";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useRef } from "react";
function Compre() {
  // drawer
  const [visible, setVisible] = useState(false);
  //checkbox
  const onChange = (checkedValues) => {
    console.log("checked = ", checkedValues);
  };
  const selectedCard = cardData.find((card) => card.val === "0");
  return (
    <>
      <div className="container-detail">
        <div className="pt-9 pl-9 h-96">
          <div className="container-sm">
            {/* nav */}
            <div className=" mt-10">
              <ol className="flex">
                <div className="flex">
                  <li className="mr-2">
                    <Link className="text-[#00a5cf] no-underline" to={"/"}>
                      Trang chủ
                    </Link>
                  </li>
                  <img
                    className="mr-2 w-3 mt-1 h-6 "
                    src="https://food.grab.com/static/images/icons/icon-next.svg"
                  ></img>
                  <li className="mr-2">
                    <Link
                      className="text-[#00a5cf] no-underline"
                      to={"/Detail"}
                    >
                      Nhà hàng
                    </Link>
                  </li>
                  <img
                    className="mr-2 w-3 mt-1 h-6"
                    src="https://food.grab.com/static/images/icons/icon-next.svg"
                  ></img>
                  <li>Khuyến mãi</li>
                </div>
              </ol>
            </div>
            {/* display content */}

            <div className="ml-8">
              <h1 className="font-bold">{selectedCard.cardTitle}</h1>
              <p className="">{selectedCard.cardText}</p>

              <img
                src={selectedCard.img}
                className="card-img-top w-full h-36 hidden "
                alt="..."
              />
              <div className="">
                <div className="flex items-center">
                  <img
                    className="w-6 mr-2"
                    src="	https://food.grab.com/static/images/icons/icon-star.svg"
                  ></img>
                  <span className="mr-4 star">{selectedCard.star}</span>
                  <img
                    className="mr-2"
                    src="https://food.grab.com/static/images/icons/icon-clock.svg"
                  />
                  <span className="mr-2 min">{selectedCard.min}</span>
                  <span className="mr-2">•</span>
                  <span className="dist">{selectedCard.dist}</span>
                </div>
                <span style={{ marginRight: "20px" }}>Giờ mở cửa</span>
                <span>Hôm nay 07:00-22:50</span>
                <div className="flex items-start mt-[10px]">
                  <img src="https://food.grab.com/static/images/icons/icon-promo-tag.svg"></img>
                  <p className="ml-2">{selectedCard.describe}</p>
              <p className="font-bold text-[#00a5cf] ml-5 cursor-pointer">
                    Xem chi tiết
              </p>
                </div>
              </div>
            </div>
            {/* swiper */}

          </div>
          {/* slide */}
        </div>
        <div className="border-top"></div>
        <div
          className="container-max-compre"
          style={{ backgroundColor: "#f7f7f7" }}
        >
          {/* best seller */}
          <div className="container-sm" style={{ height: "800px" }}>
            {/* on click drawer */}

            <div
              className="row row-cols-1 row-cols-md-3 g-4"
              onClick={() => {
                setVisible(true);
              }}
            >
              <div className="col">
                <div
                  className="card"
                  style={{ width: "385px", height: "220px" }}
                >
                  {/* Nội dung thẻ card */}
                  <div className="row g-0">
                    <div className="col-md-4">
                      <img
                        style={{ margin: "15px" }}
                        src="https://media1.nguoiduatin.vn/media/vuong-thi-thao/2017/11/28/mds05c.JPG"
                        className="card-img"
                      />
                    </div>
                    <div className="col-md-8">
                      <div className="card-body" style={{ marginLeft: "15px" }}>
                        <p
                          className="card-title"
                          style={{ fontWeight: "400", fontSize: "16px" }}
                        >
                          Combo 2 người - C
                        </p>

                        <p
                          className="card-text"
                          style={{ color: "#9a9a9a", fontSize: "15px" }}
                        >
                          Phần ăn kèm khoai tây chiên (L) và Nước uống (L). Đã
                          bao gồm 2x Tương Cà
                        </p>
                        <p style={{ fontWeight: "500", width: "80px" }}>
                          119.000
                        </p>
                        <img className="add-button" src={add}></img>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="card"
                  style={{ width: "385px", height: "220px" }}
                >
                  <div className="row g-0">
                    <div className="col-md-4">
                      <img
                        style={{ margin: "15px" }}
                        src="https://media1.nguoiduatin.vn/media/vuong-thi-thao/2017/11/28/mds05c.JPG"
                        className="card-img"
                      />
                    </div>
                    <div className="col-md-8">
                      <div className="card-body" style={{ marginLeft: "15px" }}>
                        <p
                          className="card-title"
                          style={{ fontWeight: "400", fontSize: "16px" }}
                        >
                          Combo 2 người - C
                        </p>

                        <p
                          className="card-text"
                          style={{ color: "#9a9a9a", fontSize: "15px" }}
                        >
                          Phần ăn kèm khoai tây chiên (L) và Nước uống (L). Đã
                          bao gồm 2x Tương Cà
                        </p>
                        <p style={{ fontWeight: "500" }}>119.000</p>
                        <img className="add-button" src={add}></img>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div
                  className="card"
                  style={{ width: "385px", height: "220px" }}
                >
                  {/* Nội dung thẻ card */}
                  <div className="row g-0">
                    <div className="col-md-4">
                      <img
                        style={{ margin: "15px" }}
                        src="https://media1.nguoiduatin.vn/media/vuong-thi-thao/2017/11/28/mds05c.JPG"
                        className="card-img"
                      />
                    </div>
                    <div className="col-md-8">
                      <div className="card-body" style={{ marginLeft: "15px" }}>
                        <p
                          className="card-title"
                          style={{ fontWeight: "400", fontSize: "16px" }}
                        >
                          Combo 2 người - C
                        </p>

                        <p
                          className="card-text"
                          style={{ color: "#9a9a9a", fontSize: "15px" }}
                        >
                          Phần ăn kèm khoai tây chiên (L) và Nước uống (L). Đã
                          bao gồm 2x Tương Cà
                        </p>
                        <p style={{ fontWeight: "500" }}>119.000</p>
                        <img className="add-button" src={add}></img>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="card"
                  style={{ width: "385px", height: "220px" }}
                >
                  {/* Nội dung thẻ card */}
                  <div className="row g-0">
                    <div className="col-md-4">
                      <img
                        style={{ margin: "15px" }}
                        src="https://media1.nguoiduatin.vn/media/vuong-thi-thao/2017/11/28/mds05c.JPG"
                        className="card-img"
                      />
                    </div>
                    <div className="col-md-8">
                      <div className="card-body" style={{ marginLeft: "15px" }}>
                        <p
                          className="card-title"
                          style={{ fontWeight: "400", fontSize: "16px" }}
                        >
                          Combo 2 người - C
                        </p>

                        <p
                          className="card-text"
                          style={{ color: "#9a9a9a", fontSize: "15px" }}
                        >
                          Phần ăn kèm khoai tây chiên (L) và Nước uống (L). Đã
                          bao gồm 2x Tương Cà
                        </p>
                        <p style={{ fontWeight: "500" }}>119.000</p>
                        <img className="add-button" src={add}></img>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div
                  className="card"
                  style={{ width: "385px", height: "220px" }}
                >
                  {/* Nội dung thẻ card */}
                  <div className="row g-0">
                    <div className="col-md-4">
                      <img
                        style={{ margin: "15px" }}
                        src="https://media1.nguoiduatin.vn/media/vuong-thi-thao/2017/11/28/mds05c.JPG"
                        className="card-img"
                      />
                    </div>
                    <div className="col-md-8">
                      <div className="card-body" style={{ marginLeft: "15px" }}>
                        <p
                          className="card-title"
                          style={{ fontWeight: "400", fontSize: "16px" }}
                        >
                          Combo 2 người - C
                        </p>

                        <p
                          className="card-text"
                          style={{ color: "#9a9a9a", fontSize: "15px" }}
                        >
                          Phần ăn kèm khoai tây chiên (L) và Nước uống (L). Đã
                          bao gồm 2x Tương Cà
                        </p>
                        <p style={{ fontWeight: "500" }}>119.000</p>
                        <img className="add-button" src={add}></img>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="card"
                  style={{ width: "385px", height: "220px" }}
                >
                  {/* Nội dung thẻ card */}
                  <div className="row g-0">
                    <div className="col-md-4">
                      <img
                        style={{ margin: "15px" }}
                        src="https://media1.nguoiduatin.vn/media/vuong-thi-thao/2017/11/28/mds05c.JPG"
                        className="card-img"
                      />
                    </div>
                    <div className="col-md-8">
                      <div className="card-body" style={{ marginLeft: "15px" }}>
                        <p
                          className="card-title"
                          style={{ fontWeight: "400", fontSize: "16px" }}
                        >
                          Combo 2 người - C
                        </p>

                        <p
                          className="card-text"
                          style={{ color: "#9a9a9a", fontSize: "15px" }}
                        >
                          Phần ăn kèm khoai tây chiên (L) và Nước uống (L). Đã
                          bao gồm 2x Tương Cà
                        </p>
                        <p style={{ fontWeight: "500" }}>119.000</p>
                        <img className="add-button" src={add}></img>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* more card */}
            </div>
          </div>
        </div>
      </div>
      {/* Drawer */}
      <div>
        <Drawer
          visible={visible}
          footer={
            <button
              className="btn btn-success text-white bg-[#00B14F] float-right border-transparent"
            >
              Add to basket - 119.000 đ
            </button>
          }
          onClose={() => {
            setVisible(false);
          }}
          width={500}
        >
          <div
            className="card border-0"
            style={{ width: "385px", height: "150px" }}
          >
            {/* Nội dung thẻ card */}
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  style={{ margin: "15px" }}
                  src="https://media1.nguoiduatin.vn/media/vuong-thi-thao/2017/11/28/mds05c.JPG"
                  className="card-img"
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <p
                    className="card-title"
                    style={{ fontWeight: "400", fontSize: "16px" }}
                  >
                    Combo 2 người - C
                  </p>

                  <p
                    className="card-text"
                    style={{ color: "#9a9a9a", fontSize: "15px" }}
                  >
                    Phần ăn kèm khoai tây chiên (L) và Nước uống (L). Đã bao gồm
                    2x Tương Cà
                  </p>
                  <p
                    style={{
                      fontWeight: "500",
                      width: "80px",
                      marginTop: "-10px",
                    }}
                  >
                    119.000
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="h-2 w-full bg-[#f7f7f7]"></div>

          <div className="body-drawer">
            {/* padding */}
            <div className="p-6">
              {/* Checkbox */}
              <h5 className="font-semibold">Thêm Món Thêm Ngon</h5>
              <div className="wrap-checkbox">
                {/* value 0 1 2 from cardData val 0*/}
                {selectedCard.options
                  .filter((o,index) => [0,1,2].includes(index))
                  .map((o) => (
                    <div key={o.index} className="flex justify-between">
                      <Checkbox value={o.value}>
                        <div className="m-2">
                          <span className="">{o.label}</span>
                        </div>
                      </Checkbox>
                      <span className="price">{o.price} đ</span>
                    </div>
                  ))}
              </div>
            </div>
            <div className="h-2 w-full bg-[#f7f7f7]"></div>
            <div className="p-6">
              <h5 className="font-semibold">Chọn món ăn kèm</h5>
              <div className="">
              {selectedCard.options
                  .filter((o,index) => [3,4,5].includes(index))
                  .map((o) => (
                    <div key={o.index} className="flex justify-between">
                      <Checkbox value={o.value}>
                        <div className="m-2">
                          <span className="label">{o.label}</span>
                        </div>
                      </Checkbox>
                      <span className="price">{o.price}đ</span>
                    </div>
                  ))}
              </div>
            </div>
            {/*  */}
            <div className="h-2 w-full bg-[#f7f7f7]"></div>
            <div className="p-6">
            <h5 className="font-semibold">Chọn nước</h5>
              <div className="">
              {selectedCard.options
                  .filter((o,index) => [6,7,8,9,10,11,12].includes(index))
                  .map((o) => (
                    <div key={o.index} className="flex justify-between">
                      <Checkbox value={o.value}>
                        <div className="m-2">
                          <span className="label">{o.label}</span>
                        </div>
                      </Checkbox>
                      <span className="price">{o.price}đ</span>
                    </div>
                  ))}
              </div>
            </div>
            <div className="h-2 w-full bg-[#f7f7f7]"></div>
            <div className="p-6">
            <h5 className="font-semibold">Chọn nước</h5>
            </div>
          </div>
        </Drawer>
      </div>
    </>
  );
}
export default Compre;
