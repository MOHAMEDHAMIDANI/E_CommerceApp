<template>
    <div class="w-[300px]">
        <h3 class="text-slate-900 capitalize font-bold ml-2 text-sm">{{ title }} </h3>
        <ul class="mt-3">
            <li v-for="(title, index) in titles" :key="index" class=" text-slate-700 hover:underline "><nuxt-link to="/">
                    <p class="w-full font-medium break-words text-sm mt-1 px-3 ">{{ title }} </p>
                </nuxt-link></li>
        </ul>
    </div>
</template>

<script setup lang="ts">
interface Props {
    title: string,
    titles: string[],
}
const props = defineProps<Props>()
</script>

<style scoped></style>