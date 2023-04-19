import React from 'react';
import { Nav } from 'react-bootstrap';

const Navigation = ({ handlePageChange }) => {
	return (
		<Nav as={'ul'} defaultActiveKey={'About-Me'} onSelect={handlePageChange}>
			<Nav.Item className='nav-links'>
				<Nav.Link eventKey={'About-Me'}>About Me</Nav.Link>
			</Nav.Item>
			<Nav.Item className='nav-links'>
				<Nav.Link eventKey={'Contact'}>Contact</Nav.Link>
			</Nav.Item>
			<Nav.Item className='nav-links'>
				<Nav.Link href='AudreyGillies_Resume_2023.pdf' eventKey='resume' target='_blank'>
					Résumé
				</Nav.Link>
			</Nav.Item>
		</Nav>
	);
};

export default Navigation;
