import React from 'react';
import {cleanup, render, fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App.jsx';

describe('State', () => {
  afterEach(cleanup);

  it('Should render', () => {
    const { getByText } = render(<App />);
    expect(getByText(/Helios/i)).toBeInTheDocument();
  })

  it('Should display the correct name of the current product', () => {
    const {getByText} = render(<App />);

    expect(getByText(/Pumped Up Kicks/i)).toBeInTheDocument();
  })
})
