import React from 'react';
import { Nav } from 'react-bootstrap';

const Navigation = ({ activeKey, handlePageChange, navLabels }) => {
	return (
		<Nav
			as={'ul'}
			defaultActiveKey={'Projects'}
			onSelect={handlePageChange}
			activeKey={activeKey}
		>
			{navLabels
				.filter((label) => !label.menuOnly)
				.map((label, index) => (
					<Nav.Item key={index} className='nav-links'>
						<Nav.Link
							eventKey={label.eventKey}
							href={label.href || ''}
							target={label.href ? '_blank' : ''}
						>
							{label.text}
						</Nav.Link>
					</Nav.Item>
				))}
		</Nav>
	);
};

export default Navigation;
