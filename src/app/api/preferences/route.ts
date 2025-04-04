import { NextResponse } from "next/server";
import { prisma } from '@/lib/prisma';

export async function GET( req: Request){
    // Get Parameters from request url
    const url = new URL(req.url);
    const userId = parseInt(url.searchParams.get("userId") || "");

    // Verify Parameters
    if(!userId){
        return NextResponse.json({error: "Invalid UserID"}, {status: 400});
    }

    try {
        // DB Query for fetching user preferences
        const preferences = await prisma.userPreferences.findUnique({
            select: {
                visualtheme: true,
                language: true
            },
            where: {
                userid: userId
            }
        });
        
        if(!preferences){
            return NextResponse.json({error: "Preferences not found"}, {status: 404});
        }
        return NextResponse.json(preferences, {status: 200});
    }
    catch(error){
        console.error("Error fetching preferences:", error);
        return NextResponse.json({error: "Error fetching preferences"}, {status: 500});
    }

}

export async function POST (req :Request){
    // Get Parameters from request body
    const { userId } = await req.json();
    const userIdNumber = parseInt(userId);

    // Verify Parameters
    if(!userIdNumber){
        return NextResponse.json({error: "Invalid UserID"}, {status: 400});
    }

    try{
        // DB Query for creating user preferences
        await prisma.userPreferences.create({
            data: {
                userid: userIdNumber
            }
        })
        return NextResponse.json({message: "Preferences created for user: " + userIdNumber},{ status:201});
    } 
    catch(error){
        console.error("Error creating preferences:", error);
        return NextResponse.json({error: "Error creating preferences"}, {status: 500});
    }
}

export async function PUT(req: Request){
    // Get Parameters from request body
    const { userId, visualTheme, language } = await req.json();
    const userIdNumber = parseInt(userId);

    if(!userIdNumber || !visualTheme || !language){
        return NextResponse.json({error: "Invalid Parameters"}, {status: 400});
    }

    try {
        // DB Query for updating user preferences
        await prisma.userPreferences.update({
            data : {
                visualtheme: visualTheme,
                language: language
            },
            where: {
                userid : userIdNumber
            }
        })
        return NextResponse.json({message: "Preferences updated for user: " + userIdNumber}, {status: 200});
    } catch (error) {
        console.error("Error updating preferences:", error);
        return NextResponse.json({error: "Error updating preferences"}, {status: 500});
    }

}

