import {useState, useEffect} from 'react';
import Error from './error';

function Formulario() {
  const [mascota,setMascota]=useState('');
  const [propietario,setPropietario]=useState('');
  const [email,setEmail]=useState('');
  const [alta,setAlta]=useState('');
  const [sintomas,setSintomas]=useState('');
  const [error,setError]=useState(false)
  const validarFormulario=(e)=>{
    e.preventDefault()
    if([mascota, propietario, email, alta, sintomas].includes('')){
      console.log('Hay al menos un campo vacio')
      //setError(true)
      return
    };
    setError(false)
    //--------------limpiando nuestros input
    setMascota('')
    setPropietario('')
    setEmail('')
    setAlta('')
    setSintomas('')

  };
  return (

    <div className="md:w-1/2 lg:w-2/5">
      <h2 className="text-center font-black text-3xl mb-5 mt-5">Seguimiento Pacientes</h2>
      <p className="text-center mt-5 text-lg mb-10 ">Añade Pacientes <span className="text-indigo-600 font-bold   ">Administrarlos</span></p>
    
      <form className="bg-slate-300 py-10 px-8 shadow-md rounded-lg" 
      onSubmit={validarFormulario}>
        <div>
          {
            error&&<Error><p>Todos los campos son obligatorios</p>
            </Error>
          }
          <div>
            <label className="block text-gray-700 uppercase font-bold ">Nombre Mascota</label>
            <input className="p-2 rounded-md w-full mt-2 placeholder-gray-500" 
            type="text"
            placeholder=" Nombre de la Mascota"
            value={mascota}
            onChange={(e)=>setMascota(e.target.value)
               }
            />
            </div>
            <div>
            <label className="block text-gray-700 uppercase font-bold mt-2">Nombre Propietario</label>
            <input className="p-2 rounded-md w-full mt-2 placeholder-gray-500" 
            type="text"
            placeholder=" Nombre del Propietario"
            value={propietario}
            onChange={(e)=>setPropietario(e.target.value)
            }
            />
            </div>
            <div>
            <label className="block text-gray-700 uppercase font-bold mt-2">Email</label>
            <input className="p-2 rounded-md w-full mt-2 placeholder-gray-500" 
            type="text"
            placeholder=" Email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)
            }
            />
            </div>
            <div>
            <label className="block text-gray-700 uppercase font-bold mt-2">Alta</label>
            <input className="p-2 rounded-md w-full mt-2 placeholder-gray-500" 
            type="text"
            placeholder=" Alta"
            value={alta}
            onChange={(e)=>setAlta(e.target.value)
            }
            />
            </div>
            <div>
            <label className="block text-gray-700 uppercase font-bold mt-2">Sintomas</label>
            <input className="p-2 rounded-md w-full mt-2 placeholder-gray-500" 
            type="text"
            placeholder=" Sintomas"
            value={sintomas}
            onChange={(e)=>setSintomas(e.target.value)
            }
            />
            </div>
        </div>
        <input type="submit" className=" bg-indigo-500 text-white uppercase w-full p-3 mt-5 rounded-md hover:bg-indigo-700 cursor-pointer transition-colors font-bold" />



      </form>
    </div> 
  );
}
export default Formulario;
