import * as React from 'react';
import { render } from '@testing-library/react';
import { mount } from 'enzyme';
import App from '../App';
import '@testing-library/jest-dom/extend-expect';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
  const newApp = mount(<App />);
  expect(newApp).toMatchSnapshot();
});
