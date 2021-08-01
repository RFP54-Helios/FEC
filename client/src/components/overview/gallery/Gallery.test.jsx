import React from 'react';
import { cleanup, render, fireEvent, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

import Gallery from './Gallery.jsx';

describe('Gallery', () => {
  afterEach(cleanup);

  const currentStyle = {
    photos: [1, 2, 3, 4]
  }

  it('Should render the arrow container', () => {
    const { getByLabelText } = render(<Gallery currentStyle={currentStyle}/>)

    expect(getByLabelText(/img_nav/i)).toBeInTheDocument();
  })

  /* TO-DO:
    - Expansion
    - Zoom
  */
})