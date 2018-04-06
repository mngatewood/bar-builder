const urlRoot = "https://www.thecocktaildb.com/api/json/v1/1/";

export const getAlcoholicRecipes = async () => {
  const urlQuery = "filter.php?a=Alcoholic";
  const url = `${urlRoot}${urlQuery}`;
  try {
    const response = await fetch(url);
    const recipes = await response.json();
    return recipes.drinks;
  } catch (error) {
    throw Error("Error retrieving recipes");
  }
};



// export const getMovies = async () => {
//   const urlRoot = "https://api.themoviedb.org/3/movie/now_playing?";
//   const urlKey = `api_key=${apiKey}`;
//   const urlQuery = "&language=en-US&page=1";
//   const url = `${urlRoot}${urlKey}${urlQuery}`;

//   try {
//     const response = await fetch(url);
//     const movies = await response.json();
//     return movies.results;
//   } catch (error) {
//     throw new Error("Error getting movies");
//   }
// };
