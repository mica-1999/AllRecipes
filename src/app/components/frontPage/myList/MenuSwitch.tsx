"use client"
import { useState, useEffect } from "react"
import Filters from "@/app/components/frontPage/myList/Filters"
import List from "@/app/components/frontPage/myList/List"
import MyRecipes from "@/app/components/frontPage/myList/MyRecipes"
import Collections from "@/app/components/frontPage/myList/Collections"
import Bookmarked from "@/app/components/frontPage/myList/Bookmarks"
import Commented from "@/app/components/frontPage/myList/Comments"
import { Recipe, PrepareRecipe, Collection, Bookmark, Comment } from "@/app/types/recipe"
import { showToast } from "../../reusable/Toasters"
import { useTheme } from "@/app/context/ThemeContext"

export default function MenuSwitcher() {
    const { t, savedTheme } = useTheme()

    // State to manage the selected menu option
    const [selectedMenu, setSelectedMenu] = useState('list')
    const [isLoading, setIsLoading] = useState(true)

    // Data states for different sections
    const [recipes, setRecipes] = useState<PrepareRecipe[]>([])
    const [myRecipes, setMyRecipes] = useState<Recipe[]>([])
    const [collections, setCollections] = useState<Collection[]>([])
    const [bookmarks, setBookmarks] = useState<Bookmark[]>([])
    const [comments, setComments] = useState<Comment[]>([])

    // Filters state
    const [searchBox, setSearchBox] = useState('')

    // Fetch data based on selected menu
    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true)
            try {
                switch (selectedMenu) {
                    case 'list':
                        // Fetch user's list of recipes to prepare
                        if (recipes.length === 0) {
                            const listData = await fetch('/api/myList/prepareList')
                            if (!listData.ok) {
                                showToast('error', 'Error fetching recipes. Please try again later.', savedTheme)
                            }
                            else {
                                const listJson = await listData.json()
                                setRecipes(listJson)
                            }
                        }
                        break
                    case 'myRecipes':
                        // Fetch recipes created by the user
                        if (myRecipes.length === 0) {
                            const myRecipesData = await fetch('/api/myList/personalList')
                            if (!myRecipesData.ok) {
                                showToast('error', 'Error fetching your recipes. Please try again later.', savedTheme)
                            }
                            else {
                                const myRecipesJson = await myRecipesData.json()
                                setMyRecipes(myRecipesJson)
                            }
                        }
                        break
                    case 'collections':
                        // Fetch user's collections
                        if (collections.length === 0) {
                            const collectionsData = await fetch('/api/myList/collections')
                            const collectionsJson = await collectionsData.json()
                            setCollections(collectionsJson)
                        }
                        break
                    case 'bookmarked':
                        // Fetch bookmarked recipes
                        if (bookmarks.length === 0) {
                            const bookmarksData = await fetch('/api/mylist/bookmarks')
                            const bookmarksJson = await bookmarksData.json()
                            setBookmarks(bookmarksJson)
                        }
                        break
                    case 'commented':
                        // Fetch recipes with user comments
                        if (comments.length === 0) {
                            const commentsData = await fetch('/api/mylist/comments')
                            const commentsJson = await commentsData.json()
                            setComments(commentsJson)
                        }
                        break
                }
            } catch (error) {
                console.error('Error fetching data:', error)
            } finally {
                setIsLoading(false)
            }
        }

        fetchData()
    }, [selectedMenu])

    // Function to render the appropriate component based on the selected menu
    const renderComponent = () => {
        if (isLoading) {
            return <div className="flex justify-center items-center py-20">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#FF6B35] dark:border-indigo-400"></div>
            </div>
        }

        switch (selectedMenu) {
            case 'list':
                return <List recipes={recipes} />
            case 'collections':
                return <Collections collections={collections} />
            case 'myRecipes':
                return <MyRecipes myRecipes={myRecipes} />
            case 'commented':
                return <Commented comments={comments} />
            case 'bookmarked':
                return <Bookmarked bookmarks={bookmarks} />
            default:
                return <List recipes={recipes} />
        }
    }

    return (
        <>
            <Filters selectedMenu={selectedMenu} setSelectedMenu={setSelectedMenu} searchBox={searchBox} setSearchBox={setSearchBox} />
            {renderComponent()}
        </>
    )
}