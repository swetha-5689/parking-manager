import React from 'react';
import Statistics from "../Statistics";
import DailyGraph from "../components/DailyGraph";
import WeeklyGraph from "../components/WeeklyGraph";
import YearlyGraph from "../components/YearlyGraph";
import { render, fireEvent, waitFor, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect';

test('renders DailyGraph', () => {
    const { getByText } = render(<Statistics />);
    const Daily = getByText(/Daily/);
    expect(Daily).toBeInTheDocument();
  });