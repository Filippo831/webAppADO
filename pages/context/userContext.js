import { createContext } from 'react';
import nookies from "nookies"

const UserContext = createContext({})

export default function UserContextProvider(props){
  return(
    <UserContext.Provider value={{}}></UserContext.Provider>
  )
}
//export async function getServerSideProps(ctx) {
  //const cookies = nookies.get(ctx)
  //return {cookies} 
//}
export {UserContext} 
