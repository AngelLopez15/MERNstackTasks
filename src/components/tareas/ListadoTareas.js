import React from 'react'
import { Tarea } from './Tarea'

export const ListadoTareas = () => {

  const tareasProyecto = [
    {nombre:'elegir plataforma', estado:true},
    {nombre:'elegir colores', estado:true},
    {nombre:'elegir hosting', estado:false},
    {nombre:'elegir pago', estado:false}
  ]

  return (
    <>
      <h2>Proyecto: Tienda Virtual</h2>
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

      <button type="button" className="btn btn-eliminar">Eliminar Proyecto &times;</button>
    </>
  )
}
