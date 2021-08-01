import React from 'react';
import { cleanup, render, fireEvent, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

import AddToCart from './AddToCart.jsx';

describe('Cart Form', () => {
  afterEach(cleanup);

  it('Should render a size selector', () => {
    const { getByDisplayValue } = render(<AddToCart />)

    expect(getByDisplayValue(/SELECT SIZE/i)).toBeInTheDocument();
  })

  it('Should render a quantity selector', () => {
    const { getByDisplayValue } = render(<AddToCart />)

    expect(getByDisplayValue(/1/i)).toBeInTheDocument();
  })

  it('Should render an add to bag button', () => {
    const { getByText }= render(<AddToCart />)

    expect(getByText(/ADD TO BAG/i)).toBeInTheDocument();
  })

  it('Should render a favorite button', () => {
    const { getByText }= render(<AddToCart />)

    expect(getByText(/STAR/i)).toBeInTheDocument();
  })

})