import Image from "next/image";
import BasicFilter from "@/app/components/frontPage/home/BasicFilter";

export default function ImageContainer(){
    return (
        <div id="imageSection" className="w-full h-[260px] relative mb-12 rounded-[15px]">
            <Image
                src="/images/home/change.jpg"
                alt="Delicious food background"
                fill
                className="object-cover rounded-[15px]"
                priority
            />
            <div className="absolute inset-0 bg-black/60 rounded-[15px]" />
            <div className="flex flex-col items-center justify-center relative z-10 text-white h-full">
                <h1 className="text-4xl font-bold">Discover New Recipes</h1>
                <p className="mt-2">Explore a wide range of cuisines and ingredients to create your next masterpiece.</p>
                <div id="filterSection" className="w-[68%] h-22 bg-[#D3D3D3] rounded-[60px] absolute -bottom-11 left-1/2 -translate-x-1/2 flex items-center z-20">
                    <BasicFilter />
                </div>
            </div>
        </div>
    );
}