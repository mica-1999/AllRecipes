import Image from "next/image";
import { collectionsData } from "@/app/data/MyListData";

export default function Collections() {
    return(
        <>
            <div className="flex flex-wrap w-full h-full mb-15">
                    {collectionsData.map((collection) => (
                        <div 
                            key={collection.id}
                            className="relative flex w-1/2 h-64 overflow-hidden cursor-pointer"
                        >
                            <div className="absolute inset-0 w-full h-full">
                                <Image 
                                    src={collection.imageUrl} 
                                    alt={collection.title}
                                    fill
                                    style={{
                                        objectFit: 'cover',
                                        opacity: 0.7
                                    }}
                                    priority
                                />
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                            <div className="relative z-10 flex items-center justify-center w-full h-full">
                                <h1 className="text-white text-xl font-bold ">{collection.title}</h1>
                            </div>
                        </div>
                    ))}
            </div>
        </>
    )
}