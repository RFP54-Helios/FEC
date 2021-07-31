import React, {useContext} from 'react';
import {cleanup, render, fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom';
import Overview from '../Overview.jsx';
import DescriptionText from './DescriptionText.jsx';
import { ProductContext } from '../../../App.jsx';

describe('Arrows', () => {
  afterEach(cleanup);

  it('Render the correct slogan', () => {
    const { findByText } = render(
      <Overview>
        <DescriptionText />
      </Overview>
    );
    expect(findByText(/Make youself a morning person/i)).toBeInTheDocument();
  })
})
