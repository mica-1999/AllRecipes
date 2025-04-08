// MAIN MENU 
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

// TABLE OF RESULTS 
export const listHeaders = [
  "Recipe Name",
  "Views",
  "Rating",
  "Date",
  "Actions"
]