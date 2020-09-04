import React from 'react'

export const FormTarea = () => {
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