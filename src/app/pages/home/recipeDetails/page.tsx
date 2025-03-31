import RecipeInfo from "@/app/components/frontPage/recipeDetails/RecipeInfo"
import Commentary from "@/app/components/frontPage/recipeDetails/CommentsBtn"

export default function ProfilePage () {
    return (
        <div className="px-12 py-10">
            <RecipeInfo />
            <Commentary />
        </div>
    )
}