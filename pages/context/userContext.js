import {useState,createContext} from 'react';
import nookies from "nookies"

const UserContext = createContext([{}, ()=>{}])

export default function UserContextProvider(props) {
  const [user, setUser] = useState()
  console.log(props.cookies)
  return (
    <UserContext.Provider value={[user, setUser]}>
      {props.children}
    </UserContext.Provider>
  )
}
export {UserContext} 
