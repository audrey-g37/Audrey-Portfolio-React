import { ThemeProvider } from 'react-bootstrap';
import './App.css';
import MainView from './pages';

const App = () => {
	const breakpointsObj = {
		breakpoints: ['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs'],
		minBreakpoint: 'xxs'
	};
	return (
		<ThemeProvider
			breakpoints={breakpointsObj.breakpoints}
			minBreakpoint={breakpointsObj.minBreakpoint}
		>
			<MainView />
		</ThemeProvider>
	);
};

export default App;
