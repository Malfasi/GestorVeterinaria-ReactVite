import { useState, useEffect } from "react"
import Header from "./components/Header"
import Formulario from "./components/Formulario"
import ListadoPacientes from "./components/ListadoPacientes"
function App() {
  //Props solo se pueden pasar de padre a hijo y reaccionan a los cambios automaticamente. todo Observer

  const [pacientes, setPacientes] = useState([])
  const [paciente, setPaciente] = useState({})

  useEffect(() => {
    const pacientesLS = JSON.parse(localStorage.getItem("pacientes")) ?? []

    setPacientes(pacientesLS)
  }, [])
  useEffect(() => {
    localStorage.setItem("pacientes", JSON.stringify(pacientes))
  }, [pacientes])

  const eliminarId = (id) => {
    const listaActualizada = pacientes.filter((pac) => pac.id !== id)

    setPacientes(listaActualizada)
  }

  return (
    <div className="container mx-auto mt-20">
      <Header />
      <div className="mt-12 md:flex gap-5 h-auto mx-5">
        <Formulario
          paciente={paciente}
          setPaciente={setPaciente}
          pacientes={pacientes}
          setPacientes={setPacientes}
        />

        <ListadoPacientes
          setPaciente={setPaciente}
          pacientes={pacientes}
          eliminarId={eliminarId}
        />
      </div>
    </div>
  )
}

export default App
