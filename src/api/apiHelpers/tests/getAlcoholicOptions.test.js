import React from 'react';
import { getAlcoholicOptions } from '../getAlcoholicOptions'; 
import { shallow } from 'enzyme';

describe("getAlcoholicOptions", () => {

  it('matches the snapshot', () => {
    const wrapper = shallow(<getAlcoholicOptions />);
    expect(wrapper).toMatchSnapshot();
  });

});