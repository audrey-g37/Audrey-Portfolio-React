import React, { useState } from 'react';
import Navigation from './Navigation';
import Header from './Header';
import Footer from './Footer';
import About from '../pages/About';
import Project from '../pages/Project';
import Row from 'react-bootstrap/Row';

const PageChange = () => {
	const [pageViewText, setPageViewText] = useState('About');
	const pageViews = {
		Project: <Project />,
		About: <About />
	};

	const setPageView = (textKey) => pageViews[textKey] && setPageViewText(textKey);
	return (
		<>
			<Row id='header-nav' className=' d-flex justify-content-between'>
				<Header handlePageChange={setPageView} />
				<Navigation textKey={pageViewText} handlePageChange={setPageView} />
			</Row>
			{pageViews[pageViewText]}
			<Footer />
		</>
	);
};

export default PageChange;
