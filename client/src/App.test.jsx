import React from 'react';
import {cleanup, render, fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App.jsx';

describe('State', () => {
  afterEach(cleanup);

  it('Should render', () => {
    const { getByText } = render(<App />);
    expect(getByText(/FEC/i)).toBeInTheDocument();
  })

  it('Should update state when a related item is clicked', () => {
    const {getByText} = render(<App />)

    expect(getByText(/17069/)).toBeInTheDocument();
    fireEvent.click(getByText(/17069/));
    expect(getByText(/17070/)).toBeInTheDocument();
  })

  it('Should display the correct name of the current product', () => {
    const {getByText} = render(<App />);

    expect(getByText(/Morning Joggers/i)).toBeInTheDocument();
  })
})