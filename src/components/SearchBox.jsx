import "./CSS.css";
function SearchBox() {
  return (
    <div className="container-search-box shadow-sm p-3 mb-5 rounded">
        <div className="wrap-input">
        <h5 id="af">Good Afternoon</h5>
      <h1 id="where">Where should we deliver your food today?</h1>
      <div>
        <img id="location" src="./src/assets/location.png"></img>
       <input id="search-input" placeholder="Nhập địa chỉ của bạn" type="text">
      </input>
      <img id="des" src="https://food.grab.com/static/images/icons/icon-geo-button.svg"></img>
      </div>
      <div>
      <button type="button" class="btn btn-search">Tìm kiếm</button>
      </div>
        </div>
     
    </div>
  );
}
export default SearchBox
