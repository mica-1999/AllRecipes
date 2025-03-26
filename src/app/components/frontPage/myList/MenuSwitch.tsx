"use client"

import { useState } from "react"
import Filters from "./Filters"
import List from "./List"
import MyRecipes from "./MyRecipes"
import Collections from "./Collections"
import Bookmarked from "./Bookmarks"
import Commented from "./Comments"

export default function MenuSwitcher() {
    const [selectedMenu, setSelectedMenu] = useState('List')

    const renderComponent = () => {
        switch(selectedMenu) {
            case 'List':
                return <List />
            case 'Collections':
                return <Collections />
            case 'My Recipes':
                return <MyRecipes />
             case 'Commented':
                return <Commented />
            // case 'Liked':
            //     return <Liked />
            case 'Bookmarked':
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