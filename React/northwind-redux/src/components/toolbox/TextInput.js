import React from "react";



const TextInput = ({ name, Label, onChange, placeHolder, value, error }) => {
    let wrapperClass = "form-group"
    if (error && error.length > 0) {
        wrapperClass += " has-error"
    }

    return (
        <div className={wrapperClass}>
            <label htmlFor={name}> {Label}</label>
            <div className="field">
                <input type="text"
                name={name} 
                className="form-control" 
                placeholder={placeHolder} 
                value={value} 
                onChange={onChange}
                >
                </input>
                {error&& <div className="alet alert-danger"/>}
            </div>
        </div>
    )
}

export default TextInput;