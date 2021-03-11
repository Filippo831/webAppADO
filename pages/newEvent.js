import {Input, Button, NumberInput, NumberInputField, Textarea} from "@chakra-ui/react"
import {useState} from "react"
import Navbar from "./components/main/navbar/navbar"

export default function NewEvent() {
  const [data, setDate] = useState()
  const [titolo, setTitolo] = useState()
  const [categoria, setCategoria] = useState()
  const [descrizione, setDescrizione] = useState()

  return (
    <div>
      <Navbar></Navbar>
    <div className="w-5/6 h-screen mx-auto "

      style={{
        maxWidth: "400px"
      }}
    >

      {/* --- INPUTS ---*/}
      <div className="flex flex-col justify-between pt-10 h-3/5"
      >

        {/* --- DATE ---*/}
        <div className="grid grid-flow-col gap-6">
          <NumberInput defaultValue={1} min={1} max={31}>
            <NumberInputField></NumberInputField>
          </NumberInput>
          <NumberInput defaultValue={1} min={1} max={12}>
            <NumberInputField></NumberInputField>
          </NumberInput>
          <NumberInput defaultValue={2021}>
            <NumberInputField></NumberInputField>
          </NumberInput>
        </div>

        <Input placeholder="titolo"></Input>
        <Input placeholder="categoria"></Input>
        <Textarea placeholder="descrizione"></Textarea>
      </div>
      <div className="flex flex-col justify-around my-auto h-1/4">
        <div className="flex justify-around ">
          <Button colorScheme="teal">annulla</Button>
          <Button colorScheme="teal">conferma</Button>
        </div>
      </div>
    </div>
</div>
  )
}
