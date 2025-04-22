"use client"
import { useEffect, useState } from 'react';
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

    useEffect(() => {
        console.log("Comment div shown: ", showComments);
    }, [showComments]);

    return (
        <>
            <RecipeInfo />
            <CommentsBtn toggleComments={toggleComments} />

            {/* Comments section - conditionally render based on state */}
            {showComments && (
                <div className="mt-8">
                    <RecipeComments />
                </div>
            )}
        </>
    );
}
