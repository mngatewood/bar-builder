import React from 'react';
import { shallow } from 'enzyme';
import { MenuContainer, mapStateToProps } from './MenuContainer';
import * as mock from '../../mockData/mockData';

describe("Menu Container", () => {

  it('matches the snapshot', () => {
    const menu = mock.mockSortedMenuRecipesArray;
    const wrapper = shallow(
      <MenuContainer 
        menu={menu}
      />);
    expect(wrapper).toMatchSnapshot();
  });

  it('maps to the store', () => {
    const mockStore = {
      menu: mock.mockSortedMenuRecipesArray
    };
    const mapped = mapStateToProps(mockStore);
    expect(mapped).toEqual(mockStore);
  });

});