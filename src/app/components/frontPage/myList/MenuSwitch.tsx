"use client"
import { useState, useEffect } from "react"
import Filters from "@/app/components/frontPage/myList/Filters"
import List from "@/app/components/frontPage/myList/List"
import MyRecipes from "@/app/components/frontPage/myList/MyRecipes"
import Collections from "@/app/components/frontPage/myList/Collections"
import Bookmarked from "@/app/components/frontPage/myList/Bookmarks"
import Commented from "@/app/components/frontPage/myList/Comments"
import { Recipe, PrepareRecipe, Collection, Bookmark, Comment, LikedComment } from "@/app/types/recipe"
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
    const [likedComments, setLikedComments] = useState<LikedComment[]>([])

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
                                if (listData.status === 404) {
                                    showToast('info', t('myList.noRecipes') || 'No recipes found in prepare list.', savedTheme)
                                } else {
                                    showToast('error', t('myList.errorFetchingRecipes') || 'Error fetching prepare list. Please try again later.', savedTheme)
                                }
                            } else {
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
                                if (myRecipesData.status === 404) {
                                    showToast('info', t('myList.noMyRecipes') || 'No personal recipes found.', savedTheme)
                                } else {
                                    showToast('error', t('myList.errorFetchingMyRecipes') || 'Error fetching your recipes. Please try again later.', savedTheme)
                                }
                            } else {
                                const myRecipesJson = await myRecipesData.json()
                                setMyRecipes(myRecipesJson)
                            }
                        }
                        break
                    case 'collections':
                        // Fetch user's collections
                        if (collections.length === 0) {
                            const collectionsData = await fetch('/api/myList/collections')
                            if (!collectionsData.ok) {
                                if (collectionsData.status === 404) {
                                    showToast('info', t('myList.noCollections') || 'No collections found.', savedTheme)
                                } else {
                                    showToast('error', t('myList.errorFetchingCollections') || 'Error fetching collections. Please try again later.', savedTheme)
                                }
                            } else {
                                const collectionsJson = await collectionsData.json()
                                setCollections(collectionsJson)
                            }
                        }
                        break
                    case 'bookmarked':
                        // Fetch bookmarked recipes
                        if (bookmarks.length === 0) {
                            const bookmarksData = await fetch('/api/myList/bookmark')
                            if (!bookmarksData.ok) {
                                if (bookmarksData.status === 404) {
                                    showToast('info', t('myList.noBookmarks') || 'No bookmarks found.', savedTheme)
                                } else {
                                    showToast('error', t('myList.errorFetchingBookmarks') || 'Error fetching bookmarks. Please try again later.', savedTheme)
                                }
                            } else {
                                const bookmarksJson = await bookmarksData.json()
                                setBookmarks(bookmarksJson)
                            }
                        }
                        break
                    case 'commented':
                        // Fetch recipes with user comments
                        if (comments.length === 0) {
                            const commentsData = await fetch('/api/myList/comments/myComments')
                            if (!commentsData.ok) {
                                if (commentsData.status === 404) {
                                    showToast('info', t('myList.noCommentsFound') || 'No commented recipes found.', savedTheme)
                                } else {
                                    showToast('error', t('myList.errorFetchingComments') || 'Error fetching comments. Please try again later.', savedTheme)
                                }
                            } else {
                                const commentsJson = await commentsData.json()
                                setComments(commentsJson.comments)
                            }
                        }

                        // Fetch liked comments
                        if (likedComments.length === 0) {
                            const likedCommentsData = await fetch('/api/myList/comments/likedComments')
                            if (!likedCommentsData.ok) {
                                if (likedCommentsData.status === 404) {
                                    showToast('info', t('myList.noLikedCommentsFound') || 'No liked comments found.', savedTheme)
                                } else {
                                    showToast('error', t('myList.errorFetchingLikedComments') || 'Error fetching liked comments. Please try again later.', savedTheme)
                                }
                            } else {
                                const likedCommentsJson = await likedCommentsData.json()
                                setLikedComments(likedCommentsJson.comments || [])
                            }
                        }
                        break
                }
            } catch (error) {
                console.error('Error fetching data:', error)
                showToast('error', t('errors.networkError') || 'Network error. Please check your connection.', savedTheme)
            } finally {
                setIsLoading(false)
            }
        }

        fetchData()
    }, [selectedMenu, savedTheme, recipes.length, myRecipes.length, collections.length, bookmarks.length, comments.length, likedComments.length])

    // Function to render the appropriate component based on the selected menu
    const renderComponent = () => {
        if (isLoading) {
            return <div className="flex justify-center items-center py-20">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#FF6B35] dark:border-indigo-400"></div>
            </div>
        }

        switch (selectedMenu) {
            case 'list':
                return <List recipes={recipes} searchBox={searchBox} setSearchBox={setSearchBox} />
            case 'collections':
                return <Collections collections={collections} searchBox={searchBox} setSearchBox={setSearchBox} />
            case 'myRecipes':
                return <MyRecipes myRecipes={myRecipes} searchBox={searchBox} setSearchBox={setSearchBox} />
            case 'commented':
                return <Commented
                    comments={comments}
                    likedComments={likedComments}
                    searchBox={searchBox}
                    setSearchBox={setSearchBox}
                />
            case 'bookmarked':
                return <Bookmarked bookmarks={bookmarks} searchBox={searchBox} setSearchBox={setSearchBox} />
            default:
                return <List recipes={recipes} searchBox={searchBox} setSearchBox={setSearchBox} />
        }
    }

    return (
        <>
            <Filters selectedMenu={selectedMenu} setSelectedMenu={setSelectedMenu} searchBox={searchBox} setSearchBox={setSearchBox} />
            {renderComponent()}
        </>
    )
}