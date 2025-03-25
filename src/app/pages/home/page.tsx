import ImageContainer from "@/app/components/frontPage/home/ImageContainer";
import Trending from "@/app/components/frontPage/home/Trending";
import TopRated from "@/app/components/frontPage/home/TopRated";
import Subscribe from "@/app/components/frontPage/home/Subscribe";
import RecipeOfDay from "@/app/components/frontPage/home/RecipeofDay";
import SeasonalRecipes from "@/app/components/frontPage/home/SeasonalRecipes";

export default function HomePage(){
    return(
        <>
            <div className="px-16">
                <ImageContainer />
                <RecipeOfDay />
                <Trending />
                <TopRated />
                <SeasonalRecipes />
                <Subscribe />
            </div>
        </>
    );

}