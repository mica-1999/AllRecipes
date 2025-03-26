import Image from "next/image";

// Sample comments data
const commentsData = [
    {
        id: 1,
        userName: "Maria Johnson",
        userImage: "/images/home/seasonal/autumn1.jpg",
        time: "2 hours ago",
        recipeImage: "/images/home/trending/trending1.jpg",
        recipeName: "Mom's Special Pasta",
        date: "May 10, 2024",
        likes: 24,
        comment: "This recipe reminds me of my childhood! I added a bit more garlic and it was perfect."
    },
    {
        id: 2,
        userName: "David Chen",
        userImage: "/images/home/seasonal/autumn2.jpg",
        time: "Yesterday",
        recipeImage: "/images/home/trending/trending2.jpg",
        recipeName: "Grandma's Cookies",
        date: "May 8, 2024",
        likes: 15,
        comment: "These cookies are incredible! I've made them three times already and they always turn out great."
    },
    {
        id: 3,
        userName: "Sophie Williams",
        userImage: "/images/home/seasonal/autumn3.jpg",
        time: "3 days ago",
        recipeImage: "/images/home/trending/trending3.jpg",
        recipeName: "Dad's BBQ",
        date: "May 5, 2024",
        likes: 32,
        comment: "The marinade is a game changer! Everyone at our family gathering loved it."
    }
];

export default function Comments() {
    return (
        <div className="w-full bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100">
            <div className="px-5 py-4 bg-gray-50 border-b border-gray-200">
                <h2 className="text-lg font-semibold text-gray-800">Recent Comments</h2>
                <p className="text-sm text-gray-500">Your activity on recipes</p>
            </div>
            
            <div className="divide-y divide-gray-100">
                {commentsData.map((comment) => (
                    <div key={comment.id} className="p-5 hover:bg-gray-50 transition-colors duration-150">
                        <div className="flex items-start">
                            {/* User Profile */}
                            <div className="flex-shrink-0">
                                <div className="w-12 h-12 rounded-full relative overflow-hidden shadow-sm border border-gray-200">
                                    <Image 
                                        src={comment.userImage}
                                        alt={`${comment.userName} profile`}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>
                            
                            {/* Comment Content */}
                            <div className="ml-4 flex-1">
                                {/* User Info and Time */}
                                <div className="flex items-center justify-between mb-2">
                                    <div className="flex items-center">
                                        <h3 className="font-medium text-gray-800">{comment.userName}</h3>
                                        <span className="ml-2 text-xs text-gray-500">{comment.time}</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <button className="p-1.5 rounded-full hover:bg-gray-100 text-gray-600 hover:text-blue-500 transition-colors">
                                            <i className="ri-heart-line text-sm"></i>
                                        </button>
                                        <button className="p-1.5 rounded-full hover:bg-gray-100 text-gray-600 hover:text-[#FF6B35] transition-colors">
                                            <i className="ri-reply-line text-sm"></i>
                                        </button>
                                        <button className="p-1.5 rounded-full hover:bg-gray-100 text-gray-600 hover:text-red-500 transition-colors">
                                            <i className="ri-delete-bin-line text-sm"></i>
                                        </button>
                                    </div>
                                </div>
                                
                                {/* Comment Text */}
                                <p className="text-sm text-gray-700 mb-3">{comment.comment}</p>
                                
                                {/* Recipe Reference */}
                                <div className="flex items-center bg-gray-50 p-2 rounded-lg">
                                    <div className="w-16 h-16 rounded-lg relative overflow-hidden shadow-sm">
                                        <Image 
                                            src={comment.recipeImage}
                                            alt={comment.recipeName}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <div className="ml-3">
                                        <h4 className="font-medium text-gray-800 text-sm">{comment.recipeName}</h4>
                                        <div className="flex items-center mt-1 gap-3">
                                            <span className="text-xs text-gray-500">{comment.date}</span>
                                            <div className="flex items-center text-xs text-gray-500">
                                                <i className="ri-heart-fill text-red-400 mr-1"></i>
                                                <span>{comment.likes}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            
            {/* Footer with Load More Button */}
            <div className="bg-gray-50 px-5 py-3 border-t border-gray-200 mb-20">
                <button className="w-full py-2 bg-white border border-gray-200 rounded-lg text-sm text-gray-700 font-medium hover:bg-gray-100 transition-colors flex items-center justify-center">
                    <i className="ri-refresh-line mr-1.5"></i>
                    Load More Comments
                </button>
            </div>
        </div>
    );
}