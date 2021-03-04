import Head from 'next/head'
import styles from '../styles/Home.module.css'
import {useState,useEffect, useContext} from "react"
import Navbar from "./components/main/navbar/navbar"
import Calendar from "react-calendar"
import {UserContext} from "./context/userContext"
import nookies, {setCookie} from "nookies"
import firebase from "../firebase/firebase"

export default function Home(props) {
  const [user, setUser ] = useContext(UserContext)

   //console.log("ciao")
  //
  //useEffect(() => {
    //if ('serviceWorker' in navigator) {
      //navigator.serviceWorker.register('/sw.js')
        //.then(reg => console.log("serviceWorker worked", reg))
        //.catch(err => console.log('serviceWorker error', err))
    //}
    //Notification.requestPermission(status => {
      //console.log('notification status', status)
    //})

  //}, [])
  //const sendNotification = () => {
    //if (Notification.permission == "granted") {
      //navigator.serviceWorker.getRegistration().then(function (reg) {
        //const options = {
          //body: 'Here is a notification body!',
          //icon: 'https://www.flaticon.com/svg/vstatic/svg/606/606795.svg?token=exp=1613242192~hmac=733b77a1a9b1798f564968528bb392ec',
          //vibrate: [100, 50, 100],
          //data: {
            //dateOfArrival: Date.now(),
            //primaryKey: 1
          //},
          //actions: [
            //{action: 'explore', title: 'Explore this new world'},
            //{action: 'close', title: 'Close notification'}
          //]
        //};

        //reg.showNotification('Hello world!', options);
      //});

    //}
  //}
  const [value, setValue] = useState(new Date())
  return (
    <div>
      <Navbar></Navbar>
      <h1>ciao da index</h1>
      <Calendar
        onChange={setValue}
        value={value}
      ></Calendar>
    </div>
  )
}
export async function getServerSideProps(ctx) {
  const cookies = nookies.get(ctx)
   let user = cookies.userId 
  console.log(user)
  if (!user) {
    return{
      redirect:{
        destination:"/login",
        permanent:false,
      },
    }
  } else {
    return{
      props:{
        cookies : cookies
      }
    }
  }
}
