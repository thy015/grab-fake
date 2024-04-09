import "./CSS.css";
function SearchBox() {
  return (
    <div className="container-search-box shadow-sm p-3 mb-5 rounded">
        <div className="wrap-input">
        <h5 id="af">Good Afternoon</h5>
      <h1 id="where">Where should we deliver your food today?</h1>
      <input id="search-input" placeholder="Nhập địa chỉ của bạn" type="text">
      </input>
      <div>
      <button type="button" class="btn btn-search">Tìm kiếm</button>
      </div>
        </div>
     
    </div>
  );
}
export default SearchBox
