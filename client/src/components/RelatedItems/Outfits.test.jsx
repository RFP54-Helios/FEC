import React from 'react';
import {cleanup, render} from '@testing-library/react';
import '@testing-library/jest-dom';
import Outfits from './Outfits.jsx';

describe('Outfits', () => {

  afterEach(cleanup);

  it('should render with expected text', () => {
    const { getByText } = render(<Outfits />);
    expect(getByText(/RELATED ITEMS/i)).toBeInTheDocument();
    expect(getByText(/YOUR OUTFITS/i)).toBeInTheDocument();
  });

});
