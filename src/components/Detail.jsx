import "./CSS.css";
import Words from "./Words";
import { Link } from "react-router-dom";
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
              src="./src/assets/search.png"
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
                <a
                  style={{ textDecoration: "none", color: "#00a5cf" }}
                  href="#"
                >
                  Trang chủ{" "}
                  <img
                    src="https://food.grab.com/static/images/icons/icon-next.svg"
                    style={{ width: "10px", marginTop: "-3px" }}
                  ></img>
                </a>
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
        <Words words="Ưu đãi ở " inputplace="InputPlace"></Words>
        <div className="container">
          <Link to={"/Compre"} style={{ textDecoration: "none" }}>
            <div className="containerCard">
              <div className="card border-0" style={{ width: "280px" }}>
                <img
                  src="./src/assets/food-1.png"
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
                  src="./src/assets/food-1.png"
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
                  src="./src/assets/food-4.png"
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
                        Lời yêu thương truyền bằng phương thức Get, nhận dáng
                        hình qua địa chỉ IP
                      </span>{" "}
                    </small>
                  </p>
                </div>
              </div>
              <div className="card border-0" style={{ width: "280px" }}>
                <img
                  src="./src/assets/food-2.png"
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
                  src="./src/assets/food-2.png"
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
                  src="./src/assets/food-2.png"
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
                  src="./src/assets/food-2.png"
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
                  src="./src/assets/food-3.png"
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
                        Trái tim anh, em select bằng mouse, chốn hẹn hò: Forum -
                        Internet{" "}
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
