import React from 'react';
import '../styles/header.css';
import Col from 'react-bootstrap/Col';
import { Button } from 'react-bootstrap';

const Header = ({ handlePageChange }) => {
	return (
		<Col>
			<Button variant='outline-*' onClick={() => handlePageChange('About')}>
				<h1 id='my-name'>Audrey Gillies</h1>
			</Button>
		</Col>
	);
};

export default Header;
