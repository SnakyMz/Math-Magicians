import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import Navbar from '../components/Navbar';
import Home from '../components/Home';
import Calculator from '../components/Calculator';
import Quotes from '../components/Quotes';

describe('Testing Rendering', () => {
  it('Should render Navbar', () => {
    const nav = render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>,
    );
    expect(nav).toMatchSnapshot();
  });

  it('Should render Home page', () => {
    const home = render(<Home />);
    expect(home).toMatchSnapshot();
  });

  it('Should render Calculator page', () => {
    const calcy = render(<Calculator />);
    expect(calcy).toMatchSnapshot();
  });

  it('Should render Quotes page', () => {
    const quot = render(<Quotes />);
    expect(quot).toMatchSnapshot();
  });
});
