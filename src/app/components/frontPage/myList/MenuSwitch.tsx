"use client"
import { useState } from "react"
import Filters from "@/app/components/frontPage/myList/Filters"
import List from "@/app/components/frontPage/myList/List"
import MyRecipes from "@/app/components/frontPage/myList/MyRecipes"
import Collections from "@/app/components/frontPage/myList/Collections"
import Bookmarked from "@/app/components/frontPage/myList/Bookmarks"
import Commented from "@/app/components/frontPage/myList/Comments"

export default function MenuSwitcher() {
    // State to manage the selected menu option
    const [selectedMenu, setSelectedMenu] = useState('list')

    // Function to render the appropriate component based on the selected menu
    const renderComponent = () => {
        switch (selectedMenu) {
            case 'list':
                return <List />
            case 'collections':
                return <Collections />
            case 'myRecipes':
                return <MyRecipes />
            case 'commented':
                return <Commented />
            case 'bookmarked':
                return <Bookmarked />
            default:
                return <List />
        }
    }

    return (
        <>
            <Filters selectedMenu={selectedMenu} setSelectedMenu={setSelectedMenu} />
            {renderComponent()}
        </>
    )
}