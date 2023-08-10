<template>
    <mainlayout>
        <div class="container  mx-auto my-5 ">
            <div class="flex justify-center flex-wrap w-full xl:gap-20 md:gap-0 ">
                <!-- galore  -->
                <div class="mt-5">
                    <div class="w-[600px] h-[400px] p-1">
                        <img v-if="currentImg != ''" v-motion-left :src="currentImg" alt=""
                            class="w-full h-full object-fil object-center border-2 border-thirdColor rounded-md">
                    </div>
                    <div v-if="images.length > 0" class=" w-full h-12 flex justify-evenly">
                        <div v-for="img  in images" :key="img">
                            <img @mouseover="currentImg = img" @click="currentImg = img" :src="img" alt=""
                                class="object-cover object-center w-14 h-10  border-2 cursor-pointer my-auto hover:border-secondColor rounded-md"
                                :class="currentImg === img ? 'border-secondColor' : 'border-gray-100'">
                        </div>
                    </div>
                </div>
                <!-- info section -->
                <div class=" w-[600px]  mt-5 p-1">
                    <div class="bg-rd-800 w-full h-full p-2 ">
                        <h3 class=" capitalize font-bold text-2xl pb-1 text-slate-900 w-60 overflow-hidden "> air pods </h3>
                        <p class="capitalize font-semibold text-sm  text-slate-700 w-full break-words"> Lorem ipsum dolor
                            sit amet consectetur adipisicing elit. Omnis reprehenderit quia ipsum earum, quo non facilis
                            suscipit aperiam saepe eveniet.</p>
                        <DisplayRating :ratingNum="5" class="mt-2" />
                        <hr class="w-full h-1 my-2 ">
                        <h1 class="text-slate-900 text-xl font-semibold w-fit  mx-auto ">$549.00</h1>
                        <hr class="w-full h-1 mt-2.5 mb-2">
                        <div>
                            <h3 class="font-semibold text-slate-900 capitalize ">
                                choose a color :
                            </h3>
                            <div class="w-fit flex justify-around content-center mt-3 ">
                                <div @click="currentImg = images[index]" v-for="(color, index) in colors" :key="index"
                                    :class="color"
                                    class="w-6 h-6 mr-3 cursor-pointer border-2 border-transparent hover:outline outline-2 outline-offset-2 outline-black rounded-full relative">
                                    <div
                                        class="absolute w-full h-full bg-white opacity-40 backdrop-blur-md drop-shadow-sm rounded-full ">
                                        <h3 class="-mt-0.5 h-full text-center font-semibold text-black">
                                            {{ index + 1 }}
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr class="w-full h-1 mt-2.5 mb-2">
                        <div class="flex justify-between">
                            <div class="w-20 h-6 rounded-full relative bg-gray-200 flex justify-center content-center ">
                                <Icon name="ic:round-minus"
                                    class="absolute top-0 left-0 duration-500 cursor-pointer hover:bg-gray-100 rounded-full"
                                    size="30" @click="numOfItem < 1 ? numOfItem = 0 : numOfItem -= 1" />
                                <span class=" capitalize text-center text-md font-semibold">{{ numOfItem }}</span>
                                <Icon name="material-symbols:add-rounded"
                                    class="absolute top-0 right-0 cursor-pointer duration-500 hover:bg-gray-100 rounded-full"
                                    size="30" @click="numOfItem >= amount ? numOfItem = amount : numOfItem += 1" />
                            </div>
                            <div>
                                <h3 class="text-sm  text-slate-600 font-semibold">only <span class="text-thirdColor">{{
                                    amount }} item</span> left </h3>
                            </div>
                        </div>
                        <div class="w-full flex gap-1 mt-5 ">
                            <nuxt-link :to="{name : 'Checkout-id' , params : {id : 44}}">
                                <Btn :condition="true" :Text="'buy now'" class="w-[180px] h-8 text-md" />
                            </nuxt-link>
                            <Btn :condition="false" :Text="'added to cart'" :secondText="'add to cart'"
                                class="w-[180px] h-8 text-md" />
                        </div>
                    </div>
                </div>
            </div>
            <Section :name="'similar items you might like'" >
        <Carousel >
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
            <Item />
        </Carousel>
        </Section>
            <!-- comment section will add later on  -->
            <div class="container mx-auto mt-4 ">
                <div class="w-fit p-1 flex  flex-col justify-between content-center">
                    <h3 class="capitalize text-slate-600 font-semibold  text-lg w-fit">please give us your honest preview</h3>
                    <textarea name="" id="" cols="30" rows="1" class=" h-20 p-1 w-[400px] my-2 rounded-md resize-none outline-none border-2 border-thirdColor" placeholder="what do you think ?"></textarea>
                    <Rating :width="'150px'" class="mb-2"/>
                        <Btn :secondText="'submit'" />
                </div>  
                <div class="flex flex-col content-center mt-3">
                    <h3 class="capitalize text-slate-600 font-semibold  text-lg w-fit my-2">other people preview</h3>
                    <div v-for="(comment , index) in comments" :key="index" class="my-1 p-2 border-2 border-mainColor rounded-md">
                        <div  class="flex justify-between content-center w-32 mb-2">
                            <div class="w-10 h-10 object-cover object-center rounded-full flex justify-between content-center">
                                <img src="../../assets/images/unnamed.jpg" alt="" class="relative w-full h-full rounded-full">
                            </div>
                            <h3 class="text-md font-semibold capitalize my-auto">anonymous</h3>
                        </div>
                        <p class="mx-2 text-sm font-medium text-slate-600">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime quo aliquam, doloribus reiciendis, quis quisquam recusandae temporibus facilis commodi nobis possimus excepturi veniam modi explicabo, autem suscipit magnam atque eaque.</p>
                        <DisplayRating class="mx-2" />
                    </div>
                </div>
            </div>
        </div>
    </mainlayout>
</template>

<script setup lang="ts">
import mainlayout from '../../layouts/Mainlayout.vue'
interface comment {
    author: string,
    description: string,
    ratingNum: number,
    time: string,
}
const images: string[] = ['../../assets/images/photo-1581351123004-757df051db8e.avif', '../../assets/images/photo-1593640408182-31c70c8268f5.avif', '../../assets/images/photo-1597872200969-2b65d56bd16b.avif', '../../assets/images/photo-1626218174358-7769486c4b79.avif', '../../assets/images/photo-1630201129622-a8e8ef3f7245.avif'];
const currentImg = ref(images[0]);
const numOfItem = ref(1);
const amount = ref(12);
const colors: string[] = ['bg-red-400', 'bg-slate-700', 'bg-blue-700', 'bg-gray-200 ', 'bg-emerald-500'];
const comments: comment[] = [{
    author: '',
    description: '',
    ratingNum: 4,
    time: '',},{
    author: '',
    description: '',

    ratingNum: 4,
    time: '',},{
    author: '',
    description: '',

    ratingNum: 4,
    time: '',},{
    author: '',
    description: '',

    ratingNum: 4,
    time: '',},{
    author: '',
    description: '',

    ratingNum: 4,
    time: '',},{
    author: '',
    description: '',
    ratingNum: 4,
    time: '',},];
</script>
~
<style scoped></style>