import { Alert, Button } from 'react-bootstrap';
import { XCircleFill } from 'react-bootstrap-icons';

const AlertMessage = ({ variant, message = '', dismissible, show, onClose }) => {
	return (
		<Alert show={show} variant={variant}>
			{dismissible && (
				<Button
					style={{ position: 'absolute', right: -10, top: -10, fontSize: '1rem' }}
					onClick={onClose}
					variant='outline-*'
				>
					<XCircleFill />
				</Button>
			)}
			{message}
		</Alert>
	);
};

export default AlertMessage;
