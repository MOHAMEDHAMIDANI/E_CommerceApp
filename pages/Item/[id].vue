<template>
    <mainlayout>
        <div class="container  mx-auto my-5 ">
            <div class="flex  flex-wrap w-full gap-10 ">
                <!-- galore  -->
                <div class="mt-5 h-[500px]">
                    <div class="w-[600px] h-[400px] p-1">
                        <img v-if="currentImg !=''" v-motion-left :src="currentImg" alt="" class="w-full h-full object-fil object-center border-2 border-thirdColor rounded-md">
                    </div>
                    <div v-if="images.length > 0" class=" w-full h-12 flex justify-evenly content-center ">
                        <div v-for="img  in images" :key="img" class="my-auto">
                            <img @mouseover="currentImg = img" @click="currentImg = img"  :src="img" alt="" class="object-cover object-center w-14 h-10  border-2 cursor-pointer my-auto hover:border-secondColor rounded-md" :class=" currentImg === img ? 'border-secondColor' : 'border-gray-100'">
                        </div>
                    </div>
                </div>
                <!-- info section -->
                <div class=" w-[600px]   mt-5 p-1">
                    <div class="bg-rd-800 w-full h-full p-2 ">
                        <h3 class=" capitalize font-bold text-2xl pb-1 text-slate-900 w-60 overflow-hidden "> air pods </h3>
                        <p class="capitalize font-semibold text-sm  text-slate-700 w-full break-words"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis reprehenderit quia ipsum earum, quo non facilis suscipit aperiam saepe eveniet.</p>
                        <Rating />
                        <hr class="w-full h-1 my-2 ">
                        <h1 class="text-slate-900 text-xl font-semibold w-fit  mx-auto ">$549.00</h1>
                        <hr class="w-full h-1 mt-2.5 mb-2" >
                        <div>
                            <h3 class="font-semibold text-slate-900 capitalize ">
                                choose a color : 
                            </h3>
                            <div class="w-fit flex justify-around content-center mt-2 ">
                                <div @click="currentImg = img" v-for="img in images" :key="img" class="w-6 h-6 mx-2 cursor-pointer border-2 border-transparent outline outline-2 outline-offset-2 outline-black rounded-full bg-red-600"></div>
                            </div>
                        </div>
                        <hr class="w-full h-1 mt-2.5 mb-2" >
                        <div class="">
                            <div class="w-20 h-6 rounded-full relative bg-gray-300 flex justify-center content-center ">
                                <Icon name="ic:round-minus" class="absolute top-0 left-0 duration-500 cursor-pointer hover:bg-gray-100 rounded-full" size="30" @click="numOfItem -= 1" />
                                <span class=" capitalize text-center text-md font-semibold">{{ numOfItem }}</span>
                                <Icon name="material-symbols:add-rounded" class="absolute top-0 right-0 cursor-pointer duration-500 hover:bg-gray-100 rounded-full" size="30" @click="numOfItem += 1" />
                            </div>
                            <div>

                            </div>
                        </div>
                        <div class="w-full flex gap-1 mt-5 ">
                            <Btn />
                            <Btn />
                        </div>  
                    </div>
                </div>
            </div>
        </div>
    </mainlayout>
</template>

<script setup lang="ts">
import mainlayout from '../../layouts/Mainlayout.vue'
const images :string[] = ['../../assets/images/photo-1581351123004-757df051db8e.avif' , '../../assets/images/photo-1593640408182-31c70c8268f5.avif' ,'../../assets/images/photo-1597872200969-2b65d56bd16b.avif' , '../../assets/images/photo-1626218174358-7769486c4b79.avif' , '../../assets/images/photo-1630201129622-a8e8ef3f7245.avif']; 
const currentImg = ref(images[0]);
const numOfItem = ref(1);
</script>

<style scoped>

</style>