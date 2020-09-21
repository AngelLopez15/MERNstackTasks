import React, { useContext, useEffect } from 'react'
import { Proyecto } from './Proyecto'
import proyectoContext from '../../context/proyectos/proyectoContext'

export const ListadoProyectos = () => {
  
  // Para poder acceder al listado de proyectos debemos traer el context
  // los proyectos los extraermos del state inicial
  const proyectosContext = useContext(proyectoContext) 
  // extrayendo los proyectos
  const {proyectos, obtenerProyectos} = proyectosContext

  // usando useEffect para obtener los proyectos tan pronto como el componente cargue
  useEffect(() => {
    obtenerProyectos()
  }, [])

  // revisar si proyectos tienen contenido
  if (proyectos.length===0) {
    return <p>No hay proyectos, tomate un café</p>
  }

  return (
    <ul className="listado-proyectos">
      {
        proyectos.map(proyecto=>(
          <Proyecto
            key={proyecto.id} 
            proyecto={proyecto}
          />
        ))
      }
    </ul>
  )
}
