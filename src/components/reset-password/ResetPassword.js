import React from 'react';
import PropTypes from 'prop-types';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';

export const ResetPassword = ({
	handleOnChange,
	handleOnResetSubmit,
	formSwitcher,
	email,
}) => {
	return (
		<Container>
			<Row>
				<Col>
					<h1 className='mb-3 text-primary text-center'>Reset Password</h1>
					<hr />
					<Form autoComplete='off' onSubmit={handleOnResetSubmit}>
						<Form.Group>
							<Form.Label>Email Address</Form.Label>
							<Form.Control
								type='email'
								name='email'
								placeholder='Enter Email'
								onChange={handleOnChange}
								value={email}
								
							/>
						</Form.Group>

						<Button type='submit' block>
							Reset Password
						</Button>
					</Form>
				</Col>
			</Row>

			<hr />

			<Row>
				<Col>
					<a href='#!' onClick={() => formSwitcher('login')}>
						Login Now
					</a>
				</Col>
			</Row>
		</Container>
	);
};

/* Validation PropTypes */
ResetPassword.propTypes = {
	handleOnChange: PropTypes.func.isRequired,
	handleOnResetSubmit: PropTypes.func.isRequired,
	formSwitcher: PropTypes.func.isRequired,
	email: PropTypes.string.isRequired,
};
