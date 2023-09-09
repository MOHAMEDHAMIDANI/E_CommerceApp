<template>
    <Mainlayout>
        <div class="container mx-auto">
            <h3 class="font-bold capitalize text-2xl mt-3 text-center text-slate-800">your cart items ({{ store.CartProducts.length }}) </h3>
            <h3 class="font-bold capitalize text-lg my-1 text-center text-slate-800">total : <span class="text-secondColor"> {{ total }} $ </span></h3>

            <div class="w-full ">
                <Cartitem v-for="product in store.CartProducts" :key="product.id" :id="product.id" :title="product.title" :description="product.description"/>
            </div>
        </div>
    </Mainlayout>
</template>

<script setup lang="ts">
import Mainlayout from '../layouts/Mainlayout.vue'
import { useFetchStore } from '../stores/Fetch';
const store = useFetchStore();
onBeforeMount(() => {
store.FetchAllProducts()
store.GetFavoriteProducts;
console.log(store.GetFavoriteProducts)
const total = store.CartProducts.reduce((acc, cur) => {
    return acc + cur.price;
}, 0);
})
</script>

<style scoped></style>