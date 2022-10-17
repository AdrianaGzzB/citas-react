//Es el nucleo de mi proyecto
//une los componentes
import Header from "./componentes/header";
import ListadoPaciente from "./componentes/listadoPaciente";
import Formulario from "./componentes/formulario";
import Error from "./componentes/error";
import Paciente from "./componentes/pacientes";
//los estilos se meten con className en los archivos .jsx
function App() {
  return (
    <div className="mt-20">
      <Header />
      <Formulario/>
      <ListadoPaciente/>
    </div>
  )
}

export default App;
