import React, { useState } from 'react';
import { Col, Row, Dropdown } from 'react-bootstrap';

// project imports
import Navigation from './Navigation';
import AboutLinks from './AboutLinks';
import { linkLabels } from '../utils';
import Self from '../images/Self.png';
import '../styles/header.css';

const Header = ({ activeKey, handlePageChange, navLabels }) => {
	const [showMenu, setShowMenu] = useState({ button: false, list: false });
	const handleMenuSelect = (e) => {
		handlePageChange(e);
		window.scrollTo(0, 0);
	};

	function scrollFunction() {
		if (document.body.scrollTop > 225 || document.documentElement.scrollTop > 225) {
			setShowMenu({ ...showMenu, button: true });
		} else {
			setShowMenu({ ...showMenu, button: false, list: false });
		}
	}
	window.onscroll = function () {
		scrollFunction();
	};

	return (
		<>
			<section id='header'>
				<Row id='main-info'>
					<Col id='image' md={1} lg={2}>
						<img alt='Audrey' src={Self} />
					</Col>
					<Col xs={9} md={7}>
						<h1>Audrey Gillies</h1>
					</Col>
					<Col xs={1} md={5} lg={3}>
						<div id='icons'>
							<AboutLinks
								linkLabels={linkLabels.filter(
									(label) => !label.text.includes('gmail')
								)}
								useIcon={true}
								handlePageChange={handlePageChange}
							/>
						</div>
					</Col>
				</Row>
				<Row id='nav'>
					<Navigation
						handlePageChange={handlePageChange}
						activeKey={activeKey}
						navLabels={navLabels}
					/>
				</Row>
			</section>

			{showMenu.button && (
				<Dropdown align='end' id='header-menu' onSelect={(e) => handleMenuSelect(e)}>
					<Dropdown.Toggle>
						<span id='menu-title'>Menu</span>
					</Dropdown.Toggle>

					<Dropdown.Menu>
						{navLabels.map((label, index) => (
							<div key={index}>
								<Dropdown.Item
									eventKey={label.eventKey}
									href={label.href || ''}
									target={label.href ? '_blank' : ''}
								>
									{label.text}
								</Dropdown.Item>
								{index + 1 < navLabels.length && (
									<hr style={{ margin: '0.25em' }} />
								)}
							</div>
						))}
					</Dropdown.Menu>
				</Dropdown>
			)}
		</>
	);
};

export default Header;
