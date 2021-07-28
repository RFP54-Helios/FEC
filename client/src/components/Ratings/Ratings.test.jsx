import React from 'react';
import {cleanup, render} from '@testing-library/react';
import '@testing-library/jest-dom';
import Ratings from './Ratings.jsx';

describe('Ratings', () => {

  afterEach(cleanup);

  it('should render', () => {
    const { getByText } = render(<Ratings />);
    expect(getByText(/Ratings & Reviews/i)).toBeInTheDocument();
  });

});
