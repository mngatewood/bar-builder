import React from 'react';
import { shallow } from 'enzyme';
import { InventoryContainer, mapStateToProps } from './InventoryContainer';
import * as mock from '../../mockData/mockData';

describe("Inventory Container", () => {

  it('matches the snapshot', () => {
    const ingredients = mock.sortedIngredientOptions;
    const inventory = mock.mockInventory;
    const wrapper = shallow(
      <InventoryContainer
        ingredients={ingredients}
        inventory={inventory}
       />);
    expect(wrapper).toMatchSnapshot();
  });

  it('maps to the store', () => {
    const mockStore = {
      ingredients: mock.sortedIngredientOptions,
      inventory: mock.mockInventory
    };
    const mapped = mapStateToProps(mockStore);
    expect(mapped).toEqual(mockStore);
  });

});