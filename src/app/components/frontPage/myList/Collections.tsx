import Image from "next/image";

export default function Collections() {
    // This array will be moved to a data source when implementing dynamic content
    const collectionsData = [
        { id: 1, title: "Collections #1", imageUrl: "/images/home/seasonal/autumn1.jpg" },
        { id: 2, title: "Collections #2", imageUrl: "/images/home/seasonal/autumn2.jpg" },
        { id: 3, title: "Collections #3", imageUrl: "/images/home/seasonal/spring3.jpg" },
        { id: 4, title: "Collections #4", imageUrl: "/images/home/seasonal/spring2.jpg" },
    ];

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