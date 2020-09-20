import React, { useReducer } from 'react';
import proyectoContext from './proyectoContext';
import proyectoReducer from './proyectoReducer';

// importando los types
import { FORMULARIO_PROYECTO } from '../../types';



const ProyectoState = props =>{
  
  // State inicial del proyecto
  const initialState = {
    formulario:false
  }

  // dispatch para ejecutar las acciones
  const [state, dispatch] = useReducer(proyectoReducer, initialState)

  // Funciones para el CRUD del proyecto

  const mostrarFormulario = () => { 
    dispatch({
      type:FORMULARIO_PROYECTO
    })
  }

  // Retornando el proyecto Contect. Desde aqui "nacen los datos" 
  return(
    <proyectoContext.Provider
      value={{
        // recomendacion el state una sola palabra todo en minuscula
        formulario:state.formulario,
        // las funciones en dos palabras con camel case
        mostrarFormulario
      }}
    >
      {/* Para pasar todos los datos a lo largo de todos los componentes hijos */}
      {props.children}
    </proyectoContext.Provider>
  )
}

export default ProyectoState