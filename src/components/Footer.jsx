import "./CSS.css";

import fb from "../images/facebook.png"
import ig from "../images/instagram.png"
import tt from "../images/twitter-sign.png"
function Footer() {
  return (
    <>
      <div className="w-full bg-Ggreen">
        <div className="container-sm">
          <div className="footer h-3/4">
            <div className="pt-10">
              <img
                className="grab-logo w-44 h-16 mb-4 cursor-pointer ml-10"
                src="	https://food.grab.com/static/images/logo-grabfood-white2.svg"
                alt="grab-logo"
              /></div>
              <div class="border-bottom ml-11 w-[94%]"></div>
              <div className="flex ml-11">
                <div className="w-72 h-20 respon-div">
                  <li className="text-white list-none my-7 font-semibold text-[17px] cursor-pointer">Về GrabFood</li>
                  <li className="text-white list-none my-7 font-semibold text-[17px] cursor-pointer">Về Grab</li>
                  <li className="text-white list-none my-7 font-semibold text-[17px] cursor-pointer">Blog</li>
                </div>
                <div className="w-72 h-20">
                  <li className="text-white list-none my-7 font-semibold text-[17px] cursor-pointer">Mở quán trên GrabFood</li>
                  <li className="text-white list-none my-7 font-semibold text-[17px] cursor-pointer">Trở thành tài xế Grab</li>
                </div>
                <div className="w-72 h-20">
                  <li className="text-white list-none my-7 font-semibold text-[17px] cursor-pointer">Trung tâm hỗ trợ</li>
                  <li className="text-white list-none my-7 font-semibold text-[17px] cursor-pointer">Câu hỏi thường gặp</li>
                </div>
                <div className="w-72 h-20 flex mt-8">
                  <span className="mr-8">
                    <img src={fb}></img>
                  </span>
                  <span className="mr-8">
                    <img src={ig}></img>
                  </span>
                  <span className="footer-img">
                    <img src={tt}></img>
                  </span>
                </div>
              </div>
              <div class="border-bottom ml-11 w-[94%] mb-10 mt-20"></div>
              <div className="">
              <div className="flex items-center justify-between">
                <div className="flex ml-10">
            <a href="https://apps.apple.com/us/app/grab-%C4%91%E1%BA%B7t-xe-giao-%C4%91%E1%BB%93-%C4%83n/id647268330?l=vi&af_prt=food.grab.com&c=direct&is_retargeting=true&pid=other_websites">
              <img
                className="appstore mr-2"
                src="https://food.grab.com/static/images/logo-appstore.svg"
              ></img>
            </a>
              <a href="https://play.google.com/store/apps/details?id=com.grabtaxi.passenger&hl=vi_VN&pid=other_websites&c=direct&is_retargeting=true&af_prt=food.grab.com">
                <img
                  className="appstore ml-2"
                  src="https://food.grab.com/static/images/logo-playstore.svg"
                ></img>
              </a>
              </div>
                <div className="flex mr-2">
                  <li className="text-white list-none mr-7 text-4 cursor-pointer">@2024</li>
                  <li className="text-white list-none mr-7 text-4 cursor-pointer">Câu hỏi thường gặp</li>
                  <li className="text-white list-none mr-7 text-4 cursor-pointer">Chính sách bảo mật</li>
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
