<template>
    <div :style="{width  : width}" class="mr-1 flex justify-between content-center drop-shadow-md  my-auto">
        <Icon @click="changeIndex(index)" v-for="(index) in 5" :key="index"  name="ic:twotone-star" size="25"  class=" cursor-default" :class="index <= currentIndex ? 'text-emerald-500' :'text-neutral-400'" />
    </div>
</template>

<script setup lang="ts">
const currentIndex = ref(0)
const props = defineProps<{
    width:string
}>()
const changeIndex = (index : number) => {
    currentIndex.value = index  ;
    console.log(currentIndex.value);
}

</script>

<style scoped>

</style>