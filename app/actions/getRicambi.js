import prisma from "../libs/prismadb";

export default async function getRicambi(){
    try {
        const ricambi = await prisma.ricambio.findMany({
            orderBy: {
                createdAt: 'desc'
            }
        });

        return ricambi;
    } catch (error) {
        throw new Error("GET_RICAMBI_ERROR: ", error);
    }
}
