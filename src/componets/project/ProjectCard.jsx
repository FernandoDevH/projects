import React, { Component } from "react";
import styles from './ProjectCard.module.css'
import { Link } from 'react-router-dom'

import { BsPencil, BsFillTrashFill } from 'react-icons/bs'

function ProjectCard({ name, budget, handleRemove, id }) {
	const remove = (e) => {
		e.preventDefault()
		handleRemove(id)
		
	}

	return (
		<div id={id} className={styles.projectCard}>
			<h4>{name}</h4>
			<p><span>Valor: </span>{budget}</p>
			<div className={styles.projectCardAction}>
				<Link to={`/project/${id}`}> <BsPencil />Editar </Link>
				<button onClick={remove} onChange={remove}> <BsFillTrashFill />Excluir</button>
			</div>
		</div>
	)
}

export default ProjectCard