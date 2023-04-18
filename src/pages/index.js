import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import About from './About';
import Contact from './Contact';
import Project from './Project';

const MainView = () => {
	const [pageViewText, setPageViewText] = useState('About-Me');
	const pageViews = {
		'About-Me': (
			<>
				<About />
				<Project />
			</>
		),
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
