<template>
    <button :style="{width : Width , height : Height}" :class="isInCart ? ' cursor-pointer border-thirdColor  bg-secondColor text-white' : 'border-grey bg-white hover:bg-secondColor hover:border-thirdColor text-black'" class="font-semibold duration-700 w-20 text-[12px] text-center hover:text-white h-6 capitalize rounded-full ml-2 my-auto border-2">
        <h3 v-if="isInCart">
            {{ secondText }}
        </h3>
        <h3 v-else>
            {{ Text }}
        </h3>
    </button>
</template>

<script setup lang="ts">
interface Props {
Text:string , 
secondText:string , 
Width : string , 
Height : string ,
isInCart ?: boolean ,
isInBuy ?: boolean
}
const props = defineProps<Props>()
</script>

<style scoped>

</style>