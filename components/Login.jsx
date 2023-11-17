// import React from "react";
// import {useRef} from "react"
// import { ChakraProvider } from "@chakra-ui/react";
// // import { Button, ButtonGroup } from "@chakra-ui/;react";
// import { Input } from "@chakra-ui/react";
// import { Button, ButtonGroup } from "@chakra-ui/react";





// function Login({user, setUser, isLogged, setIsLogged }) {

//     const name = useRef('');
//     const password = useRef('');

//   return (
//     <ChakraProvider>
//     <>
//     <h4>Username</h4>
//     <Input
//           ref={name}
//           placeholder="enter the username"
//         />
//     <h4>Password</h4>
//     <Input
//           ref={password}
//   placeholder="enter the password"
// />

// <Button
//   colorScheme="blue"
//   onClick={(e) =>{ 
//     // console.log("salam")

// console.log(user);

// user.forEach((user)=>{
//     if (
//         user.name === name.current.value &&
//         user.password === password.current.value
//     ){
//         setIsLogged(true)
//         console.log("true");
//     }
// });

// name.current.value ="";
// password.current.value ="";
// }
//   }
// >
//   Log in
// </Button>
//     </>
//     </ChakraProvider>
//   )
// }

// export default Login


import React, { useState } from "react";
import { ChakraProvider, Input, Button } from "@chakra-ui/react";



function Login({ user, setIsLogged }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  //button onClick

  const handleLogin = () => {
    const foundUser = user.find(x => x.name === username && x.password === password);

    if (foundUser) {
      setIsLogged(true);
      console.log("true");
    }

    setUsername("");
    setPassword("");
  };

  return (
    <ChakraProvider>
      <>
        <h4>Username</h4>
        <Input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="enter the name"
        />
        <h4>Password</h4>
        <Input
          type="text"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="enter the password"
        />

        <Button
          colorScheme="blue"
          onClick={handleLogin}
        >
          Log in
        </Button>
      </>
    </ChakraProvider>
  );
}

export default Login;
