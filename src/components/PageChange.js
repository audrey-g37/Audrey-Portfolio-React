import React, { useState } from 'react';
import Navigation from './Navigation';
import Header from './Header';
import Footer from './Footer';
import About from '../pages/About';
import Project from '../pages/Project';
import Row from 'react-bootstrap/Row';

export default function PortfolioChange() {
	const [textKey, setTextKey] = useState('About');
	const pageViews = {
		Project: <Project />,
		About: <About />
	};

	return (
		<>
			<Row id='header-nav' className=' d-flex justify-content-between'>
				<Header />
				<Navigation textKey={textKey} handlePageChange={setTextKey} />
			</Row>
			{pageViews[textKey]}
			<Footer />
		</>
	);
}
