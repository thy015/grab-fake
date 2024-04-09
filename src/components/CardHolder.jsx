import "./CSS.css"
function CardHolder(){
    return (
        <div className="container-food">
            <div className="row">
      <div className="col-sm-3">
        <div className="card">
          <img src="./src/assets/food-1.png" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">McDonald's - Hồ Gươm</h5>
            <p className="card-text">Gà Rán - Burger,Cơm,Món Quốc Tế
            </p>
            <img className="span-star"src="	https://food.grab.com/static/images/icons/icon-star.svg"></img>
            <span className="card-text span-card">4.3</span>
            <span className="card-text span-clock">
                <img src="https://food.grab.com/static/images/icons/icon-clock.svg" alt="" srcset="" />
                <span className="card-text span-card">30 phút</span>
                <span className="card-text span-clock">•</span>
                <span className="card-text span-card">2km</span>
            </span>
            <p className="card-text"><small className="text-body-secondary">
                <img src="https://food.grab.com/static/images/icons/icon-promo-tag.svg"></img>
               <span className="card-text span-card">50K off, combo trưa chỉ 40K </span> </small></p>
          </div>
        </div>
      </div>
      <div className="col-sm-3">
        <div className="card">
          <img src="./src/assets/food-2.png" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Cơm Niêu Singapore 629</h5>
            <p className="card-text">Cơm</p>
            <img className="span-star"src="	https://food.grab.com/static/images/icons/icon-star.svg"></img>
            <span className="card-text span-card">3.6</span>
            <span className="card-text span-clock">
                <img src="https://food.grab.com/static/images/icons/icon-clock.svg" alt="" srcset="" />
                <span className="card-text span-card">32 phút</span>
                <span className="card-text span-clock">•</span>
                <span className="card-text span-card">2,5km</span>
            </span>
            <p className="card-text"><small className="text-body-secondary">
                <img src="https://food.grab.com/static/images/icons/icon-promo-tag.svg"></img>
               <span className="card-text span-card">Tặng ngay Trà Tắc Xí Muội 700ML khi đặt đơn tối thiểu 150.000₫ </span> </small></p>
          </div>
        </div>
      </div>
      <div className="col-sm-3">
        <div className="card">
          <img src="./src/assets/food-3.png" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">CƠM THỐ BÁCH KHOA</h5>
            <p className="card-text">Cơm Chay - Salad Healthy - Đồ Chay</p>
            <img className="span-star"src="	https://food.grab.com/static/images/icons/icon-star.svg"></img>
            <span className="card-text span-card">4.4</span>
            <span className="card-text span-clock">
                <img src="https://food.grab.com/static/images/icons/icon-clock.svg" alt="" srcset="" />
                <span className="card-text span-card">15 phút</span>
                <span className="card-text span-clock">•</span>
                <span className="card-text span-card">1,1 km</span>
            </span>
            <p className="card-text"><small className="text-body-secondary">
                <img src="https://food.grab.com/static/images/icons/icon-promo-tag.svg"></img>
               <span className="card-text span-card">50K off, combo trưa chỉ 40K </span> </small></p>
          </div>
        </div>
      </div>
      <div className="col-sm-3">
        <div className="card">
          <img src="./src/assets/food-4.png" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Bánh Mì Cô Chun</h5>
            <p className="card-text">Bánh Mì - Xôi</p>
            <img className="span-star"src="	https://food.grab.com/static/images/icons/icon-star.svg"></img>
            <span className="card-text span-card">4.7</span>
            <span className="card-text span-clock">
                <img src="https://food.grab.com/static/images/icons/icon-clock.svg" alt="" srcset="" />
                <span className="card-text span-card">15 phút</span>
                <span className="card-text span-clock">•</span>
                <span className="card-text span-card">1,3 km</span>
            </span>
            <p className="card-text"><small className="text-body-secondary">
                <img src="https://food.grab.com/static/images/icons/icon-promo-tag.svg"></img>
               <span className="card-text span-card">Giảm 10% cho đơn trị giá tối thiếu 100.000₫ </span> </small></p>
          </div>
        </div>
      </div>
    </div>
   
        </div>
      );
    }    
export default CardHolder