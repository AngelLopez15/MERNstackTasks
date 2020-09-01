import React, { useState } from 'react'

export const NuevoProyecto = () => {

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

  return (
    <>
      <button
        type="button"
        className="btn btn-block btn-primario"
      >
        Nuevo Proyecto
      </button>

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
    </>
  )
}
