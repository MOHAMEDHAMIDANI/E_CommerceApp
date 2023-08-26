import  { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
    let product = await prisma.products.findFirst({
        where : {
            id : {
                equals: Number(event.context.params.id),
            }
        },
        include : {
            comments : true ,
        }
        
    })
    return product ;
})