import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { authVerify } from "@/lib/authVerify";

export async function GET(req: Request) {
    try {
        // Verify if the user is authenticated
        const isAuthenticated = await authVerify();
        if (!isAuthenticated.isAuthenticated) {
            return isAuthenticated.response;
        }

        // Extract user ID from the session
        const userId = isAuthenticated.userId as number;

        const { searchParams } = new URL(req.url);
        const recipeId = parseInt(searchParams.get("recipeid") || "0");

        // Check if recipeId is provided, if not fetch all recipes in the prepare list
        if (!recipeId) {
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
        }
        else {
            // Fetch the specific recipe in the prepare list
            const prepareList = await prisma.prepareRecipe.findFirst({
                where: {
                    recipeid: recipeId,
                    userid: userId
                },
                include: {
                    Recipe: {}
                }
            });

            // Check if the recipe is found in the prepare list
            if (!prepareList) {
                return NextResponse.json({ message: "Recipe not found in Prepare List" }, { status: 404 });
            }

            // Return the specific recipe in the prepare list with details
            return NextResponse.json(prepareList);
        }
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
                recipeid: parseInt(recipeId),
                userid: userId
            }
        })

        if (constExistingEntry) {
            return NextResponse.json({ error: "Recipe already in Prepare List!" }, { status: 409 });
        }

        // Create a new entry in the prepare list
        const prepareRecipe = await prisma.prepareRecipe.create({
            data: {
                recipeid: parseInt(recipeId),
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

export async function DELETE(req: Request) {
    try {
        const { searchParams } = new URL(req.url);
        const recipeId = parseInt(searchParams.get("recipeid") || "0");

        const isAuthenticated = await authVerify();
        if (!isAuthenticated.isAuthenticated) {
            return isAuthenticated.response;
        }
        const userId = isAuthenticated.userId as number;

        if (!recipeId) {
            return NextResponse.json({ error: "Recipe ID is required" }, { status: 400 });
        }

        const constExistingEntry = await prisma.prepareRecipe.findFirst({
            where: {
                recipeid: recipeId,
                userid: userId
            }
        })

        if (!constExistingEntry) {
            console.log("Recipe not found in Prepare List:", recipeId);
            return NextResponse.json({ error: "Recipe not found in Prepare List" }, { status: 404 });
        }

        const deleteRecord = await prisma.prepareRecipe.delete({
            where: {
                id: constExistingEntry.id
            }
        })

        if (deleteRecord) {
            return NextResponse.json({ message: "Recipe removed from Prepare List" }, { status: 200 });
        }
    } catch (error) {
        console.error("Error deleting from prepare list:", error);
        return NextResponse.json({ error: "Failed to delete from Prepare List" + error }, { status: 500 });
    }
}