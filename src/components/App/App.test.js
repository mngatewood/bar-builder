import React from 'react';
import App from './App';
import { shallow } from 'enzyme';

describe('App', () => {

  it('matches the snapshot', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  });

  it('calls getRecipes with the correct params on componentDidMount ', () => {

  });

  it('updates state with recipes', () => {

  });

});
