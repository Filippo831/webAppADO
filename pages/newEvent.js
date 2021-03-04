import {Input, Button, NumberInput, NumberInputField} from "@chakra-ui/react"
import {useState} from "react"

export default function NewEvent() {
  const [data, setDate] = useState()
  const [titolo, setTitolo] = useState()
  const [categoria, setCategoria] = useState()
  const [descrizione, setDescrizione] = useState()

  return (
    <div className="h-screen">

      {/* --- INPUTS ---*/}
      <div className="flex flex-col justify-between w-5/6 pt-10 mx-auto h-3/5"
        style={{
          maxWidth:"400px"
        }}
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
        <Input placeholder="descrizione"></Input>
      </div>
    </div>
  )
}
