<template>
    <div class="container mx-auto my-10">
        <h3 class=" capitalize text-left text-slate-700 mb-2 font-semibold">shop our top categories</h3>
        <div class=" flex  gap-2 h-[210px] overflow-auto">
            <nuxt-link :to="{name:'category-name' , params : {name : category.title}}" v-for=" category in categories" :key="category">
                <div class="w-[140px] h-[190px]  relative ">
                    <img :src="category.image" alt="" class="absolute object-cover top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] object-center w-full h-full rounded-md ">
                    <h4 class=" capitalize text-slate-700 font-medium text-center text-sm absolute top-2 left-[50%] -translate-x-[50%] ">{{ category.title }}</h4>
                </div>
            </nuxt-link>
        </div>
    </div>
</template>

<script setup lang="ts">
interface Category {
    title : string , 
    image : string , 
    category : string , 

}
const categories : Category[] = [{
    title : "Home & Kitchen",
    image : "../assets/images/white-kitchen-floating-shelves-232ac9fb-fad090ab1f73478589de35a4e9b3b1e9.jpg",
    category : "",
},
{
    title : "Computers ",
    image : "../assets/images/photo-1498049794561-7780e7231661.avif",
    category : "",
},
{
    title : "Clothing Shoes & Jewelry",
    image : "../assets/images/premium_photo-1661627310281-3863d788c0b3.avif",
    category : "",
},
{
    title : "Toys & games",
    image : "../assets/images/photo-1533234427049-9e9bb093186d.avif",
    category : "",
},
{
    title : "Health",
    image : "../assets/images/photo-1511688878353-3a2f5be94cd7.avif",
    category : "",
},
{
    title : "Baby",
    image : "../assets/images/istockphoto-1446877402-170667a.webp",
    category : "",
},
{
    title : "Electronics ",
    image : "../assets/images/photo-1592659762303-90081d34b277.avif",
    category : "",
},
{
    title : "Sports & outdoors",
    image : "../assets/images/istockphoto-1435517138-170667a.webp",
    category : "",
},
{
    title : "Pet Supplies ",
    image : "../assets/images/istockphoto-1397603772-170667a.webp",
    category : "",
},
{
    title : "Video Games ",
    image : "../assets/images/istockphoto-1413616174-170667a.webp",
    category : "",
}];
</script>

<style scoped>

</style>