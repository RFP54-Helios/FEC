import React from 'react';
import { cleanup, render, fireEvent, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

import Gallery from './Gallery.jsx';
import Arrows from './Arrows.jsx';

describe('Arrows', () => {
  afterEach(cleanup);

  it('Should only render a right arrow on load', () => {
    const { getByLabelText, getAllByRole } = render(<Arrows imageIndex={0} />);

    expect(getByLabelText(/next/)).toBeInTheDocument();
    expect(getAllByRole(/button/)).toHaveLength(1);
  });

  it('Should render both arrows if not the first or last image', () => {
    const { getByLabelText, getAllByRole } = render(<Arrows imageIndex={1} />);

    expect(getByLabelText(/next/)).toBeInTheDocument();
    expect(getByLabelText(/previous/)).toBeInTheDocument();
    expect(getAllByRole(/button/)).toHaveLength(2);
  });

  it('Should only render a left arrow while viewing the last image', () => {
    const lastIndex = 5;
    const { getByLabelText, getAllByRole } = render(
      <Arrows imageIndex={5} lastIndex={5} />
    );

    expect(getByLabelText(/previous/)).toBeInTheDocument();
    expect(getAllByRole(/button/)).toHaveLength(1);
  });

  it('Should move to the next image when the right arrow is clicked', () => {
    var currentIndex = 2;
    const handleRightClick = () => {
      currentIndex++
    }

    const { rerender } = render(
      <Arrows
        imageIndex={currentIndex}
        lastIndex={3}
        handleRightClick={handleRightClick}/>
    );

    expect(screen.getAllByRole(/button/)).toHaveLength(2);

    userEvent.click(screen.getByLabelText(/next/));

    rerender(
      <Arrows
        imageIndex={currentIndex}
        lastIndex={3}
        handleRightArrowClick={handleRightClick}/>
    );

    expect(screen.getAllByRole(/button/)).toHaveLength(1);
  })

  it('Should move to the previous image when the left arrow is clicked', () => {
    var currentIndex = 1;
    const handleLeftClick = () => {
      currentIndex--
    }

    const { rerender } = render(
      <Arrows imageIndex={currentIndex} handleLeftClick={handleLeftClick}/>
    );

    expect(screen.getAllByRole(/button/)).toHaveLength(2);

    userEvent.click(screen.getByLabelText(/previous/));

    rerender(
      <Arrows imageIndex={currentIndex} handleLeftClick={handleLeftClick}/>
    );

    expect(screen.getAllByRole(/button/)).toHaveLength(1);
  })
});
