import { NextRequest, NextResponse } from "next/server"

/**
 * POST /api/claim-gift
 *
 * Saves visitor email + phone for gift claims.
 * Currently mock — replace with actual API/database call.
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { email, phone } = body

    // Validate required fields
    if (!email || typeof email !== "string") {
      return NextResponse.json(
        { success: false, error: "Email is required" },
        { status: 400 }
      )
    }

    if (!phone || typeof phone !== "string") {
      return NextResponse.json(
        { success: false, error: "Phone number is required" },
        { status: 400 }
      )
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, error: "Invalid email format" },
        { status: 400 }
      )
    }

    // Basic phone validation (Vietnamese phone numbers)
    const phoneRegex = /^(\+84|84|0)(3|5|7|8|9)\d{8}$/
    if (!phoneRegex.test(phone.replace(/[\s\-\.]/g, ""))) {
      return NextResponse.json(
        { success: false, error: "Invalid phone number format" },
        { status: 400 }
      )
    }

    // TODO: Replace with actual API call to save data
    // e.g., await fetch('https://your-api.com/leads', { method: 'POST', body: JSON.stringify({ email, phone }) })
    console.log("[claim-gift] New claim:", { email, phone, timestamp: new Date().toISOString() })

    return NextResponse.json({
      success: true,
      message: "Gift claimed successfully",
    })
  } catch {
    return NextResponse.json(
      { success: false, error: "Internal server error" },
      { status: 500 }
    )
  }
}
