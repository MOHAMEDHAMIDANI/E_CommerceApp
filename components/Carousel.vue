<template>
    <div id="carousel" class="scroll-smooth relative h-full mb-1 w-fit container mx-auto">
        <div @click="MoveToTheLeft()"  class="absolute w-7 h-full flex  top-0 -left-8 z-10 hover:bg-white rounded-s-md shadow duration-500 cursor-pointer">
            <Icon  name="ic:round-arrow-back-ios" size="30" color="black" class="m-auto" />
        </div>
            <div ref="slider" class="flex justify-between overflow-auto scroll-smooth py-1 gap-5 ">
        <slot />
    </div>
        <div @click="MoveToTheRight()" class="absolute w-7 h-full flex  top-0 -right-8 z-10 hover:bg-white rounded-e-md shadow duration-500 cursor-pointer">
            <Icon name="ic:round-arrow-forward-ios" size="30" color="black" class="m-auto" />
        </div>
    </div>
</template>

<script setup lang="ts">
const slider = ref("slider");
onMounted(() => {
    slider.value.scrollLeft = 0;
    const AutoScroll =() => {
        if(slider.value.scrollLeft < (slider.value.scrollWidth - slider.value.clientWidth) || slider.value.scrollLeft > 0) {
            slider.value.scrollLeft += (slider.value.scrollWidth / slider.value.childElementCount);
        }
        if(slider.value.scrollLeft == (slider.value.scrollWidth - slider.value.clientWidth)) {
            slider.value.scrollLeft = 0;
        }
}
setInterval(AutoScroll , 5000)
})

const MoveToTheLeft = () => {
    if(slider.value.scrollLeft = 0) {
    slider.value.scrollLeft = (slider.value.scrollWidth - slider.value.clientWidth);
    }else {
        slider.value.scrollLeft -= (slider.value.scrollWidth / slider.value.childElementCount);
    }

}
const MoveToTheRight = () => {
    if(slider.value.scrollLeft == (slider.value.scrollWidth - slider.value.clientWidth)) {
        slider.value.scrollLeft = 0;
    }else {
        slider.value.scrollLeft += (slider.value.scrollWidth / slider.value.childElementCount);
    }
}

</script>

<style scoped>
::-webkit-scrollbar {
  display: none;
}
</style>