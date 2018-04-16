import Header from './Header';
import React from 'react';
import { Shallow } from 'enzyme';

describe.skip('Header', () => {

  it('matches the snapshot', () => {
    const wrapper = Shallow(<Header />);
    expect(wrapper).toMatchSnapshot();

  });

});