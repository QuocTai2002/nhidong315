import React from 'react'
import Headers from '../Componens/Headers/Headers'
import Footers from '../Componens/foodters/Footers'
import Drawer from '../Componens/modalDrawer/Drawer'

const LayoutWeb = (props) => {
  return (
    <div>
        <Headers className='fixed' />
        {props.children}
        <Footers/>
        <div className='fixed top-1/3 right-0'><Drawer/></div>
    </div>
  )
}

export default LayoutWeb