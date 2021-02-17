import firebase from "firebase/app"
import {createContext} from "react"
import "firebase/auth"

const FirebaseContext = createContext({})

const firebaseConfig = {
  apiKey: "AIzaSyBv-esR6Nng741vEBWvcKr8wqMLvHqMRLs",
  authDomain: "webappado-84845.firebaseapp.com",
  projectId: "webappado-84845",
  storageBucket: "webappado-84845.appspot.com",
  messagingSenderId: "484121566637",
  appId: "1:484121566637:web:bf1c4cede72cf9210e9524",
  measurementId: "G-3CQ6R6H3BJ"
};
export default function FirebaseClientProvider(props) {

  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
  }
  return(
    <FirebaseContext.Provider value={firebase}>
      {props.children}
    </FirebaseContext.Provider>

  )
}
export {FirebaseContext}

//messagingInitializer(firebase)
