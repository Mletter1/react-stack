import * as React from 'react';
import { render } from '@testing-library/react';
import { shallow } from 'enzyme';
import App from '../App';
import '@testing-library/jest-dom/extend-expect';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('app should match snapshot', () => {
  const newApp = shallow(<App />);
  expect(newApp).toMatchSnapshot();
});
