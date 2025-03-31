// STICKER 
export const modeStyles = [
    {type: "Light", icon: "ri-sun-line", activeGradient: "from-[#FFB938] to-[#FFA238]"},
    {type: "Dark", icon: "ri-moon-line", activeGradient: "from-[#6C72CB] to-[#5A60B6]"},
    {type: "Auto", icon: "ri-computer-line", activeGradient: "from-[#4A90E2] to-[#357ABD]"}
]

export const languageOptions = [
    {type: "English", code: "en", icon: "ri-flag-line", activeGradient: "from-[#DC1C2C] to-[#00247D]"},
    {type: "Portuguese", code: "pt", icon: "ri-translate-2", activeGradient: "from-[#006600] to-[#FF0000]"},
    {type: "Spanish", code: "es", icon: "ri-global-line", activeGradient: "from-[#FF0000] to-[#FFC400]"}
]

// NAVBAR
export const navItems = [
    { name: 'Home', icon: 'ri-home-5-line', link: '/pages/home' },
    { name: 'My List', icon: 'ri-bookmark-line', link: '/pages/mylist' },
    { name: 'Categories', icon: 'ri-restaurant-line', link: '/pages/categories' },
    { name: 'Search', icon: 'ri-search-line', link: '/pages/search' },
    { name: 'Profile', icon: 'ri-user-line', link: '/pages/profile' },
    { name: 'Settings', icon: 'ri-settings-4-line', link: '/pages/preferences' },
];

// FOOTER 
export const Socials = [
    {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/micael-ribeiro-a2230433a/",
        icon: "ri-linkedin-fill",
        color: "0A66C2" // Brighter LinkedIn blue
    },
    {
        name: "GitHub",
        url: "https://github.com/mica-1999",
        icon: "ri-github-fill",
        color: "6e5494" // GitHub purple that contrasts better with dark backgrounds
    },
    {
        name: "Twitter",
        url: "https://x.com/ribeiro_micael",
        icon: "ri-twitter-x-fill",
        color: "1D9BF0" // Vibrant Twitter blue
    },
    {
        name: "Instagram",
        url: "https://www.instagram.com/goncalomicael20/",
        icon: "ri-instagram-line",
        color: "E4405F" // Brighter Instagram pink/red
    },
];