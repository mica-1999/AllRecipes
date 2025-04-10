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
        // Extract userId from the authentication response
        const userId = isAuthenticated.userId as number;

        // Fetch users recipes from the database
        const myRecipes = await prisma.recipe.findMany({
            where: {
                userid: userId
            }
        })

        // Case when no recipes are found
        if (!myRecipes || myRecipes.length === 0) {
            return NextResponse.json({ message: "No recipes found" }, { status: 404 });
        }

        // Return the recipes as a JSON response
        return NextResponse.json(myRecipes);
    } catch (error) {
        console.error("Error fetching data:", error);
        return NextResponse.json({ error: "Failed to fetch To My Recipes" }, { status: 500 });
    }


}