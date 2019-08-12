import React from 'react'

function RadioButtons(props) {

    const options = props.options.map((option, i) => {
        return (
            <div className="form-check" key={option}>
                <input className="form-check-input"
                    type="radio"
                    id={option}
                    name={props.name}
                    value={props.values[i]}
                    onChange={e => props.function(e.target.value)}
                    checked={props.values[i] === props.value}
                    disabled={props.disabled} ></input>
                <label className={`form-check-label`} htmlFor={option}>{option}</label>
            </div>
        )
    })

    return (
        <div className="col-12 col-md-3">
            <legend className="col-form-label  p-0 ">{props.title}:</legend>
            <div className="mb-2">
                {options}
            </div>
        </div>
    )
}

export default RadioButtons