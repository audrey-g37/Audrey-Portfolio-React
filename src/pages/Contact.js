import React from 'react';
import { Row, Col, Card, Form, Button } from 'react-bootstrap';
import { Formik } from 'formik';
import * as Yup from 'yup';
import '../styles/contact.css';
import TextInput from '../components/inputs/TextInput';

const Contact = () => {
	const blankInfo = {
		firstName: '',
		lastName: '',
		email: '',
		message: ''
	};

	const validation = Yup.object().shape({
		firstName: Yup.string().trim().required('First name is required.'),
		lastName: Yup.string().trim().required('Last name is required.'),
		email: Yup.string().trim().email('Must be a valid email.').required('Email is required.'),
		message: Yup.string().trim()
	});

	const handleSubmit = (values) => {
		console.log({ values });
	};
	return (
		<Col xs={12} md={6} id='contact-form'>
			<Card>
				<Card.Title>Send a Message to Audrey</Card.Title>
				<Formik
					initialValues={blankInfo}
					validationSchema={validation}
					onSubmit={handleSubmit}
				>
					{({ handleSubmit, handleChange, handleBlur, values, touched, errors }) => {
						return (
							<Form noValidate onSubmit={handleSubmit}>
								<Row>
									<Col xs={12} md={6}>
										<TextInput
											inputObj={{
												label: 'First Name*',
												type: 'text',
												name: 'firstName',
												placeholder: 'Bob',
												value: values.firstName,
												onChange: handleChange,
												onBlur: handleBlur,
												isValid: Boolean(
													touched.firstName && !errors.firstName
												),
												isInvalid: Boolean(
													touched.firstName && errors.firstName
												),
												errormessage: errors.firstName
											}}
										/>
									</Col>
									<Col xs={12} md={6}>
										<TextInput
											inputObj={{
												label: 'Last Name*',
												type: 'text',
												name: 'lastName',
												placeholder: 'Smith',
												value: values.lastName,
												onChange: handleChange,
												onBlur: handleBlur,
												isValid: Boolean(
													touched.lastName && !errors.lastName
												),
												isInvalid: Boolean(
													touched.lastName && errors.lastName
												),
												errormessage: errors.lastName
											}}
										/>
									</Col>
								</Row>
								<Row>
									<Col>
										<TextInput
											inputObj={{
												label: 'Email*',
												type: 'email',
												name: 'email',
												placeholder: 'email@example.com',
												value: values.email,
												onChange: handleChange,
												onBlur: handleBlur,
												isValid: Boolean(touched.email && !errors.email),
												isInvalid: Boolean(touched.email && errors.email),
												errormessage: errors.email
											}}
										/>
									</Col>
								</Row>
								<Row>
									<Col>
										<TextInput
											inputObj={{
												label: 'Message',
												type: 'text',
												as: 'textarea',
												name: 'message',
												placeholder: 'Type here...',
												value: values.message,
												onChange: handleChange,
												onBlur: handleBlur
											}}
										/>
									</Col>
								</Row>
								<Row className='send-btn'>
									<Button type={'submit'}>Send</Button>
								</Row>
							</Form>
						);
					}}
				</Formik>
			</Card>
		</Col>
	);
};
export default Contact;
