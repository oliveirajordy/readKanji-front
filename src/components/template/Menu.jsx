import React, { useState } from 'react'
import './Menu.css'

import MenuItem from './MenuItem'

const INITIAL_STATE = {
    menu: false
}

function Menu(props) {

    const [data, setData] = useState(INITIAL_STATE)

    const toggleMenu = e => {
        setData({ menu: !data.menu })
        if (typeof e === 'string') props.setContent(e)
    }

    return (
        <React.Fragment>
            <button className="toggle-menu" onClick={toggleMenu}> --- </button>
            <aside className={`menu ${data.menu ? 'actived' : ''}`}>
                <MenuItem label='Home' disabled={props.content === 'home'} content='home' setContent={toggleMenu} />
                <MenuItem label='Conversor' disabled={props.content === 'converter'} content='converter' setContent={toggleMenu} />
                <MenuItem label='Settings' disabled={props.content === 'settings'} content={'settings'} setContent={toggleMenu} />
            </aside>
        </React.Fragment>
    )
}

export default Menu