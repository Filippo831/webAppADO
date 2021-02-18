import {createContext} from 'react';
import nookies from "nookies"

const UserContext = createContext({})

export default function UserContextProvider(props) {
  console.log(props.cookies)
  return (
    <UserContext.Provider value={{}}>
      {props.children}
    </UserContext.Provider>
  )
}
export {UserContext} 
