import Head from 'next/head'
import styles from '../styles/Home.module.css'
import {useState, useEffect, useContext} from "react"
import Navbar from "./components/main/navbar/navbar"
import Calendar from "react-calendar"
import {UserContext} from "./context/userContext"
import nookies, {setCookie} from "nookies"
import firebase from "../firebase/firebase"
import {useRouter} from "next/router"

export default function Home(props) {
  const router = useRouter()
  const [user, setUser] = useContext(UserContext)

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
