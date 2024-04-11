import "./CSS.css";
function FluidButton({ buttonText }) {

  
  return (
    
    <div className="container-sm container-button">
      <button type="button" class="btn btn-fluid">
       {buttonText}
      </button>
    </div>
  );
}
export default FluidButton;

