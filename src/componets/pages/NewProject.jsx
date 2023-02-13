import React, { Component } from "react";
import { useNavigate,useLocation } from 'react-router-dom'

import ProjectForm from '../project/ProjectForm'

import style from './NewProject.module.css'

import Message from "../layout/Message"

function NewProject() {
let message = ''
	if (location.state) {
		message = location.state.message
	}
  const history = useNavigate()

  function createPost(project) {

    //initialize costs and services
    project.costs = 0
    project.services = []
    fetch("https://primeiraapirestful.devfernando.repl.co/project", {
      method: "POST",
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(project),
    }).then((resp) => resp.json())
      .then((data) => {
        // REDIRECT
        history('/project', {state: {message: 'Projeto criado com sucesso!'} })
      })
      .catch(err => console.log(err))
  }

  return (
    <div className={style.newprojectContainer}>
			{message && <Message msg={message} type="success" />}
      <h1>Criar Projeto</h1>
      <p>Crie seu projeto para adicionar os serviços</p>
      <ProjectForm
        handleSubmit={createPost}
        btnText="Criar Projeto" />
    </div>
  )
}

export default NewProject