<template>
    <div class="relative h-full mb-1 w-fit container mx-auto mt-2">
        <div @click="MoveToTheLeft()"  class="absolute w-7 h-full flex  top-0 -left-8 z-10 hover:bg-white rounded-s-md shadow duration-500 cursor-pointer">
            <Icon  name="ic:round-arrow-back-ios" size="30" color="black" class="m-auto" />
        </div>
        <slider id="slider">
            <slot />
        </slider>
        <div @click="MoveToTheRight()" class="absolute w-7 h-full flex  top-0 -right-8 z-10 hover:bg-white rounded-e-md shadow duration-500 cursor-pointer">
            <Icon name="ic:round-arrow-forward-ios" size="30" color="black" class="m-auto" />
        </div>
    </div>
</template>

<script setup lang="ts">
onMounted(() => {
    const slider = <HTMLElement>document.getElementById('slider');
        slider.scrollLeft = 0;
    const ElementNum = slider.childElementCount ; 
    const totaleWidth = slider.scrollWidth; 
    console.log(slider.clientWidth)
    console.log(slider.scrollWidth)
    console.log(slider.scrollLeft)

})


const MoveToTheLeft = () => {
    slider.scrollLeft -= 300;

}
const MoveToTheRight = () => {
    slider.scrollLeft += 300;
}
</script>

<style scoped>

</style>