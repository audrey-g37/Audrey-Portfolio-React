import React from 'react';
import { Nav } from 'react-bootstrap';

const Navigation = ({ activeKey, handlePageChange }) => {
	return (
		<Nav
			as={'ul'}
			defaultActiveKey={'Projects'}
			onSelect={handlePageChange}
			activeKey={activeKey}
		>
			<Nav.Item className='nav-links'>
				<Nav.Link eventKey={'Projects'}>Work/Projects</Nav.Link>
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
