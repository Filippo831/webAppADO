import {useState, useContext} from "react"
import firebaseClient from "../firebase/firebase"
import {Input, Button} from "@chakra-ui/react"
import firebase from "../firebase/firebase"
import {UserContext} from "./context/userContext"
import {useRouter} from "next/router"
import {setCookie} from "nookies"


export default function Login(props) {

  // user context
  const [user, setUser] = useContext(UserContext)

  const router = useRouter()

  // credential to login
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const loginUser = async () => {
    console.log(process.env)
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(userCredential => {
        setUser(userCredential.user)
        console.log(userCredential.user.uid)
        return userCredential.getIdToken().then(idToken => {
          setCookie(null, "userId", idToken, null)
          router.push("/")
        })


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
