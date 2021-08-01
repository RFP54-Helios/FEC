import React, {useContext} from 'react';
import {cleanup, render, fireEvent, act} from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks';
import '@testing-library/jest-dom';
import { getProduct, getStyles, getRatings } from '../../../helperFunctions.js';
import DescriptionText from './DescriptionText.jsx';
import { ProductContext } from "../../../App.jsx";

describe.only('Slogan', () => {
  afterEach(cleanup);

  const wrapper = (children) => {
    <ProductContext.Provider>
      {children}
    </ProductContext.Provider>
  }

  it('Should render the correct slogan', async () => {

    const { getByText } = render(<DescriptionText/>, wrapper);
    await waitForElementToBeRemoved(() => getByText(/Thinking of a slogan.../i))
    expect(getByText(/Make yourself a morning person/i)).toBeInTheDocument()
  })
})
