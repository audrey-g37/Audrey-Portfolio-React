import React from 'react';
import { Col, Nav } from 'react-bootstrap';

const Navigation = ({ textKey, handlePageChange }) => {
	return (
		<Col>
			<Nav id='page-nav-btns' variant='pills' activeKey={textKey} onSelect={handlePageChange}>
				<Nav.Item>
					<Nav.Link id='nav-links' eventKey='About-Me'>
						About Me
					</Nav.Link>
				</Nav.Item>
				<Nav.Item>
					<Nav.Link id='nav-links' eventKey='Projects'>
						Portfolio
					</Nav.Link>
				</Nav.Item>
				<Nav.Item>
					<Nav.Link id='nav-links' eventKey='Contact'>
						Contact
					</Nav.Link>
				</Nav.Item>
				<Nav.Item>
					<Nav.Link
						id='nav-links'
						href='AudreyGillies_Resume_2023.pdf'
						eventKey='resume'
						target='_blank'
					>
						Résumé
					</Nav.Link>
				</Nav.Item>
			</Nav>
		</Col>
	);
};

export default Navigation;
