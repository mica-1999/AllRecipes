"use client"
import Image from "next/image";
import { useState } from "react";
import { commentsData } from "@/app/dataItems/MyListData";

export default function Comments() {
    // State to manage the active tab (My Comments or Liked Comments)
    const [activeTab, setActiveTab] = useState<'my' | 'liked'>('my');
    
    return (
        <div className="w-full bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100">
            <div className="px-5 py-4 bg-gray-50 border-b border-gray-200">
                <div className="flex items-center justify-between mb-1">
                    <h2 className="text-lg font-semibold text-gray-800">Recent Comments</h2>
                    <div className="flex gap-1 bg-gray-100 p-1 rounded-lg">
                        <button
                            onClick={() => setActiveTab('my')}
                            className={`px-4 py-1.5 rounded-md text-sm font-medium transition-colors ${
                                activeTab === 'my'
                                    ? 'bg-white text-gray-800 shadow-sm'
                                    : 'text-gray-600 hover:text-gray-800'
                            }`}
                        >
                            My Comments
                        </button>
                        <button
                            onClick={() => setActiveTab('liked')}
                            className={`px-4 py-1.5 rounded-md text-sm font-medium transition-colors ${
                                activeTab === 'liked'
                                    ? 'bg-white text-gray-800 shadow-sm'
                                    : 'text-gray-600 hover:text-gray-800'
                            }`}
                        >
                            Liked Comments
                        </button>
                    </div>
                </div>
                <p className="text-sm text-gray-500">
                    {activeTab === 'my' 
                        ? 'Comments you posted on recipes'
                        : 'Comments from others that you liked'
                    }
                </p>
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