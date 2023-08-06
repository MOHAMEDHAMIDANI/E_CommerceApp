<template>
    <div id="carousel" class="scroll-smooth relative h-full mb-1 w-fit container mx-auto mt-2 whitespace-nowrap">
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
    
    const AutoScroll =() => {
        if(slider.scrollLeft <= (slider.scrollWidth - slider.clientWidth) && slider.scrollLeft >= 0) {
            slider.scrollLeft += (slider.scrollWidth / slider.childElementCount);
        }
        else if(slider.scrollLeft == (slider.scrollWidth - slider.clientWidth)) {
            slider.scrollLeft = 0;
        }else if(slider.scrollLeft == 0) {
        slider.scrollLeft = slider.scrollWidth;
        
    }
}
setInterval(AutoScroll , 5000)
})

const MoveToTheLeft = () => {
    if(slider.scrollLeft = 0) {
    slider.scrollLeft = (slider.scrollWidth - slider.clientWidth);
    }else {
        slider.scrollLeft -= (slider.scrollWidth / slider.childElementCount);
    }

}
const MoveToTheRight = () => {
    if(slider.scrollLeft == (slider.scrollWidth - slider.clientWidth)) {
        slider.scrollLeft = 0;
    }else {
        slider.scrollLeft += (slider.scrollWidth / slider.childElementCount);
    }
}

</script>

<style scoped>
::-webkit-scrollbar {
  display: none;
}
</style>