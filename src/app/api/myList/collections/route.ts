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
                createdat: 'desc'
            }
        });

        if (!collections) {
            return NextResponse.json({ message: "No collections found" }, { status: 404 });
        }

        return NextResponse.json(collections);
    } catch (error) {
        console.error("Error fetching data:", error);
        return NextResponse.json({ error: "Failed to fetch collections" }, { status: 500 });
    }
}