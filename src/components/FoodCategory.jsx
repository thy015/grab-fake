import "./CSS.css";
function FoodCategory() {
  return (
    <div className="container-sm">
    <h2 class="uu-dai" id="category">
      There's something for everyone!
    </h2>
    <div className="container-food container-category">
            <div className="row">
      <div className="col-sm-3">
        <div className="card">
          <img src="https://food-cms.grab.com/compressed_webp/cuisine/135/icons/Pizza_32aed38d4c1d4dbcb2fe711f0aeb6e15_1547819221409327403.webp" 
          className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Pizza</h5>
            </div>
        </div>
    </div>
    </div>
    </div>
    </div>
   
  );
}
export default FoodCategory;
