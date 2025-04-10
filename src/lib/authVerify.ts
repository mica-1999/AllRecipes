import { getServerSession } from "next-auth";
import { authOptions } from "./auth";
import { NextResponse } from "next/server";

// Check if the session is valid and user ID is present
export async function authVerify() {
    const session = await getServerSession(authOptions);

    // Check if the session is valid
    if (!session) {
        return {
            isAuthenticated: false,
            response: NextResponse.json({ error: "Unauthorized operation since user is not logged in" }, { status: 401 }),
            userId: null
        };
    }

    // Check if the user ID is present and valid
    const userId = parseInt(session.user.id || "", 10);
    if (isNaN(userId)) {
        return {
            isAuthenticated: false,
            response: NextResponse.json({ error: "Invalid user ID" }, { status: 401 }),
            userId: null
        };
    }

    // If the session is valid and user ID is present, return true and user ID
    return {
        isAuthenticated: true,
        response: null,
        userId
    };
}