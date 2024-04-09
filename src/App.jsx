
import Header from "./components/Header"
import FluidImg from "./components/FluidImg"
import SeachBox from "./components/SearchBox"
import CardHolder from "./components/CardHolder"
function App(){
  return <><div><Header></Header>
  <FluidImg></FluidImg>
  <SeachBox></SeachBox></div>
  <div>
  <div style={{ marginTop: "150px" }}>
    <CardHolder></CardHolder>
    </div>
  </div></>
}
export default App