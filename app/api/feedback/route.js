import { NextResponse } from "next/server";

export async function POST(request) {
     
    const data = await request.formData()

    const name = data.get('name');
    const email = data.get('email');
    const message = data.get('message');
    console.log("data :" ,data)
 


    return NextResponse.json({name, email, message })
}


// the lesson i have learnt is that whenever you try to senddata from forms , always use formData() as it ios