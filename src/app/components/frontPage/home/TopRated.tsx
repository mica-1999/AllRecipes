import Image from "next/image";
const images = ["rated1.jpg", "rated2.jpg", "rated3.jpg", "rated4.jpg", "rated5.jpg"];

export default function TopRated () {
    return (
        <>
            <div className="flex items-center justify-between w-full h-15">
                <h2 className="text-[20px]">Top-Rated Recipes</h2>
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
            <div className="hidden lg:flex w-full h-[294px] mb-15 gap-4">
                {images.map((_, i) => (
                    <div className="w-1/5 h-full bg-[#D3D3D3] rounded-[15px] relative overflow-hidden p-3" key={i}>
                        <div className="w-full h-[70%] rounded-[15px] relative overflow-hidden">
                            <Image
                                src={`/images/home/toprated/${images[i]}`}
                                alt="Delicious food"
                                fill
                                className="object-cover"
                                priority
                            />
                            <div className="flex justify-between px-3 items-center absolute top-4 w-full">
                                <div className="flex justify-center items-center w-[43px] h-[28px] bg-black text-white rounded-[20px]">
                                    <p className="text-[12px]">9.5</p>
                                </div>
                                <div className="flex justify-center items-center w-[28px] h-[28px] bg-black text-white rounded-[20px]">
                                    <i className="ri-heart-fill"></i>
                                </div>
                                
                            </div>
                        </div>
                        <div className="flex flex-col w-full h-[40%]">
                            <h2 className="text-[16px] mt-2">Recipe Title</h2>
                            <p className="text-[14px] font-light">Category</p>
                            <div className="flex w-full items-center justify-between">
                                <h2 className="text-[16px] font-bold mt-2">Random Description</h2>
                                <i className="ri-arrow-right-s-line text-xl"></i>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="lg:hidden flex w-full h-[294px] mb-15 gap-4 overflow-x-auto pb-2">
                {images.map((_, i) => (
                    <div className="w-[250px] flex-shrink-0 h-full bg-[#D3D3D3] rounded-[15px] relative overflow-hidden p-3" key={i}>
                        <div className="w-full h-[70%] rounded-[15px] relative overflow-hidden">
                            <Image
                                src={`/images/home/toprated/${images[i]}`}
                                alt="Delicious food"
                                fill
                                className="object-cover"
                                priority
                            />
                            <div className="flex justify-between px-3 items-center absolute top-4 w-full">
                                <div className="flex justify-center items-center w-[43px] h-[28px] bg-black text-white rounded-[20px]">
                                    <p className="text-[12px]">9.5</p>
                                </div>
                                <div className="flex justify-center items-center w-[28px] h-[28px] bg-black text-white rounded-[20px]">
                                    <i className="ri-heart-fill"></i>
                                </div>
                                
                            </div>
                        </div>
                        <div className="flex flex-col w-full h-[40%]">
                            <h2 className="text-[16px] mt-2">Recipe Title</h2>
                            <p className="text-[14px] font-light">Category</p>
                            <div className="flex w-full items-center justify-between">
                                <h2 className="text-[16px] font-bold mt-2">Random Description</h2>
                                <i className="ri-arrow-right-s-line text-xl"></i>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}