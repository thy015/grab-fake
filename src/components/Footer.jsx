import "./CSS.css";
function Footer() {
  return (
    <>
      <div className="container-max-footer">
        <div className="container-sm container-button">
          <div className="footer">
            <div className="container-sm">
              <img
                style={{
                  margin: "30px 20px",
                  width: "170px",
                  height: "70px",
                  cursor: "pointer",
                }}
                className="grab-logo"
                src="	https://food.grab.com/static/images/logo-grabfood-white2.svg"
                alt="grab-logo"
              />
              <div class="border-bottom border-footer"></div>
              <div className="footer-all-wrap">
                <div className="wrap-li">
                  <li className="footer-li">Về GrabFood</li>
                  <li className="footer-li">Về Grab</li>
                  <li className="footer-li">Blog</li>
                </div>
                <div className="wrap-li">
                  <li className="footer-li">Mở quán trên GrabFood</li>
                  <li className="footer-li">Trở thành tài xế Grab</li>
                </div>
                <div className="wrap-li">
                  <li className="footer-li">Trung tâm hỗ trợ</li>
                  <li className="footer-li">Câu hỏi thường gặp</li>
                </div>
                <div className="wrap-img">
                  <span className="footer-img">
                    <img src="./src/assets/facebook.png"></img>
                  </span>
                  <span className="footer-img">
                    <img src="./src/assets/instagram.png"></img>
                  </span>
                  <span className="footer-img">
                    <img src="./src/assets/twitter-sign.png"></img>
                  </span>
                </div>
              </div>
              <div
                class="border-bottom border-footer"
                style={{ marginTop: "140px", marginBottom: "20px" }}
              ></div>
              <div className="span-wrap">
                <div>
                  <a href="https://apps.apple.com/us/app/grab-%C4%91%E1%BA%B7t-xe-giao-%C4%91%E1%BB%93-%C4%83n/id647268330?l=vi&af_prt=food.grab.com&c=direct&is_retargeting=true&pid=other_websites">
                    <img
                      className="appstore"
                      src="https://food.grab.com/static/images/logo-appstore.svg"
                      style={{ marginRight: "18px", marginLeft: "25px" }}
                    ></img>
                  </a>
                  <span>
                    <a href="https://play.google.com/store/apps/details?id=com.grabtaxi.passenger&hl=vi_VN&pid=other_websites&c=direct&is_retargeting=true&af_prt=food.grab.com">
                      <img
                        className="appstore"
                        src="https://food.grab.com/static/images/logo-playstore.svg"
                      ></img>
                    </a>
                  </span>
                </div>
                <div className="span-wrap-li">
                  <li className="span-li">@2024</li>
                  <li className="span-li">Câu hỏi thường gặp</li>
                  <li className="span-li">Chính sách bảo mật</li>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Footer;
