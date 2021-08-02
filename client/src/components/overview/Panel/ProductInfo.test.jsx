
import React from 'react';
import { cleanup, render, fireEvent, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

import { ProductContext } from '../../../App.jsx';
import ProductInfo from './ProductInfo.jsx';

describe('Context: Static Product Info', () => {
  afterEach(cleanup);

  const product = {
    currentProduct: {
      "name":"Morning Joggers",
      "slogan":"Make yourself a morning person","description":"Whether you're a morning person or not.  Whether you're gym bound or not.  Everyone looks good in joggers.",
      "category":"Pants",
      "default_price":"40.00",
      "features":[
        {"feature":"Fabric","value":"100% Cotton"},{"feature":"Cut","value":"Skinny"}
      ]
    },
    styles: [{ original_price: "40.00" }]
  }
  const setProduct = jest.fn();

  it('Should render the correct category for the default product', () => {

    const { getByText } = render(
      <ProductContext.Provider value={[product, setProduct]}>
        <ProductInfo currentStyle={product.styles[0]} />
      </ProductContext.Provider>
    );

    expect(getByText(/PANTS/i)).toBeInTheDocument()
  })

  it('Should render the correct name for the default product', () => {

    const { getByText } = render(
      <ProductContext.Provider value={[product, setProduct]}>
        <ProductInfo currentStyle={product.styles[0]} />
      </ProductContext.Provider>
    );

    expect(getByText(/Morning Joggers/i)).toBeInTheDocument()
  })

  it('Should render the correct price for the default style', () => {

    const { getByText } = render(
      <ProductContext.Provider value={[product, setProduct]}>
        <ProductInfo currentStyle={product.styles[0]} />
      </ProductContext.Provider>
    );

    expect(getByText(/40.00/i)).toBeInTheDocument()
  })
})
