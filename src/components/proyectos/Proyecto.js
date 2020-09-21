import React, { useContext } from 'react'
import proyectoContext from '../../context/proyectos/proyectoContext'

export const Proyecto = ({proyecto}) => {

  // Obtener el state de proyectos
  const proyectosContext = useContext(proyectoContext)
  const {proyectoActual} = proyectosContext

  return (
    <li>
      <button
        type="button"
        className="btn tbn-blank"
        onClick={()=>proyectoActual(proyecto.id)}
      >
        {proyecto.nombre}
      </button>
    </li>
  )
}
