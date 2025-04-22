export default function RecipeComments() {
    return (
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 max-w-5xl mx-auto my-6">
            <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">Recipe Comments</h2>

            {/* Add Comment Form */}
            <div className="mb-8">
                <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                        <i className="ri-user-line text-blue-500 dark:text-blue-400"></i>
                    </div>
                    <div className="flex-grow">
                        <textarea
                            className="w-full border border-gray-200 dark:border-gray-700 rounded-lg p-3 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200"
                            rows={3}
                            placeholder="Share your thoughts about this recipe..."
                        ></textarea>
                        <button className="mt-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md cursor-pointer transition duration-200 ease-in-out">
                            Post Comment
                        </button>
                    </div>
                </div>
            </div>

            {/* Example Comments */}
            <div className="space-y-6">
                {/* Comment 1 */}
                <div className="border-b border-gray-100 dark:border-gray-700 pb-6">
                    <div className="flex items-center gap-3 mb-2">
                        <div className="w-10 h-10 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
                            <i className="ri-user-smile-line text-purple-500 dark:text-purple-400"></i>
                        </div>
                        <div>
                            <h4 className="font-medium text-gray-900 dark:text-white">Samantha Johnson</h4>
                            <p className="text-sm text-gray-500">3 days ago</p>
                        </div>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 ml-13 pl-10">
                        I made this recipe last weekend and it was a hit with my family! I added a little extra garlic because we love garlic, and it was perfect. Will definitely make again.
                    </p>
                    <div className="mt-3 flex items-center gap-4 ml-13 pl-10">
                        <button className="text-sm text-gray-500 hover:text-blue-500 flex items-center gap-1">
                            <i className="ri-thumb-up-line"></i> Like (12)
                        </button>
                        <button className="text-sm text-gray-500 hover:text-blue-500 flex items-center gap-1">
                            <i className="ri-reply-line"></i> Reply
                        </button>
                    </div>
                </div>

                {/* Comment 2 */}
                <div className="border-b border-gray-100 dark:border-gray-700 pb-6">
                    <div className="flex items-center gap-3 mb-2">
                        <div className="w-10 h-10 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                            <i className="ri-user-line text-green-500 dark:text-green-400"></i>
                        </div>
                        <div>
                            <h4 className="font-medium text-gray-900 dark:text-white">Michael Chen</h4>
                            <p className="text-sm text-gray-500">1 week ago</p>
                        </div>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 ml-13 pl-10">
                        This recipe was incredible! I substituted the chicken with tofu for a vegetarian version and it worked beautifully. The flavors were still amazing!
                    </p>
                    <div className="mt-3 flex items-center gap-4 ml-13 pl-10">
                        <button className="text-sm text-gray-500 hover:text-blue-500 flex items-center gap-1">
                            <i className="ri-thumb-up-line"></i> Like (8)
                        </button>
                        <button className="text-sm text-gray-500 hover:text-blue-500 flex items-center gap-1">
                            <i className="ri-reply-line"></i> Reply
                        </button>
                    </div>
                </div>

                {/* Load More Comments */}
                <div className="text-center">
                    <button className="text-blue-500 hover:text-blue-600 font-medium cursor-pointer">
                        Load More Comments
                    </button>
                </div>
            </div>
        </div>
    );
}