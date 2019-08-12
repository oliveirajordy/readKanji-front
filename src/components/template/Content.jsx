import React from 'react'
import './Content.css'

import Home from '../main-contents/Home'
import Settings from '../main-contents/Settings'

function Content(props) {

    return (
        <main className={`content ${props.theme}`}>
            {props.content === 'home' && <Home />}
            {props.content === 'settings' && <Settings theme={props.theme} setTheme={props.setTheme} />}
        </main>
    )
}

export default Content