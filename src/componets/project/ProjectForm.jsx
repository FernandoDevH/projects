import React from "react";
import { useState, useEffect } from 'react'

import Input from '../form/Input'
import Select from '../form/Select'
import SubmitButton from '../form/SubmitButton'

import styles from './ProjectForm.module.css'

function ProjectForm({ handleSubmit, btnText, projectData }) {

 const [project, setProject] = useState(projectData || {})
  

  const submit = (e) => {
    e.preventDefault()
    handleSubmit(project)
  }
  function handleChange(e) {
    setProject({ ...project, [e.target.name]: e.target.value })

  }

  return (
    <form onSubmit={submit} className={styles.form}>
      <Input
        type="text"
        text="Nome do projeto"
				maxlength="20"      
				name="name"
        placeholder="Insira o nome do projeto..."
        handleOnChange={handleChange}
        value={project.name ? project.name : ''}
      />
      <Input
        type="number"
        text="Orçamento do projeto"
        name="budget"
        placeholder="Insira o orçamento total..."
        step="0.01"
        min="2000"
        handleOnChange={handleChange}
        value={project.budget ? project.budget : 'não informado'}

      />
      <SubmitButton text={btnText} />
    </form>
  )
}

export default ProjectForm