import bcrypt from "bcryptjs";
import prisma from "../../libs/prismadb";
import { NextResponse } from "next/server";

export async function POST(
    request
) {
    try{
        const body = await request.json();
        const {
            email,
            name,
            password
        } = body;

        if(!email || !name || !password){
            return new NextResponse('Informazioni mancanti', {status: 400});
        }

        const hashedPassword = await bcrypt.hash(password, 12);

        const user = await prisma.user.create({
            data: {
                email,
                name,
                hashedPassword
            }
        });

        return NextResponse.json(user);
    } catch(error){
        console.log(error, 'ERRORE_DI_REGISTRAZIONE');
        return new NextResponse('Errore interno', {status: 500});
    }
}