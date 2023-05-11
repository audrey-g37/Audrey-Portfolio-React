import React from 'react';
import { Row, Col } from 'react-bootstrap';

// project imports
import '../styles/about.css';

const workSection = `Currently, I am working as a freelance developer.  One of the projects I'm working on is enhancing a company's Shopify website.  I previously worked full-time for a consulting firm and engaged with clients weekly to develop multiple web applications. I am most experienced with the MERN stack, and I am very self-driven to learn new technology when the need presents itself.  I have read documentation on multiple occasions to be able to develop with various technologies.`;

const skills = [
	`react.js`,
	`javascript`,
	`HTML`,
	`CSS`,
	`MongoDB`,
	`mongoose`,
	`node.js`,
	`AWS Cognito`,
	`AWS S3 Buckets`,
	`AWS Lambda`,
	`AWS Amplify`,
	`Shopify/Liquid files`,
	`Twilio`,
	`SendGrid`
];

const futureGoalsSection = `Always eager to overcome a challenge, I strive to learn and apply new methods to increase the efficiency of my code. One of my goals includes becoming a lead developer as I gain more experience in the industry. As a former teacher, I have the skills necessary to excel in this role, including using patience to explain how and why certain methods would be preferred.`;

const motivationSection = `I enjoy communicating with clients to help them get the functionality they want, while keeping in mind the needs of the user(s). I like to consider the perspective of all potential users: from my not-so-tech-savvy grandparents to school-age children. I am always considering what adjustments could enhance and simply user experience.`;

const About = () => {
	return (
		<Row id='about-me'>
			<Col>
				<Row>
					{skills.map((skill) => (
						<Col xs={2} style={{ display: 'inline', whiteSpace: 'nowrap' }}>
							{skill}
						</Col>
					))}
				</Row>
				<hr />
				<Row>{workSection}</Row>
				<hr />
				<Row>{futureGoalsSection}</Row>
				<hr />
				<Row>{motivationSection}</Row>
			</Col>
		</Row>
	);
};

export default About;
