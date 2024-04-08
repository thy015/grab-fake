function ListGroup() {
  const items = ["New York", "San Francisco", "Sai Gon", "Ha Noi", "Tokyo"];
//   const message = () =>{items.length===0 ? <p>No items</p> : null}
  const getMessage=()=>{items.length===0 && <p>No items</p>}
  return (
    <>
      <h1>Đây là 1 cái list</h1>
      {getMessage()}
      <ul class="list-group">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  ); //spread to mutiple lines
}
export default ListGroup;
