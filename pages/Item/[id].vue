<template>
    <mainlayout>
        <ProductPageSkeleton v-if="loading" />
        <div v-else class="container  mx-auto my-5">
            <div class="flex justify-center flex-wrap w-full xl:gap-20 md:gap-0 ">
                <!-- galore  -->
                <div class="mt-5">
                    <div class="w-[600px] h-[400px] p-1">
                        <img v-if="currentImg != ''" v-motion-left :src="currentImg" alt=""
                            class="w-full h-full object-fil object-center border-2 border-thirdColor rounded-md">
                    </div>
                    <div v-if="SingleProduct.url" class=" w-full h-12 flex justify-evenly">
                        <div v-for="img  in SingleProduct.url" :key="img">
                            <img @mouseover="currentImg = img" @click="currentImg = img" :src="img" alt=""
                                class="object-cover object-center w-14 h-10  border-2 cursor-pointer my-auto hover:border-secondColor rounded-md"
                                :class="currentImg === img ? 'border-secondColor' : 'border-gray-100'">
                        </div>
                    </div>
                </div>
                <!-- info section -->
                <div class=" w-[600px]  mt-5 p-1">
                    <div class="bg-rd-800 w-full h-full p-2 ">
                        <h3 class=" capitalize font-bold text-2xl pb-1 text-slate-900 w-60 overflow-hidden "> {{
                            SingleProduct.title }}</h3>
                        <p class="capitalize font-semibold text-sm  text-slate-700 w-full break-words"> {{
                            SingleProduct.description }}</p>
                        <DisplayRating :ratingNum="SingleProduct.rating" class="mt-2 w-28" />
                        <hr class="w-full h-1 my-2 ">
                        <h1 class="text-slate-900 text-xl font-semibold w-fit  mx-auto ">$ {{ SingleProduct.price }}
                        </h1>
                        <hr class="w-full h-1 mt-2.5 mb-2">
                        <div>
                            <h3 class="font-semibold text-slate-900 capitalize ">
                                choose a color :
                            </h3>
                            <div class="w-fit flex justify-around content-center mt-3 ">
                                <div @click="currentImg = SingleProduct.url[index]" v-for="(color, index) in colors"
                                    :key="index" :class="color"
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
                            <nuxt-link :to="{ name: 'Checkout-id', params: { id: SingleProduct.id } }">
                                <Btn :condition="true" :Text="'buy now'" class="w-[180px] h-8 text-md" />
                            </nuxt-link>
                            <Btn :condition="false" :Text="'added to cart'" :secondText="'add to cart'"
                                class="w-[180px] h-8 text-md" />
                        </div>
                    </div>
                </div>
            </div>
            <Section :name="'similar items you might like'">
                <Carousel>
                    <Item v-for="product in Products" :key="product.id" :id="product.id" :title="product.title"
                        :description="product.description" :isfav="product.isfav" :isInCart="product.isInCart"
                        :url="product.url" :price="product.price" :rating="product.rating" />
                </Carousel>
            </Section>
            <!-- comment section will add later on  -->
            <div class="container mx-auto mt-4 ">
                <div class="w-fit p-1 flex  flex-col justify-between content-center">
                    <h3 class="capitalize text-slate-600 font-semibold  text-lg w-fit">please give us your honest preview
                    </h3>
                    <textarea name="" id="" cols="30" rows="1"
                        class=" h-20 p-1 w-[400px] my-2 rounded-md resize-none outline-none border-2 border-thirdColor"
                        placeholder="what do you think ?"></textarea>
                    <Rating :width="'150px'" class="mb-2" />
                    <Btn :secondText="'submit'" />
                </div>
                <div class="flex flex-col content-center mt-3">
                    <h3 class="capitalize text-slate-600 font-semibold  text-lg w-fit my-2">other people preview</h3>
                    <div v-if="SingleProduct.comments">
                        <div v-for="(comment, index) in SingleProduct.comments" :key="index"
                            class="my-1 p-2 border-2 border-mainColor rounded-md">
                            <div class="flex justify-between content-center w-32 mb-2">
                                <div
                                    class="w-10 h-10 object-cover object-center rounded-full flex justify-between content-center">
                                    <img src="../../assets/images/unnamed.jpg" alt=""
                                        class="relative w-full h-full rounded-full">
                                </div>
                                <h3 class="text-md font-semibold capitalize my-auto">anonymous</h3>
                            </div>
                            <p class="mx-2 text-sm font-medium text-slate-600">Lorem ipsum dolor sit amet consectetur,
                                adipisicing elit. Maxime quo aliquam, doloribus reiciendis, quis quisquam recusandae
                                temporibus facilis commodi nobis possimus excepturi veniam modi explicabo, autem suscipit
                                magnam atque eaque.</p>
                            <DisplayRating class="mx-2" />
                        </div>
                    </div>
                    <div v-else>
                        <!-- if there is no comments  -->
                    </div>
                </div>
            </div>
        </div>
    </mainlayout>
</template>

<script setup lang="ts">
import { useFetchStore } from '../../stores/Fetch'
import { storeToRefs } from 'pinia';
import mainlayout from '../../layouts/Mainlayout.vue'
interface comment {
    author: string,
    description: string,
    ratingNum: number,
    time: string,
}
const currentImg = ref();
const route = useRoute();
const store = useFetchStore()
const { loading, SingleProduct, Products } = storeToRefs(store);
const numOfItem = ref(1);
const amount = ref(SingleProduct.value.quantity);
const colors: string[] = ['bg-red-400', 'bg-slate-700', 'bg-blue-700', 'bg-gray-200 ', 'bg-emerald-500'];
onBeforeMount(async () => {
    const id = Number(route.params.id);
    await store.FetchSingleProducts(id);
    await store.FetchAllProducts();
    currentImg.value = SingleProduct.value.url[0];
});
const comments: comment[] = [{
    author: '',
    description: '',
    ratingNum: 4,
    time: '',
}, {
    author: '',
    description: '',

    ratingNum: 4,
    time: '',
}, {
    author: '',
    description: '',

    ratingNum: 4,
    time: '',
}, {
    author: '',
    description: '',

    ratingNum: 4,
    time: '',
}, {
    author: '',
    description: '',

    ratingNum: 4,
    time: '',
}, {
    author: '',
    description: '',
    ratingNum: 4,
    time: '',
},];
</script>

<style scoped></style>