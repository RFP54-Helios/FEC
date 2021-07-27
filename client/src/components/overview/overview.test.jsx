import React from 'react';
import {cleanup, render} from '@testing-library/react';
import '@testing-library/jest-dom';
import Overview from './Overview.jsx';

describe('Gallery', () => {

  afterEach(cleanup);

  it('Should render', () => {
    const { getByText } = render(<Overview />);
    expect(getByText(/Gallery/i)).toBeInTheDocument();
  })
})

describe('Product Info', () => {

  afterEach(cleanup);

  it('Should render', () => {
    const { getByText } = render(<Overview />);
    expect(getByText(/Product Info/i)).toBeInTheDocument();
  })
})

describe('Style Selector', () => {

  afterEach(cleanup);

  it('Should render', () => {
    const { getByText } = render(<Overview />);
    expect(getByText(/Style Selector/i)).toBeInTheDocument();
  })
})

describe('Add to Cart', () => {

  afterEach(cleanup);

  it('Should render', () => {
    const { getByText } = render(<Overview />);
    expect(getByText(/Add to Cart/i)).toBeInTheDocument();
  })
})