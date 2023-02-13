import React, { Component } from "react";
import { Link } from 'react-router-dom'
import Container from './Container'

import styles from './Navbar.module.css'
import logo from '../../img/agradecimento.png'

function Navbar() {
	return (
		<nav className={styles.navbar}>
			<Container>
				<Link to="/"> <img src={logo} alt="Moeda dourada" /> </Link>
				<ul className={styles.list}>
					<li className={styles.item}>
						<Link to="/">Home</Link>
					</li>
					<li className={styles.item}>
						<Link to="/project">Projetos</Link>
					</li>
				</ul>
			</Container>
		</nav>
	)
}

export default Navbar