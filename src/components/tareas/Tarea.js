import React from 'react'

export const Tarea = ({tarea}) => {

  const {nombre,estado}=tarea

  return (
    <li className="tarea sombra">
      <p>{nombre}</p>
      <div className="estado">
        {
          estado
          ?
            (<button 
              type="button"
              className="completo"
            >Completado</button>)
          :
            (
              <button 
              type="button"
              className="incompleto"
            >Incompleto</button>
            )
        }
      </div>
      <div className="acciones">
        <button type="button" className="btn btn-primario">Editar</button>
        <button type="button" className="btn btn-secundario">Eliminar</button>
      </div>
    </li>
  )
}
