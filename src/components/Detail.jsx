import "./CSS.css";
import { Link } from "react-router-dom";
import search from "../images/search.png";
import food1 from "../images/food-1.png";
import food2 from "../images/food-2.png";
import food3 from "../images/food-3.png";
import food4 from "../images/food-4.png";
import cardData from "./cardData1";
import location from "../images/location.png";
function Detail() {
  return (
    <>
      <div className="pt-24 pb-12">
        <div className="">
          {/* search */}
          <div className="container-sm h-56 extend-md:h-40 ">
            <img
              className="absolute z-[2] ml-16 pt-2 "
              src={search}
              alt="search"
            ></img>
            <input
              className="w-[92%] ml-10 h-10 bg-[#f7f7f7] relative border-transparent rounded-[20px]  pl-16"
              placeholder="Nhập địa chỉ của bạn"
              type="text"
            ></input>
            {/* card slide */}
            <div className="flex ml-10">
              <div className="card border-0 w-44 h-1/2 mt-8 mr-4">
                <img
                  src="	https://food.grab.com/static/images/placeholder-restaurant-2by1.jpg"
                  className="card-img-top"
                  alt="..."
                />
              </div>
              <div className="card border-0 w-44 h-1/2 mt-8 mr-4">
                <img
                  src="	https://food.grab.com/static/images/placeholder-restaurant-2by1.jpg"
                  className="card-img-top"
                  alt="..."
                />
              </div>
              <div className="card border-0 w-44 h-1/2 mt-8 mr-4">
                <img
                  src="	https://food.grab.com/static/images/placeholder-restaurant-2by1.jpg"
                  className="card-img-top"
                  alt="..."
                />
              </div>
              <div className="card border-0 w-44 h-1/2 mt-8 mr-4">
                <img
                  src="	https://food.grab.com/static/images/placeholder-restaurant-2by1.jpg"
                  className="card-img-top"
                  alt="..."
                />
              </div>
            </div>
          </div>
        </div>
        {/* detail */}
        <div className="h-2 w-full bg-[#f7f7f7]"></div>
        <div className="container-sm">
          {/* nav */}
          <div className="ml-10 mt-7">
            <ol className="flex">
              <div className="flex">
              <li className="mr-2">
                <Link className="text-[#00a5cf] no-underline" to={"/"}>
                  Trang chủ
                </Link>
                </li>
                <img className="mr-2 w-3 mt-1 h-6 "
                  src="https://food.grab.com/static/images/icons/icon-next.svg"
                ></img>
              <li className="mr-2">
                <a
                  className="text-[#00a5cf] no-underline"
                  href="#"
                >
                  Ẩm thực
                </a>
                    </li>
                  <img className="mr-2 w-3 mt-1 h-6"
                    src="https://food.grab.com/static/images/icons/icon-next.svg"
                    ></img>
              <li>Khuyến mãi</li></div>
            </ol>
          </div>
        </div>
        <div className="container-sm">
          <h1 className=" uu-dai mb-8 mt-12 relative text-3xl font-bold left-9">
            Ưu đãi ở <span className="inputPlace text-Ggreen">InputPlace</span>
          </h1>
        </div>
        <div className="container">
          <Link to={"/Compre"} style={{ textDecoration: "none" }}>
            {/* Data */}
            <div className="wrap-card flex justify-around flex-wrap ml-8 wrap-detail">
              {/*    {cardData.map((card)=>( */}
              {cardData
                .flatMap((card) => [card, card])
                .map((card, index) => (
                  <div
                    key={index}
                    className="card border-0 w-72 medium:w-60 small:w-36 small:h-56 card-detail"
                  >
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
                ))}
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
export default Detail;