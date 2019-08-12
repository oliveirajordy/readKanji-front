import React from 'react'
import './LoadComponent.css'

import load from '../../assets/Spinner-1s-200px.gif'

function LoadComponent(props) {

    return (
        <div className="load-component">
            <img src={load} alt="esperando" />
            <span>{props.msg}</span>
        </div>
    )
}

export default LoadComponent