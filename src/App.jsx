//Es el nucleo de mi proyecto
//une los componentes
import Header from "./componentes/header";
import ListadoPaciente from "./componentes/listadoPaciente";

function App() {
  return (
    <>
      <Header />
      <ListadoPaciente/>
    </>
  )
}

export default App;