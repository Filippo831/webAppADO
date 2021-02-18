import { useState } from "react"
import firebaseClient from "../firebase/firebase"
import {Input, Button} from "@chakra-ui/react"
import firebase from "firebase/app"

export default function Login(props) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
   const loginUser = () => {
     firebase.auth().signInWithEmailAndPassword(email, password)
   }
  return(
    <div>
      <Input placeholder="email" onChange={e=> setEmail(e.target.value)}></Input>
      <Input placeholder="password" onChange={e=> setPassword(e.target.value)}></Input>
      <Button onClick={loginUser}>submit</Button>
    </div>
  )
}
