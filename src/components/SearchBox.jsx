import "./CSS.css";
function SearchBox() {
  return (
    <div className="container">
    <div className="row">
    <div className="col-md-1" style={{ marginLeft: "30px" }}>
        <div className="container-search-box shadow-sm p-3 mb-5 rounded">
          <div className="wrap-input">
            <h5 id="af">Good Afternoon</h5>
            <h1 id="where">Where should we deliver your food today?</h1>
            <div>
              <img id="location" src="./src/assets/location.png" alt="Location"></img>
              <input id="search-input" placeholder="Nhập địa chỉ của bạn" type="text"></input>
              <img id="des" src="https://food.grab.com/static/images/icons/icon-geo-button.svg" alt="Geo Button"></img>
            </div>
            <div>
              <button type="button" className="btn btn-search">Tìm kiếm</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  

  );
}
export default SearchBox
