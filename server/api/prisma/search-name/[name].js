import  { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();


export default defineEventHandler(async (event) => {
    let items = await prisma.products.findMany({
        take : 10 ,
        where : {
            title : {
                contains : event.context.params.name,
                mode : 'insensitive' ,
            }
        }
    })
    return items ;
})