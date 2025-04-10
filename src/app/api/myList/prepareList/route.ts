import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { authVerify } from "@/lib/authVerify";

export async function GET() {
    try {
        // Verify if the user is authenticated
        const isAuthenticated = await authVerify();
        if (!isAuthenticated.isAuthenticated) {
            return isAuthenticated.response;
        }

        // Extract user ID from the session
        const userId = isAuthenticated.userId as number;

        // Fetch the list of recipes in list of prepared added by the user
        const prepareList = await prisma.prepareRecipe.findMany({
            where: {
                userid: userId
            },
            include: {
                Recipe: {}
            },
            orderBy: {
                dateAdded: 'desc'
            }
        });

        // Check if the prepare list is empty   
        if (!prepareList || prepareList.length === 0) {
            return NextResponse.json({ message: "No recipes in Prepare List" }, { status: 404 });
        }

        // Return the prepare list with recipe details
        return NextResponse.json(prepareList);
    } catch (error) {
        console.error("Error fetching data:", error);
        return NextResponse.json({ error: "Failed to fetch To Prepare List" + error }, { status: 500 });
    }
}

export async function POST(req: Request) {
    try {
        // Verify if the user is authenticated
        const isAuthenticated = await authVerify();
        if (!isAuthenticated.isAuthenticated) {
            return isAuthenticated.response;
        }
        // Extract user ID from the session
        const userId = isAuthenticated.userId as number;

        // Parse the request body to get the recipe ID
        const body = await req.json();
        const { recipeId } = body;

        // Check if already exists in the prepare list
        const constExistingEntry = await prisma.prepareRecipe.findFirst({
            where: {
                recipeid: recipeId,
                userid: userId
            }
        })
        if (constExistingEntry) {
            return NextResponse.json({ error: "Recipe already in Prepare List!" }, { status: 400 });
        }

        // Create a new entry in the prepare list
        const prepareRecipe = await prisma.prepareRecipe.create({
            data: {
                recipeid: recipeId,
                userid: userId
            }
        });

        // Successfully added to the prepare list
        return NextResponse.json({ message: "Added to Prepare List", prepareRecipe }, { status: 201 });
    } catch (error) {
        console.error("Error adding to prepare list:", error);
        return NextResponse.json({ error: "Failed to add to Prepare List" + error }, { status: 500 });
    }


}