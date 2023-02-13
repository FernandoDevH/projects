import React, { Component } from "react";
import styles from './Loading.module.css'
import loading from '../../img/loading.svg'
function Loading(){
  return (
    <div className={styles.loaderContainer}>
    <img src={loading} className={styles.loader} alt="Loading" />
    </div>
  )
}

export default Loading