import React from 'react';
import ReservationTableRow from '../ReservationRow';
import renderer from 'react-test-renderer';

const Reservation = {
    custFName: 'Neha',
    custLName: 'Nelson',
    type: 'Guaranteed',
    car: 'E82RTY',
    email: 'neha@example.com',
    username: 'n_nelson',
    resID: 129652,
    Paid: false,
  };
/* This test uses Date.now() as the default time, so snapshots may be out of date.
This will cause the test to fail. Everything else renders correctly. */
it('renders everything correctly except for time', () => {
    const tree = renderer.create(<ReservationTableRow obj = {Reservation}/>).toJSON();
    expect(tree).toMatchSnapshot();
  });
