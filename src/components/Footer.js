import React from 'react';
import { Button, Nav, NavLink } from 'react-bootstrap';
import '../styles/footer.css';

const Footer = ({ handlePageChange }) => {
	return (
		<Nav onSelect={handlePageChange} id='footer'>
			<NavLink href='https://github.com/fmc-audrey' target='_blank' rel='noreferrer'>
				Github <span>(former employment)</span>
			</NavLink>

			<NavLink href='https://github.com/audrey-g37' target='_blank' rel='noreferrer'>
				Github <span>(personal)</span>
			</NavLink>

			<Button variant='link' onClick={() => handlePageChange('Contact')}>
				audrey.gillies@gmail.com
			</Button>

			<NavLink
				href='https://www.linkedin.com/in/audreygillies37/'
				target='_blank'
				rel='noreferrer'
			>
				LinkedIn
			</NavLink>
		</Nav>
	);
};

export default Footer;
