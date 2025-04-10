import { PrismaClient, difficulty, cuisineType, mealType, dietaryRestrictions, cookingMethod, occasion, seasons } from '@prisma/client';
import { randomUUID } from 'crypto';

const prisma = new PrismaClient();

async function main() {
    console.log('Starting seed...');

    // Define 20 recipes
    const recipes = [
        {
            title: "Classic Margherita Pizza",
            description: "A simple yet delicious Italian pizza with fresh tomatoes, mozzarella and basil.",
            instructions: [
                "Prepare the pizza dough and let it rise.",
                "Roll out the dough into a circle.",
                "Spread tomato sauce over the dough.",
                "Add slices of fresh mozzarella.",
                "Bake in a preheated oven at 475°F for 10-12 minutes.",
                "Garnish with fresh basil leaves before serving."
            ],
            ingredients: ["Pizza dough", "Tomato sauce", "Fresh mozzarella", "Fresh basil leaves", "Olive oil", "Salt"],
            cooktime: 25,
            difficulty: difficulty.Easy,
            image: "margherita_pizza.jpg",
            rating: 4.8,
            season: seasons.All,
            categorytype: "Main Course",
            cuisinetype: cuisineType.Italian,
            mealtype: mealType.Dinner,
            dietaryrestrictions: [dietaryRestrictions.Vegetarian],
            numcalories: 285,
            cookingmethod: cookingMethod.Baking,
            occasions: [occasion.Casual, occasion.GameDay],
            servings: 4,
            userid: 3
        },
        {
            title: "Chicken Teriyaki Stir-Fry",
            description: "A quick and flavorful Japanese inspired stir-fry with chicken and vegetables.",
            instructions: [
                "Cut chicken into bite-sized pieces.",
                "Mix soy sauce, mirin, sugar, and ginger to make teriyaki sauce.",
                "Heat oil in a wok over high heat.",
                "Stir-fry chicken until no longer pink.",
                "Add vegetables and cook until tender-crisp.",
                "Pour in teriyaki sauce and stir until thickened.",
                "Serve over steamed rice."
            ],
            ingredients: ["Chicken breast", "Bell peppers", "Broccoli", "Carrots", "Soy sauce", "Mirin", "Sugar", "Ginger", "Vegetable oil", "Rice"],
            cooktime: 30,
            difficulty: difficulty.Medium,
            image: "chicken_teriyaki.jpg",
            rating: 4.5,
            season: seasons.All,
            categorytype: "Main Course",
            cuisinetype: cuisineType.Japanese,
            mealtype: mealType.Dinner,
            dietaryrestrictions: [],
            numcalories: 420,
            cookingmethod: cookingMethod.Frying,
            occasions: [occasion.Casual],
            servings: 4,
            userid: 4
        },
        {
            title: "Vegetable Pad Thai",
            description: "A traditional Thai noodle dish that's vegetarian-friendly and full of flavor.",
            instructions: [
                "Soak rice noodles in hot water until soft.",
                "In a wok, heat oil and add garlic and tofu.",
                "Add beaten eggs and scramble.",
                "Add drained noodles and vegetables.",
                "Pour in sauce (tamarind, soy sauce, lime juice, brown sugar) and toss.",
                "Top with crushed peanuts, bean sprouts, and cilantro."
            ],
            ingredients: ["Rice noodles", "Tofu", "Eggs", "Bean sprouts", "Carrots", "Green onions", "Garlic", "Tamarind paste", "Soy sauce", "Lime juice", "Brown sugar", "Peanuts", "Cilantro"],
            cooktime: 35,
            difficulty: difficulty.Medium,
            image: "pad_thai.jpg",
            rating: 4.7,
            season: seasons.All,
            categorytype: "Main Course",
            cuisinetype: cuisineType.Thai,
            mealtype: mealType.Dinner,
            dietaryrestrictions: [dietaryRestrictions.Vegetarian],
            numcalories: 380,
            cookingmethod: cookingMethod.Frying,
            occasions: [occasion.Casual],
            servings: 3,
            userid: 5
        },
        {
            title: "Chocolate Chip Cookies",
            description: "Classic homemade chocolate chip cookies that are soft in the middle and crispy on the edges.",
            instructions: [
                "Preheat oven to 375°F.",
                "Cream butter and sugars until light and fluffy.",
                "Beat in eggs and vanilla.",
                "Mix in flour, baking soda, and salt.",
                "Fold in chocolate chips.",
                "Drop spoonfuls onto baking sheets.",
                "Bake for 9-11 minutes until golden brown."
            ],
            ingredients: ["Butter", "White sugar", "Brown sugar", "Eggs", "Vanilla extract", "All-purpose flour", "Baking soda", "Salt", "Chocolate chips"],
            cooktime: 20,
            difficulty: difficulty.Easy,
            image: "chocolate_chip_cookies.jpg",
            rating: 4.9,
            season: seasons.All,
            categorytype: "Dessert",
            cuisinetype: cuisineType.American,
            mealtype: mealType.Dessert,
            dietaryrestrictions: [dietaryRestrictions.Vegetarian],
            numcalories: 150,
            cookingmethod: cookingMethod.Baking,
            occasions: [occasion.Birthday, occasion.Holiday],
            servings: 24,
            userid: 6
        },
        {
            title: "Greek Salad",
            description: "A refreshing Mediterranean salad with crisp vegetables and feta cheese.",
            instructions: [
                "Chop cucumber, tomatoes, and red onion.",
                "Add Kalamata olives and cubed feta cheese.",
                "In a bowl, mix olive oil, red wine vinegar, oregano, salt, and pepper.",
                "Drizzle dressing over salad and toss.",
                "Serve chilled."
            ],
            ingredients: ["Cucumber", "Tomatoes", "Red onion", "Kalamata olives", "Feta cheese", "Olive oil", "Red wine vinegar", "Dried oregano", "Salt", "Pepper"],
            cooktime: 15,
            difficulty: difficulty.Easy,
            image: "greek_salad.jpg",
            rating: 4.6,
            season: seasons.Summer,
            categorytype: "Salad",
            cuisinetype: cuisineType.Greek,
            mealtype: mealType.Lunch,
            dietaryrestrictions: [dietaryRestrictions.Vegetarian, dietaryRestrictions.GlutenFree],
            numcalories: 220,
            cookingmethod: null,
            occasions: [occasion.Picnic, occasion.Casual],
            servings: 4,
            userid: 7
        },
        {
            title: "Beef Tacos",
            description: "Flavorful Mexican tacos with seasoned ground beef and all the fixings.",
            instructions: [
                "Brown ground beef in a skillet.",
                "Add taco seasoning and water, simmer until thickened.",
                "Warm taco shells in the oven.",
                "Fill shells with beef mixture.",
                "Top with lettuce, cheese, tomatoes, and sour cream."
            ],
            ingredients: ["Ground beef", "Taco seasoning", "Taco shells", "Lettuce", "Cheddar cheese", "Tomatoes", "Sour cream", "Salsa"],
            cooktime: 25,
            difficulty: difficulty.Easy,
            image: "beef_tacos.jpg",
            rating: 4.5,
            season: seasons.All,
            categorytype: "Main Course",
            cuisinetype: cuisineType.Mexican,
            mealtype: mealType.Dinner,
            dietaryrestrictions: [],
            numcalories: 350,
            cookingmethod: cookingMethod.Frying,
            occasions: [occasion.Casual, occasion.GameDay],
            servings: 4,
            userid: 8
        },
        {
            title: "Vegetable Biryani",
            description: "Aromatic Indian rice dish with mixed vegetables and fragrant spices.",
            instructions: [
                "Par-boil basmati rice with whole spices.",
                "Sauté onions until golden brown.",
                "Add ginger-garlic paste and mixed vegetables.",
                "Layer partially cooked rice over vegetables.",
                "Sprinkle saffron milk and fried onions on top.",
                "Cover and cook on low heat for 20 minutes.",
                "Fluff with a fork before serving."
            ],
            ingredients: ["Basmati rice", "Mixed vegetables", "Onions", "Ginger", "Garlic", "Turmeric", "Garam masala", "Cumin", "Coriander", "Saffron", "Mint leaves", "Ghee"],
            cooktime: 60,
            difficulty: difficulty.Hard,
            image: "veg_biryani.jpg",
            rating: 4.8,
            season: seasons.All,
            categorytype: "Main Course",
            cuisinetype: cuisineType.Indian,
            mealtype: mealType.Dinner,
            dietaryrestrictions: [dietaryRestrictions.Vegetarian],
            numcalories: 410,
            cookingmethod: cookingMethod.Boiling,
            occasions: [occasion.Holiday, occasion.Potluck],
            servings: 6,
            userid: 3
        },
        {
            title: "Caprese Salad",
            description: "A simple Italian salad with fresh tomatoes, mozzarella, and basil.",
            instructions: [
                "Slice tomatoes and mozzarella into rounds.",
                "Arrange tomato and mozzarella slices alternately on a plate.",
                "Tuck basil leaves between the slices.",
                "Drizzle with olive oil and balsamic glaze.",
                "Season with salt and pepper."
            ],
            ingredients: ["Tomatoes", "Fresh mozzarella", "Fresh basil leaves", "Extra virgin olive oil", "Balsamic glaze", "Salt", "Black pepper"],
            cooktime: 10,
            difficulty: difficulty.Easy,
            image: "caprese_salad.jpg",
            rating: 4.7,
            season: seasons.Summer,
            categorytype: "Salad",
            cuisinetype: cuisineType.Italian,
            mealtype: mealType.Lunch,
            dietaryrestrictions: [dietaryRestrictions.Vegetarian, dietaryRestrictions.GlutenFree],
            numcalories: 180,
            cookingmethod: null,
            occasions: [occasion.Casual, occasion.DateNight],
            servings: 2,
            userid: 4
        },
        {
            title: "Beef Bourguignon",
            description: "Classic French beef stew braised in red wine with vegetables.",
            instructions: [
                "Brown beef chunks in oil.",
                "Sauté onions, carrots, and garlic.",
                "Add beef back to pot with red wine, beef broth, and herbs.",
                "Simmer covered for 3 hours until beef is tender.",
                "Sauté mushrooms separately and add to the stew.",
                "Serve with mashed potatoes or crusty bread."
            ],
            ingredients: ["Beef chuck", "Bacon", "Onions", "Carrots", "Garlic", "Red wine", "Beef broth", "Tomato paste", "Thyme", "Bay leaf", "Mushrooms", "Pearl onions", "Butter", "Flour"],
            cooktime: 210,
            difficulty: difficulty.Hard,
            image: "beef_bourguignon.jpg",
            rating: 4.9,
            season: seasons.Winter,
            categorytype: "Main Course",
            cuisinetype: cuisineType.French,
            mealtype: mealType.Dinner,
            dietaryrestrictions: [],
            numcalories: 520,
            cookingmethod: cookingMethod.SlowCooking,
            occasions: [occasion.DateNight, occasion.Holiday],
            servings: 6,
            userid: 5
        },
        {
            title: "Guacamole",
            description: "Fresh Mexican avocado dip perfect for parties or as a topping.",
            instructions: [
                "Mash ripe avocados.",
                "Mix in diced onion, tomato, and cilantro.",
                "Add minced jalapeño for heat.",
                "Squeeze in fresh lime juice.",
                "Season with salt and pepper.",
                "Serve immediately with tortilla chips."
            ],
            ingredients: ["Avocados", "Red onion", "Tomatoes", "Cilantro", "Jalapeño", "Lime juice", "Salt", "Black pepper"],
            cooktime: 15,
            difficulty: difficulty.Easy,
            image: "guacamole.jpg",
            rating: 4.7,
            season: seasons.All,
            categorytype: "Appetizer",
            cuisinetype: cuisineType.Mexican,
            mealtype: mealType.Snack,
            dietaryrestrictions: [dietaryRestrictions.Vegetarian, dietaryRestrictions.Vegan, dietaryRestrictions.GlutenFree, dietaryRestrictions.DairyFree],
            numcalories: 150,
            cookingmethod: null,
            occasions: [occasion.Casual, occasion.GameDay, occasion.Potluck],
            servings: 6,
            userid: 6
        },
        {
            title: "Banana Bread",
            description: "Moist and flavorful quick bread made with ripe bananas.",
            instructions: [
                "Preheat oven to 350°F and grease a loaf pan.",
                "Mash ripe bananas in a large bowl.",
                "Mix in melted butter, sugar, beaten egg, and vanilla.",
                "Fold in flour, baking soda, and salt.",
                "Pour batter into prepared pan.",
                "Bake for 55-60 minutes until a toothpick comes out clean."
            ],
            ingredients: ["Ripe bananas", "Butter", "Sugar", "Egg", "Vanilla extract", "All-purpose flour", "Baking soda", "Salt", "Optional: walnuts or chocolate chips"],
            cooktime: 70,
            difficulty: difficulty.Easy,
            image: "banana_bread.jpg",
            rating: 4.8,
            season: seasons.All,
            categorytype: "Bread",
            cuisinetype: cuisineType.American,
            mealtype: mealType.Breakfast,
            dietaryrestrictions: [dietaryRestrictions.Vegetarian],
            numcalories: 220,
            cookingmethod: cookingMethod.Baking,
            occasions: [occasion.Casual, occasion.Brunch],
            servings: 10,
            userid: 7
        },
        {
            title: "Miso Soup",
            description: "Traditional Japanese soup with umami flavors from fermented soybean paste.",
            instructions: [
                "Prepare dashi broth by simmering kombu and bonito flakes.",
                "Remove solids and maintain a gentle simmer.",
                "Dissolve miso paste into the broth.",
                "Add tofu cubes and sliced green onions.",
                "Simmer briefly but don't boil after adding miso."
            ],
            ingredients: ["Dashi (kombu and bonito flakes)", "Miso paste", "Tofu", "Green onions", "Wakame seaweed (optional)"],
            cooktime: 15,
            difficulty: difficulty.Easy,
            image: "miso_soup.jpg",
            rating: 4.5,
            season: seasons.All,
            categorytype: "Soup",
            cuisinetype: cuisineType.Japanese,
            mealtype: mealType.Lunch,
            dietaryrestrictions: [dietaryRestrictions.Vegetarian],
            numcalories: 80,
            cookingmethod: cookingMethod.Boiling,
            occasions: [occasion.Casual],
            servings: 4,
            userid: 8
        },
        {
            title: "Falafel Pita Sandwich",
            description: "Middle Eastern sandwich featuring crispy chickpea patties in warm pita bread.",
            instructions: [
                "Blend soaked chickpeas with herbs, garlic, and spices.",
                "Form mixture into small balls and flatten slightly.",
                "Deep fry until golden brown and crispy.",
                "Warm pita bread and slice open.",
                "Fill with falafel, vegetables, and tahini sauce."
            ],
            ingredients: ["Dried chickpeas", "Parsley", "Cilantro", "Garlic", "Cumin", "Coriander", "Baking soda", "Pita bread", "Tomatoes", "Cucumber", "Tahini", "Lemon juice"],
            cooktime: 45,
            difficulty: difficulty.Medium,
            image: "falafel_pita.jpg",
            rating: 4.6,
            season: seasons.All,
            categorytype: "Sandwich",
            cuisinetype: cuisineType.MiddleEastern,
            mealtype: mealType.Lunch,
            dietaryrestrictions: [dietaryRestrictions.Vegetarian, dietaryRestrictions.DairyFree],
            numcalories: 350,
            cookingmethod: cookingMethod.Frying,
            occasions: [occasion.Casual],
            servings: 4,
            userid: 3
        },
        {
            title: "Tiramisu",
            description: "Classic Italian dessert with layers of coffee-soaked ladyfingers and mascarpone cream.",
            instructions: [
                "Mix espresso with a little rum in a shallow dish.",
                "Beat egg yolks with sugar until pale and fluffy.",
                "Add mascarpone cheese and mix until smooth.",
                "In another bowl, beat egg whites until stiff peaks form.",
                "Fold egg whites into mascarpone mixture.",
                "Dip ladyfingers in coffee mixture and layer in dish.",
                "Spread half the cream mixture over ladyfingers.",
                "Repeat layers, finishing with cream on top.",
                "Dust with cocoa powder and refrigerate for at least 4 hours."
            ],
            ingredients: ["Ladyfingers", "Espresso", "Rum", "Eggs", "Sugar", "Mascarpone cheese", "Cocoa powder"],
            cooktime: 30,
            difficulty: difficulty.Medium,
            image: "tiramisu.jpg",
            rating: 4.9,
            season: seasons.All,
            categorytype: "Dessert",
            cuisinetype: cuisineType.Italian,
            mealtype: mealType.Dessert,
            dietaryrestrictions: [dietaryRestrictions.Vegetarian],
            numcalories: 380,
            cookingmethod: null,
            occasions: [occasion.DateNight, occasion.Holiday],
            servings: 8,
            userid: 4
        },
        {
            title: "Tom Yum Soup",
            description: "Hot and sour Thai soup with fragrant herbs and shrimp.",
            instructions: [
                "Bring broth to a simmer with lemongrass, galangal, and kaffir lime leaves.",
                "Add mushrooms and cook for a few minutes.",
                "Add shrimp and cook until pink.",
                "Turn off heat and stir in lime juice, fish sauce, and chili paste.",
                "Garnish with cilantro before serving."
            ],
            ingredients: ["Shrimp", "Mushrooms", "Lemongrass", "Galangal", "Kaffir lime leaves", "Thai chili paste", "Fish sauce", "Lime juice", "Cilantro", "Chicken broth"],
            cooktime: 25,
            difficulty: difficulty.Medium,
            image: "tom_yum.jpg",
            rating: 4.7,
            season: seasons.All,
            categorytype: "Soup",
            cuisinetype: cuisineType.Thai,
            mealtype: mealType.Lunch,
            dietaryrestrictions: [],
            numcalories: 180,
            cookingmethod: cookingMethod.Boiling,
            occasions: [occasion.Casual],
            servings: 4,
            userid: 5
        },
        {
            title: "Spinach and Feta Stuffed Chicken Breast",
            description: "Juicy chicken breasts stuffed with spinach and feta cheese for a flavorful main dish.",
            instructions: [
                "Butterfly chicken breasts and pound to even thickness.",
                "Mix chopped spinach, feta, garlic, and herbs.",
                "Spread mixture over chicken and roll up.",
                "Secure with toothpicks.",
                "Sear in a hot pan until golden.",
                "Finish cooking in the oven until chicken reaches 165°F."
            ],
            ingredients: ["Chicken breasts", "Fresh spinach", "Feta cheese", "Garlic", "Dried oregano", "Olive oil", "Salt", "Black pepper"],
            cooktime: 40,
            difficulty: difficulty.Medium,
            image: "stuffed_chicken.jpg",
            rating: 4.6,
            season: seasons.All,
            categorytype: "Main Course",
            cuisinetype: cuisineType.Mediterranean,
            mealtype: mealType.Dinner,
            dietaryrestrictions: [dietaryRestrictions.GlutenFree],
            numcalories: 320,
            cookingmethod: cookingMethod.Baking,
            occasions: [occasion.DateNight, occasion.Casual],
            servings: 4,
            userid: 6
        },
        {
            title: "Black Bean Burgers",
            description: "Hearty vegetarian burgers made with black beans and vegetables.",
            instructions: [
                "Mash black beans in a bowl, leaving some chunks.",
                "Mix in sautéed onions, peppers, and garlic.",
                "Add breadcrumbs, egg, and spices.",
                "Form into patties and refrigerate for 30 minutes.",
                "Pan-fry or grill until crispy on both sides.",
                "Serve on buns with your favorite toppings."
            ],
            ingredients: ["Black beans", "Red bell pepper", "Onion", "Garlic", "Breadcrumbs", "Egg", "Cumin", "Chili powder", "Salt", "Hamburger buns", "Avocado", "Lettuce", "Tomato"],
            cooktime: 50,
            difficulty: difficulty.Medium,
            image: "black_bean_burger.jpg",
            rating: 4.5,
            season: seasons.All,
            categorytype: "Burger",
            cuisinetype: cuisineType.American,
            mealtype: mealType.Dinner,
            dietaryrestrictions: [dietaryRestrictions.Vegetarian],
            numcalories: 280,
            cookingmethod: cookingMethod.Frying,
            occasions: [occasion.Casual, occasion.BBQ],
            servings: 4,
            userid: 7
        },
        {
            title: "Shrimp Scampi",
            description: "Classic Italian-American dish with garlicky shrimp in a buttery wine sauce.",
            instructions: [
                "Cook linguine according to package instructions.",
                "Sauté garlic in butter and olive oil.",
                "Add shrimp and cook until pink.",
                "Pour in white wine and lemon juice, simmer briefly.",
                "Toss in cooked pasta and chopped parsley.",
                "Season with salt and red pepper flakes."
            ],
            ingredients: ["Linguine pasta", "Large shrimp", "Garlic", "Butter", "Olive oil", "White wine", "Lemon juice", "Red pepper flakes", "Parsley", "Salt"],
            cooktime: 25,
            difficulty: difficulty.Medium,
            image: "shrimp_scampi.jpg",
            rating: 4.8,
            season: seasons.All,
            categorytype: "Pasta",
            cuisinetype: cuisineType.Italian,
            mealtype: mealType.Dinner,
            dietaryrestrictions: [],
            numcalories: 420,
            cookingmethod: cookingMethod.Frying,
            occasions: [occasion.DateNight, occasion.Casual],
            servings: 4,
            userid: 8
        },
        {
            title: "Pumpkin Pie",
            description: "Traditional American dessert perfect for Thanksgiving and fall celebrations.",
            instructions: [
                "Preheat oven to 425°F.",
                "Roll out pie crust and place in pie dish.",
                "Whisk together pumpkin puree, sweetened condensed milk, eggs, and spices.",
                "Pour filling into pie crust.",
                "Bake for 15 minutes, then reduce temperature to 350°F.",
                "Continue baking for 35-40 minutes until set.",
                "Cool completely before serving with whipped cream."
            ],
            ingredients: ["Pie crust", "Pumpkin puree", "Sweetened condensed milk", "Eggs", "Ground cinnamon", "Ground ginger", "Ground nutmeg", "Ground cloves", "Salt", "Whipped cream"],
            cooktime: 60,
            difficulty: difficulty.Medium,
            image: "pumpkin_pie.jpg",
            rating: 4.7,
            season: seasons.Fall,
            categorytype: "Dessert",
            cuisinetype: cuisineType.American,
            mealtype: mealType.Dessert,
            dietaryrestrictions: [dietaryRestrictions.Vegetarian],
            numcalories: 320,
            cookingmethod: cookingMethod.Baking,
            occasions: [occasion.Thanksgiving, occasion.Holiday],
            servings: 8,
            userid: 3
        },
        {
            title: "Chicken Tikka Masala",
            description: "Creamy and flavorful Indian curry with tender marinated chicken pieces.",
            instructions: [
                "Marinate chicken in yogurt and spices for at least 2 hours.",
                "Grill or broil chicken until charred and cooked through.",
                "In a separate pan, sauté onions, garlic, and ginger.",
                "Add tomato sauce and spices, simmer for 10 minutes.",
                "Stir in cream and butter.",
                "Add grilled chicken pieces and simmer for 5-10 minutes.",
                "Garnish with cilantro and serve with rice or naan."
            ],
            ingredients: ["Chicken thighs", "Plain yogurt", "Garam masala", "Turmeric", "Cumin", "Onions", "Garlic", "Ginger", "Tomato sauce", "Heavy cream", "Butter", "Cilantro", "Rice or naan bread"],
            cooktime: 60,
            difficulty: difficulty.Medium,
            image: "tikka_masala.jpg",
            rating: 4.9,
            season: seasons.All,
            categorytype: "Curry",
            cuisinetype: cuisineType.Indian,
            mealtype: mealType.Dinner,
            dietaryrestrictions: [],
            numcalories: 460,
            cookingmethod: cookingMethod.Grilling,
            occasions: [occasion.Casual, occasion.DateNight],
            servings: 6,
            userid: 4
        }
    ];

    // Insert recipes into database
    for (const recipeData of recipes) {
        const { ingredients, ...recipeWithoutIngredients } = recipeData;

        const recipe = await prisma.recipe.create({
            data: {
                ...recipeWithoutIngredients,
                dietaryrestrictions: {
                    set: recipeWithoutIngredients.dietaryrestrictions
                },
                occasions: {
                    set: recipeWithoutIngredients.occasions
                },
                Ingredients: {
                    create: ingredients.map(ingredient => ({
                        ingredient
                    }))
                }
            }
        });

        console.log(`Created recipe: ${recipe.title} with ID: ${recipe.id}`);
    }

    console.log('Seeding finished successfully!');
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
