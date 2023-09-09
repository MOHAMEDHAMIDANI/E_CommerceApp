import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
export default defineEventHandler(async (event) => {
    const body = await readBody(event);
    await prisma.products.update({
        where: {
            id: Number(body.id),
        },
        data: {
            isfav: body.isfav,
        },
    })
})