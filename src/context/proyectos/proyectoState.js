import React, { useReducer } from 'react';
import proyectoContext from './proyectoContext';
import proyectoReducer from './proyectoReducer';

// importando los types
import { AGREGAR_PROYECTO, ELIMINAR_PROYECTO, FORMULARIO_PROYECTO, OBTENER_PROYECTOS, PROYECTO_ACTUAL, VALIDAR_FORMULARIO } from '../../types';


const ProyectoState = props =>{
  
  const proyectos = [
    {id:1, nombre:'Tienda virtual'},
    {id:2, nombre:'Intranet'},
    {id:3, nombre:'Diseño web'},
    {id:4, nombre:'MERN stack'}
  ]
  
  // State inicial del proyecto
  const initialState = {
    proyectos:[],
    formulario:false,
    errorformulario:false,
    proyecto:null
  }

  // dispatch para ejecutar las acciones
  const [state, dispatch] = useReducer(proyectoReducer, initialState)

  // Funciones para el CRUD del proyecto

  const mostrarFormulario = () => { 
    dispatch({
      type:FORMULARIO_PROYECTO
    })
  }

  // Obtener los proyectos
  // Siempre lo que toma la funcion como parametro es lo que va a ser el payload
  const obtenerProyectos = ()=>{
    dispatch({
      type: OBTENER_PROYECTOS,
      payload: proyectos
    })
  }

  // Agregar nuevo proyecto
  const agregarProyecto = (proyecto) =>{
    
    // agregamos el proyecto al state
    dispatch({
      type:AGREGAR_PROYECTO,
      payload: proyecto
    })
  }

  // Validar Formulario por si hay errores
  const mostrarError = () =>{
    dispatch({
      type: VALIDAR_FORMULARIO
    })
  } 

  // Selecciona el proyecto que el usuario dio click
  const proyectoActual = (proyectoId) => {
    dispatch({
      type:PROYECTO_ACTUAL,
      payload: proyectoId
    })
  }

  // Elimina un proyecto
  const eliminarProyecto = (proyectoId) =>{
    dispatch({
      type:ELIMINAR_PROYECTO,
      payload:proyectoId
    })
  }

  // Retornando el proyecto Context. Desde aqui "nacen los datos" 
  return(
    <proyectoContext.Provider
      value={{
        proyectos:state.proyectos,
        // recomendacion el state una sola palabra todo en minuscula
        formulario:state.formulario,
        // las funciones en dos palabras con camel case
        errorformulario:state.errorformulario,
        proyecto:state.proyecto,
        mostrarFormulario,
        obtenerProyectos,
        agregarProyecto,
        mostrarError,
        proyectoActual,
        eliminarProyecto
      }}
    >
      {/* Para pasar todos los datos a lo largo de todos los componentes hijos */}
      {props.children}
    </proyectoContext.Provider>
  )
}

export default ProyectoState