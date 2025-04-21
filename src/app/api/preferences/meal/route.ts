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
        const mealPreferences = await prisma.userPreferences.findUnique({
            where: {
                userid: userId,
            }
        });

        if (!mealPreferences) {
            return NextResponse.json({ error: "Preferences not found" }, { status: 404 });
        }

        return NextResponse.json(mealPreferences, { status: 200 });
    } catch (error) {
        console.error("Error fetching preferences:", error);
        return NextResponse.json({ error: "Error fetching preferences" }, { status: 500 });
    }
}




export async function PUT(req: Request) {
    const isAuthenticated = await authVerify();
    if (!isAuthenticated.isAuthenticated) {
        return isAuthenticated.response;
    }
    const userId = isAuthenticated.userId as number;

    const { dietPreferences, cuisinePreferences, mealPreferences, cookingPreferences } = await req.json();

    try {
        const updatemealPreference = await prisma.userPreferences.update({
            data: {
                dietPreferences: dietPreferences,
                cuisinePreferences: cuisinePreferences,
                mealPreferences: mealPreferences,
                cookingPreferences: cookingPreferences,
            },
            where: {
                userid: userId,
            },

        });

        if (!updatemealPreference) {
            return NextResponse.json({ error: "Preferences not found" }, { status: 404 });
        }

        return NextResponse.json(mealPreferences, { status: 200 });
    } catch (error) {
        console.error("Error updating preferences:", error);
        return NextResponse.json({ error: "Error updating preferences" }, { status: 500 });

    }
}