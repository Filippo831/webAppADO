import {useState, useContext} from "react"
import firebaseClient from "../firebase/firebase"
import {Input, Button} from "@chakra-ui/react"
import firebase from "../firebase/firebase"
import UserContext from "./context/userContext"
 

export default function Login(props) {
  const [user,setUser] = useContext(UserContext)

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const loginUser = () => {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(userCredential => {
        setUser(userCredential.user)
      })
      .catch((error) => {
        let errorCode = error.code
        let errorMassage = error.massage
      })
  }

  return (
    <div>
      <Input placeholder="email" onChange={e => setEmail(e.target.value)}></Input>
      <Input placeholder="password" onChange={e => setPassword(e.target.value)}></Input>
      <Button onClick={loginUser}>submit</Button>
    </div>
  )
}
