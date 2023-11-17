import React from 'react'
import {useRef} from "react"
import { ChakraProvider } from "@chakra-ui/react";
// import { Button, ButtonGroup } from "@chakra-ui/;react";
import { Input } from "@chakra-ui/react";
import { Button, ButtonGroup } from "@chakra-ui/react";



function Register({user, setUser, isLogged, setIsLogged }) {

  const name = useRef('');
  const password = useRef('');
  const email = useRef('');

  if(isLogged){
    return (
      <ChakraProvider>
      <>
      <h4>Username</h4>
      <Input
            ref={name}
            placeholder="enter the username"
          />
      <h4>Password</h4>
      <Input
            ref={password}
    placeholder="enter the password"
  />
  <h4>Email</h4>
      <Input
            ref={email}
    placeholder="enter the email"
  />
  
  <Button
    colorScheme="red"
    onClick={(e) =>{ 
      // console.log("salam")

      let users ={
        name: name.current.value,
        password: pass.current.value,
        email: email.current.value,
      }
  
 axios.post("https://65571cdcbd4bcef8b6120f2b.mockapi.io/user",users).then((res)=>{
  console.log(res.data);
  setUser([...user, res.users])
 })
}}
>
    Log in
  </Button>
      </>
      </ChakraProvider>
    )
  }
}

export default Register