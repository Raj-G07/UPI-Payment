import {NextResponse} from "next/server"
import {PrismaClient} from "@repo/db/client"

const client = new PrismaClient();

export const GET = async()=>{
    await client.user.create({
        data:{
            email: "Rakd@drjei.com",
            name:"diewo"
        }
    })
    return NextResponse.json({
        message:"Hi there"
    },{
        status:201
    })
}