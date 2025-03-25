import Image from "next/image";

export default function Trending () {
    return (
        <>
            <div className="flex items-center w-full h-15 mt-25">
                <h2 className="text-[20px]">Trending Recipes</h2>
            </div>
            <div className="flex mb-10 h-[352px] gap-4">
                {/* ======================== IMAGE STYLE 1 ======================== */}
                <div className="w-1/4 h-full rounded-[15px] relative overflow-hidden">
                    <Image
                        src="/images/home/recipe1.jpg"
                        alt="Delicious food"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
                {/* ======================== IMAGE STYLE 2 ======================== */}
                <div className="flex flex-col w-1/4 bg-white gap-4">
                    <div className="w-full h-[60%] rounded-[15px] relative overflow-hidden">
                        <Image
                            src="/images/home/smallrecipe3.jpg"
                            alt="Delicious food"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                    <div className="w-full h-[40%] rounded-[15px] relative overflow-hidden">
                        <Image
                            src="/images/home/smallrecipe2.jpg"
                            alt="Delicious food"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                </div>
                {/* ======================== IMAGE STYLE 3 ======================== */}
                <div className="w-1/4 h-full rounded-[15px] relative overflow-hidden">
                    <Image
                        src="/images/home/recipe2.jpg"
                        alt="Delicious food"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
                {/* ======================== IMAGE STYLE 2 ======================== */}
                <div className="flex flex-col w-1/4 bg-white gap-4">
                    <div className="w-full h-[40%] rounded-[15px] relative overflow-hidden">
                        <Image
                            src="/images/home/smallrecipe3.jpg"
                            alt="Delicious food"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                    <div className="w-full h-[60%] rounded-[15px] relative overflow-hidden">
                        <Image
                            src="/images/home/smallrecipe4.jpg"
                            alt="Delicious food"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                </div>
            </div>
        </>
    );
}