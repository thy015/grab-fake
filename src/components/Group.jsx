import { useState } from "react";

function Group() {
  const items = ["New York", "San Francisco", "Sai Gon", "Ha Noi", "Tokyo"];
  //   const message = () =>{items.length===0 ? <p>No items</p> : null}
  const getMessage = () => {
    items.length === 0 && <p>No items</p>;
  };
  //hook
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>Đây là 1 cái list</h1>
      {getMessage()}
      <ul class="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
            }} //vì đã map
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  ); //spread to mutiple lines
}
export default Group;
