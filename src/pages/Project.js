import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

// project imports
import { projects } from '../utils';
import ProjectCard from '../components/ProjectCard';
import '../styles/project.css';

const Project = () => {
	return (
		<Col id='project'>
			<Container>
				<Row>
					{projects.map((projectObj) => (
						<Col xs={12} md={6} lg={3} key={projectObj.title}>
							<ProjectCard projectObj={projectObj} />
						</Col>
					))}
				</Row>
			</Container>
		</Col>
	);
};

export default Project;
