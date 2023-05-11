import { Github, Linkedin, Mailbox2 } from 'react-bootstrap-icons';

// project imports
import PasswordGenImg from '../images/password-generator-screenshot.png';
import TeamGenImg from '../images/team-generator-screenshot.png';
import EmployeeDemo from '../images/Employee-Tracker-Demo.gif';
import READMEDemo from '../images/README-Generator-Demo.gif';
import GripImg from '../images/grip-screenshot.png';

export const projects = [
	{
		title: 'GRIP Vacation Planner',
		githubParams: 'vacation-planning-app',
		image: GripImg,
		description: `A vacation planning app where users can create a group trip and keep track of tasks to complete and budget.`,
		demoLink: `https://grip-your-trip.herokuapp.com/`,
		video: false,
		demoAccount: {
			userName: 'testuser',
			password: 'testing123'
		}
	},
	{
		title: 'Password Generator',
		githubParams: 'Password-Generator-HW',
		image: PasswordGenImg,
		description: `Generate a random password after answering prompts about criteria, such as password length and types of characters to include.`,
		demoLink: `https://audrey-g37.github.io/Password-Generator-HW/`,
		video: false
	},
	{
		title: 'Employee Generator',
		githubParams: 'Employee-Tracker-HW',
		image: EmployeeDemo,
		description: `A command-line application where a user can add and edit employees. The user can store their salaries, their 'manager,' their position title, etc.`,
		demoLink: `https://drive.google.com/file/d/1ikTNi7w4STm0b088V5Ld3QYqatrizPhM/view?usp=sharing`,
		video: true
	},
	{
		title: 'README Generator',
		githubParams: 'Professional-README-Generator-HW',
		image: READMEDemo,
		description: `A command-line application where a user enters information for a README file, including information to generate a link to their github profile and email address (email validation in place).  If the user runs the program again, they are given the choice to overwrite the existing file or save a new one.`,
		demoLink: `https://drive.google.com/file/d/1PDIw1hy_ub4lpTmuAAEO2o2aG2mEW_TW/view?usp=sharing`,
		video: true
	},
	{
		title: 'Team Profile Generator',
		githubParams: 'Team-Profile-Generator-HW',
		image: TeamGenImg,
		description: `A command-line application where the user can select the employee's position and then can type in characteristics, like an office number, email address, etc. The employee's characteristics are displayed on an employee card. Cards are rendered, for each employee created, to an html that loads in a browser.`,
		demoLink: `https://drive.google.com/file/d/1Bd5n92cvEu-H3gyQSlRp_-Z1NQ3utA_p/view?usp=sharing`,
		video: true
	}
];

export const linkLabels = [
	{
		text: `Github`,
		tooltipText: 'Former Employment',
		icon: <Github />,
		url: 'https://github.com/fmc-audrey'
	},
	{
		text: `Github`,
		tooltipText: 'Personal',
		icon: <Github />,
		url: 'https://github.com/audrey-g37'
	},
	{
		text: `audrey.gillies@gmail.com`,
		tooltipText: 'Contact Me',
		icon: <Mailbox2 />,
		onClick: () => {}
	},
	{
		text: `LinkedIn`,
		tooltipText: 'My LinkedIn',
		icon: <Linkedin />,
		url: 'https://www.linkedin.com/in/audreygillies37/'
	}
];
