import { FormGroup, FormLabel, FormControl } from 'react-bootstrap';

const TextInput = ({ inputObj }) => {
	return (
		<FormGroup>
			<FormLabel>{inputObj.label}</FormLabel>
			<FormControl {...inputObj} />
			<FormControl.Feedback type={inputObj.isInvalid ? 'invalid' : 'valid'}>
				{inputObj.errormessage}
			</FormControl.Feedback>
		</FormGroup>
	);
};

export default TextInput;
