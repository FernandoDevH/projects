import React, { Component } from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'

import styles from './Footer.module.css'

function Footer() {
  return (
    <footer className={styles.footer}>
      <ul className={styles.socialmidias}>
        <li><FaFacebook /></li>
        <li><FaInstagram /></li>
        <li><FaLinkedin /></li>
      </ul>
      <p  className={styles.copyRight}><span>Costs</span> &copy;  2022</p>
    </footer>
  )
  }
export default Footer