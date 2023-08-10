<template>
    <div class="container mx-auto my-10 ">
        <h3 class=" capitalize text-left text-slate-700  font-semibold">{{ name }}</h3>
        <div class="flex gap-2">
                <slot />
        </div>
    </div>
</template>

<script setup lang="ts">
const props = defineProps<{name : string}>()
</script>

<style scoped>

</style>