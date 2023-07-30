<template>
    <div class="mr-1 w-16 h-5  flex justify-between content-center drop-shadow-md  my-auto">
        <Icon @click="changeIndex(index)" v-for="(index) in 5" :key="index"  name="mdi:star-circle" size="25"  class=" cursor-default" :class="index <= currentIndex ? 'text-emerald-500' :'text-white'" />
    </div>
</template>

<script setup lang="ts">
const currentIndex = ref(0)
const changeIndex = (index : number) => {
    currentIndex.value = index  ;
    console.log(currentIndex.value);
}

</script>

<style scoped>

</style>