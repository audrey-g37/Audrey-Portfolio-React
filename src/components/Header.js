import React from 'react';
import { Col, Row } from 'react-bootstrap';

// project imports
import Navigation from './Navigation';
import AboutLinks from './AboutLinks';
import { linkLabels } from '../utils';
import Self from '../images/Self.png';
import '../styles/header.css';

const Header = ({ activeKey, handlePageChange }) => {
	return (
		<section id='header'>
			<Row id='main-info'>
				<Col id='image' md={1} lg={2}>
					<img alt='Audrey' src={Self} />
				</Col>
				<Col xs={9} md={8} lg={7}>
					<h1>Audrey Gillies</h1>
				</Col>
				<Col xs={3} md={4} lg={3}>
					<div id='icons'>
						<AboutLinks
							linkLabels={linkLabels.filter((label) => !label.text.includes('gmail'))}
							useIcon={true}
							handlePageChange={handlePageChange}
						/>
					</div>
				</Col>
			</Row>
			<Row id='nav'>
				<Navigation handlePageChange={handlePageChange} activeKey={activeKey} />
			</Row>
		</section>
	);
};

export default Header;
