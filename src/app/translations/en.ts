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
        home: 'Home',
        search: 'Search',
        profile: 'Profile',
        dashboard: 'Dashboard'
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
        mainFilters: ["Latest", "Popular", "Top Rated", "Seasonal","Random"],
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
        clear: 'Clear',
        cuisinePlaceholder: 'Italian, Chinese, Mexican...',
        cuisineOptions: [
            "Italian", "Chinese", "Mexican", "Indian", "Japanese", 
            "Thai", "French", "Greek", "Spanish", "Mediterranean", 
            "American", "Korean", "Vietnamese", "Middle Eastern", "Brazilian"
        ],
        mealTypes: ["Breakfast", "Lunch", "Dinner", "Brunch", "Snack", "Dessert"],
        restrictions: ["Vegetarian", "Vegan", "Gluten-Free", "Dairy-Free", "Nut-Free", "Low Carb"],
        cookingMethods: {
            baking: "Baking",
            frying: "Frying",
            grilling: "Grilling",
            steaming: "Steaming",
            boiling: "Boiling",
            roasting: "Roasting",
            sauteing: "Sautéing", 
            slowCooking: "Slow Cooking"
          },
        occasions: [
            "Birthday", "Holiday", "Casual", "Date Night", 
            "Thanksgiving", "Christmas", "Wedding", "BBQ", 
            "Game Day", "Picnic", "Brunch", "Potluck"
        ]
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
        sessionNote: 'Changes will be applied to your current session',
        modes: {
            light: 'Light',
            dark: 'Dark',
            auto: 'Auto'
        },
        languages: {
            english: 'English',
            portuguese: 'Portuguese',
            spanish: 'Spanish'
        }
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
    },
    search: {
        placeholder: 'Search recipes...',
        cancel: 'Cancel'
    },
    myList: {
        search: 'Search in',
        filter: 'Filter',
        export: 'Export',
        import: 'Import',
        prepareButton: 'Prepare',
        showing: 'Showing',
        of: 'of',
        recipes: 'recipes',
        bookmarks: 'Your Bookmarks',
        bookmarked: 'Bookmarked',
        tabs: {
            list: 'List',
            myRecipes: 'My Recipes',
            collections: 'Collections',
            bookmarked: 'Bookmarked',
            commented: 'Commented'
        },
        // MY LIST TABLE HEADERS
        mylistHeaders: [
            "Recipe Name",
            "Category",
            "Difficulty",
            "Cooking Time",
            "Rating",
            "Last Made",
            "Date Added",
            "Actions"
        ],
        comments: {
            recentTitle: 'Recent Comments',
            myComments: 'My Comments',
            likedComments: 'Liked Comments',
            myCommentsDescription: 'Comments you posted on recipes',
            likedCommentsDescription: 'Comments from others that you liked',
            profile: 'profile',
            like: 'Like',
            reply: 'Reply',
            delete: 'Delete',
            loadMore: 'Load More Comments'
        }
    },
    profile: {
        bannerAlt: "Profile banner",
        avatarAlt: "Profile picture",
        recipeCount: "{count} recipes",
        buttons: {
            editProfile: "Edit Profile",
            settings: "Settings",
            follow: "Follow",
            message: "Message"
        },
        tabs: {
            about: "About",
            recipes: "Recipes",
            followers: "Followers",
            following: "Following"
        },
        gallery: {
            title: "Recipe Gallery",
            imageAlt: "Recipe image",
            viewAll: "View All Photos"
        },
        aboutSection: {
            title: "About {name}",
            bio: "Passionate home cook with a love for experimenting with flavors from around the world. I believe that cooking is a creative expression that brings people together. My specialty is taking traditional recipes and giving them a modern twist.",
            location: "Location",
            joined: "Joined",
            favoriteCuisine: "Favorite Cuisine",
            achievements: "Achievements"
        },
        achievements: {
            topChef: "Top Chef",
            recipeCreator: "Recipe Creator",
            trendsetter: "Trendsetter"
        },
        emptyStates: {
            recipes: "User's recipes will be displayed here",
            followers: "User's followers will be displayed here",
            following: "Accounts this user follows will be displayed here"
        }
    },
    recipeInfo: {
        stats: {
            prep: "Prep",
            cook: "Cook",
            serves: "Serves",
            difficulty: "Difficulty"
        },
        sections: {
            ingredients: "Ingredients",
            instructions: "Step-by-Step Instructions",
            tips: "Mom's Tips",
            allSteps: "All Steps",
            viewAll: "View All"
        },
        navigation: {
            previous: "Previous",
            next: "Next",
            step: "Step {current} of {total}"
        },
        actions: {
            save: "Save Recipe",
            print: "Print",
            share: "Share"
        },
        videoPlaceholder: {
            comingSoon: "Video coming soon"
        }
    }
    
}

export default translations;