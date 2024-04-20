import "./CSS.css"
function Words({words,inputplace}) {
  return (
      <>
      <div className="container-sm">
      <h2 className="uu-dai mb-12 mt-12 relative text-3xl font-bold left-11">
            {words}<span className="inputPlace text-Ggreen">{inputplace}</span></h2>
      </div>
      </>
  );
}
export default Words;
