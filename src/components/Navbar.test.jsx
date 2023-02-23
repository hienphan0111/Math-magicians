import { render, screen } from '@testing-library/react';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import Navbar from './Navbar';

describe('Should match route', () => {

    it('should match home route', () => {
      const route = '/home'
      render(
        <MemoryRouter initialEntries={[route]}>
          <Navbar />
        </MemoryRouter>
      );
      const home = screen.getByText('Home');
      expect(home).toHaveTextContent('Home');
    });

    it('should match calculator route', () => {
      const route = '/calculator'
      render(
        <MemoryRouter initialEntries={[route]}>
          <Navbar />
        </MemoryRouter>
      );
      const calculator = screen.getByText('Calculator');
      expect(calculator).toHaveTextContent('Calculator');
    });

    it('should match quote route', () => {
      const route = '/quote'
      render(
        <MemoryRouter initialEntries={[route]}>
          <Navbar />
        </MemoryRouter>
      );
      const quote = screen.getByText('Quote');
      expect(quote).toHaveTextContent('Quote');
    });
});