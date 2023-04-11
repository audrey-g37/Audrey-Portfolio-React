import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { projects } from '../utils/projectObj';
import '../styles/project.css';
import ProjectColumn from '../components/ProjectColumn';

const Project = () => {
	return (
		<section>
			<h1 className='page-todo'>Projects</h1>
			<Container fluid id='work'>
				<Row>
					{projects.map((projectObj) => (
						<ProjectColumn projectObj={projectObj} key={projectObj.title} />
					))}
				</Row>
			</Container>
		</section>
	);
};

export default Project;
