import '../styles/globals.css'
import Header from './components/main/head'
import FirebaseClientProvider from "../firebase/firebase"
import {ChakraProvider} from "@chakra-ui/react"
import UserContextProvider from "./context/userContext"
//import {AuthProvider} from "../firebase/firebaseAuth"
import firebase from "firebase"

function MyApp({Component, pageProps, cookies}) {

  console.log(cookies)

  return (
    <div>
      <FirebaseClientProvider>
        <ChakraProvider>
          <UserContextProvider>
            <Component {...pageProps} />
</UserContextProvider>
        </ChakraProvider>
      </FirebaseClientProvider>
    </div>
  )
}
export async function getServerSideProps(ctx) {
  //const cookies = nookies.get(ctx)
  let cookies = "ciao"
  return {
    props: {
      cookies:cookies,
    }
  }
}

export default MyApp
