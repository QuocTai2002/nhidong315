import React from 'react'
import Headers from '../Componens/Headers/Headers'
import Footers from '../Componens/foodters/Footers'

const LayoutWeb = (props) => {
  return (
    <div>
        <Headers/>
        {props.children}
        <Footers/>
    </div>
  )
}

export default LayoutWeb