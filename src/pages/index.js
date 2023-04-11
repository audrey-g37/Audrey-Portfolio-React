import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import Header from '../components/Header';
import Footer from '../components/Footer';
import About from './About';
import Project from './Project';
import Row from 'react-bootstrap/Row';
import Contact from './Contact';

const MainView = () => {
	const [pageViewText, setPageViewText] = useState('About-Me');
	const pageViews = {
		'Projects': <Project />,
		'About-Me': <About />,
		'Contact': <Contact />
	};

	const setPageView = (textKey) => pageViews[textKey] && setPageViewText(textKey);
	return (
		<>
			<Row id='header-nav' className=' d-flex justify-content-between'>
				<Header handlePageChange={setPageView} />
				<Navigation textKey={pageViewText} handlePageChange={setPageView} />
			</Row>
			<h1 className='page-todo'>{pageViewText.replace('-', ' ')}</h1>
			{pageViews[pageViewText]}
			<Footer />
		</>
	);
};

export default MainView;
