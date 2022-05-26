import React, { Component } from 'react';


const Input = ({name, label, value, onChange, type, error}) => {
    return ( 
        <div className="form-group mb-3">
            <label htmlFor="username">{label}</label>
            <input 
                value={value} 
                onChange={onChange}
                id={name} 
                name={name}
                type={type}
                className="form-control" 
                placeholder={name}
            />
            {error && <div className="alert alert-danger">{error}</div>}
        </div>
     );
}
 
export default Input;