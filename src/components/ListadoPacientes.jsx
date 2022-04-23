import { useEffect } from "react"
import Paciente from "./Paciente"

export default function ListadoPacientes({
  pacientes,
  setPaciente,
  eliminarId,
}) {
  return (
    <div className="text-white md:w-1/2 lg:w-3/5">
      {pacientes && pacientes.length ? (
        <>
          <h2 className="font-bold text-2xl text-center">Listado Pacientes</h2>
          <p className=" font-bold text-center mt-5 mb-10">
            Administra tus{" "}
            <span className="text-indigo-300">Pacientes y Citas</span>
          </p>

          <div className="md:overflow-y-scroll h-screen barra">
            {pacientes.map((paciente) => {
              return (
                <Paciente
                  key={paciente.id}
                  paciente={paciente}
                  setPaciente={setPaciente}
                  eliminarId={eliminarId}
                />
              )
            })}
          </div>
        </>
      ) : (
        <>
          <h2 className="font-bold text-2xl text-center">No hay Pacientes</h2>
          <p className=" font-bold text-center mt-5 mb-10">
            Agrega pacientes{" "}
            <span className="text-indigo-300">y apareceran Aqui</span>
          </p>
        </>
      )}
    </div>
  )
}
