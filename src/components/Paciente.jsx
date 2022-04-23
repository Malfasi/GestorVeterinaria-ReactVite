export default function Paciente({ paciente, setPaciente, eliminarId }) {
  const { nombre, propietario, email, fecha, sintomas, id } = paciente

  const handleEliminar = () => {
    const res = confirm("seguro desea elimar este registro?")

    if (res) {
      eliminarId(id)
    }
  }

  return (
    <div className="bg-white shadow-md rounded-lg py-10 px-5 mb-5">
      <p className=" mb-3 font-bold uppercase text-gray-700">
        Nombre: <span className="normal-case font-normal ">{nombre} </span>
      </p>
      <p className=" mb-3 font-bold uppercase text-gray-700">
        Propietario:{" "}
        <span className="normal-case font-normal ">{propietario}</span>
      </p>
      <p className=" mb-3 font-bold uppercase text-gray-700">
        Email: <span className="normal-case font-normal "> {email}</span>
      </p>
      <p className=" mb-3 font-bold uppercase text-gray-700">
        Alta: <span className="normal-case font-normal "> {fecha}</span>
      </p>
      <p className=" mb-3 font-bold uppercase text-gray-700">
        Sintomas: <span className="normal-case font-normal "> {sintomas}</span>
      </p>

      <div className="flex justify-between">
        <button
          className="bg-indigo-600 hover:bg-indigo-700 px-10 py-2 rounded-lg uppercase font-bold"
          onClick={() => setPaciente(paciente)}
        >
          Editar
        </button>
        <button
          className="bg-red-600 hover:bg-red-700 px-10 py-2 rounded-lg uppercase font-bold"
          onClick={handleEliminar}
        >
          Eliminar
        </button>
      </div>
    </div>
  )
}
