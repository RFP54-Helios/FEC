import React from 'react';
import {cleanup, render, fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App.jsx';

describe('State', () => {
  it('Should render', () => {
    const { getByText } = render(<App />);
    expect(getByText(/FEC/i)).toBeInTheDocument();
  })
})