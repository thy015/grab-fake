import "./CSS.css";
function FluidButton({ buttonText }) {
  return (
    <div className="container-fluid container-button">
      <button type="button" class="btn btn-fluid">
       {buttonText}
      </button>
    </div>
  );
}
export default FluidButton;

