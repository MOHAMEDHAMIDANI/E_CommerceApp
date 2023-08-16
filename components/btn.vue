<template>
    <button  :class="condition ? ' cursor-pointer border-thirdColor  bg-secondColor text-white' : 'border-grey bg-white hover:bg-secondColor hover:border-thirdColor text-black'" class="font-semibold duration-1000 w-20 text-[12px] text-center hover:text-white h-6 capitalize rounded-full my-auto border-2">
        <h3 v-if="condition">
            {{ Text }}
        </h3>
        <h3 v-else>
            {{ secondText }}
        </h3>
    </button>
</template>

<script setup lang="ts">
interface Props {
Text:string , 
Width : string ,
secondText:string , 
condition ?: boolean ,
}
const props = defineProps<Props>()
</script>

<style scoped>

</style>