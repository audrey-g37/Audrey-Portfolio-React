import React, { useState } from 'react';
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
			<Header handlePageChange={setPageView} textKey={pageViewText} />
			{pageViews[pageViewText]}
			<Footer handlePageChange={setPageView} />
		</>
	);
};

export default MainView;
