import React, { useState } from 'react';
import Header from '../components/Header';
import About from './About';
import Contact from './Contact';
import Project from './Project';
import AboutLinks from '../components/AboutLinks';
import { linkLabels } from '../utils';

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

	linkLabels.find((label) => label.text.includes('gmail')).onClick = () => setPageView('Contact');

	const setPageView = (textKey) => pageViews[textKey] && setPageViewText(textKey);

	return (
		<>
			<Header handlePageChange={setPageView} textKey={pageViewText} />
			{pageViews[pageViewText]}
			<div id='footer'>
				<AboutLinks linkLabels={linkLabels} handlePageChange={setPageView} />
			</div>
		</>
	);
};

export default MainView;
