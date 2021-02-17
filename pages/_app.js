import '../styles/globals.css'
import Header from './components/main/head'
import FirebaseClientProvider from "../firebase/firebase"
import {ChakraProvider} from "@chakra-ui/react"
import UserContextProvider from "./context/userContext"
//import {AuthProvider} from "../firebase/firebaseAuth"
import firebase from "firebase"

function MyApp({Component, pageProps}) {


  return (
    <div>
      <FirebaseClientProvider>
        <ChakraProvider>
            <Component {...pageProps} />
        </ChakraProvider>
      </FirebaseClientProvider>
    </div>
  )
}

export default MyApp
