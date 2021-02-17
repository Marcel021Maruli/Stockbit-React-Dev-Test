import React from 'react';
import Search from './search';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer
    .create(<Search placeholder="Something" />)
    .toJSON();
  expect(tree).toMatchSnapshot();
})