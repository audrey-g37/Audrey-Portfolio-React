import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Col from 'react-bootstrap/Col';

const Navigation = ({ handlePageChange, textKey }) => {
	return (
		<Col>
			<Nav id='page-nav-btns' variant='pills' activeKey={textKey} onSelect={handlePageChange}>
				<Nav.Item>
					<Nav.Link id='nav-links' eventKey='About'>
						About Me
					</Nav.Link>
				</Nav.Item>
				<Nav.Item>
					<Nav.Link id='nav-links' eventKey='Project'>
						Portfolio
					</Nav.Link>
				</Nav.Item>
				{/* <Nav.Item>
					<Nav.Link id='nav-links' eventKey='Contact'>
						Contact
					</Nav.Link>
				</Nav.Item> */}
				<Nav.Item>
					<Nav.Link
						id='nav-links'
						href='AudreyGillies_Resume2023.pdf'
						eventKey='Resume'
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
