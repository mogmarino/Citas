import React, { Fragment, useState,useEffect} from 'react'
import Formulario from './components/Fomulario'
import Cita from './components/Cita'


function App() {

  // citas en el localstorage
  let citasIniciales = JSON.parse(localStorage.getItem('citas'));
  if (!citasIniciales) {
    citasIniciales = [];
  }

  // arreglo con las citas
  const [citas,guardarCitas] = useState(citasIniciales)

  // useEffect para realizar operaciones cada vez que el state cambie
  useEffect(() => {

    // evitar error de dependencias
    // let citasIniciales = JSON.parse(localStorage.getItem('citas'));

    console.log('algo paso con el state')
    if (citasIniciales) {
      localStorage.setItem('citas',JSON.stringify(citas))
    }else{
      localStorage.setItem('citas',JSON.stringify([]))
    }
  }, [citas,citasIniciales])//array de dependencias

  // funcion que tome las citas actuales y agregue una nueva cita
  const crearCita = cita => {
    console.log(cita)
    guardarCitas([...citas,cita])
  }

  // funcion que elimina una cita por su id
  const eliminarCita = id => {

    // verificamos que el id sea el correcto
    console.log(id)
    const nuevasCitas = citas.filter(cita => cita.id !== id)
    guardarCitas(nuevasCitas)

  }

  // mensaje condicional
  const titulo = citas.length === 0 ? 'No hay citas' : 'Administra tus citas'

  

  return (
    <Fragment>
      <h1>Administrador de pacientes</h1>
      <div className="container">

        <div className="row">

          <div className="one-half column">
            <Formulario 
              crearCita = {crearCita}
            />
          </div>

          <div className="one-half column">
            {/* <h1>soy la otra columna</h1> */}
            <h2>{titulo}</h2>
            {citas.map(cita =>(
              <Cita
              key={cita.id}
              cita={cita}
              eliminarCita = {eliminarCita}
            />
            )
            )}
          </div>

        </div>
      </div>
    </Fragment>
  );
}



export default App;
