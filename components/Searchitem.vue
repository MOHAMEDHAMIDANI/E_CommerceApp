<template>
    <nuxt-link to="">
        <div
            class="flex justify-between content-center bg-white shadow-lg rounded-sm h-12 lg:w-[400px] xl:w-[500px] md:w-[300px] hover:bg-slate-200 duration-500 cursor-pointer border-b-2">
            <div class="flex justify-center content-center">
                <div class="w-11">
                    <img class="w-full h-full object-cover object-center" src="../assets/images/44065370b_1000x500.webp" alt="">
                </div>
                <div class="text-black text-sm ml-5 md:ml-1  max-w-[200px] text-center my-auto">
                    <h2 class="w-[90px] overflow-hidden text-[14px] font-normal text-mainColor capitalize ">product name   </h2>
                </div>
            </div>
            <div class="flex justify-between self-center">
                <DisplayRating />
                <span class="text-center text-[10px] self-center">(30)</span>
            </div>
            <div class="flex self-center">
                <h3  class="text-[13px] text-mainColor font-medium">89.99$</h3>
            </div>
        </div>
    </nuxt-link>
</template>

<script setup lang="ts">

</script>

<style scoped></style>