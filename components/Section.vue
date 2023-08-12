<template>
    <div class="container mx-auto mt-2">
        <h3 class=" capitalize text-left text-slate-700  font-semibold">{{ name }}</h3>
        <div class=" grid 2xl:grid-cols-6 xl:grid-cols-5 justify-center gap-6 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 mt-4">
                <slot />
        </div>
    </div>
</template>

<script setup lang="ts">
const props = defineProps<{name : string}>()
</script>

<style scoped>

</style>