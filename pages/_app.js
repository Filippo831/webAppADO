import '../styles/globals.css'
import Header from './components/main/head'
import {AuthProvider} from "../firebase/firebaseAuth"
import firebase from "firebase"

function MyApp({Component, pageProps}) {


  return (
    <div>
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </div>
  )
}

export default MyApp
