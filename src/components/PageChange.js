import React, { useState } from 'react';
import Navigation from './Navigation';
import Header from './Header';
import Footer from './Footer';
import About from '../pages/About';
import Project from '../pages/Project';
// import Contact from "../pages/Contact";
import Row from 'react-bootstrap/Row';

export default function PortfolioChange() {
	const [textKey, setTextKey] = useState('About');

	const handlePageChange = (k) => {
		console.log({ k });
		setTextKey(k);
	};

	const renderPage = () => (textKey === 'Project' ? <Project /> : <About />);

	return (
		<>
			<Row id='header-nav' className=' d-flex justify-content-between'>
				<Header />
				<Navigation
					textKey={textKey}
					handlePageChange={(keyText) => handlePageChange(keyText)}
				/>
			</Row>
			{renderPage()}
			<Footer />
		</>
	);
}
