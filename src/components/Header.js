import React from 'react';
import '../styles/header.css';
import { Row } from 'react-bootstrap';
import Navigation from './Navigation';

const Header = ({ handlePageChange }) => {
	return (
		<Row id='header-nav'>
			<h1>Audrey Gillies</h1>
			<Navigation handlePageChange={handlePageChange} />
		</Row>
	);
};

export default Header;
