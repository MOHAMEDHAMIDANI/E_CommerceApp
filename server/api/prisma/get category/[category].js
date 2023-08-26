import  { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
    let items = await prisma.products.findMany({
        take : 15 ,
        where : {
            category : {
                contains : event.context.params.category,
                mode : 'insensitive' ,
            }
        }
    })
    return items ;
})