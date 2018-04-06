import React from 'react';
import App from './App';
import { shallow } from 'enzyme';

describe('App', () => {

  it('matches the snapshot', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  });

  it('calls getRecipes with the correct params on componentDidMount ', () => {
    wrapper.instance().componentDidMount();
    expect(getMovies).toHaveBeenCalled();

  });

  it('updates state with recipes', () => {

  });

  it('updates state on error', () => {

  });

  it('calls dispatch function when using mapDispatchToProps', () => {
    
  })

});
