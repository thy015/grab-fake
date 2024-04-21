import "./CSS.css";
import { Link } from "react-router-dom";
import search from "../images/search.png"
import food1 from "../images/food-1.png"
import food2 from "../images/food-2.png"
import food3 from "../images/food-3.png"
import food4 from "../images/food-4.png"
function Detail() {
  return (
    <>
      <div className="search-header">
        <input
          id="search-detail"
          placeholder="Nhập địa chỉ của bạn"
          type="text"
        >
      
        </input>
      </div>

      <div className="container-detail">
        <div className="container-max">
          <div
            className="container-sm container-slide"
            style={{ height: "220px" }}
          >
            <img
              id="search-icon"
              src={search}
              alt="search"
            ></img>
            <input
              id="input-fluid-detail"
              placeholder="Nhập địa chỉ của bạn"
              type="text"
            >
           
            </input>
            <div className="card-slide">
              <div
                className="card border-0"
                style={{
                  width: "180px",
                  height: "90px",
                  margin: "30px 20px 20px 0",
                }}
              >
                <img
                  src="	https://food.grab.com/static/images/placeholder-restaurant-2by1.jpg"
                  className="card-img-top"
                  alt="..."
                />
              </div>
              <div
                className="card border-0"
                style={{
                  width: "180px",
                  height: "90px",
                  margin: "30px 20px 20px 0",
                }}
              >
                <img
                  src="	https://food.grab.com/static/images/placeholder-restaurant-2by1.jpg"
                  className="card-img-top"
                  alt="..."
                />
              </div>
              <div
                className="card border-0"
                style={{
                  width: "180px",
                  height: "90px",
                  margin: "30px 20px 20px 0",
                }}
              >
                <img
                  src="	https://food.grab.com/static/images/placeholder-restaurant-2by1.jpg"
                  className="card-img-top"
                  alt="..."
                />
              </div>
              <div
                className="card border-0"
                style={{
                  width: "180px",
                  height: "90px",
                  margin: "30px 20px 20px 0",
                }}
              >
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
        <div className="divider-detail"></div>
        <div className="container-sm">
          {/* nav */}
          <nav
            style={{
              marginLeft: "40px",
              marginTop: "30px",
              "--bs-breadcrumb-divider": 'url("src/assets/icon-next.svg")',
            }}
            aria-label="breadcrumb"
          >
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to={"/"}
                  style={{ textDecoration: "none", color: "#00a5cf" }}>
                  Trang chủ{" "}</Link>
                  <img
                    src="https://food.grab.com/static/images/icons/icon-next.svg"
                    style={{ width: "10px", marginTop: "-3px" }}
                  ></img>
              </li>
              <li className="breadcrumb-item">
                <a
                  style={{ textDecoration: "none", color: "#00a5cf" }}
                  href="#"
                >
                  Ẩm thực{" "}
                  <img
                    src="https://food.grab.com/static/images/icons/icon-next.svg"
                    style={{ width: "10px", marginTop: "-3px" }}
                  ></img>
                </a>
              </li>
              <li
                style={{ color: "black" }}
                className="breadcrumb-item active"
                aria-current="page"
              >
                Khuyến mãi
              </li>
            </ol>
          </nav>
        </div>
        <div className="container-sm">
      <h1 className="uu-dai mb-12 mt-12 relative text-3xl font-bold left-11">
            Ưu đãi ở <span className="inputPlace text-Ggreen">InputPlace</span></h1>
      </div>
        <div className="container">
          <Link to={"/Compre"} style={{ textDecoration: "none" }}>
            <div className="containerCard">
              <div className="card border-0" style={{ width: "280px" }}>
                <img
                  src={food1}
                  className="card-img-top"
                  alt="..."
                />
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
                      </span>
                    </small>
                  </p>
                </div>
              </div>
              <div className="card border-0" style={{ width: "280px" }}>
                <img
                  src={food1}
                  className="card-img-top"
                  alt="..."
                />
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
                <img
                  src={food4}
                  className="card-img-top"
                  alt="..."
                />
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
                      Vì sao tình tôi chân thành bên anh đã lâu
                      </span>{" "}
                    </small>
                  </p>
                </div>
              </div>
              <div className="card border-0" style={{ width: "280px" }}>
                <img
                  src={food2}
                  className="card-img-top"
                  alt="..."
                />
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
                <img
                  src={food2}
                  className="card-img-top"
                  alt="..."
                />
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
                <img
                  src={food2}
                  className="card-img-top"
                  alt="..."
                />
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
                <img
                  src={food2}
                  className="card-img-top"
                  alt="..."
                />
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
                <img
                  src={food3}
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">CƠM THỐ BÁCH KHOA</h5>
                  <p className="card-text">
                    Cơm Chay - Salad Healthy - Đồ Chay
                  </p>

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
                      Vì sao anh tôi không hiểu vì sao…{" "}
                      </span>{" "}
                    </small>
                  </p>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
export default Detail;
