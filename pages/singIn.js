import { TextField } from "@material-ui/core"
import {useContext, useState} from "react"
import firebaseClient from "../firebase/firebase"
import {Input, Button} from "@chakra-ui/react"
import {setCookie} from 'nookies';
import firebase from "firebase/app"

export default function SingIn(){
  const [email,setEmail] = useState("") 
  const [password,setPassword] = useState("") 
  const createNewUser = ()=>{
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((userCredential)=>{
        let user = userCredential.user
      }).catch((error) => {
        let errorCode = error.code
        let errorMassage = error.massage
      })
  }
  return(
    <div className="w-screen h-screen min-h-screen">
    <div className="flex flex-col w-4/5 h-full mx-auto my-auto justify-evenly">
      <Input placeholder="nome" ></Input>
      <Input placeholder="cognome"></Input>
      <Input placeholder="numero di telefono"></Input>
      <Input placeholder="email" onChange={e=> setEmail(e.target.value)}></Input>
      <Input placeholder="password" onChange={e=> setPassword(e.target.value)}></Input>
      <Input placeholder="iban del nonno" ></Input>
      <Button onClick={createNewUser}>submit</Button>
    </div></div>
  )

}
