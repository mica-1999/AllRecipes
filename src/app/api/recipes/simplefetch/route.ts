import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(req: Request) {
    const { searchParams } = new URL(req.url);
    const recipeid = parseInt(searchParams.get('id') || "0");

    if (!recipeid) {
        return NextResponse.json({ message: "Recipe ID is required" }, { status: 400 });
    }

    try {
        const specificRecipe = await prisma.recipe.findFirst({
            where: {
                id: recipeid
            },
            include: {
                Ingredients: true
            }
        })

        if (!specificRecipe) {
            return NextResponse.json({ message: "Recipe not found" }, { status: 404 });
        }

        return NextResponse.json(specificRecipe, { status: 200 });
    } catch (error) {
        console.error("Error fetching recipes:", error);
        return NextResponse.json({ message: "Error fetching recipes", error: String(error) }, { status: 500 });
    }
}