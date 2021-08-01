import React from 'react';
import { cleanup, render, fireEvent, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

import Thumbnails from './Thumbnails.jsx';

describe('Gallery Thumbnails', () => {
  afterEach(cleanup);

  it('Should render the thumbnail container', () => {
    const { getByLabelText } = render(<Thumbnails />)

    expect(getByLabelText(/imageGalleryThumbnails/i)).toBeInTheDocument();
  })

})