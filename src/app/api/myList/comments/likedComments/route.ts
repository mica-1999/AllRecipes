import { NextResponse } from "next/server";
import { authVerify } from "@/lib/authVerify";
import prisma from "@/lib/prisma";

export async function GET() {
    const isAuthenticated = await authVerify();
    if (!isAuthenticated.isAuthenticated) {
        return isAuthenticated.response;
    }
    const userId = isAuthenticated.userId as number;

    try {
        const likedComments = await prisma.likedComment.findMany({
            where: {
                userid: userId
            },
            include: {
                Comment: {
                    include: {
                        Recipe: true,
                        User: true
                    }
                },
                User: true
            },
            orderBy: {
                likedAt: 'desc'
            }
        });

        if (likedComments.length === 0) {
            return NextResponse.json({ message: "No liked comments found." }, { status: 404 });
        }

        return NextResponse.json({ comments: likedComments });
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
    const commentId = parseInt(searchParams.get("likedCommentId") || "0");

    try {
        const deletedComment = await prisma.likedComment.deleteMany({
            where: {
                commentid: commentId,
                userid: userId
            }
        });

        if (deletedComment.count === 0) {
            return NextResponse.json({ message: "No liked comments found." }, { status: 404 });
        }

        return NextResponse.json({ message: "Comment unliked successfully." });
    } catch (error) {
        console.error("Error deleting data:", error);
        return NextResponse.json({ error: "Failed to unlike comment" }, { status: 500 });
    }
}