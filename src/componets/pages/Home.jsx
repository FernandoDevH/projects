import React from "react";
import styles from './Home.module.css'
import savings from '../../img/savings.svg'
import LinkButton from '../layout/LinkButtom'
import Projects from './Projects'
function Home() {
  return (
    <section className={styles.homeContainer}>
      <h1>
        Seja bem vindo ao gerenciador de <span>Projetos</span>
      </h1>
      <p>Comece a gerenciar seus projetos agora mesmo!</p>
      <LinkButton to="/newproject" text="Criar Projeto" />
      <img src={savings} alt="Costs" />
    </section>
  )
}

export default Home