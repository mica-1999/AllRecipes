import ImageContainer from "@/app/components/frontPage/home/ImageContainer";
import Trending from "@/app/components/frontPage/home/Trending";
import TopRated from "@/app/components/frontPage/home/TopRated";
import Subscribe from "@/app/components/frontPage/home/Subscribe";

export default function HomePage(){
    return(
        <>
            <div className="px-16">
                <ImageContainer />
                <Trending />
                <TopRated />
                <Subscribe />
            </div>
        </>
    );

}