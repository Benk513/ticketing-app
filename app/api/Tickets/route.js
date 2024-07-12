import Ticket from "../../(models)/Ticket";

import { NextResponse } from "next/server";

export async function POST(req) {

    try {

        const body = await req.json()
        const ticketData = body.formData;
        console.table(ticketData)
        await Ticket.create(ticketData)
        return NextResponse.json({message :"ticket create" }, { status:201})
        
    } catch (error) {
        return NextResponse.json({message:"Error",error}, {status:500})
    }
    
}

export async function GET() {
    try {
        const tickets = await Ticket.findAll()
        return NextResponse.json({ tickets }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ message: "Error", error }, { status: 500 })
    }
    
    
}
