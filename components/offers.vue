<template>
    <div class="container w-full  mx-auto">
        <div class="w-full h-[300px] relative rounded-full">
            <img src="../assets/images/44065370b_1000x500.webp" alt="" class="object-fit object-center h-full w-full">
            <div class="absolute top-5 left-0 w-[300px]">
                <h3 class="text-left text-[40px] capitalize font-semibold  ml-5 text-mainColor  w-full drop-shadow-2xl "> grab up to 50% off on selected {{  }} </h3>
                <Btn :Text="'buy now'"  :condition="'true'" class="w-[150px] h-8 text-md ml-5"/>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>