import React, { Component } from "react";

import axios from "axios"
import Message from "../layout/Message"
import { useLocation, useParams, useNavigate } from 'react-router-dom'

import styles from './Project.module.css'
import Container from '../layout/Container'
import LinkButton from '../layout/LinkButtom'
import ProjectCard from "../project/ProjectCard"
import Loading from "../layout/Loading"
import { useState, useEffect } from "react"

function Project() {
	const [project, setProject] = useState([])
	const [removeLoading, setRemoveLoading] = useState(false)
	const [projectMessage, setProjectMessage] = useState('')
	const urlbase = "https://primeiraapirestful.devfernando.repl.co/project"
	const history = useNavigate()
	const location = useLocation()
	let message = ''
	if (location.state) {
		message = location.state.message
	}

	useEffect(() => {
		setTimeout(() => {
			axios.get('https://primeiraapirestful.devfernando.repl.co/project')
				.then((response) => {
					setProject(response.data)
					setRemoveLoading(true)
				})
		}, 1000)
	}, [])

	async function removeProject(id) {
	await	axios.delete(`${urlbase}/` + id)

			.then(() => {
				console.log("Card Apagado com sucesso!")
				setProject(project.filter((projects) => projects.id !== id))
				document.getElementById(id).remove()
				

			})
			.catch(error => console.log(error))

	}

	return (
		<div className={styles.projectContainer}>
			<div className={styles.titleContainer}>
				<h1>Meus Projetos</h1>
				<LinkButton to="/newproject" text="Criar novo projeto" />
			</div>
			{message && <Message msg={message} type="success" />}
			<Container id="teste" customClass="start">
				{project.length > 0 &&
					project.map((projects) => (
						<ProjectCard
							name={projects.name}
							budget={projects.budget}
							key={projects._id}
							id={projects._id}
							handleRemove={removeProject}
						/>
					))}
				{!removeLoading && <Loading />}
				{removeLoading && project.length === 0 && (
					<p>Não há projetos cadastrados =( </p>
				)}
			</Container>
		</div>
	)
}

export default Project