import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);

    // No search params, return all recipes
    if(!searchParams){

    }
    // Search specific recipes by filters
    else{

    }
}