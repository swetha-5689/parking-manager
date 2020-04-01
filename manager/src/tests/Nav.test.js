import React from 'react';
import Nav from "../components/Nav";
import { render, fireEvent, waitFor, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect';

test('renders Nav Link Home', () => {
    const { getByText } = render(<Nav />);
    const linkElement = getByText(/Home/);
    expect(linkElement).toBeInTheDocument();
  });