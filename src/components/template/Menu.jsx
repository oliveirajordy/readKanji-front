import React from 'react'
import './Menu.css'

import MenuItem from './MenuItem'

function Menu(props) {

    return (
        <aside className="menu">
            <MenuItem label='Home' disabled={props.content === 'home'} content='home' setContent={props.setContent} />
            <MenuItem label='Conversor' disabled={props.content === 'converter'} content='converter' setContent={props.setContent} />
            <MenuItem label='Settings' disabled={props.content === 'settings'} content={'settings'} setContent={props.setContent} />
        </aside>
    )
}

export default Menu