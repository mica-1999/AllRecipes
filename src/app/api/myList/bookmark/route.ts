import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { authVerify } from "@/lib/authVerify";

export async function GET() {
    const isAuthenticated = await authVerify();
    if (!isAuthenticated.isAuthenticated) {
        return isAuthenticated.response;
    }
    const userId = isAuthenticated.userId as number;

    try {
        const bookmarks = await prisma.bookmark.findMany({
            where: {
                userid: userId
            },
            include: {
                Recipe: {}
            },
            orderBy: {
                dateAdded: "desc"
            }
        })

        if (!bookmarks || bookmarks.length === 0) {
            return NextResponse.json({ message: "No bookmarks found" }, { status: 404 });
        }
        return NextResponse.json(bookmarks);
    } catch (error) {
        console.error("Error fetching data:", error);
        return NextResponse.json({ error: "Failed to fetch Bookmarks" }, { status: 500 });
    }
}

export async function POST(request: Request) {
    const body = await request.json()
    const { recipeId } = body

    const isAuthenticated = await authVerify();
    if (!isAuthenticated.isAuthenticated) {
        return isAuthenticated.response;
    }

    const userId = isAuthenticated.userId as number;

    try {
        const existingBookmark = await prisma.bookmark.findFirst({
            where: {
                recipeid: recipeId,
                userid: userId
            }
        })

        if (existingBookmark) {
            return NextResponse.json({ message: "Recipe already bookmarked" }, { status: 409 });
        }
        const newBookmark = await prisma.bookmark.create({
            data: {
                recipeid: recipeId,
                userid: userId
            }
        })
        return NextResponse.json(newBookmark, { status: 201 });
    } catch (error) {
        console.error("Error fetching data:", error);
        return NextResponse.json({ error: "Failed to fetch Bookmarks" }, { status: 500 });
    }
}

export async function DELETE(req: Request) {

    try {
        const { searchParams } = new URL(req.url);
        const recipeId = parseInt(searchParams.get("recipeid") || "0");

        if (!recipeId) {
            return NextResponse.json({ error: "Recipe ID not provided" }, { status: 400 });
        }

        const isAuthenticated = await authVerify();
        if (!isAuthenticated.isAuthenticated) {
            return isAuthenticated.response;
        }

        const userId = isAuthenticated.userId as number;

        const deleteBookmark = await prisma.bookmark.deleteMany({
            where: {
                userid: userId,
                recipeid: recipeId
            }
        })

        if (deleteBookmark.count === 0) {
            return NextResponse.json({ message: "No bookmarks found to delete" }, { status: 404 });
        }

        return NextResponse.json({ message: "Bookmark deleted successfully" }, { status: 200 });
    } catch (error) {
        console.error("Error in deleting bookmark:", error);
        return NextResponse.json({ message: "Failed to delete bookmark" }, { status: 500 });
    }
}