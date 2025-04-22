"use client"
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useTheme } from "@/app/context/ThemeContext";
import { Comment, LikedComment } from "@/app/types/recipe";
import { showToast } from "../../reusable/Toasters";

export default function Comments({ likedComments, comments, searchBox, setSearchBox }: { likedComments: LikedComment[], comments: Comment[], searchBox: string, setSearchBox: (value: string) => void }) {

    // State variables & hooks
    const { t, savedTheme } = useTheme();
    const [activeTab, setActiveTab] = useState<'my' | 'liked'>('my');
    const [hoveredItemId, setHoveredItemId] = useState<number | null>(null);
    const [filteredComments, setFilteredComments] = useState<Comment[]>([]);
    const [filteredLikedComments, setFilteredLikedComments] = useState<LikedComment[]>([]);

    useEffect(() => {
        // Filter comments based on search query
        setFilteredComments(
            comments.filter((comment) =>
                comment.content.toLowerCase().includes(searchBox.toLowerCase()) ||
                comment.Recipe?.title.toLowerCase().includes(searchBox.toLowerCase())
            )
        );

        // Filter liked comments based on search query
        setFilteredLikedComments(
            likedComments.filter((likedComment) =>
                likedComment.Comment.content.toLowerCase().includes(searchBox.toLowerCase()) ||
                likedComment.Comment.Recipe?.title.toLowerCase().includes(searchBox.toLowerCase())
            )
        );
    }, [comments, likedComments, searchBox]);

    // Function to format date
    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return date.toLocaleDateString();
    };

    const handleDelete = async (id: number) => {
        try {
            const response = await fetch(`/api/myList/comments/myComments?commentId=${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                }
            });

            if (!response.ok && response.status !== 404) {
                showToast('error', t('myList.comments.notFound') || "Comment not found", savedTheme);
                return;
            }

            setFilteredComments(prevComments =>
                prevComments.filter(comment => comment.id !== id)
            );

            showToast('success', t('myList.comments.deleted') || "Comment deleted successfully", savedTheme);
        } catch (error) {
            console.error("Error deleting comment:", error);
            showToast('error', t('myList.comments.deleteError') || "Error deleting comment", savedTheme);
        }
    };

    const handleUnlike = async (id: number) => {
        try {
            const response = await fetch(`/api/myList/comments/likedComments?likedCommentId=${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                }
            });

            if (!response.ok) {
                showToast('error', t('myList.comments.unlikeError') || "Error removing like from comment", savedTheme);
                return;
            }

            setFilteredLikedComments(prevComments =>
                prevComments.filter(comment => comment.commentid !== id)
            );

            showToast('success', t('myList.comments.unliked') || "Comment unliked successfully", savedTheme);

        } catch (error) {
            console.error("Error unliking comment:", error);
            showToast('error', t('myList.comments.unlikeError') || "Error removing like from comment", savedTheme);
        }
    };

    // Determine which comments to display based on active tab
    const isEmptyResults = activeTab === 'my' ? filteredComments.length === 0 : filteredLikedComments.length === 0;

    return (
        <>
            <div className="py-2 mb-10">
                <div className="flex items-center justify-between mb-6 px-6">
                    <h2 className="text-xl font-semibold text-gray-800 dark:text-white flex items-center">
                        <span className="bg-amber-100 dark:bg-amber-900/20 p-2 rounded-lg mr-2">
                            <i className="ri-chat-3-fill text-amber-600 dark:text-amber-400"></i>
                        </span>
                        {activeTab === 'my'
                            ? t('myList.comments.myComments')
                            : t('myList.comments.likedComments')}
                        <span className="ml-3 text-sm font-normal text-gray-500 dark:text-gray-400">
                            ({activeTab === 'my' ? comments.length : likedComments.length})
                        </span>
                    </h2>
                    <div className="inline-flex bg-gray-100 dark:bg-gray-700 rounded-lg p-1 gap-1">
                        <button
                            onClick={() => setActiveTab('my')}
                            className={`px-4 py-1.5 rounded-md text-sm font-medium transition-colors cursor-pointer ${activeTab === 'my'
                                ? 'bg-white dark:bg-gray-600 text-gray-800 dark:text-white shadow-sm dark:shadow-black/10'
                                : 'text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white'
                                }`}
                        >
                            {t('myList.comments.myComments')}
                        </button>
                        <button
                            onClick={() => setActiveTab('liked')}
                            className={`px-4 py-1.5 rounded-md text-sm font-medium transition-colors cursor-pointer ${activeTab === 'liked'
                                ? 'bg-white dark:bg-gray-600 text-gray-800 dark:text-white shadow-sm dark:shadow-black/10'
                                : 'text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white'
                                }`}
                        >
                            {t('myList.comments.likedComments')}
                        </button>
                    </div>
                </div>

                {/* Show empty state if no comments match */}
                {isEmptyResults ? (
                    <div className="w-full py-16 flex flex-col items-center justify-center">
                        <div className="p-6 bg-amber-100 dark:bg-amber-900/20 rounded-full mb-4">
                            {activeTab === 'my'
                                ? (comments.length === 0
                                    ? <i className="ri-chat-off-line text-3xl text-amber-600 dark:text-amber-400"></i>
                                    : <i className="ri-search-line text-3xl text-amber-600 dark:text-amber-400"></i>)
                                : (likedComments.length === 0
                                    ? <i className="ri-heart-2-line text-3xl text-amber-600 dark:text-amber-400"></i>
                                    : <i className="ri-search-line text-3xl text-amber-600 dark:text-amber-400"></i>)
                            }
                        </div>
                        <p className="text-gray-700 dark:text-gray-200 font-medium">
                            {activeTab === 'my'
                                ? (comments.length === 0
                                    ? t('myList.noComments') || "You haven't commented on any recipes yet"
                                    : t('myList.noMatchingComments') || "No comments match your search")
                                : (likedComments.length === 0
                                    ? t('myList.noLikedComments') || "You haven't liked any comments yet"
                                    : t('myList.noMatchingLikedComments') || "No liked comments match your search")
                            }
                        </p>
                        <p className="text-sm text-gray-500 dark:text-gray-400 max-w-sm text-center mt-2">
                            {activeTab === 'my'
                                ? (comments.length === 0
                                    ? t('myList.commentsDescription') || "Share your thoughts on recipes by leaving comments"
                                    : t('myList.tryAnotherSearch') || "Try a different search term or clear your search")
                                : (likedComments.length === 0
                                    ? t('myList.likedCommentsDescription') || "Like comments from other users to save them here"
                                    : t('myList.tryAnotherSearch') || "Try a different search term or clear your search")
                            }
                        </p>
                        {activeTab === 'my' && comments.length === 0 ? (
                            <Link
                                href="/pages/home/advancedFilters"
                                className="mt-6 px-4 py-2 bg-amber-600 hover:bg-amber-700 dark:bg-amber-600 dark:hover:bg-amber-700 text-white rounded-lg transition-colors flex items-center gap-2"
                            >
                                <i className="ri-search-line"></i>
                                {t('myList.browseRecipes') || "Browse Recipes"}
                            </Link>
                        ) : activeTab === 'liked' && likedComments.length === 0 ? (
                            <Link
                                href="/pages/home/advancedFilters"
                                className="mt-6 px-4 py-2 bg-amber-600 hover:bg-amber-700 dark:bg-amber-600 dark:hover:bg-amber-700 text-white rounded-lg transition-colors flex items-center gap-2"
                            >
                                <i className="ri-search-line"></i>
                                {t('myList.exploreComments') || "Explore Comments"}
                            </Link>
                        ) : (
                            <button
                                onClick={() => setSearchBox("")}
                                className="mt-6 px-4 py-2 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-800 dark:text-white rounded-lg transition-colors flex items-center gap-2 cursor-pointer"
                            >
                                <i className="ri-close-line"></i>
                                {t('myList.clearSearch')}
                            </button>
                        )}
                    </div>
                ) : (
                    <div className="px-6">
                        <div className="space-y-4">
                            {/* Display user's own comments */}
                            {activeTab === 'my' && filteredComments.map((comment) => (
                                <div
                                    key={comment.id}
                                    className={`relative bg-white dark:bg-gray-800 rounded-xl p-4 transition-all duration-300 cursor-pointer ${hoveredItemId === comment.id
                                        ? 'shadow-md transform -translate-y-1'
                                        : 'shadow-sm'
                                        }`}
                                    onMouseEnter={() => setHoveredItemId(comment.id)}
                                    onMouseLeave={() => setHoveredItemId(null)}
                                >
                                    {/* Comment Header with User Info */}
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center">
                                            <div className="w-10 h-10 rounded-full overflow-hidden relative">
                                                <Image
                                                    src="/images/home/profile/defaulticon.png" // Placeholder image
                                                    alt={comment.User?.username || "User"}
                                                    fill
                                                    sizes="40px" // Added sizes for the 40px (w-10 h-10) avatar
                                                    className="object-cover"
                                                />
                                            </div>
                                            <div className="ml-3">
                                                <div className="flex items-center">
                                                    <h4 className="font-medium text-gray-800 dark:text-white text-sm">
                                                        {comment.User?.username || "Anonymous"}
                                                    </h4>
                                                    <span className="ml-2 text-xs text-gray-500 dark:text-gray-400">
                                                        {formatDate(comment.createdat.toString())}
                                                    </span>
                                                </div>
                                                <a href="#" className="text-xs text-amber-600 dark:text-amber-400 hover:underline">
                                                    {t('myList.comments.profile')}
                                                </a>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <button
                                                className="p-1.5 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 
                                                          text-gray-600 dark:text-gray-400 hover:text-red-500 dark:hover:text-red-400 transition-colors cursor-pointer"
                                                title={t('myList.comments.delete')}
                                                onClick={() => handleDelete(comment.id)}
                                            >
                                                <i className="ri-delete-bin-line text-sm"></i>
                                            </button>
                                            <button
                                                className="p-1.5 rounded-full hover:bg-gray-100 dark:hover:bg-gray-600 
                                                          text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors cursor-pointer"
                                                title={t('myList.comments.reply')}
                                            >
                                                <i className="ri-reply-line text-sm"></i>
                                            </button>
                                        </div>
                                    </div>

                                    {/* Comment Text */}
                                    <p className="text-sm text-gray-700 dark:text-gray-300 my-3">{comment.content}</p>

                                    {/* Recipe Reference */}
                                    <div className="flex items-center bg-gray-50 dark:bg-gray-700 p-2 rounded-lg">
                                        <div className="w-16 h-16 rounded-lg relative overflow-hidden shadow-sm dark:shadow-black/30">
                                            <Image
                                                src={comment.Recipe?.image || "/images/recipe-placeholder.jpg"}
                                                alt={comment.Recipe?.title || "Recipe"}
                                                fill
                                                sizes="64px" // Added sizes for the 64px (w-16 h-16) recipe thumbnail
                                                className="object-cover"
                                            />
                                        </div>
                                        <div className="ml-3">
                                            <h4 className="font-medium text-gray-800 dark:text-white text-sm">
                                                {comment.Recipe?.title || "Recipe"}
                                            </h4>
                                            <div className="flex items-center mt-1 gap-3">
                                                <span className="text-xs text-gray-500 dark:text-gray-400">
                                                    {formatDate(comment.createdat.toString())}
                                                </span>
                                                {comment.Recipe?.rating && (
                                                    <div className="flex items-center text-xs text-gray-500 dark:text-gray-400">
                                                        <i className="ri-star-fill text-amber-400 dark:text-amber-400/90 mr-1"></i>
                                                        <span>{comment.Recipe.rating}</span>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}

                            {/* Display liked comments */}
                            {activeTab === 'liked' && filteredLikedComments.map((likedComment) => (
                                <div
                                    key={likedComment.id}
                                    className={`relative bg-white dark:bg-gray-800 rounded-xl p-4 transition-all duration-300 cursor-pointer ${hoveredItemId === likedComment.id
                                        ? 'shadow-md transform -translate-y-1'
                                        : 'shadow-sm'
                                        }`}
                                    onMouseEnter={() => setHoveredItemId(likedComment.id)}
                                    onMouseLeave={() => setHoveredItemId(null)}
                                >
                                    {/* Comment Header with User Info */}
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center">
                                            <div className="w-10 h-10 rounded-full overflow-hidden relative">
                                                <Image
                                                    src="/images/home/profile/defaulticon.png" // Placeholder image
                                                    alt={likedComment.Comment.User?.username || "User"}
                                                    fill
                                                    sizes="40px" // Added sizes for the 40px (w-10 h-10) avatar
                                                    className="object-cover"
                                                />
                                            </div>
                                            <div className="ml-3">
                                                <div className="flex items-center">
                                                    <h4 className="font-medium text-gray-800 dark:text-white text-sm">
                                                        {likedComment.Comment.User?.username || "Anonymous"}
                                                    </h4>
                                                    <span className="ml-2 text-xs text-gray-500 dark:text-gray-400">
                                                        {formatDate(likedComment.Comment.createdat.toString())}
                                                    </span>
                                                </div>
                                                <a href="#" className="text-xs text-amber-600 dark:text-amber-400 hover:underline">
                                                    {t('myList.comments.profile')}
                                                </a>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <button
                                                className="p-1.5 rounded-full hover:bg-gray-100 dark:hover:bg-gray-600 
                                                        text-amber-500 dark:text-amber-400 transition-colors cursor-pointer"
                                                title={t('myList.comments.unlike')}
                                                onClick={() => handleUnlike(likedComment.commentid)}
                                            >
                                                <i className="ri-heart-fill text-sm"></i>
                                            </button>
                                            <button
                                                className="p-1.5 rounded-full hover:bg-gray-100 dark:hover:bg-gray-600 
                                                        text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors cursor-pointer"
                                                title={t('myList.comments.reply')}
                                            >
                                                <i className="ri-reply-line text-sm"></i>
                                            </button>
                                        </div>
                                    </div>

                                    {/* Comment Text */}
                                    <p className="text-sm text-gray-700 dark:text-gray-300 my-3">{likedComment.Comment.content}</p>

                                    {/* Recipe Reference */}
                                    <div className="flex items-center bg-gray-50 dark:bg-gray-700 p-2 rounded-lg">
                                        <div className="w-16 h-16 rounded-lg relative overflow-hidden shadow-sm dark:shadow-black/30">
                                            <Image
                                                src={likedComment.Comment.Recipe?.image || "/images/recipe-placeholder.jpg"}
                                                alt={likedComment.Comment.Recipe?.title || "Recipe"}
                                                fill
                                                sizes="64px" // Added sizes for the 64px (w-16 h-16) recipe thumbnail
                                                className="object-cover"
                                            />
                                        </div>
                                        <div className="ml-3">
                                            <h4 className="font-medium text-gray-800 dark:text-white text-sm">
                                                {likedComment.Comment.Recipe?.title || "Recipe"}
                                            </h4>
                                            <div className="flex items-center mt-1 gap-3">
                                                <span className="text-xs text-gray-500 dark:text-gray-400">
                                                    <i className="ri-heart-fill text-amber-400 mr-1"></i>
                                                    {formatDate(likedComment.likedAt)}
                                                </span>
                                                {likedComment.Comment.Recipe?.rating && (
                                                    <div className="flex items-center text-xs text-gray-500 dark:text-gray-400">
                                                        <i className="ri-star-fill text-amber-400 dark:text-amber-400/90 mr-1"></i>
                                                        <span>{likedComment.Comment.Recipe.rating}</span>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* "Load More" button */}
                        {(activeTab === 'my' && filteredComments.length > 3 ||
                            activeTab === 'liked' && filteredLikedComments.length > 3) && (
                                <div className="flex justify-center mt-8">
                                    <button className="px-5 py-2 bg-amber-100 dark:bg-amber-900/20 text-amber-600 dark:text-amber-400 rounded-lg hover:bg-amber-200 dark:hover:bg-amber-800/30 transition-colors cursor-pointer">
                                        {t('myList.comments.loadMore')}
                                    </button>
                                </div>
                            )}
                    </div>
                )}
            </div>
        </>
    );
}