import React from 'react';
import {cleanup, render, fireEvent, act} from '@testing-library/react';
import '@testing-library/jest-dom';

import { ProductContext } from "../../../App.jsx";
import DescriptionText from './DescriptionText.jsx';
import Features from './Features.jsx';


describe('Context: Static Data', () => {
  const product = {
    currentProduct: {
      "name":"Morning Joggers",
      "slogan":"Make yourself a morning person","description":"Whether you're a morning person or not.  Whether you're gym bound or not.  Everyone looks good in joggers.",
      "category":"Pants",
      "default_price":"40.00",
      "features":[
        {"feature":"Fabric","value":"100% Cotton"},{"feature":"Cut","value":"Skinny"}
      ]
    }
  }
  const setProduct = jest.fn();

  describe('Slogan and Description', () => {
    afterEach(cleanup);

    it('Should render the correct slogan for the default product', () => {

      const { getByText } = render(
        <ProductContext.Provider value={[product, setProduct]}>
          <DescriptionText />
        </ProductContext.Provider>
      );

      expect(getByText(/Make yourself a morning person/i)).toBeInTheDocument()
    })

    it('Should render the correct description for the default product', () => {
      const { getByText } = render(
        <ProductContext.Provider value={[product, setProduct]}>
          <DescriptionText />
        </ProductContext.Provider>
      );

      expect(getByText(/Whether you're a morning person/i)).toBeInTheDocument()
    })
  })

  describe('Features', () => {
    it('Should render the correct feature keys for the default product', () => {
      const { getByText } = render(
        <ProductContext.Provider value={[product, setProduct]}>
          <Features />
        </ProductContext.Provider>
      );

      expect(getByText(/Fabric/i)).toBeInTheDocument();
      expect(getByText(/Cut/i)).toBeInTheDocument();
    })

    it('Should render the correct feature values for the default product', () => {
      const { getByText } = render(
        <ProductContext.Provider value={[product, setProduct]}>
          <Features />
        </ProductContext.Provider>
      );

      expect(getByText(/100% Cotton/i)).toBeInTheDocument();
      expect(getByText(/Skinny/i)).toBeInTheDocument();
    })
  })
})