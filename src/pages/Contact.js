import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import '../styles/contact.css';

const Contact = () => {
	return (
		<Form>
			<Form.Group controlId='name'>
				<Form.Label>Your Name:</Form.Label>
				<Form.Control type='text' name='name' placeholder='Your name' />
			</Form.Group>
			<Form.Group controlId='email'>
				<Form.Label>Your Email:</Form.Label>
				<Form.Control type='email' name='_replyto' placeholder='Your email' />
			</Form.Group>
			<Form.Group controlId='message'>
				<Form.Label>Include a Message:</Form.Label>
				<Form.Control
					as='textarea'
					name='message'
					placeholder='Enter message here...'
					rows={3}
				/>
			</Form.Group>
			<Button variant='outline-*' className='send-btn'>
				Send
			</Button>
		</Form>
	);
};
export default Contact;
