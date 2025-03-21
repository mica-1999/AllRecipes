import { NextResponse } from "next/server";
import { prisma } from '@/lib/prisma';
import bcrypt from "bcryptjs";


export async function POST(request: Request){
    const { username, password } = await request.json();

    if(!username || !password){
        return NextResponse.json({error: "Username and password are required"}, {status: 400});
    }

    // Username length validation
    if(username.length < 4 || username.length > 15){
        return NextResponse.json({error: "Username must be between 4 and 15 characters"}, {status: 400});
    }
    
    // Username format validation
    const usernameRegex = /^[a-zA-Z0-9_]+$/;
    if(!usernameRegex.test(username)){
        return NextResponse.json({error: "Username can only contain letters, numbers, and underscores (no spaces)"}, {status: 400});
    }

    try {
        //Check if user already exists in DB 
        const existingUser = await prisma.user.findUnique({
            where: {
                username: username
            }
        });

        if(existingUser){
            return NextResponse.json({error: "User already exists"}, {status: 400});
        } 

        // Hash password 
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create user
        const newUser = await prisma.user.create({
            data: {
                username: username,
                password: hashedPassword,
                firstName: username,
                lastName: "User",
                email: `${username}@example.com`,
            }
        });
        return NextResponse.json({message: "User created", user: newUser}, {status: 201});
    } catch (error) {
        console.error("Error during user creation:", error);
        return NextResponse.json({error: "Error during user creation"}, {status: 500}); 
    }

}