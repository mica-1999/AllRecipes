"use client"
import { useState } from 'react';
import RecipeInfo from './RecipeInfo';
import CommentsBtn from './CommentsBtn';
import RecipeComments from './RecipeComments';

export default function RecipeDetailContainer() {
    // State to control comments visibility
    const [showComments, setShowComments] = useState(false);

    // Toggle comments visibility
    const toggleComments = () => {
        setShowComments(!showComments);
    };

    return (
        <>
            <div className="relative flex w-full gap-4 mb-20">
                {/* Recipe Info Section - Adjusts width based on comments visibility */}
                <div className={`transition-all duration-300 ${showComments ? 'w-[70%]' : 'w-full'}`}>
                    <RecipeInfo />
                </div>

                {/* Comments Section - Fixed at 30% when visible */}
                {showComments && (
                    <div className="w-[30%]">
                        <div className="sticky top-0">
                            <RecipeComments />
                        </div>
                    </div>
                )}
            </div>

            {/* Comments Button */}
            <CommentsBtn toggleComments={toggleComments} />
        </>
    );
}
