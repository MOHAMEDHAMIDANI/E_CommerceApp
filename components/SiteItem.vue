<template>
    <div class="w-[200px] h-[150px]  mt-6 ">
        <Icon :name="icon" size="35" color="black" class="mx-16" /> 
        <div class="  text-center w-full mt-5 border-r-2 text-slate-700 capitalize border-gray-200">
            <h2 class="text-slate-700 font-semibold text-sm">{{ title }}</h2>
            <p class="w-full break-words text-[13px] mt-2 px-3 "> {{ description }}
            </p>
        </div>
    </div>
</template>

<script setup lang="ts">
interface Props {
    title : string ,
    description : string ,
    icon : string
}
const props = defineProps<Props>()
</script>

<style scoped>

</style>