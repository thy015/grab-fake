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
          <img src="..." className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
            <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
          </div>
        </div>
      </div>
      <div className="col-sm-3">
        <div className="card">
          <img src="..." className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
            <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
          </div>
        </div>
      </div>
      <div className="col-sm-3">
        <div className="card">
          <img src="..." className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
            <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
          </div>
        </div>
      </div>
    </div>
        </div>
      );
    }    
export default CardHolder