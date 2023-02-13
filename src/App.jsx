import './App.css'
import React, { Component } from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from "./componets/pages/Home"
import NewProject from "./componets/pages/NewProject"
import Project from "./componets/pages/Project"
import Projects from "./componets/pages/Projects"
import Container from "./componets/layout/Container"
import Navbar from "./componets/layout/Navbar"
import Footer from "./componets/layout/Footer"
export default function App() {
	return (
		<div>
			<Navbar />
			<Container customClass="minHeight">
				<Routes>
					<Route exact path="/" element={<Home />} />
					<Route path="/project" element={<Project />} />
					<Route path="/newproject" element={<NewProject />} />
					<Route path="/project/:id" element={<Projects />} />
				</Routes>
			</Container>
			<Footer />
		</div>
	)
}
