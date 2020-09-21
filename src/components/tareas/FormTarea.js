import React, { useContext } from 'react'
import proyectoContext from '../../context/proyectos/proyectoContext'

export const FormTarea = () => {

  // Extraer si un proyecto esta activo
  const proyectosContext = useContext(proyectoContext)
  const {proyecto} = proyectosContext

  // Si no hay un proyecto seleccionado
  if (!proyecto) {
    return null
  }

  // aplicando desestructuracion de arreglos para extraer el proyecto actual
  const [proyectoActual] = proyecto


  return (
    <div className="formulario">
      <form>
        <div className="contenedor-input">
          <input 
            type="text"
            className="input-text"
            placeholder="Nombre de la tarea"
            name="nombre"
            autoComplete="off"
          />
        </div>
        <div>
          <input 
            type="submit"
            className="btn btn-primario btn-submit btn-block"
            value="Agregar tarea"
          />
        </div>
      </form>
    </div>
  )
}
