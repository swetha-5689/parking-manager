import React from 'react';
import Statistics from "../Statistics";

import { render, fireEvent, waitFor, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect';
/* Checks DOM for DailyGraph as that is default */
test('renders DailyGraph', () => {
    const { getByText } = render(<Statistics />);
    const Daily = getByText(/Daily/);
    expect(Daily).toBeInTheDocument();
  });