//Es el nucleo de mi proyecto
//une los componentes
import Header from "./componentes/header";
import ListadoPaciente from "./componentes/listadoPaciente";
import Formulario from "./componentes/formulario";
import {useState, useEffect} from "react";

//los estilos se meten con className en los archivos .jsx
function App() {
  const[pacientes, setPacientes]=useState([])
  const[paciente, setPaciente]=useState({})
  const eliminarPaciente=id=>{const pacientesAct=pacientes.filter(paciente=>paciente.id!==id) 
    setPacientes(pacientesAct)
   }

  useEffect(()=>{
    const obtenerLS=(()=>{
      const pacientesLS=JSON.parse(localStorage.getItem(pacientes))??[]
      setPacientes(pacientesLS)
     })
  obtenerLS();
  },[])

 useEffect(()=>{
  localStorage.setItem('pacientes', JSON.stringify(pacientes))
},[pacientes])

return (
    <div className="mt-20 container mx-auto">
      <Header 
      />
      <div className="md:flex mt-12">
      <Formulario
      pacientes={pacientes}
      setPacientes={setPacientes}
      paciente={paciente}
      setPaciente={setPaciente}
      />
      <ListadoPaciente
      pacientes={pacientes}
      setPaciente={setPaciente}
      eliminarPaciente={eliminarPaciente}
      />
      </div>
    </div>
  )
}
export default App;
