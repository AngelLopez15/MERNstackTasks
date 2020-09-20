import React, { useContext, useState } from 'react'
import proyectoContext from '../../context/proyectos/proyectoContext'

export const NuevoProyecto = () => {

  // Obtener el state del formulario. Para eso debemos obtener importar el context
  const proyectosContext = useContext(proyectoContext)
  // extrayendo el formulario del context
  const {formulario, mostrarFormulario}= proyectosContext


  // State para manejar el boton de agregar proyecto
  // el estado inicial va a ser un objeto por que vamos a utilizar una libreria
  // para poder generar un id y hacer poder hacer el delete de una tarea
  // cuando sea necesario
  const [proyecto, setProyecto] = useState({
    nombre:''
  })

  // Funcion para enviar el formulario
  const onSubmitProyecto = (e)=>{
    e.preventDefault()

    // validando el proyecto

    // agregarlo al state

    // reiniciar el form

  }


  // extrayendo el nombre del proyecto con desestructuracion de objetos
  const {nombre}=proyecto


  // lee lo que escriben en el input
  const onChangeProyecto = (e) =>{
    setProyecto({
      ...proyecto,
      [e.target.name]:e.target.value
    })
  }

  // Mostrar Formulario
  const showFormulario = () => {
    mostrarFormulario()
  }

  return (
    <>
      <button
        type="button"
        className="btn btn-block btn-primario"
        onClick={showFormulario}
      >
        Nuevo Proyecto
      </button>

      {
        formulario
        ?
          (
            <form
              className="formulario-nuevo-proyecto"
              onSubmit={onSubmitProyecto}
            >
              <input 
                type="text"
                className="input-text"
                placeholder="Nombre del proyecto"
                name="nombre"
                value={nombre}
                onChange={onChangeProyecto}
              />

              <input 
                type="submit"
                className="btn btn-primario btn-block"
                value="Agregar proyecto"
              />
            </form>
          )
        :
          (
            null
          )
      }

    </>
  )
}
