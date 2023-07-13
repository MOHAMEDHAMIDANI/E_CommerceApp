<template>
    <div v-motion-fade v-if="props.isDown" class=" z-50 cursor-pointer fixed top-[90%] right-3 w-8 h-8 hover:bg-mainColor duration-700 bg-secondColor rounded" >
        <Icon name="ic:round-keyboard-double-arrow-up" size="40" color="white" class="m-auto"/>
    </div>
</template>

<script setup lang="ts">
    const props = defineProps<{
        isDown : boolean,
    }>()
</script>

<style scoped>

</style>