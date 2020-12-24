import React, { useState } from 'react';
import { Jumbotron } from 'react-bootstrap';
import { Login } from '../../components/login/Login';
import { ResetPassword } from '../../components/reset-password/ResetPassword';
import './Entry.css';

export const Entry = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [formLoad, setFormLoad] = useState('login');

	const handleOnChange = (e) => {
		const { name, value } = e.target;
		switch (name) {
			case 'email':
				setEmail(value);
				break;

			case 'password':
				setPassword(value);
				break;

			default:
				break;
		}
		// console.log(name, value);
	};

	const handleOnSubmit = (e) => {
		e.preventDefault();

		if (!email || !password) {
			return alert('Fill Up All The Form!');
		}

		// Todo Call API To Submit The Form
		console.log(email, password);
	};

	const handleOnResetSubmit = (e) => {
		e.preventDefault();

		if (!email) {
			return alert('Please Enter The Email!');
		}

		// Todo Call API To Submit The Form
		console.log(email);
	};

	const formSwitcher = (formType) => {
		setFormLoad(formType);
	};

	return (
		<div className='entry-page'>
			<Jumbotron className='pb-4 pt-4 shadow-lg'>
				{formLoad === 'login' && (
					<Login
						handleOnChange={handleOnChange}
						handleOnSubmit={handleOnSubmit}
						formSwitcher={formSwitcher}
						email={email}
						password={password}
					/>
				)}

				{formLoad === 'reset' && (
					<ResetPassword
						handleOnChange={handleOnChange}
						handleOnResetSubmit={handleOnResetSubmit}
						formSwitcher={formSwitcher}
						email={email}
					/>
				)}
			</Jumbotron>
		</div>
	);
};
