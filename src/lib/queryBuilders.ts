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
  let query: any = {
    where: {}
  };

  // Parse and apply filters if they exist
  if (searchParams.has('cuisine') && searchParams.get('cuisine') !== '') {
    const cuisines = searchParams.get('cuisine')!.split(',');
    if (cuisines.length > 0) {
      query.where.cuisine = {
        in: cuisines,
      };
    }
  }

  if (searchParams.has('mealType') && searchParams.get('mealType') !== '') {
    const mealTypes = searchParams.get('mealType')!.split(',');
    if (mealTypes.length > 0) {
      query.where.mealType = {
        in: mealTypes,
      };
    }
  }

  if (searchParams.has('cookingTime') && searchParams.get('cookingTime') !== '') {
    const cookingTime = parseInt(searchParams.get('cookingTime')!);
    if (!isNaN(cookingTime)) {
      query.where.cookingTime = {
        lte: cookingTime,
      };
    }
  }

  if (searchParams.has('diet') && searchParams.get('diet') !== '') {
    const diets = searchParams.get('diet')!.split(',');
    if (diets.length > 0) {
      query.where.dietaryRestrictions = {
        hasSome: diets,
      };
    }
  }

  if (searchParams.has('difficulty') && searchParams.get('difficulty') !== '') {
    query.where.difficulty = searchParams.get('difficulty');
  }

  if (searchParams.has('caloriesMin') && searchParams.get('caloriesMin') !== '') {
    const minCalories = parseInt(searchParams.get('caloriesMin')!);
    if (!isNaN(minCalories)) {
      query.where.calories = {
        ...query.where.calories,
        gte: minCalories,
      };
    }
  }

  if (searchParams.has('caloriesMax') && searchParams.get('caloriesMax') !== '') {
    const maxCalories = parseInt(searchParams.get('caloriesMax')!);
    if (!isNaN(maxCalories)) {
      query.where.calories = {
        ...query.where.calories,
        lte: maxCalories,
      };
    }
  }

  if (searchParams.has('method') && searchParams.get('method') !== '') {
    const methods = searchParams.get('method')!.split(',');
    if (methods.length > 0) {
      query.where.cookingMethod = {
        hasSome: methods,
      };
    }
  }

  if (searchParams.has('occasion') && searchParams.get('occasion') !== '') {
    const occasions = searchParams.get('occasion')!.split(',');
    if (occasions.length > 0) {
      query.where.occasion = {
        in: occasions,
      };
    }
  }

  if (searchParams.has('season') && searchParams.get('season') !== '') {
    query.where.season = searchParams.get('season');
  }

  if (searchParams.has('ingredients') && searchParams.get('ingredients') !== '') {
    const ingredients = searchParams.get('ingredients')!.split(',');
    if (ingredients.length > 0) {
      query.where.ingredients = {
        hasEvery: ingredients,
      };
    }
  }

  // Add sorting if specified
  if (searchParams.has('sortBy')) {
    const sortField = searchParams.get('sortBy');
    const sortOrder = searchParams.has('sortOrder') ? searchParams.get('sortOrder') : 'asc';
    
    query.orderBy = {
      [sortField as string]: sortOrder
    };
  }

  return query;
}