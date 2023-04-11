import React from 'react';
import '../styles/header.css';
import Col from 'react-bootstrap/Col';
import { Button } from 'react-bootstrap';

const Header = ({ textKey = 'About-Me', handlePageChange }) => {
	return (
		<Col>
			<Button variant='outline-*' onClick={() => handlePageChange(textKey)}>
				<h1 id='my-name'>Audrey Gillies</h1>
			</Button>
		</Col>
	);
};

export default Header;
