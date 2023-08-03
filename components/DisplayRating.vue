<template>
    <div class="mr-1 w-16 flex justify-between content-center drop-shadow-lg my-auto">
        <Icon  v-for="(index) in 5" :key="index"  name="ic:twotone-star" size="20"  class=" cursor-default" :class="index <= ratingNum ? 'text-emerald-500' :'text-neutral-400'" />
        <h3></h3>
    </div>
</template>

<script setup lang="ts">
    const props = defineProps<{ratingNum : number}>()
</script>

<style scoped>

</style>