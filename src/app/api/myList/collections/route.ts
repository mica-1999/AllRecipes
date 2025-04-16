import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { authVerify } from '@/lib/authVerify';

export async function GET() {
    const isAuthenticated = await authVerify();
    if (!isAuthenticated.isAuthenticated) {
        return isAuthenticated.response;
    }
    const userId = isAuthenticated.userId as number;

    try {
        // Query collections directly instead of through CollectionRecipe
        const collections = await prisma.collection.findMany({
            where: {
                userid: userId,
            },
            include: {
                recipes: {
                    include: {
                        Recipe: true,
                    },
                },
                User: true,
            },
            orderBy: {
                createdat: 'asc'
            }
        });

        if (collections.length === 0) {
            return NextResponse.json({ message: "No collections found" }, { status: 404 });
        }

        return NextResponse.json(collections);
    } catch (error) {
        console.error("Error fetching data:", error);
        return NextResponse.json({ error: "Failed to fetch collections" }, { status: 500 });
    }
}

export async function POST(req: Request) {
    const isAuthenticated = await authVerify();
    if (!isAuthenticated.isAuthenticated) {
        return isAuthenticated.response;
    }
    const userId = isAuthenticated.userId as number;
    const body = await req.json();
    const { name } = body;

    if (!name || name.trim() === "") {
        return NextResponse.json({ error: "Collection name is required" }, { status: 400 });
    }

    try {
        const collection = await prisma.collection.create({
            data: {
                name,
                userid: userId,
            },
        });

        return NextResponse.json(collection, { status: 201 });
    } catch (error) {
        console.error("Error creating collection:", error);
        return NextResponse.json({ error: "Failed to create collection" }, { status: 500 });
    }
}

export async function DELETE(req: Request) {
    const isAuthenticated = await authVerify();
    if (!isAuthenticated.isAuthenticated) {
        return isAuthenticated.response;
    }
    const userId = isAuthenticated.userId as number;

    const { searchParams } = new URL(req.url);
    const collectionId = searchParams.get('id');

    if (!collectionId) {
        return NextResponse.json({ error: "Collection ID is required" }, { status: 400 });
    }

    try {
        const deleteCollection = await prisma.collection.delete({
            where: {
                id: parseInt(collectionId),
                userid: userId,
            }
        })

        if (!deleteCollection) {
            return NextResponse.json({ error: "Collection not found" }, { status: 404 });
        }

        return NextResponse.json({ message: "Collection deleted successfully" }, { status: 200 });

    } catch (error) {
        console.error("Error deleting collection:", error);
        return NextResponse.json({ error: "Failed to delete collection" }, { status: 500 });
    }
}