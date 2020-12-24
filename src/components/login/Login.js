import React from 'react';
import PropTypes from 'prop-types';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';

export const Login = ({
	handleOnChange,
	handleOnSubmit,
	formSwitcher,
	email,
	password,
}) => {
	return (
		<Container>
			<Row>
				<Col>
					<h1 className='mb-3 text-primary text-center'>Client Login</h1>
					<hr />
					<Form autoComplete='off' onSubmit={handleOnSubmit}>
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
						<Form.Group>
							<Form.Label>Password</Form.Label>
							<Form.Control
								type='password'
								name='password'
								placeholder='Enter Password'
								onChange={handleOnChange}
								value={password}
							/>
						</Form.Group>
						<Button type='submit' block>
							Login
						</Button>
					</Form>
				</Col>
			</Row>

			<hr />

			<Row>
				<Col>
					<a href='#!' onClick={() => formSwitcher('reset')}>
						Forgot Password?
					</a>
				</Col>
			</Row>
		</Container>
	);
};

/* Validation PropTypes */
Login.propTypes = {
	handleOnChange: PropTypes.func.isRequired,
	handleOnSubmit: PropTypes.func.isRequired,
	formSwitcher: PropTypes.func.isRequired,
	email: PropTypes.string.isRequired,
	password: PropTypes.string.isRequired,
};
