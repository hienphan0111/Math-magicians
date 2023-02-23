import React from 'react';
import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import Calculator from './Calculator';
import * as cal from 'logic/calculate';

describe('Calculator component', () => {
  it('Matches DOM Snapshot', () => {
    const component = renderer.create(<Calculator />);
    expect(component.toJSON()).toMatchSnapshot();
  });

  it('should render AC button', () => {
    render(<Calculator />);
    const element = screen.getByRole('button', { name: /ac/i });
    expect(element).toBeInTheDocument();
  });

  it('should render call calculate method and display result on screen', () => {
    const spyCalculator = jest.spyOn(cal, "default").mockImplementation(() => ({ total: null, next: 22, operation: null}));
    render(<Calculator />);

    const buttonElement = screen.getByRole('button', {name: /2/i });
    userEvent.click(buttonElement);
    userEvent.click(buttonElement);
    expect(spyCalculator).toBeCalledTimes(2);
    const element = screen.getByText('22');
    expect(element).toBeInTheDocument();
  });
});

