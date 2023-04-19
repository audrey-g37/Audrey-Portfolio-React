import React from 'react';
import { Col, Row } from 'react-bootstrap';

// project imports
import Navigation from './Navigation';
import AboutLinks from './AboutLinks';
import { linkLabels } from '../utils';
import '../styles/header.css';

const Header = ({ handlePageChange }) => {
	return (
		<Row id='header-nav'>
			<Col>
				<h1>Audrey Gillies</h1>
			</Col>
			<Col xs={3} md={4}>
				<div id='icons'>
					<AboutLinks
						linkLabels={linkLabels.filter((label) => !label.text.includes('gmail'))}
						useIcon={true}
						handlePageChange={handlePageChange}
					/>
				</div>
			</Col>
			<Navigation handlePageChange={handlePageChange} />
		</Row>
	);
};

export default Header;
