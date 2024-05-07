import Header from "./components/Header";
import Body_Home from "./components/Body_Home";
import Detail from "./components/Detail";
import { Routes, Route } from "react-router-dom";
import Compre from "./components/Compre";
import Footer from "./components/Footer";

import {
  ApolloClient,
  ApolloLink,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  from,
} from "@apollo/client";
import {onError} from "@apollo/client/link/error"
import GetUser from "./components/GetUser";
// link to graphQL
const errorLink=onError(({grapqlErrors,networkError})=>{
  if(grapqlErrors){
    grapqlErrors.map(({message,location,path})=>{
      alert('Graphql error ${message}')
    })
  }
})
const link=from([
  errorLink,
  new HttpLink({uri:'http://localhost:5173/'})
])
const client=new ApolloClient({
  cache:new InMemoryCache,
  link:link
})
function App() {
  return (
    <>
    <ApolloProvider client={client}>
      <div>
       <GetUser></GetUser>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Body_Home />} />
          <Route path="/Detail" element={<Detail />} />
          <Route path="/Compre" element={<Compre></Compre>} />
        </Routes>
        <Footer></Footer>
      </div>
    </ApolloProvider>
    </>
  );
}
export default App;
