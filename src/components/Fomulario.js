import React, { Fragment, useState} from 'react';
import uuid from 'react-uuid'
import PropTypes from 'prop-types'


const Formulario = ({crearCita}) => {

    // crear el state de citas
    const [cita,actualizarCita] = useState({
        mascota:'',
        propietario:'',
        fecha:'',
        hora:'',
        sintomas:''
    })

    // state para el error
    const [error,actualizarError] = useState(false)

    // funcion que se ejecuta cada vez que el usuario escribe en el input
    const actualizarState = (e) => {

        // introducir los valores en el state de citas
        actualizarCita({
            ...cita,
            [e.target.name]: e.target.value
        })
        // console.log(e.target.name)
    }

    // Extraer los valores
    const {mascota,propietario,fecha,hora,sintomas} = cita;

    // Al presionar el boton de enviar
    const submitCita = e => {
        // evitar que nos coloque los datos en el query string
        e.preventDefault();
        // console.log(e)
        // alert('Enviando..')

        // Validar

        if (mascota.trim() === '' || propietario.trim() === '' || fecha.trim() === '' || hora.trim() === '' || sintomas.trim() === '') {
            // console.log('todos los campos son obligatorios')
            actualizarError(true)
            return;
        }

        // eliminar el msj de error previo
        actualizarError(false)

        // Asignar un ID
        cita.id = uuid()

        // Crear una cita
        crearCita(cita)

        // Reiniciar el form
        actualizarCita({
            mascota:'',
            propietario:'',
            fecha:'',
            hora:'',
            sintomas:''
        })
    }

    return ( 
        <Fragment>

            <h2>Crear cita</h2>

            {/* mostrar el error en el html \ validacion */}
            {error ? <p className='alerta-error'>Todos los campos son obligatorios</p> : null}

            <form
                onSubmit={submitCita}
            >
                <label>Nombre Mascota</label>
                <input 
                    type='text'
                    name='mascota'
                    className='u-full-width'
                    placeholder='Nombre de la mascota...'
                    onChange={actualizarState}
                    value={mascota}
                />
                <label>Nombre Propietario</label>
                <input 
                    type='text'
                    name='propietario'
                    className='u-full-width'
                    placeholder='Nombre del propietario...'
                    onChange={actualizarState}
                    value={propietario}
                />
                <label>Fecha</label>
                <input 
                    type='date'
                    name='fecha'
                    className='u-full-width'
                    onChange={actualizarState}
                    value={fecha}
                />
                <label>Hora</label>
                <input 
                    type='time'
                    name='hora'
                    className='u-full-width'
                    onChange={actualizarState}
                    value={hora}
                />
                <label>Sintomas</label>
                <textarea
                    name='sintomas'
                    className='u-full-width'
                    placeholder='sintomas de la mascota'
                    onChange={actualizarState}
                    value={sintomas}
                >
                </textarea>
                <button
                    type='submit'
                    className='u-full-width button-primary'
                >
                    Agregar cita
                </button>
            </form>
        </Fragment>
     );
}

// proptypes para documentar los props
Formulario.propTypes = {
    crearCita: PropTypes.func.isRequired
  }
 
export default Formulario;