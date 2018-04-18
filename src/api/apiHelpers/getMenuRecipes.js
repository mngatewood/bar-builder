import { getRecipes } from '../../api/apiCalls/getRecipes';
import { filterMenuRecipes } from '../apiHelpers/filterMenuRecipes';
import { sortMenuRecipes } from '../apiHelpers/sortMenuRecipes';
import { getUniqueMenuRecipes } from '../apiHelpers/getUniqueMenuRecipes';

export const getMenuRecipes = async (inventory, ingredients) => {
  let matchingMenuRecipes = [];
  for (let index = 0; index < inventory.length; index++) {
    const recipes = await getRecipes('filter', 'i', inventory[index]);
    const filteredMenuRecipes = 
      await filterMenuRecipes(inventory, ingredients, recipes);
    matchingMenuRecipes = [...matchingMenuRecipes, ...filteredMenuRecipes];
  }
  const sortedMenuRecipes = await matchingMenuRecipes.sort(sortMenuRecipes);
  const uniqueMenuRecipes = await getUniqueMenuRecipes(sortedMenuRecipes);
  return uniqueMenuRecipes;  
};