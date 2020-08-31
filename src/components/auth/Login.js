import React from 'react'

export const Login = () => {

  const onChange = () =>{

  }

  return (
    <div className="form-usuario">

      <div className="contenedor-form sombra-dark">
        <h1>Inicio</h1>
        <form>

          <div className="campo-form">
            <label htmlFor="email">Email</label>
            <input 
              type="email"
              id="email"
              name="email"
              placeholder="Correo"
              onChange={onChange}
            />
          </div>

          <div className="campo-form">
            <label htmlFor="password">Password</label>
            <input 
              type="password"
              id="password"
              name="password"
              placeholder="Contraseña"
              onChange={onChange}
            />
          </div>

          <div>
            <input 
              type="submit"
              className="btn btn-primario btn-block"
              value="Iniciar sesión"
            />
          </div>

        </form>
      </div>
    </div>
  )
}
