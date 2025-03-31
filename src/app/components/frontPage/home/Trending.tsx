import Image from "next/image";

export default function Trending () {
    return (
        <>
            <div className="flex items-center justify-between w-full h-15 mt-15">
                <h2 className="text-[20px]">Trending Recipes</h2>
                <div className="flex items-center gap-4">
                    {/* View All button */}
                    <div className="flex items-center gap-2">
                        {/* Left arrow button */}
                        <button className="w-[40px] h-[40px] bg-black hover:bg-[#FF6B35] rounded-full flex items-center justify-center cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M15 18l-6-6 6-6"/>
                            </svg>
                        </button>
                        {/* Right arrow button */}
                        <button className="w-[40px] h-[40px] bg-black hover:bg-[#FF6B35] rounded-full flex items-center justify-center cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M9 18l6-6-6-6"/>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            
            {/* Desktop view (hidden on small screens) */}
            <div className="hidden lg:flex mb-10 h-[352px] gap-4">
                <div className="w-1/4 h-full rounded-[15px] relative overflow-hidden">
                    <Image
                        src="/images/home/trending/trending1.jpg"
                        alt="Delicious food"
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                        className="object-cover"
                        priority
                    />
                </div>
                <div className="flex flex-col w-1/4 bg-white gap-4">
                    <div className="w-full h-[60%] rounded-[15px] relative overflow-hidden">
                        <Image
                            src="/images/home/trending/trending2.jpg"
                            alt="Delicious food"
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                            className="object-cover"
                            priority
                        />
                    </div>
                    <div className="w-full h-[40%] rounded-[15px] relative overflow-hidden">
                        <Image
                            src="/images/home/trending/trending3.jpg"
                            alt="Delicious food"
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                            className="object-cover"
                            priority
                        />
                    </div>
                </div>
                <div className="w-1/4 h-full rounded-[15px] relative overflow-hidden">
                    <Image
                        src="/images/home/trending/trending4.jpg"
                        alt="Delicious food"
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                        className="object-cover"
                        priority
                    />
                </div>
                <div className="flex flex-col w-1/4 bg-white gap-4">
                    <div className="w-full h-[40%] rounded-[15px] relative overflow-hidden">
                        <Image
                            src="/images/home/trending/trending5.jpg"
                            alt="Delicious food"
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                            className="object-cover"
                            priority
                        />
                    </div>
                    <div className="w-full h-[60%] rounded-[15px] relative overflow-hidden">
                        <Image
                            src="/images/home/trending/trending6.jpg"
                            alt="Delicious food"
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                            className="object-cover"
                            priority
                        />
                    </div>
                </div>
            </div>
            
            {/* Mobile view (hidden on medium screens and up) */}
            <div className="lg:hidden overflow-x-auto mb-10">
                <div className="flex gap-4 w-max">
                    {[1, 2, 3, 4, 5 , 6].map((recipe) => (
                        <div key={recipe} className="w-[280px] h-[320px] flex-shrink-0 rounded-[15px] relative overflow-hidden">
                            <Image
                                src={`/images/home/trending/trending${recipe}.jpg`}
                                alt="Delicious food"
                                fill
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                                className="object-cover"
                                priority
                            />
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}