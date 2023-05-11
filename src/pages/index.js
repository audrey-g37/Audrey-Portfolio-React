import React, { useState } from 'react';
import Header from '../components/Header';
import About from './About';
import Contact from './Contact';
import Project from './Project';
import AboutLinks from '../components/AboutLinks';
import { linkLabels } from '../utils';

const MainView = () => {
	const [pageViewText, setPageViewText] = useState('Projects');
	const pageViews = {
		Projects: (
			<>
				<Project />
				<About />
			</>
		),
		Contact: <Contact />
	};

	const setPageView = (textKey) => pageViews[textKey] && setPageViewText(textKey);

	// editing the onClick function for the email address to set the active key in the nav bar to 'contact'
	linkLabels.find((label) => label.text.includes('gmail')).onClick = () => setPageView('Contact');

	return (
		<>
			<Header handlePageChange={setPageView} activeKey={pageViewText} />
			{pageViews[pageViewText]}
			<div id='footer'>
				<AboutLinks linkLabels={linkLabels} handlePageChange={setPageView} />
			</div>
		</>
	);
};

export default MainView;
