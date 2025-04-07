import { PrismaClient, difficulty, cuisineType, mealType, dietaryRestrictions, cookingMethod } from '@prisma/client';
import * as bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  // Create fresh test users
  const passwordHash = await bcrypt.hash('password123', 10);
  
  const user1 = await prisma.user.create({
    data: {
      username: 'chefmaria',
      password: passwordHash,
      firstname: 'Maria',
      lastname: 'Oliveira',
      email: 'maria@cooking.com',
      role: 'admin',
      isactive: 'active',
      UserPreferences: {
        create: {
          visualtheme: 'Light',
          language: 'English'
        }
      }
    }
  });

  const user2 = await prisma.user.create({
    data: {
      username: 'foodlover',
      password: passwordHash,
      firstname: 'Carlos',
      lastname: 'Santos',
      email: 'carlos@foodie.com',
      role: 'user',
      isactive: 'active',
      phone: '+351123456789',
      job: 'Food Blogger'
    }
  });

  console.log(`Created fresh users: ${user1.firstname} and ${user2.firstname}`);

  // Create recipes with their ingredients using nested writes
  await prisma.recipe.create({
    data: {
      title: "Mom's Classic Lasagna",
      description: "A delicious layered pasta dish with rich meat sauce and creamy cheese.",
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
      image: "/images/home/recipes/lasagna.jpg",
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
      userid: user1.id,
      Ingredients: {
        create: [
          { ingredient: "1 pound ground beef" },
          { ingredient: "1 onion, chopped" },
          { ingredient: "2 garlic cloves, minced" },
          { ingredient: "1 can (15 oz) tomato sauce" },
          { ingredient: "1 can (15 oz) crushed tomatoes" },
          { ingredient: "2 tablespoons Italian seasoning" },
          { ingredient: "9 lasagna noodles" },
          { ingredient: "16 oz ricotta cheese" },
          { ingredient: "2 cups shredded mozzarella" },
          { ingredient: "1/2 cup grated parmesan cheese" }
        ]
      }
    }
  });

  await prisma.recipe.create({
    data: {
      title: "Vegetarian Stir-Fry",
      description: "A quick and healthy vegetable stir-fry with tofu and a savory sauce.",
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
      image: "/images/home/recipes/stirfry.jpg",
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
      userid: user2.id,
      Ingredients: {
        create: [
          { ingredient: "14 oz extra-firm tofu, cubed" },
          { ingredient: "2 tbsp vegetable oil" },
          { ingredient: "1 bell pepper, sliced" },
          { ingredient: "1 carrot, julienned" },
          { ingredient: "1 cup broccoli florets" },
          { ingredient: "2 cloves garlic, minced" },
          { ingredient: "1 tbsp ginger, minced" },
          { ingredient: "3 tbsp soy sauce" },
          { ingredient: "1 tbsp rice vinegar" },
          { ingredient: "1 tsp sesame oil" },
          { ingredient: "2 green onions, sliced" }
        ]
      }
    }
  });

  await prisma.recipe.create({
    data: {
      title: "Chocolate Chip Cookies",
      description: "Classic homemade chocolate chip cookies with a soft center and crispy edges.",
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
      image: "/images/home/recipes/cookies.jpg",
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
      userid: user1.id,
      Ingredients: {
        create: [
          { ingredient: "1 cup butter, softened" },
          { ingredient: "1 cup white sugar" },
          { ingredient: "1 cup packed brown sugar" },
          { ingredient: "2 eggs" },
          { ingredient: "2 teaspoons vanilla extract" },
          { ingredient: "3 cups all-purpose flour" },
          { ingredient: "1 teaspoon baking soda" },
          { ingredient: "2 teaspoons hot water" },
          { ingredient: "1/2 teaspoon salt" },
          { ingredient: "2 cups semisweet chocolate chips" }
        ]
      }
    }
  });

  await prisma.recipe.create({
    data: {
      title: "Guacamole",
      description: "Fresh homemade guacamole with ripe avocados, lime, and cilantro.",
      instructions: [
        "Mash avocados in a medium bowl.",
        "Stir in lime juice and salt.",
        "Mix in onion, cilantro, tomatoes, and garlic.",
        "Add cayenne pepper if desired.",
        "Refrigerate for 1 hour before serving to blend flavors."
      ],
      cooktime: 10,
      difficulty: difficulty.Easy,
      image: "/images/home/recipes/guacamole.jpg",
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
      userid: user2.id,
      Ingredients: {
        create: [
          { ingredient: "3 ripe avocados" },
          { ingredient: "1 lime, juiced" },
          { ingredient: "1/2 teaspoon salt" },
          { ingredient: "1/2 cup diced onion" },
          { ingredient: "3 tablespoons chopped fresh cilantro" },
          { ingredient: "2 roma tomatoes, diced" },
          { ingredient: "1 teaspoon minced garlic" },
          { ingredient: "1 pinch ground cayenne pepper (optional)" }
        ]
      }
    }
  });

  await prisma.recipe.create({
    data: {
      title: "Tofu Scramble",
      description: "A protein-packed vegan breakfast alternative to scrambled eggs.",
      instructions: [
        "Drain and press tofu to remove excess water.",
        "Heat olive oil in a skillet over medium heat.",
        "Add chopped onion and cook until translucent.",
        "Crumble tofu into the pan and add turmeric for color.",
        "Cook for 5-7 minutes, stirring occasionally.",
        "Season with salt and pepper to taste."
      ],
      cooktime: 15,
      difficulty: difficulty.Easy,
      image: "/images/tofu-scramble.jpg",
      rating: 4.3,
      season: "All",
      categorytype: "Breakfast",
      cuisinetype: cuisineType.American,
      mealtype: mealType.Breakfast,
      dietaryrestrictions: [dietaryRestrictions.Vegan, dietaryRestrictions.DairyFree],
      numcalories: 180,
      cookingmethod: cookingMethod.Frying,
      occasions: ["Everyday Breakfast", "Brunch"],
      servings: 2,
      userid: user1.id,
      Ingredients: {
        create: [
          { ingredient: "14 oz extra-firm tofu, cubed" },
          { ingredient: "1 tbsp olive oil" },
          { ingredient: "1/4 cup chopped onion" },
          { ingredient: "1/2 tsp turmeric" },
          { ingredient: "1/4 tsp black pepper" },
          { ingredient: "1/2 tsp salt" }
        ]
      }
    }
  });

  await prisma.recipe.create({
    data: {
      title: "Ham & Eggs Breakfast",
      description: "A classic protein-rich breakfast combination.",
      instructions: [
        "Heat a non-stick skillet over medium heat.",
        "Cook ham slices for 2 minutes on each side until lightly browned.",
        "In the same pan, crack eggs and cook to your preference.",
        "Season with salt and pepper.",
        "Serve ham with eggs on the side."
      ],
      cooktime: 10,
      difficulty: difficulty.Easy,
      image: "/images/ham-eggs.jpg",
      rating: 4.6,
      season: "All",
      categorytype: "Breakfast",
      cuisinetype: cuisineType.American,
      mealtype: mealType.Breakfast,
      dietaryrestrictions: [],
      numcalories: 320,
      cookingmethod: cookingMethod.Frying,
      occasions: ["Weekend Breakfast"],
      servings: 1,
      userid: user2.id,
      Ingredients: {
        create: [
          { ingredient: "2 eggs" },
          { ingredient: "3 slices of ham" },
          { ingredient: "Salt and pepper" },
          { ingredient: "1 tsp butter" }
        ]
      }
    }
  });

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