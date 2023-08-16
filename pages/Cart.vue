<template>
    <Mainlayout>
        <div class="container mx-auto">
            <h3 class="font-bold capitalize text-2xl mt-3 text-center text-slate-800">your cart items ({{ number }}) </h3>
            <h3 class="font-bold capitalize text-lg my-1 text-center text-slate-800">total : <span class="text-secondColor"> {{ total }} $ </span></h3>

            <div class="w-full ">
                <Cartitem />
                <Cartitem />
                <Cartitem />
                <Cartitem />
                <Cartitem />
                <Cartitem />

            </div>
        </div>
    </Mainlayout>
</template>

<script setup lang="ts">
import Mainlayout from '../layouts/Mainlayout.vue'
const number = 1;
const total = 19599;

</script>

<style scoped></style>