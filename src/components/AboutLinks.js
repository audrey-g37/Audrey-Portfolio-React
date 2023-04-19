import React from 'react';
import { Button, Nav, NavLink, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { Github, Linkedin, Mailbox2 } from 'react-bootstrap-icons';
import '../styles/footer.css';

const AboutLinks = ({ handlePageChange, useIcon = false }) => {
	const linkLabels = [
		{
			text: `Github`,
			tooltipText: 'Former Employment',
			icon: <Github />,
			url: 'https://github.com/fmc-audrey'
		},
		{
			text: `Github`,
			tooltipText: 'Personal',
			icon: <Github />,
			url: 'https://github.com/audrey-g37'
		},
		{
			text: `audrey.gillies@gmail.com`,
			tooltipText: 'Contact Me',
			icon: <Mailbox2 />,
			onClick: () => handlePageChange('Contact')
		},
		{
			text: `LinkedIn`,
			tooltipText: 'My LinkedIn',
			icon: <Linkedin />,
			url: 'https://www.linkedin.com/in/audreygillies37/'
		}
	];

	const MenuOptions = () =>
		linkLabels.map((item) => {
			const { text, tooltipText = '', icon, url, onClick } = item;
			return (
				<OverlayTrigger
					key={`${text}-${tooltipText}`}
					placement={'top'}
					overlay={<Tooltip>{tooltipText}</Tooltip>}
				>
					{url ? (
						<NavLink target='_blank' rel='noreferrer' href={url}>
							{useIcon ? icon : text}
						</NavLink>
					) : (
						<Button variant='link' onClick={onClick}>
							{useIcon ? icon : text}
						</Button>
					)}
				</OverlayTrigger>
			);
		});

	return (
		<Nav onSelect={handlePageChange}>
			<MenuOptions />
		</Nav>
	);
};

export default AboutLinks;
