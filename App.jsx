import { useEffect, useState } from "react";
import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
// import { Input } from "@chakra-ui/react";
// import { Button, ButtonGroup } from "@chakra-ui/react";
import axios from "axios";
// import {
//   Table,
//   Thead,
//   Tbody,
//   Tr,
//   Th,
//   Td,
//   TableContainer,
// } from "@chakra-ui/react";
import Login from "./components/Login"
import MyTable from "./components/MyTable"
import Register from "./components/Register"





function App() {
  // const [data, setData] = useState("");
  const [user, setUser] = useState([]);
  const [products, setProducts] = useState([]);
  // const [username, setUsername] = useState([]);
  // const [password, setPassword] = useState([]);
  const [isLogged, setIsLogged] = useState(false)


  //!USER

  useEffect(() => {
    axios("https://65571cdcbd4bcef8b6120f2b.mockapi.io/user").then((res) => {
      // console.log(res.data); 
      console.log(res.data);
      setUser(res.data);

    });
  },[]);


 //!PRODUCTS

  useEffect(() => {
    axios("https://65571cdcbd4bcef8b6120f2b.mockapi.io/user").then(
      (res) => {
        // console.log(res.data); 
        setProducts(res.data);
      });
    },[]);

    //?------------------------------------------------------------------------------------------------------------------------------------------

  return (
    <ChakraProvider>
      <>
      <Login
      user={user}
      setUser ={setUser}
      isLogged = {isLogged}
      setIsLogged ={setIsLogged}
      />

      <Register
      user={user}
      setUser ={setUser}
      isLogged = {isLogged}
      setIsLogged ={setIsLogged}
      />

      <MyTable
      products = {products}
      setProducts = {setProducts}
      isLogged = {isLogged}
      setIsLogged ={setIsLogged}
      />
      </>
    </ChakraProvider>
  );
}

export default App;
