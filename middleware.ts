import { redirect } from "next/navigation";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";


export function middleware(request: NextRequest) {
    const response = NextResponse.next();
    const themePreferences = request.cookies.get("theme");
    console.log(themePreferences)
    if (!themePreferences) {
        response.cookies.set("theme", "dark")
    }
    console.log(themePreferences);

    response.cookies.set("debug", "debug");

    if (request.nextUrl.pathname === "/dashboard") {
        if (request.cookies.get("login")?.value !== "true") {
            return NextResponse.redirect(new URL("/login", request.nextUrl))
        }
    }

    return response;
}
