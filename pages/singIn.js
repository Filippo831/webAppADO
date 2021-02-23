import { TextField } from "@material-ui/core"
import {useContext, useState} from "react"
import firebaseClient from "../firebase/firebase"
import {Input, Button} from "@chakra-ui/react"
import {setCookie} from 'nookies';
import firebase from "firebase/app"

export default function SingIn(){
  const [name,setName] = useState("") 
  const [surname,setSurname] = useState("") 
  const [number,setNumber] = useState("") 
  const [email,setEmail] = useState("") 
  const [age,setAge] = useState("") 
  const [password,setPassword] = useState("") 
  const [confirmPassword,setConfirmPassword] = useState("") 
  const createNewUser = ()=>{
    //firebase.auth().createUserWithEmailAndPassword(email, password)
      //.then((userCredential)=>{
        //let user = userCredential.user
      //}).catch((error) => {
        //let errorCode = error.code
        //let errorMassage = error.massage
      //})
    let utenti = firebase.firestore().collection("utenti")
    utenti.add({
      informazioniPersonali: {
        nome:name,
        età:"12",
        cognome:surname,
        numeroTelefono:number,
        email:email
      },
      gruppo:3,
      autorizzazioni:{
        animato:false,
        animatore:true,
        gestione:true
      }
    })
  }
  return(
    <div className="w-screen h-screen min-h-screen">
    <div className="flex flex-col w-4/5 h-full mx-auto my-auto justify-evenly">
      <Input placeholder="nome" onChange={e=>setName(e.target.value)}></Input>
      <Input placeholder="cognome" onChange={e=> setSurname(e.target.value)}></Input>
      <Input placeholder="numero di telefono" onChange={e => setNumber(e.target.value)}></Input>
      <Input placeholder="email" onChange={e=> setEmail(e.target.value)}></Input>
      <Input placeholder="password" onChange={e=> setPassword(e.target.value)}></Input>
      <Input placeholder="conferma password" onChange={e=> setPassword(e.target.value)}></Input>
      <Input placeholder="iban del nonno" ></Input>
      <Button onClick={createNewUser}>submit</Button>
    </div></div>
  )

}
