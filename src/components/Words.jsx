import "./CSS.css"
function Words({words,inputplace}) {
  return (
      <>
      <div className="container-sm">
      <h2 id="uu-dai">
            {words}<span id="inputPlace">{inputplace}</span></h2>
      </div>
      </>
  );
}
export default Words;
