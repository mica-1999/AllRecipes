const translations = {
    navBar: {
        categories: 'Categories',
        popularRecipes: 'Most Popular Recipes Right Now',
        trendingRecipes: 'This Weeks Trending Recipes',
        seasonal: 'Seasonal Favorites',
        featuredChefs : 'Featured Chef Collections',
        browseCategories: 'Browse All Categories',
        advanced: 'Advanced',
        myList: 'My List',
        myProfile: 'Your Profile',
        settings: 'Settings',
        signOut: 'Sign out',
        signIn: 'Sign in',
        signUp: 'Sign up',
    },
    footer: {
        aboutUs: 'About Us',
        aboutDescription: 'RecipeHub is your go-to platform to discover, save, and share delicious recipes. Organize your favorites, explore new dishes, and connect with a community of food lovers. Start your culinary journey with us today!',
        contactInfo: 'Contact Info',
        address: 'Canhas, Funchal, Madeira',
        quickLinks: 'Quick Links',
        home: 'Home',
        recipes: 'Recipes',
        about: 'About Us',
        faq: 'FAQ',
        privacyPolicy: 'Privacy Policy',
        copyright: '© {year} · Micael Ribeiro · Web Design & Development · Madeira - Portugal'
    },
    basicFilter: {
        cuisines: 'Cuisines',
        whatCrave: 'What do you crave?',
        filterBy: 'Filter by',
        addIngredient: 'Add Ingredient',
        difficulty: 'Difficulty',
        selectLevel: 'Select level',
        filters: 'Filters',
        customize: 'Customize'
    },
    imageContainer: {
        title: 'Discover New Recipes',
        description: 'Explore a wide range of cuisines and ingredients to create your next masterpiece.',
        filterRecipes: 'Filter Recipes',
        imageAlt: 'Delicious food background'
    },
    recipeOfDay: {
        title: 'Recipe of the Day',
        todaysPick: 'Today\'s Pick',
        time: '{minutes} min',
        servings: '{count} servings',
        difficulty: {
            easy: 'Easy',
            medium: 'Medium',
            hard: 'Hard'
        },
        viewRecipe: 'View Recipe'
    },
    trending: {
        title: 'Trending Recipes',
        imageAlt: 'Delicious food'
    },
    topRated: {
        title: 'Top-Rated Recipes',
        rating: '{rating}',
        imageAlt: 'Delicious food',
        recipeTitle: 'Recipe Title',
        category: 'Category',
        description: 'Random Description'
    },
    seasonal: {
        title: 'Seasonal Recipes',
        viewAll: 'View All',
        seasons: {
            spring: 'Spring',
            summer: 'Summer',
            autumn: 'Autumn',
            winter: 'Winter'
        }
    },
    subscribe: {
        title: 'Stay Updated with RecipeHub',
        description: 'Subscribe to our newsletter and get weekly updates on new recipes, cooking tips, and exclusive offers.',
        placeholder: 'Your email address',
        button: 'Subscribe'
    },
    featuredChefs: {
        title: 'Featured Chefs',
        viewAll: 'View All',
        recipes: '{count} Recipes',
        followers: '{count} Followers',
        viewProfile: 'View Profile'
    },
    advancedFilters: {
        title: 'Choose your filter preference to see matching recipes below',
        filterPreference: {
            latest: 'Latest',
            popular: 'Popular',
            seasonal: 'Seasonal',
            trending: 'Trending',
            quick: 'Quick & Easy',
            budget: 'Budget-Friendly',
            healthy: 'Healthy'
        },
        seasons: {
            spring: 'Spring',
            summer: 'Summer',
            autumn: 'Autumn',
            winter: 'Winter'
        },
        filterSections: {
            mealOptions: 'Cuisine Type',
            mealType: 'Meal Type',
            cookingTime: 'Cooking Time',
            dietaryRestrictions: 'Dietary Restrictions',
            ingredients: 'Ingredients',
            difficultyLevel: 'Difficulty Level',
            caloriesRange: 'Calories Range',
            cookingMethod: 'Cooking Method',
            occasion: 'Occasion'
        },
        difficulty: {
            easy: 'Easy',
            medium: 'Medium',
            hard: 'Hard'
        },
        minutes: 'minutes',
        calories: 'cal',
        upTo: 'Up to',
        minimumCalories: 'Minimum calories',
        maximumCalories: 'Maximum calories',
        addIngredientsEnter: 'Add ingredients and press Enter',
        search: 'Search cuisines...',
        noCuisinesFound: 'No cuisines found',
        add: 'Add',
        clear: 'Clear'
    },
    tableFiltered: {
        title: 'Filtered Results',
        description: 'Recipes that match your advanced filter criteria',
        headers: {
            recipeName: 'Recipe Name',
            views: 'Views',
            rating: 'Rating',
            actions: 'Actions'
        },
        viewsLabel: 'Views',
        viewButton: 'View',
        outOf5: '/5'
    },
    themeSettings: {
        title: 'Layout Preferences',
        subtitle: 'Customize and preview in real time',
        theming: 'Theming',
        styleMode: 'Style (Mode)',
        language: 'Language',
        chooseLanguage: 'Choose Language',
        cancel: 'Cancel',
        applyChanges: 'Apply Changes',
        changesSaved: 'Changes saved successfully!',
        errorSaving: 'Error saving preferences',
        settingsReset: 'Settings reset to saved values',
        sessionNote: 'Changes will be applied to your current session'
    },
    preferences: {
        title: 'Your Preferences',
        subtitle: 'Customize your recipe recommendations and visual settings',
        save: 'Save Preferences',
        saved: 'Saved!',
        backToHome: 'Back to Home',
        tabs: {
            recipePreferences: 'Recipe Preferences',
            visualSettings: 'Visual Settings'
        },
        dietPreferences: {
            title: 'Diet Preferences',
            subtitle: 'Select dietary preferences to personalize your recipe suggestions'
        },
        cuisinePreferences: {
            title: 'Cuisine Preferences',
            subtitle: 'Select cuisines you enjoy for better recipe recommendations'
        },
        mealPreferences: {
            title: 'Meal Type Preferences',
            subtitle: 'What kinds of meals are you most interested in?'
        },
        cookingPreferences: {
            title: 'Cooking Preferences',
            subtitle: 'How do you prefer your meals to be prepared?'
        },
        colorSettings: {
            title: 'Color Settings',
            subtitle: 'Customize the color scheme for different preference tags',
            reset: 'Reset',
            color: 'Color',
            preview: 'Preview'
        },
        summary: {
            title: 'Your Preferences Summary',
            diet: 'Diet Preferences:',
            cuisine: 'Cuisine Preferences:',
            mealType: 'Meal Type Preferences:',
            cooking: 'Cooking Preferences:',
            noneSelected: 'None selected'
        }
    }
}

export default translations;