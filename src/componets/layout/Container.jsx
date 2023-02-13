import React, { Component } from "react";
import styles from './Container.module.css'

function Container(props){
  return (
    <div id="idContainer"className={`${styles.container} ${styles[props.customClass]}`}>
    {props.children}
    </div>
  )
}

export default Container

