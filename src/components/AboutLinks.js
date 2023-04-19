import React from 'react';
import { Button, Nav, NavLink, OverlayTrigger, Tooltip } from 'react-bootstrap';
import '../styles/footer.css';

const AboutLinks = ({ handlePageChange, linkLabels = [], useIcon = false }) => {
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
						<Button variant='text' onClick={onClick}>
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
