export interface FilterParams {
  cuisine?: string;
  mealType?: string;
  cookingTime?: string;
  diet?: string;
  difficulty?: string;
  caloriesMin?: string;
  caloriesMax?: string;
  method?: string;
  occasion?: string;
  season?: string;
  ingredients?: string;
  sortBy?: string;
  sortOrder?: string;
}

export function buildRecipeQuery(searchParams: URLSearchParams) {
  // Build dynamic query based on search params
  const query: any = {
    where: {}
  };

  // Parse and apply filters if they exist

  // Look for cuisine types, can be multiple
  // e.g. ?cuisine=Italian,Chinese
  if (searchParams.has('cuisine') && searchParams.get('cuisine') !== '') {
    const cuisines = searchParams.get('cuisine')!.split(',');
    if (cuisines.length > 0) {
      query.where.cuisinetype = {
        in: cuisines,
      };
    }
  }

  // Look for meal types, can be multiple
  // e.g. ?mealType=Breakfast,Lunch
  if (searchParams.has('mealType') && searchParams.get('mealType') !== '') {
    const mealTypes = searchParams.get('mealType')!.split(',');
    if (mealTypes.length > 0) {
      query.where.mealtype = {
        in: mealTypes,
      };
    }
  }

  // Look for cooking time, up to value input
  // e.g. ?cookingTime=30 shows all recipes with cooking time less than or equal to 30 minutes
  if (searchParams.has('cookingTime') && searchParams.get('cookingTime') !== '') {
    const cookingTime = parseInt(searchParams.get('cookingTime')!);
    if (!isNaN(cookingTime)) {
      query.where.cooktime = {
        lte: cookingTime,
      };
    }
  }

  // Look for dietary restrictions restrictives, can be multiple
  // e.g. ?diet=Vegetarian,GlutenFree returns all recipes that are vegetarian and gluten free
  if (searchParams.has('diet') && searchParams.get('diet') !== '') {
    const diets = searchParams.get('diet')!.split(',');
    if (diets.length > 0) {
      // Check exactMatchDiet parameter
      if (searchParams.has('exactMatchDiet') && searchParams.get('exactMatchDiet') === 'true') {
        // "AND" operation - all restrictions must match
        query.where.dietaryrestrictions = {
          hasEvery: diets,
        };
      } else {
        // "OR" operation - any restriction can match
        query.where.dietaryrestrictions = {
          hasSome: diets,
        };
      }
    }
  }

  // Look for difficulty level, single value
  // e.g. ?difficulty=Easy returns all recipes that are easy to make
  if (searchParams.has('difficulty') && searchParams.get('difficulty') !== '') {
    query.where.difficulty = searchParams.get('difficulty');
  }

  // Look for calories inside a range
  // e.g. ?caloriesMin=100&caloriesMax=500 returns all recipes with calories between 100 and 500
  if (searchParams.has('caloriesMin') && searchParams.get('caloriesMin') !== '') {
    const minCalories = parseInt(searchParams.get('caloriesMin')!);
    if (!isNaN(minCalories)) {
      query.where.numcalories = {
        ...query.where.numcalories,
        gte: minCalories,
      };
    }
  }
  if (searchParams.has('caloriesMax') && searchParams.get('caloriesMax') !== '') {
    const maxCalories = parseInt(searchParams.get('caloriesMax')!);
    if (!isNaN(maxCalories)) {
      query.where.numcalories = {
        ...query.where.numcalories,
        lte: maxCalories,
      };
    }
  }

  // Look for cooking methods, can be multiple
  // e.g. ?method=Grilling,Boiling returns all recipes that are grilled or boiled
  if (searchParams.has('method') && searchParams.get('method') !== '') {
    const methods = searchParams.get('method')!.split(',');
    if (methods.length > 0) {
      query.where.cookingmethod = {
        in: methods,
      };
    }
  }

  // Look for occasions, can be multiple
  // e.g. ?occasion=Birthday,Holiday returns all recipes that are suitable for birthdays or holidays
  if (searchParams.has('occasion') && searchParams.get('occasion') !== '') {
    const occasions = searchParams.get('occasion')!.split(',');
    if (occasions.length > 0) {
      // Check exactMatchOccasion parameter
      if (searchParams.has('exactMatchOccasion') && searchParams.get('exactMatchOccasion') === 'true') {
        // "AND" operation - all occasions must match
        query.where.occasions = {
          hasEvery: occasions,
        };
      } else {
        // "OR" operation - any occasion can match
        query.where.occasions = {
          hasSome: occasions,
        };
      }
    }
  }

  // Look for ingredients, can be multiple, restrictive search
  // e.g. ?ingredients=Chicken,Garlic returns all recipes that contain chicken and garlic
  // Note: This is a restrictive search, meaning all ingredients must be present in the recipe
  if (searchParams.has('ingredients') && searchParams.get('ingredients') !== '') {
    const ingredients = searchParams.get('ingredients')!
      .split(',')
      .map((ing) => ing.trim())
      .filter(Boolean);

    if (ingredients.length > 0) {
      // Check exactMatchIngredients parameter
      if (searchParams.has('exactMatchIngredients') && searchParams.get('exactMatchIngredients') === 'true') {
        // "AND" operation - all ingredients must match
        query.where = {
          ...query.where,
          AND: ingredients.map((ingredient) => ({
            Ingredients: {
              some: {
                ingredient: {
                  contains: ingredient,
                  mode: 'insensitive', // optional: makes search case-insensitive
                },
              },
            },
          })),
        };
      }
      else {
        // "OR" operation - any ingredient can match
        query.where = {
          ...query.where,
          Ingredients: {
            some: {
              OR: ingredients.map((ingredient) => ({
                ingredient: {
                  contains: ingredient,
                  mode: 'insensitive', // optional: makes search case-insensitive
                }
              }))
            }
          }
        }
      }
    }
  }

  // Look for seasons, single value
  // e.g. ?season=Summer returns all recipes that are suitable for summer or all seasons
  if (searchParams.has('season') && searchParams.get('season') !== '') {
    query.where.OR = [
      { season: searchParams.get('season') },
      { season: 'All' }
    ];
  }

  // Handle sorting parameters
  if (searchParams.has('sortBy') && searchParams.has('order')) {
    const sortBy = searchParams.get('sortBy');
    const order = searchParams.get('order');

    // Only apply sorting if valid values are provided
    if (sortBy && ['rating', 'viewcount'].includes(sortBy)) {
      query.orderBy = {
        [sortBy]: order === 'desc' ? 'desc' : 'asc'
      };
    }
  }


  // Handle date parameters

  return query;
}