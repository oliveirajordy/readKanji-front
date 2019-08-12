import React from 'react'
import './Content.css'

import Home from '../main-contents/Home'
import Settings from '../main-contents/Settings'
import ConverterViewCore from '../main-contents/ConverterViewCore'

function Content(props) {

    return (
        <main className={`content ${props.theme} ${props.fontSize}`}>
            {props.content === 'home' && <Home />}
            {props.content === 'settings' && <Settings
                theme={props.theme}
                setTheme={props.setTheme}
                fontSize={props.fontSize}
                changeFontSize={props.changeFontSize} />}
            {props.content === 'converter' && <ConverterViewCore />}
        </main>
    )
}

export default Content