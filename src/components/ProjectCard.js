import React from 'react';
import { Card, NavLink, Tooltip, OverlayTrigger } from 'react-bootstrap';
import { Github } from 'react-bootstrap-icons';

const ProjectCard = ({ projectObj = {} }) => {
	const { title, githubParams, image, description, details, demoLink, video, demoAccount } =
		projectObj;
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
				<Card.Title className='sansita'>{title}</Card.Title>
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
				<Card.Subtitle className='git'>
					<Github width={'1.5rem'} height={'1.5rem'} />
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
		<Card>
			<Card.Img variant={'top'} src={image} />
			<Card.Body>
				{linkToDemo}
				<Card.Text>{description}</Card.Text>
				{details && (
					<>
						<hr />
						<Card.Text>
							{details.map((item) => (
								<li>{item}</li>
							))}
						</Card.Text>
					</>
				)}
				{demoAccount && (
					<>
						<hr /> {demoCredentials}
					</>
				)}
				<hr />
				{linkToGithub}
			</Card.Body>
		</Card>
	);
};

export default ProjectCard;
