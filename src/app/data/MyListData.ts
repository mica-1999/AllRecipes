// MENU 
export const listItems = [
    {id: "list", name: "List", icon: "ri-list-check"},
    {id: "myRecipes", name: "My Recipes", icon: "ri-edit-2-line"},
    {id: "collections", name: "Collections", icon: "ri-folder-line"},
    {id: "bookmarked", name: "Bookmarked", icon: "ri-bookmark-line"},
    {id: "commented", name: "Commented", icon: "ri-chat-3-line"}
] 

// BOOKMARK
export const bookmarkedRecipes = [
    { id: 1, title: "Pasta Carbonara", imageUrl: "/images/home/seasonal/autumn1.jpg", date: "15 Jan" },
    { id: 2, title: "Chicken Stir Fry", imageUrl: "/images/home/seasonal/autumn2.jpg", date: "12 Jan" },
    { id: 3, title: "Veggie Soup", imageUrl: "/images/home/seasonal/spring3.jpg", date: "10 Jan" },
    { id: 4, title: "Beef Tacos", imageUrl: "/images/home/seasonal/spring2.jpg", date: "5 Jan" },
];

// COLLECTIONS
export const collectionsData = [
    { id: 1, title: "Collections #1", imageUrl: "/images/home/seasonal/autumn1.jpg" },
    { id: 2, title: "Collections #2", imageUrl: "/images/home/seasonal/autumn2.jpg" },
    { id: 3, title: "Collections #3", imageUrl: "/images/home/seasonal/spring3.jpg" },
    { id: 4, title: "Collections #4", imageUrl: "/images/home/seasonal/spring2.jpg" },
];

// COMMENTS
export const commentsData = [
    {
        id: 1,
        userName: "Maria Johnson",
        userImage: "/images/home/seasonal/autumn1.jpg",
        time: "2 hours ago",
        recipeImage: "/images/home/trending/trending1.jpg",
        recipeName: "Mom's Special Pasta",
        date: "May 10, 2024",
        likes: 24,
        comment: "This recipe reminds me of my childhood! I added a bit more garlic and it was perfect."
    },
    {
        id: 2,
        userName: "David Chen",
        userImage: "/images/home/seasonal/autumn2.jpg",
        time: "Yesterday",
        recipeImage: "/images/home/trending/trending2.jpg",
        recipeName: "Grandma's Cookies",
        date: "May 8, 2024",
        likes: 15,
        comment: "These cookies are incredible! I've made them three times already and they always turn out great."
    },
    {
        id: 3,
        userName: "Sophie Williams",
        userImage: "/images/home/seasonal/autumn3.jpg",
        time: "3 days ago",
        recipeImage: "/images/home/trending/trending3.jpg",
        recipeName: "Dad's BBQ",
        date: "May 5, 2024",
        likes: 32,
        comment: "The marinade is a game changer! Everyone at our family gathering loved it."
    }
];