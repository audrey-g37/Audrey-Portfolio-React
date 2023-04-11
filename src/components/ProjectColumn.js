import React from 'react';
import { Col, Card, NavLink, Tooltip, OverlayTrigger } from 'react-bootstrap';
import { Github } from 'react-bootstrap-icons';

const ProjectColumn = ({ projectObj = {} }) => {
	const { title, githubParams, image, description, demoLink, video, demoAccount } = projectObj;
	const linkToDemo = (
		<NavLink href={demoLink} target='_blank' className='is-link'>
			<OverlayTrigger
				placement='top-start'
				overlay={
					<Tooltip id={`demo-link-${title.replace(' ', '-')}`}>{`Open ${
						video ? 'Video' : 'Live App'
					}`}</Tooltip>
				}
			>
				<Card.Title>{title}</Card.Title>
			</OverlayTrigger>
		</NavLink>
	);
	const linkToGithub = (
		<NavLink
			href={`https://github.com/audrey-g37/${githubParams}`}
			target='_blank'
			rel='noreferrer'
			className='is-link'
		>
			<OverlayTrigger
				placement='top-start'
				overlay={<Tooltip id={`github-link-${githubParams}`}>Github</Tooltip>}
			>
				<Card.Subtitle>
					<Github width={'1.5rem'} height={'1.5rem'} />
					<span className='git'>View Code</span>
				</Card.Subtitle>
			</OverlayTrigger>
		</NavLink>
	);
	const demoCredentials = (
		<>
			<h6>Demo Account Credentials:</h6>
			Username: <span>{demoAccount?.userName}</span>
			<br />
			Password: <span>{demoAccount?.password}</span>
		</>
	);
	return (
		<Col>
			<Card>
				<Card.Img variant={'top'} src={image} />
				<Card.Body>
					{linkToDemo}
					{demoAccount && demoCredentials}
					<Card.Text>
						<span style={{ fontWeight: 600 }}>Description: </span>
						{description}
					</Card.Text>
					{linkToGithub}
				</Card.Body>
			</Card>
		</Col>
	);
};

export default ProjectColumn;
