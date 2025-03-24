import Image from "next/image";

export default function MainContent(){
    return (
        <div className="px-16">
            <div id="imageSection" className="w-full h-[260px] relative mb-12 rounded-[10px] overflow-hidden">
                <Image
                    src="/images/home/change.jpg"
                    alt="Delicious food background"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-black/60" />
                <div className="flex flex-col items-center justify-center relative z-10 text-white h-full">
                    <h1 className="text-4xl font-bold">Discover New Recipes</h1>
                    <p className="mt-2">Explore a wide range of cuisines and ingredients to create your next masterpiece.</p>
                </div>
            </div>
        </div>
    );
}