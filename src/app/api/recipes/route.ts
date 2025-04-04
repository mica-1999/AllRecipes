import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { buildRecipeQuery } from "@/lib/queryBuilders";

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);

    try {
        // Build query using separated function
        const query = buildRecipeQuery(searchParams);
        
        // Execute the query
        const recipes = await prisma.recipe.findMany(query);
        
        // Return recipes array even if empty - always use status 200 for a valid query with no results
        return NextResponse.json({ recipes }, { status: 200 });
        
    } catch (error) {
        console.error("Error fetching recipes:", error);
        return NextResponse.json({ message: "Error fetching recipes", error: String(error) }, { status: 500 });
    }
}