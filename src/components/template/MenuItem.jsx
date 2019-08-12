import React from 'react'
import './MenuItem.css'

function MenuItem(props) {

    return (
        <button className="menu-item"
            disabled={props.disabled}
            onClick={_ => props.setContent(props.content)} >
            {props.label}
        </button>
    )
}

export default MenuItem