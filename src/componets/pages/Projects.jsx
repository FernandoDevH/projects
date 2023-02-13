import { React, useState, useEffect } from "react";
import { useParams } from 'react-router-dom'
import styles from './Projects.module.css'
import Loading from "../layout/Loading";
import axios from 'axios'
import Container from "../layout/Container";
import ProjectForm from "../project/ProjectForm"

function Projects() {

	const { id } = useParams()
	//console.log(id)
	const [projects, setProjects] = useState([])
	const [showProjectForm, setShowProjectForm] = useState(false)

	useEffect(() => {
		setTimeout(() => {
			axios.get('https://primeiraapirestful.devfernando.repl.co/project/' + id)
				.then((response) => {
					setProjects(response.data)
				})
				.catch((error) => console.log(error))
		}, 500)
	}, [id])

function editPost(projects){
	if(projects.budget < projects.cost) {
		//messagem
	}
/* 

FAZER ESSA PARTE DO CODIGO FUNCIONAR PARA ELIMINAR A SOLICITÇAO FETCH E MANTER SOMENTE O PADRAO AXIOS
axios.patch(`https://primeiraapirestful.devfernando.repl.co/project/${id}`)
	.then((data)=>{
		console.log(data.id)
				setProjects(data)
				setShowProjectForm(false)
	})

.catch(error => console.log(error)) */
	
	fetch(`https://primeiraapirestful.devfernando.repl.co/project/${id}`,{
		method:'PATCH',
		headers:{
			'Content-Type': 'application/json',
		},
		body:JSON.stringify(projects),
	})

			.then((resp) =>resp.json())
			.then((data)=>{
				setProjects(data)
				setShowProjectForm(false)
			})
			.catch(error => console.log(error)) 

	
	
}
	
	function toggleProjectForm() {
		setShowProjectForm(!showProjectForm)
	}


	return (
		<div className={styles.divmax}>
			{projects.name ? (
				<div className={styles.projects_details}>
					<Container customClass="Column">
						<div className={styles.details_container}>
							<h1>{projects.name}</h1>
							<button onClick={toggleProjectForm} className={styles.btn}> {!showProjectForm ? 'Editar Projeto' : 'Fechar'} </button>
							{!showProjectForm ? (
								<div className={styles.project_info}> 
									<p>
										<span>Total Orçamento:</span> {projects.budget}
									</p>
								</div>
						) : (
						<div className={styles.project_info}>
									<ProjectForm
										handleSubmit={editPost}
										btnText="Concluir edição"
										projectData={projects}
										/>
						</div>
				)}
			</div>
		</Container>
				</div> 
			) : (< Loading />)}
		</div>

	) 
}

export default Projects



