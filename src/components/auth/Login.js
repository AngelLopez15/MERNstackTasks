import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export const Login = () => {

  // State para iniciar sesion
  const [usuario, setUsuario] = useState({
    email:'',
    password:''
  })

  // extrayendo los datos
  const {email,password}=usuario


  const onChange = (e) => ({
    ...usuario,
    [e.target.name]:e.target.value
  })

  // funcion para enviar los datos de iniciar sesion
  const onSubmit = (e) =>{
    e.preventDefault()

    //  validar

    // pasarlo al actions

  }

  return (
    <div className="form-usuario">

      <div className="contenedor-form sombra-dark">
        <h1>Inicio</h1>
        <form
          onSubmit={onSubmit}
        >

          <div className="campo-form">
            <label htmlFor="email">Email</label>
            <input 
              type="email"
              id="email"
              name="email"
              placeholder="Correo"
              value={email}
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
              value={password}
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

        <Link to={'/nueva-cuenta'} className="enlace-cuenta">Obtener cuenta</Link>

      </div>
    </div>
  )
}
