import React, { useContext } from 'react'
import proyectoContext from '../../context/proyectos/proyectoContext'
import { Tarea } from './Tarea'

export const ListadoTareas = () => {

  const proyectosContext = useContext(proyectoContext)
  const {proyecto, eliminarProyecto} = proyectosContext

  
  // Si no hay proyecto seleccionado
  if(!proyecto) {
    return <h2>Selecciona un proyecto</h2>
  }
  
  // Aplicando Array destructuring para extraer el proyecto actual
  const [proyectoActual] = proyecto
  
  const tareasProyecto = [
    {nombre:'elegir plataforma', estado:true},
    {nombre:'elegir colores', estado:true},
    {nombre:'elegir hosting', estado:false},
    {nombre:'elegir pago', estado:false}
  ]

  // Elimina un proyecto
  const onClickEliminar = () =>{
    eliminarProyecto(proyectoActual.id)
  }

  return (
    <>
      <h2>Proyecto: {proyectoActual.nombre}</h2>
      <ul className="listado-tareas">     
        {
          tareasProyecto.length===0
            ? (<li className="tarea"><p>No hay tareas</p></li>)
            : tareasProyecto.map(tarea =>(
              <Tarea 
                tarea={tarea}
              />
            ))
        }
      </ul>

      <button 
        type="button" 
        className="btn btn-eliminar"
        onClick={onClickEliminar}
      >Eliminar Proyecto &times;</button>
    </>
  )
}
