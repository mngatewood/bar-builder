import React from 'react';
import { getCategoryOptions } from '../getCategoryOptions'
import { shallow } from 'enzyme';

describe("getCategoryOptions", () => {

  it('matches the snapshot', () => {
    const wrapper = shallow(<getCategoryOptions />);
    expect(wrapper).toMatchSnapshot();
  });

});