import React from 'react';
import App from '../App';

describe('App', () => {
	test('loads without error', () => {
		let element = <App/>;

		expect(element).toBeTruthy();
	});	
});