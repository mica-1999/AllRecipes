import Image from "next/image";
const images = ["rated1.jpg", "rated2.jpg", "rated3.jpg", "rated4.jpg", "rated5.jpg"];

export default function TopRated () {
    return (
        <>
            <div className="flex items-center w-full h-15">
                <h2 className="text-[20px]">Top-Rated Recipes</h2>
            </div>
            <div className="flex w-full h-[294px] mb-15 gap-4">
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