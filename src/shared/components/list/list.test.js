import React from 'react';
import List from './list';
import { shallow, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

const mockList = { Title: "Batman", Poster: "someUrl", Year: "2021", Type: "movie", imdbID: 'some ID' };

describe("<List />", () => {
  const wrapper = shallow(<List {...mockList} />)

  it('should renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  })
})