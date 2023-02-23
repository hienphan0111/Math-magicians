import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import Home from './Home';
import Layout from './Layout';
import Quote from './Quote';
import Calculator from 'components/Calculator';

describe('Calculator component Snapshot testing suite', () => {
  it('Matches Home DOM Snapshot', () => {
    const component = renderer.create(<Home />);
    expect(component.toJSON()).toMatchSnapshot();
  });

  it('Matches Layout DOM Snapshot', () => {
    const component = renderer.create(
    <MemoryRouter>
      <Calculator />
    </MemoryRouter>
    );
    expect(component.toJSON()).toMatchSnapshot();
  });

  it('Matches Layout DOM Snapshot', () => {
    const component = renderer.create(
    <MemoryRouter>
      <Layout />
    </MemoryRouter>
    );
    expect(component.toJSON()).toMatchSnapshot();
  });

  it('Matches Quote DOM Snapshot', () => {
    const component = renderer.create(<Quote />);
    expect(component.toJSON()).toMatchSnapshot();
  });
});