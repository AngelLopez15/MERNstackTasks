import React from 'react'

export const Proyecto = ({proyecto}) => {
  return (
    <li>
      <button
        type="button"
        className="btn tbn-blank"
      >
        {proyecto.nombre}
      </button>
    </li>
  )
}
