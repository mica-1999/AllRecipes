import Image from "next/image";
import { chefs } from "@/app/dataItems/HomeData";

export default function FeaturedChefs () {
    return(
        <>
            <div className="flex items-center justify-between w-full">
                <h2 className="text-[20px] font-medium">Featured Chefs</h2>
                <div className="flex items-center gap-2 ml-3">
                    <button className="font-semibold cursor-pointer text-[#FF6B35] hover:text-[#e55a29] transition-colors">View All</button>
                    <i className="ri-arrow-right-s-line text-xl text-[#FF6B35] cursor-pointer"></i>
                </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 w-full gap-6 mt-7 mb-20">
                {chefs.map((chef) => (
                    <div key={chef.id} className="bg-white rounded-[15px] overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                        <div className="relative h-[280px] w-full">
                            <Image
                                src={chef.image}
                                alt={chef.name}
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="p-4">
                            <h3 className="text-lg font-medium">{chef.name}</h3>
                            <p className="text-gray-600 text-sm">{chef.specialty}</p>
                            <div className="flex justify-between mt-4 text-sm">
                                <span>{chef.recipes} Recipes</span>
                                <span>{chef.followers} Followers</span>
                            </div>
                            <button className="w-full mt-4 bg-[#FF6B35] hover:bg-[#e55a29] text-white py-2 rounded-[5px] transition-colors cursor-pointer">
                                View Profile
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}