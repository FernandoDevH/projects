import React, { Component } from "react";
import styles from './Select.module.css'

function Select({ text, name, options, handleOnChange, value }) {
  return (
    <div className={styles.formControl}>
      <label htmlFor={name}>{text}:</label>
      <select
        name={name}
        id={name}
        onChange={handleOnChange}
        value={value}
      >
        <option>Seleciona uma opção</option>
        {options.map((option) => (
          <option value={option.name} key={option.name}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  )
}

export default Select