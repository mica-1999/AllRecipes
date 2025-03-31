// MAIN MENU 
export const mainFilters = ["Latest", "Popular", "Top Rated", "Seasonal","Random"]; 
export const seasonsData = [
  { 
    name: "Spring", 
    bgColor: "bg-green-100", 
    textColor: "text-green-800",
    hoverBg: "hover:bg-green-50",
    hoverText: "hover:text-green-700"
  },
  { 
    name: "Summer", 
    bgColor: "bg-amber-100", 
    textColor: "text-amber-800",
    hoverBg: "hover:bg-amber-50", 
    hoverText: "hover:text-amber-700"
  },
  { 
    name: "Fall", 
    bgColor: "bg-orange-100", 
    textColor: "text-orange-800",
    hoverBg: "hover:bg-orange-50",
    hoverText: "hover:text-orange-700"
  },
  { 
    name: "Winter", 
    bgColor: "bg-blue-100", 
    textColor: "text-blue-800",
    hoverBg: "hover:bg-blue-50",
    hoverText: "hover:text-blue-700"
  }
];

// MEAL OPTIONS
export const cuisineOptions = [
  "Italian", "Chinese", "Mexican", "Indian", "Japanese", 
  "Thai", "French", "Greek", "Spanish", "Mediterranean", 
  "American", "Korean", "Vietnamese", "Middle Eastern", "Brazilian"
];

// MEAL TYPES
export const mealTypes = ["Breakfast", "Lunch", "Dinner", "Brunch", "Snack", "Dessert"];

// DIETARY RESTRICTIONS
export const restrictions = [
  { id: "vegetarian", label: "Vegetarian" },
  { id: "vegan", label: "Vegan" },
  { id: "glutenFree", label: "Gluten-Free" },
  { id: "dairyFree", label: "Dairy-Free" },
  { id: "nutFree", label: "Nut-Free" },
  { id: "lowCarb", label: "Low Carb" },
];

// DIFFICULTY LEVELS
export const difficulties = [
  { value: "Easy", color: "bg-green-100 text-green-800 border-green-300" },
  { value: "Medium", color: "bg-yellow-100 text-yellow-800 border-yellow-300" },
  { value: "Hard", color: "bg-red-100 text-red-800 border-red-300" }
];

// COOKING METHODS
export const methods = [
  { name: "Baking", icon: "🍞" },
  { name: "Frying", icon: "🍳" },
  { name: "Grilling", icon: "🔥" },
  { name: "Steaming", icon: "♨️" },
  { name: "Boiling", icon: "🍲" },
  { name: "Roasting", icon: "🍗" },
  { name: "Sautéing", icon: "🥘" },
  { name: "Slow Cooking", icon: "⏱️" }
];

// OCCASIONS
export const occasions = [
  "Birthday", "Holiday", "Casual", "Date Night", 
  "Thanksgiving", "Christmas", "Wedding", "BBQ", 
  "Game Day", "Picnic", "Brunch", "Potluck"
];

// TABLE OF RESULTS 

export const listHeaders = [
  "Recipe Name",
  "Views",
  "Rating",
  "Actions"
]

// Sample data for filtered recipes
export const filteredRecipesData = [
  { 
      id: 1, 
      name: "Vegetable Curry", 
      category: "Main Course", 
      difficulty: "Medium", 
      image: "/images/home/trending/trending1.jpg", 
      views: 1245, 
      rating: 4.8, 
      dateAdded: "2024-04-15",
      description: "Spicy vegetable curry with coconut milk"
  },
  { 
      id: 2, 
      name: "Chocolate Brownies", 
      category: "Dessert", 
      difficulty: "Easy", 
      image: "/images/home/trending/trending2.jpg", 
      views: 3872, 
      rating: 4.9, 
      dateAdded: "2024-03-22",
      description: "Rich and fudgy chocolate brownies"
  },
  { 
      id: 3, 
      name: "Grilled Salmon", 
      category: "Seafood", 
      difficulty: "Medium", 
      image: "/images/home/trending/trending3.jpg", 
      views: 2143, 
      rating: 4.7, 
      dateAdded: "2024-02-18",
      description: "Lemon herb grilled salmon with asparagus"
  },
  { 
      id: 4, 
      name: "Avocado Toast", 
      category: "Breakfast", 
      difficulty: "Easy", 
      image: "/images/home/trending/trending4.jpg", 
      views: 5621, 
      rating: 4.5, 
      dateAdded: "2024-01-30",
      description: "Creamy avocado on toasted sourdough"
  },
  { 
      id: 5, 
      name: "Beef Wellington", 
      category: "Main Course", 
      difficulty: "Hard", 
      image: "/images/home/trending/trending5.jpg", 
      views: 982, 
      rating: 4.9, 
      dateAdded: "2024-01-05",
      description: "Classic beef wellington with mushroom duxelles"
  },
  { 
      id: 6, 
      name: "Spinach Salad", 
      category: "Salad", 
      difficulty: "Easy", 
      image: "/images/home/trending/trending6.jpg", 
      views: 1756, 
      rating: 4.4, 
      dateAdded: "2023-12-12",
      description: "Fresh spinach salad with strawberries and feta"
  },
];