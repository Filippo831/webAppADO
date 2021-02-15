import firebase from "firebase"

const firebaseConfig = {
  apiKey: "AIzaSyBv-esR6Nng741vEBWvcKr8wqMLvHqMRLs",
  authDomain: "webappado-84845.firebaseapp.com",
  projectId: "webappado-84845",
  storageBucket: "webappado-84845.appspot.com",
  messagingSenderId: "484121566637",
  appId: "1:484121566637:web:bf1c4cede72cf9210e9524",
  measurementId: "G-3CQ6R6H3BJ"
};
export default function firebaseClient() {

  if (!firebase.apps.length) {

    firebase.initializeApp(firebaseConfig)
  }
}


//messagingInitializer(firebase)
