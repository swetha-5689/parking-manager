import React from 'react';
import renderer from 'react-test-renderer';
import Reservations from '../Reservations';


  const ReservationsList = {
    custFName: "Neha",
    custLName: "Nelson",
    type: "Guaranteed",
    car: "E82RTY",
    email: "neha@example.com",
    username: "n_nelson",
    resID: 129652,
    Paid: false,
    startTime: Date("March 18, 2020 9:00 AM EST"),
    endTime: Date("March 18, 2020 12:00 PM EST"),
    reserveTime: Date("March 18, 2020 12:00 PM EST")
  };


it('renders correctly when there are no items', () => {
  const tree = renderer.create(<Reservations />).toJSON();
  expect(tree).toMatchSnapshot();
});
it('renders correctly when there is one item', () => {
    const tree = renderer.create(<Reservations data = {ReservationsList}/>).toJSON();
    expect(tree).toMatchSnapshot();
  });
