import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export const NuevaCuenta = () => {

  // State para iniciar sesion
  const [usuario, setUsuario] = useState({
    nombre:'',
    email:'',
    password:'',
    confirmar:''
  })

  // extrayendo los datos
  const {nombre, email, password, confirmar}=usuario


  const onChange = (e) => ({
    ...usuario,
    [e.target.name]:e.target.value
  })

  // funcion para enviar los datos de iniciar sesion
  const onSubmit = (e) =>{
    e.preventDefault()

    //  validar que no haya campos vacios

    // password minimo de 6 caracteres

    // Revisar que los dos password sean iguales

    // pasarlo al actions

  }

  return (
    <div className="form-usuario">

      <div className="contenedor-form sombra-dark">
        <h1>Obtener una cuenta</h1>
        <form
          onSubmit={onSubmit}
        >

          <div className="campo-form">
            <label htmlFor="nombre">Nombre</label>
            <input 
              type="text"
              id="nombre"
              name="nombre"
              placeholder="nombre"
              value={nombre}
              onChange={onChange}
            />
          </div>

          <div className="campo-form">
            <label htmlFor="nombre">Correo</label>
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

          <div className="campo-form">
            <label htmlFor="confirmar">Confirmar Password</label>
            <input 
              type="password"
              id="confirmar"
              name="confirmar"
              placeholder="Repite tu contraseña"
              value={confirmar}
              onChange={onChange}
            />
          </div>

          <div>
            <input 
              type="submit"
              className="btn btn-primario btn-block"
              value="Registrarme"
            />
          </div>

        </form>

        <Link to={'/'} className="enlace-cuenta">Iniciar sesión</Link>

      </div>
    </div>
  )
}
