import React, { Component } from "react";
import styles from './Input.module.css'

function Input({ type, text, name, placeholder, handleOnChange, value, step,min,maxlength }) {
  return (
    <div className={styles.formControl}>
      <label htmlFor={name}>{text}:</label>
      <input
        type={type}
        name={name} 
        placeholder={placeholder}
        onChange={handleOnChange}
        value={value}
        step={step}
        min={min}
				maxlength={maxlength}
      />
    </div>
  )
}

export default Input