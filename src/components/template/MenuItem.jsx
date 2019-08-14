import React from 'react'
import './MenuItem.css'

import arrow from '../../assets/arrow-point-to-right.svg'

function MenuItem(props) {

    return (
        <button className="menu-item"
            disabled={props.disabled}
            onClick={_ => props.setContent(props.content)} >
            {props.label}
            <img src={arrow} alt=""/>
        </button>
    )
}

export default MenuItem