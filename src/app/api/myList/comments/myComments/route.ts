import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { authVerify } from "@/lib/authVerify";

export async function GET() {
    const isAuthenticated = await authVerify();
    if (!isAuthenticated.isAuthenticated) {
        return isAuthenticated.response;
    }
    const userId = isAuthenticated.userId as number;

    try {
        const allComments = await prisma.comment.findMany({
            where: {
                userid: userId
            },
            include: {
                Recipe: true,
                User: true
            },
            orderBy: {
                createdat: 'desc'
            }
        });

        if (!allComments || allComments.length === 0) {
            return NextResponse.json({ message: "No comments found." }, { status: 404 });
        }

        return NextResponse.json({ comments: allComments });
    } catch (error) {
        console.error("Error fetching data:", error);
        return NextResponse.json({ error: "Failed to fetch comments" }, { status: 500 });
    }
}


export async function DELETE(req: Request) {
    const isAuthenticated = await authVerify();
    if (!isAuthenticated.isAuthenticated) {
        return isAuthenticated.response;
    }
    const userId = isAuthenticated.userId as number;

    const { searchParams } = new URL(req.url);
    const commentId = searchParams.get("commentId");

    if (!commentId) {
        return NextResponse.json({ error: "Comment ID is required" }, { status: 400 });
    }

    try {
        const deletedComment = await prisma.comment.delete({
            where: {
                id: parseInt(commentId),
                userid: userId
            }
        });

        if (!deletedComment) {
            return NextResponse.json({ error: "Comment not found or you do not have permission to delete it" }, { status: 404 });
        }

        return NextResponse.json({ message: "Comment deleted successfully" });
    } catch (error) {
        console.error("Error deleting comment:", error);
        return NextResponse.json({ error: "Failed to delete comment" }, { status: 500 });
    }

}