<template>
    <Mainlayout>
        <offers />
        <div class="flex justify-between container mx-auto mt-5 z-50">
            <div class="flex justify-between h-fit ">
                <div class="flex justify-evenly w-[250px]">
                    <div class="h-full relative z-50">
                        <div class="flex justify-evenly content-center bg-gray-200 rounded-full w-[75px]">
                            <h3 class="text-slate-600 font-medium capitalize  ml-1 text-center text-[15px] my-auto">price</h3>
                            <Icon name="material-symbols:keyboard-arrow-down-rounded" size="25" class="cursor-pointer my-auto" @click="OpenAndClose(price) "/>
                        </div>
                        <div v-if="isPrice" v-motion-pop >
                            <ul class="absolute bg-white shadow-md rounded top-1 w-full">
                                <li class="capitalize text-center cursor-pointer duration-700 border-b-2 hover:bg-gray-300 text-sm">min</li>
                                <li class="capitalize text-center cursor-pointer duration-700 border-b-2 hover:bg-gray-300 text-sm">max</li>
                                <li class="capitalize text-center cursor-pointer duration-700 border-b-2 hover:bg-gray-300 text-[15px]">10$-20$</li>
                                <li class="capitalize text-center cursor-pointer duration-700 border-b-2 hover:bg-gray-300 text-[15px]">20$-100$</li>
                                <li class="capitalize text-center cursor-pointer duration-700 border-b-2 hover:bg-gray-300 text-[15px]">100$ >></li>
                            </ul>
                        </div>  
                    </div>
    
                    <div class="h-full relative z-50">
                        <div class="flex justify-evenly content-center w-[85px] bg-gray-200 rounded-full ">
                            <h3 class="text-slate-600 font-medium capitalize  ml-1 text-center text-[15px] my-auto">review</h3>
                            <Icon name="material-symbols:keyboard-arrow-down-rounded" size="25" class="cursor-pointer my-auto" @click="OpenAndClose(review) "/>
                        </div>
                        <div v-if="isRating" v-motion-pop >
                            <ul  class="absolute bg-white shadow-md rounded top-1 w-full">
                                <li class="capitalize text-center cursor-pointer duration-700 border-b-2 hover:bg-gray-300 text-sm"> 1<Icon name="ic:twotone-star" color="green" class="mb-1" />-2<Icon name="ic:twotone-star" color="green" class="mb-1" /></li>
                                <li class="capitalize text-center cursor-pointer duration-700 border-b-2 hover:bg-gray-300 text-sm">2<Icon name="ic:twotone-star" color="green" class="mb-1" />-3<Icon name="ic:twotone-star" color="green" class="mb-1" /></li>
                                <li class="capitalize text-center cursor-pointer duration-700 border-b-2 hover:bg-gray-300 text-sm">3<Icon name="ic:twotone-star" color="green" class="mb-1" />-4<Icon name="ic:twotone-star" color="green" class="mb-1" /></li>
                                <li class="capitalize text-center cursor-pointer duration-700 border-b-2 hover:bg-gray-300 text-sm">4<Icon name="ic:twotone-star" color="green" class="mb-1" />-5<Icon name="ic:twotone-star" color="green" class="mb-1" /></li>
                            </ul>
                        </div>  
                    </div>
    
                    <div class="h-full relative z-50">
                        <div class="flex justify-between content-center w-fit bg-gray-200 rounded-full ">
                            <h3 class="text-slate-600 font-medium capitalize  ml-1 text-center text-[15px] my-auto">color</h3>
                            <Icon name="material-symbols:keyboard-arrow-down-rounded" size="25" class="cursor-pointer my-auto" @click="OpenAndClose(color) "/>
                        </div>
                        <div v-if="isColor" v-motion-pop>
                            <ul  class="absolute bg-white shadow-md rounded top-1 w-full">
                                <li class="capitalize text-center cursor-pointer duration-700 border-b-2 hover:bg-gray-300 text-sm">black</li>
                                <li class="capitalize text-center cursor-pointer duration-700 border-b-2 hover:bg-gray-300 text-sm">white</li>
                                <li class="capitalize text-center cursor-pointer duration-700 border-b-2 hover:bg-gray-300 text-sm">red</li>
                                <li class="capitalize text-center cursor-pointer duration-700 border-b-2 hover:bg-gray-300 text-sm">blue</li>
                                <li class="capitalize text-center cursor-pointer duration-700 border-b-2 hover:bg-gray-300 text-sm">green</li>
                            </ul>
                        </div>  
                    </div>
                </div>
            </div>
            <div>
                <div class="h-full relative z-50">
                        <div class="flex justify-between content-center  w-fit bg-white border-2 border-gray-300  rounded-full ">
                            <h3 class="text-slate-600 font-medium capitalize  ml-1 text-[15px] my-auto">sort by</h3>
                            <Icon name="material-symbols:keyboard-arrow-down-rounded" size="25" class="cursor-pointer" @click="OpenAndClose(sort) "/>
                        </div>
                        <div v-if="isSort" v-motion-pop >
                            <ul  class="absolute bg-white shadow-md rounded top-1 w-full">
                                <li class="capitalize text-center cursor-pointer duration-700 border-b-2 hover:bg-gray-300 text-sm">price</li>
                                <li class="capitalize text-center cursor-pointer duration-700 border-b-2 hover:bg-gray-300 text-sm">review</li>
                                <li class="capitalize text-center cursor-pointer duration-700 border-b-2 hover:bg-gray-300 text-sm">color</li>
                            </ul>
                        </div>  
                    </div>
            </div>
        </div>
            <Section :name="'results for : ' + searchValue" >
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            </Section>
    </Mainlayout>
</template>

<script setup lang="ts">
import Mainlayout from '../../layouts/Mainlayout.vue'
const searchValue = 'pc gamer'
const isPrice = ref(false)
const isColor = ref(false)
const isRating = ref(false)
const isSort = ref(false)
const OpenAndClose = (sort:string) => {
    switch(sort){
    case "price" : console.log('price')
    }
    
}
</script>

<style scoped>

</style>