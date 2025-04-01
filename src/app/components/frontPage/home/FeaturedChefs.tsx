import Image from "next/image";
import { chefs } from "@/app/dataItems/HomeData";

export default function FeaturedChefs() {
    return (
        <>
            <div className="flex items-center justify-between w-full">
                <h2 className="text-[20px] font-medium dark:text-slate-200">Featured Chefs</h2>
                <div className="flex items-center gap-2 ml-3">
                    <button className="font-semibold cursor-pointer text-[#FF6B35] hover:text-[#e55a29] dark:text-indigo-400 dark:hover:text-indigo-300 transition-colors">View All</button>
                    <i className="ri-arrow-right-s-line text-xl text-[#FF6B35] dark:text-indigo-400 cursor-pointer"></i>
                </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 w-full gap-6 mt-7 mb-20">
                {chefs.map((chef) => (
                    <div key={chef.id} className="bg-white dark:bg-gray-800 rounded-[15px] overflow-hidden shadow-sm hover:shadow-md dark:shadow-md dark:shadow-black/30 dark:hover:shadow-lg dark:hover:shadow-black/40 transition-shadow">
                        <div className="relative h-[280px] w-full">
                            <Image
                                src={chef.image}
                                alt={chef.name}
                                fill
                                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 50vw, 25vw"
                                className="object-cover"
                            />
                            {/* Optional subtle overlay for dark mode */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 dark:opacity-30"></div>
                        </div>
                        <div className="p-4">
                            <h3 className="text-lg font-medium dark:text-white">{chef.name}</h3>
                            <p className="text-gray-600 dark:text-gray-300 text-sm">{chef.specialty}</p>
                            <div className="flex justify-between mt-4 text-sm dark:text-gray-300">
                                <span>{chef.recipes} Recipes</span>
                                <span>{chef.followers} Followers</span>
                            </div>
                            <button className="w-full mt-4 bg-[#FF6B35] hover:bg-[#e55a29] dark:bg-indigo-600 dark:hover:bg-indigo-500 text-white py-2 rounded-[5px] transition-colors cursor-pointer">
                                View Profile
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}