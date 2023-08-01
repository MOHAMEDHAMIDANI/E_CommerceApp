<template>
    <div class="flex justify-center gap-4 content-center relative">
        <div class="absolute w-7 h-full flex  top-0 -left-6 z-10 hover:bg-white rounded-s-md shadow duration-500 cursor-pointer">
            <Icon name="ic:round-arrow-back-ios" size="30" color="black" class="m-auto" />
        </div>
        <slot />
        <div class="absolute w-7 h-full flex  top-0 -right-6 z-10 hover:bg-white rounded-e-md shadow duration-500 cursor-pointer">
            <Icon name="ic:round-arrow-forward-ios" size="30" color="black" class="m-auto" />
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>