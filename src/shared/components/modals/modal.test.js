import React from 'react';
import renderer from 'react-test-renderer';
import { default as Modal } from './modal'

describe('<Modal />', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<Modal src="SomethingUrl" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  })

})