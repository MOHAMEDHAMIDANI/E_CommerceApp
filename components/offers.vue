<template>
    <div class="container w-full  mx-auto">
        <div class="w-full h-[300px] relative rounded-full">
            <img src="https://plus.unsplash.com/premium_photo-1664201889896-6a42c19e953a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8b2ZmZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" alt="" class="object-fit object-center h-full w-full">
            <div class="absolute top-5 left-0 w-[300px]">
                <h3 class="text-left text-[40px] capitalize font-semibold  ml-5 text-mainColor  w-full drop-shadow-2xl "> grab up to 50% off on selected {{  }} </h3>
                <Btn :Text="'buy now'"  :condition="'true'" class="w-[150px] h-8 text-md ml-5"/>
            </div>
        </div>
        <div class="mt-5 bg-blue-500">
            <div class="my-auto w-16 relative" >
                <div class="rounded-full flex bg-gray-300 h-6 w-16 px-1 my-auto">
                    <h3 class="text-left capitalize w-full text-sm my-auto">price</h3>
                    <Icon name="material-symbols:keyboard-arrow-down-rounded" size="35" class="cursor-pointer" />
                </div>
                <div class="h-5 mt-1 absolute w-full bg-blue-700">
                    <Btn />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>