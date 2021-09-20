import React from 'react';
import PropTypes from 'prop-types'

const Cita = (props) => {
    console.log(props.cita)
    return ( 
        <div className='cita'>
            <p>Mascota: <span>{props.cita.mascota}</span></p>
            <p>Propietario: <span>{props.cita.propietario}</span></p>
            <p>Fecha: <span>{props.cita.fecha}</span></p>
            <p>Hora: <span>{props.cita.hora}</span></p>
            <p>Sintomas: <span>{props.cita.sintomas}</span></p>

            <button className='button eliminar u-full-width' onClick={() => props.eliminarCita(props.cita.id)}>
                Eliminar &times;
            </button>

        </div>
     );
}

Cita.propTypes = {
    cita: PropTypes.object.isRequired,
    eliminarCita: PropTypes.func.isRequired
}
 
export default Cita;