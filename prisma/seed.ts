import { PrismaClient, difficulty, cuisineType, mealType, dietaryRestrictions, cookingMethod } from '@prisma/client';
import * as bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  // Create test users
  const passwordHash = await bcrypt.hash('password123', 10);
  
  const user1 = await prisma.user.upsert({
    where: { email: 'mom@example.com' },
    update: {},
    create: {
      username: 'momchef',
      password: passwordHash,
      firstname: 'Maria',
      lastname: 'Silva',
      email: 'mom@example.com',
      role: 'admin',
      isactive: 'active',
    }
  });

  const user2 = await prisma.user.upsert({
    where: { email: 'test@example.com' },
    update: {},
    create: {
      username: 'testuser',
      password: passwordHash,
      firstname: 'John',
      lastname: 'Doe',
      email: 'test@example.com',
      role: 'user',
      isactive: 'active',
    }
  });

  console.log(`Created users: ${user1.firstname} and ${user2.firstname}`);

  // Recipe data
  const recipes = [
    {
      title: "Mom's Classic Lasagna",
      description: "A delicious layered pasta dish with rich meat sauce and creamy cheese.",
      ingredients: [
        "1 pound ground beef",
        "1 onion, chopped",
        "2 garlic cloves, minced",
        "1 can (15 oz) tomato sauce",
        "1 can (15 oz) crushed tomatoes",
        "2 tablespoons Italian seasoning",
        "9 lasagna noodles",
        "16 oz ricotta cheese",
        "2 cups shredded mozzarella",
        "1/2 cup grated parmesan cheese"
      ],
      instructions: [
        "Preheat oven to 375°F (190°C).",
        "Brown ground beef in a large skillet; drain fat.",
        "Add onion and garlic; cook until onion is translucent.",
        "Stir in tomato sauce, crushed tomatoes, and seasoning. Simmer for 15 minutes.",
        "Cook lasagna noodles according to package directions.",
        "In a 9x13 inch baking dish, layer meat sauce, noodles, ricotta, and mozzarella.",
        "Repeat layers twice more and top with parmesan.",
        "Cover with foil and bake for 25 minutes. Remove foil and bake 15 minutes more."
      ],
      cooktime: 60,
      difficulty: difficulty.Medium,
      image: "/images/recipes/lasagna.jpg",
      rating: 4.8,
      season: "All",
      categorytype: "Main Course",
      cuisinetype: cuisineType.Italian,
      mealtype: mealType.Dinner,
      dietaryrestrictions: [],
      numcalories: 650,
      cookingmethod: cookingMethod.Baking,
      occasions: ["Family Dinner", "Sunday Meal"],
      servings: 8,
      userid: user1.id
    },
    {
      title: "Vegetarian Stir-Fry",
      description: "A quick and healthy vegetable stir-fry with tofu and a savory sauce.",
      ingredients: [
        "14 oz extra-firm tofu, cubed",
        "2 tbsp vegetable oil",
        "1 bell pepper, sliced",
        "1 carrot, julienned",
        "1 cup broccoli florets",
        "2 cloves garlic, minced",
        "1 tbsp ginger, minced",
        "3 tbsp soy sauce",
        "1 tbsp rice vinegar",
        "1 tsp sesame oil",
        "2 green onions, sliced"
      ],
      instructions: [
        "Press tofu between paper towels to remove excess moisture.",
        "Heat oil in a large wok over high heat.",
        "Add tofu and cook until golden, about 5 minutes, then remove.",
        "Add vegetables, garlic, and ginger to wok; stir-fry for 3-5 minutes.",
        "Return tofu to wok. Add soy sauce, rice vinegar, and sesame oil.",
        "Cook for another 2 minutes until sauce coats everything.",
        "Garnish with green onions and serve over rice."
      ],
      cooktime: 20,
      difficulty: difficulty.Easy,
      image: "/images/recipes/stirfry.jpg",
      rating: 4.5,
      season: "All",
      categorytype: "Main Course",
      cuisinetype: cuisineType.Chinese,
      mealtype: mealType.Dinner,
      dietaryrestrictions: [dietaryRestrictions.Vegetarian],
      numcalories: 320,
      cookingmethod: cookingMethod.Frying,
      occasions: ["Weeknight Dinner", "Meal Prep"],
      servings: 4,
      userid: user2.id
    },
    {
      title: "Chocolate Chip Cookies",
      description: "Classic homemade chocolate chip cookies with a soft center and crispy edges.",
      ingredients: [
        "1 cup butter, softened",
        "1 cup white sugar",
        "1 cup packed brown sugar",
        "2 eggs",
        "2 teaspoons vanilla extract",
        "3 cups all-purpose flour",
        "1 teaspoon baking soda",
        "2 teaspoons hot water",
        "1/2 teaspoon salt",
        "2 cups semisweet chocolate chips"
      ],
      instructions: [
        "Preheat oven to 350°F (175°C).",
        "Cream together butter and sugars until smooth.",
        "Beat in eggs one at a time, then stir in vanilla.",
        "Dissolve baking soda in hot water and add to batter with salt.",
        "Stir in flour and chocolate chips.",
        "Drop by large spoonfuls onto ungreased pans.",
        "Bake for about 10 minutes or until edges are nicely browned."
      ],
      cooktime: 10,
      difficulty: difficulty.Easy,
      image: "/images/recipes/cookies.jpg",
      rating: 4.9,
      season: "All",
      categorytype: "Dessert",
      cuisinetype: cuisineType.American,
      mealtype: mealType.Dessert,
      dietaryrestrictions: [],
      numcalories: 150,
      cookingmethod: cookingMethod.Baking,
      occasions: ["Bake Sale", "After School Snack"],
      servings: 36,
      userid: user1.id
    },
    {
      title: "Guacamole",
      description: "Fresh homemade guacamole with ripe avocados, lime, and cilantro.",
      ingredients: [
        "3 ripe avocados",
        "1 lime, juiced",
        "1/2 teaspoon salt",
        "1/2 cup diced onion",
        "3 tablespoons chopped fresh cilantro",
        "2 roma tomatoes, diced",
        "1 teaspoon minced garlic",
        "1 pinch ground cayenne pepper (optional)"
      ],
      instructions: [
        "Mash avocados in a medium bowl.",
        "Stir in lime juice and salt.",
        "Mix in onion, cilantro, tomatoes, and garlic.",
        "Add cayenne pepper if desired.",
        "Refrigerate for 1 hour before serving to blend flavors."
      ],
      cooktime: 10,
      difficulty: difficulty.Easy,
      image: "/images/recipes/guacamole.jpg",
      rating: 4.7,
      season: "Summer",
      categorytype: "Appetizer",
      cuisinetype: cuisineType.Mexican,
      mealtype: mealType.Snack,
      dietaryrestrictions: [dietaryRestrictions.Vegan, dietaryRestrictions.GlutenFree, dietaryRestrictions.DairyFree],
      numcalories: 150,
      cookingmethod: null,
      occasions: ["Party", "Game Day"],
      servings: 4,
      userid: user2.id
    }
  ];

  // Create recipes
  for (const recipeData of recipes) {
    const recipe = await prisma.recipe.create({
      data: recipeData
    });
    console.log(`Created recipe: ${recipe.title}`);
  }

  console.log(`Database has been seeded successfully!`);
}

main()
  .catch((e) => {
    console.error("Error seeding database:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });