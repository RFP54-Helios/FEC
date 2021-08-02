import React from 'react';
import { cleanup, render, fireEvent, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

import { ProductContext } from '../../../App.jsx';
import StyleSelector from './StyleSelector.jsx';

describe('Style Selector', () => {
  afterEach(cleanup);

  const product = {
    styles: [
      {
        name: 'Black',
        photos: [{ thumbnail_url: 'img' }],
      },
    ],
  };
  const setProduct = jest.fn();

  it('Should render the style collection', () => {
    const { getByLabelText } = render(
      <ProductContext.Provider value={[product, setProduct]}>
        <StyleSelector currentStyle={product.styles[0]} />
      </ProductContext.Provider>
    );

    expect(getByLabelText(/styleCollectionThumbnails/i)).toBeInTheDocument();
  });
});
