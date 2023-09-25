<template>
    <div class="container mx-auto my-10">
        <h3 class=" capitalize text-left text-slate-700 mb-2 font-semibold">shop our top categories</h3>
        <div class=" flex justify-evenly gap-3 h-[230px]">
            <nuxt-link :to="{name:'category-name' , params : {name : category.title}}" v-for=" category in categories" :key="category" class="my-auto shadow-lg rounded-md">
                <div class="w-[120px] h-[190px] my-auto  relative hover:scale-110 duration-500">
                    <img :src="category.image" alt="" class="absolute object-cover  object-center w-full h-full rounded-md aspect-auto">
                    <h4 class=" capitalize text-white hover:text-slate-800 font-medium text-center text-sm absolute pt-24 w-full rounded-md via-secondColor duration-700 to-transparent bg-gradient-to-t from-thirdColor from-10% via-30% h-full left-[50%] -translate-x-[50%] ">{{ category.title }}</h4>
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