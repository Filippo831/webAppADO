import {useRef, useContext} from "react"
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button
} from "@chakra-ui/react"
import {Menu} from "@material-ui/icons"
import {UserContext} from "../../../context/userContext"


export default function Navbar() {
  const [user, setUser ] = useContext(UserContext)
  const {isOpen, onOpen, onClose} = useDisclosure()
  const buttonRef = useRef()
  return (
    <div style={{borderBottom:"1px solid #eeeeee"}}>
      <div className="flex justify-between">
        <h1>c</h1>
        <Menu ref={buttonRef}
          onClick={onOpen}
          style={{fontSize: "40px"}}
          className="cursor-pointer"
        ></Menu>
      </div>
      {/* --- NAVBAR --- */}
      <Drawer
        isOpen={isOpen}
        placement="top"
        onClose={onClose}
        finalFocusRef={buttonRef}
      >
        <DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton />
            {/* TOP */}
            <DrawerHeader>
              ADO
            </DrawerHeader>
            {/* MAIN */}
            <DrawerBody>
              <div className="flex flex-col h-40 justify-evenly">
                <h1>About</h1>
                <div className="w-full h-px bg-gray-900"></div>
                <h1>Index</h1>
                <div className="w-full h-px bg-gray-900"></div>
                <h1>Contact</h1>
              </div>
            </DrawerBody>
            {/* FOOTER */}
            <DrawerFooter>
              {user ? <div>ciao</div>:<div>not ciao</div>}
            </DrawerFooter>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </div>
  )
}
