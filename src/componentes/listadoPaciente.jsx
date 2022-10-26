import Paciente from "./pacientes";

function ListadoPaciente({ pacientes, setPaciente,eliminarPaciente}) {

return (
  <div className="md:w-1/2 lg:w-3/5 overflow-y-scroll md:h-screen">
    {pacientes.length===0 && pacientes.id===0 ? 
        (<div>
           <h2 className="font-black text-3xl text-center">No hay Pacientes</h2>
          <p className="text-xl tetx-center mt-5 ">Agrega Pacientes
          <span className="text-indigo-600 font-bold"> apareceran en este lugar</span>
          </p>
        </div> )
        : 
        (<div>
          <h2 className="font-black text-3xl text-center">Lista de Pacientes</h2>
          <p className="text-xl tetx-center mt-5 ">Administra tus
          <span className="text-indigo-600 font-bold"> Pacientes/Citas</span>
          </p>
          {pacientes.map((paciente) => (
          <Paciente
            key={paciente.id}
            paciente={paciente}
            eliminarPaciente={eliminarPaciente}
            setPaciente={setPaciente}
             />
           ))}
          <h2 className="font-black text-center">Número de Pacientes{pacientes.length}</h2>
        </div>)
    }
  </div>
  )

  }
export default ListadoPaciente;
