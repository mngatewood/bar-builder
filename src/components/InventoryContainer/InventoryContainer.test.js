import React from 'react';
import { shallow } from 'enzyme';
import { InventoryContainer, mapStateToProps, mapDispatchToProps } from './InventoryContainer';

describe("Inventory Container", () => {

  it.skip('matches the snapshot', () => {
    const wrapper = shallow(<InventoryContainer />);
    expect(wrapper).toMatchSnapshot();
  });

});