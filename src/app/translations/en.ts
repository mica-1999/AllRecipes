const translations = {
    navBar: {
        categories: 'Categories',
        popularRecipes: 'Most Popular Recipes Right Now',
        trendingRecipes: 'This Weeks Trending Recipes',
        seasonal: 'Seasonal Favorites',
        featuredChefs: 'Featured Chef Collections',
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
        mainFilters: ["All", "Latest", "Popular", "Top Rated", "Seasonal", "Random"],
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
        ],
        filtersReset: 'Filters have been reset',
        all: 'ALL',
        any: 'ANY',
        matchAllIngredients: 'Match all ingredients (AND)',
        matchAnyIngredient: 'Match any ingredient (OR)',
        showingAllIngredients: 'Showing recipes with all these ingredients',
        showingAnyIngredient: 'Showing recipes with any of these ingredients',
        matchAllRestrictions: 'Match all restrictions (AND)',
        matchAnyRestriction: 'Match any restriction (OR)',
        showingAllRestrictions: 'Showing recipes with all selected restrictions',
        showingAnyRestriction: 'Showing recipes with any selected restriction',
        matchAllOccasions: 'Match all occasions (AND)',
        matchAnyOccasion: 'Match any occasion (OR)',
        showingAllOccasions: 'Showing recipes for all selected occasions',
        showingAnyOccasion: 'Showing recipes for any selected occasion'
    },
    tableFiltered: {
        title: 'Filtered Results',
        description: 'Recipes that match your advanced filter criteria',
        headers: {
            recipeName: 'Recipe Name',
            views: 'Views',
            rating: 'Rating',
            actions: 'Actions',
            date: 'Date'
        },
        searchRecipes: 'Search recipes...',
        viewsLabel: 'Views',
        viewButton: 'View',
        outOf5: '/5',
        noResults: 'No recipes found matching your criteria',
        tryAdjusting: 'Try adjusting your filters or selecting different options',
        resetFilters: 'Reset Filters',
        dateFilter: {
            title: 'Select Date Range',
            start: 'Start Date',
            end: 'End Date',
            apply: 'Apply',
            cancel: 'Cancel',
            last7Days: 'Last 7 Days',
            lastMonth: 'Last Month',
            last6Month: 'Last 6 Months',
            lastYear: 'Last Year',
            allTime: 'All Time'
        },
        dateAdded: 'Date Added'
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
        prepareList: 'Prepare List',
        added: 'Added',
        lastMade: 'Last made',
        noRecipes: 'No recipes found in prepare list',
        errorFetchingRecipes: 'Error fetching prepare list. Please try again later',
        prepareListDescription: 'Add recipes to your prepare list to keep track of what you want to cook',
        browseRecipes: 'Browse Recipes',
        myRecipes: 'My Recipes',
        created: 'Created',
        noMyRecipes: 'No personal recipes found',
        errorFetchingMyRecipes: 'Error fetching your recipes. Please try again later',
        createRecipeDescription: 'Share your culinary creations with the community',
        createRecipe: 'Create Recipe',
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
            loadMore: 'Load More Comments',
            unliked: "Like removed successfully",
            unlikeError: "Error removing like",
            unlike: "Unlike",
            deleted: "Comment deleted successfully",
            deleteError: "Error deleting comment",
            notFound: "Comment not found"
        },
        collection: 'Collection',
        collections: 'Collections',
        recipe: 'Recipe',
        createNewCollection: 'Create New Collection',
        organizeYourFavoriteRecipes: 'Organize your favorite recipes into themed collections',
        noCollections: 'No collections found',
        errorFetchingCollections: 'Error fetching collections. Please try again later',
        createCollection: 'Create Collection',
        collectionDeleted: 'Collection deleted successfully',
        errorDeletingCollection: 'Error deleting collection',
        noMatchingBookmarks: "No bookmarks match your search",
        tryAnotherSearch: "Try a different search term or clear your search",
        clearSearch: "Clear search",
        noMatchingRecipes: "No recipes match your search",
        noMatchingPrepareRecipes: "No recipes in your prepare list match your search",
        recipeDeleted: "Recipe deleted successfully",
        errorDeletingRecipe: "Error deleting recipe. Please try again later.",
        recipeRemoved: "Recipe removed from preparation list",
        errorRemovingRecipe: "Failed to remove recipe",
        bookmarkRemoved: "Bookmark removed successfully",
        errorRemovingBookmark: "Error removing bookmark",
        noBookmarks: "No bookmarks found",
        errorFetchingBookmarks: "Error fetching bookmarks. Please try again later",
        bookmarksDescription: "Save your favorite recipes here for quick access later",
        findRecipes: "Find Recipes",
        noMatchingCollections: "No collections match your search",
        collectionCreated: "Collection created successfully",
        errorCreatingCollection: "Failed to create collection",
        collectionName: "Collection Name",
        collectionNamePlaceholder: "E.g., Italian Favorites, Weeknight Dinners",
        collectionNameHelp: "Give your collection a descriptive name",
        create: "Create",
        noMatchingComments: "No comments match your search",
        noMatchingLikedComments: "No liked comments match your search",
        noComments: "You haven't commented on any recipes yet",
        noLikedComments: "You haven't liked any comments yet",
        commentsDescription: "Share your thoughts on recipes by leaving comments",
        likedCommentsDescription: "Like comments from other users to save them here",
        exploreComments: "Explore Comments",
        noCommentsFound: "No commented recipes found",
        errorFetchingComments: "Error fetching comments. Please try again later",
        noLikedCommentsFound: "No liked comments found",
        errorFetchingLikedComments: "Error fetching liked comments. Please try again later",
        addedToPrepareList: "Added to Prepare List",
        recipeAlreadyInPrepareList: "Recipe already in prepare list",
        errorAddingToPrepareList: "Error trying to add recipe to Prepare List",
        addedToBookmarks: "Recipe added to Bookmarks",
        recipeAlreadyBookmarked: "Recipe already bookmarked",
        errorAddingToBookmarks: "Error trying to add recipe to bookmarks",
        addToBookmarks: "Add to bookmarks",
        addToPrepareList: "Add to prepare list",
        viewDetails: "View recipe details"
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
        error: {
            notFound: "Recipe not found",
            fetchingData: "Error fetching recipe data",
            tryAgain: "Try searching for a different recipe or go back to browse all recipes",
            noId: "No recipe ID provided"
        },
        loading: "Loading recipe...",
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
            viewAll: "View All",
            description: "Description"
        },
        navigation: {
            previous: "Previous",
            next: "Next",
            step: "Step {current} of {total}"
        },
        actions: {
            save: "Save Recipe",
            print: "Print",
            share: "Share",
            alreadySaved: "Already Saved"
        },
        videoPlaceholder: {
            comingSoon: "Video coming soon"
        }
    },
    errors: {
        networkError: 'Network error. Please check your connection',
    }
}

export default translations;