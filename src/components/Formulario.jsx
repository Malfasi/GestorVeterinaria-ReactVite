import { useState, useEffect } from "react"
import Error from "./Error"
export default function Formulario({
  pacientes,
  setPacientes,
  paciente,
  setPaciente,
}) {
  const [nombre, setNombre] = useState("")
  const [propietario, setPropietario] = useState("")
  const [email, setEmail] = useState("")
  const [fecha, setFecha] = useState("")
  const [sintomas, setSintomas] = useState("")
  const [error, setError] = useState(false)

  useEffect(() => {
    if (Object.keys(paciente).length !== 0) {
      setNombre(paciente.nombre)
      setPropietario(paciente.propietario)
      setEmail(paciente.email)
      setFecha(paciente.fecha)
      setSintomas(paciente.sintomas)
    }
  }, [paciente])

  const handleSubmit = (e) => {
    e.preventDefault()
    if ([nombre, propietario, email, fecha, sintomas].includes("")) {
      setError(true)
      return
    }
    setError(false)
    const generarIdUnico = () => {
      const fec = Date.now().toString(36)
      const random = Math.random().toString(36).substring(2)

      return fec + random
    }

    const objPaciente = {
      nombre,
      propietario,
      email,
      fecha,
      sintomas,
    }

    if (paciente.id) {
      objPaciente.id = paciente.id
      const pacientesActualizados = pacientes.map((pacienteLista) =>
        pacienteLista.id === paciente.id ? objPaciente : pacienteLista
      )
      setPacientes(pacientesActualizados)
      setPaciente({})
    } else {
      objPaciente.id = generarIdUnico()
      setPacientes([...pacientes, objPaciente])
    }

    setNombre("")
    setPropietario("")
    setEmail("")
    setFecha("")
    setSintomas("")
  }

  return (
    <div className="text-white md:w-1/2 lg:w-2/5">
      <h2 className="font-black text-2xl text-center">Seguimiento Pacientes</h2>
      <p className="font-bold text-center mt-5 mb-10">
        Añade paciente y <span className="text-indigo-300">Administralos</span>
      </p>
      <form
        className="bg-white shadow-md rounded-lg py-10 px-5 mb-10 text-black"
        onSubmit={handleSubmit}
      >
        {error && <Error>Todos los campos son obligatorios</Error>}
        <div className="mt-5">
          <label
            className="font-bold text-gray-700 block uppercase"
            htmlFor="mascota"
          >
            Nombre Mascota
          </label>
          <input
            className=" border-2 p-1 mt-2 rounded-md placeholder-gray-400 w-full"
            type="text"
            name="nombre"
            id="nombre"
            placeholder="Nombre Mascota"
            value={nombre}
            onChange={(e) => {
              setNombre(e.target.value)
            }}
          />
        </div>

        <div className="mt-5">
          <label
            className="font-bold text-gray-700 block uppercase"
            htmlFor="propietario"
          >
            Propietario
          </label>
          <input
            className=" border-2 p-1 mt-2 rounded-md placeholder-gray-400 w-full"
            type="text"
            name="propietario"
            id="propietario"
            placeholder="Nombre Propietario"
            value={propietario}
            onChange={(e) => {
              setPropietario(e.target.value)
            }}
          />
        </div>
        <div className="mt-5">
          <label
            className="font-bold text-gray-700 block uppercase"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className=" border-2 p-1 mt-2 rounded-md placeholder-gray-400 w-full"
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value)
            }}
          />
        </div>
        <div className="mt-5">
          <label
            className="font-bold text-gray-700 block uppercase"
            htmlFor="alta"
          >
            Alta
          </label>
          <input
            className=" border-2 p-1 mt-2 rounded-md placeholder-gray-400 w-full"
            type="date"
            name="alta"
            id="alta"
            value={fecha}
            onChange={(e) => {
              setFecha(e.target.value)
            }}
          />
        </div>
        <div className="mt-5">
          <label
            className="font-bold text-gray-700 block uppercase"
            htmlFor="sintomas"
          >
            Síntomas
          </label>
          <textarea
            name="sintomas"
            id="sintomas"
            className="w-full border-2 rounded-md p-1 mt-2 placeholder-gray-400"
            placeholder="Describe los síntomas"
            value={sintomas}
            onChange={(e) => {
              setSintomas(e.target.value)
            }}
          ></textarea>
        </div>
        <input
          type="submit"
          value={paciente.id ? "Editar Paciente" : "Agregar Paciente"}
          className="hover:cursor-pointer w-full bg-indigo-600 text-white p-2 mt-10 uppercase font-bold hover:bg-indigo-800 transition-colors"
        />
      </form>
    </div>
  )
}
