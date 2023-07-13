<template>
    <div >
        <Nav :isUser="isUser"  :isDown="isDown" />
        <div class="container">
            <slot />
        </div>
        <Uparrow @click="goback" :isDown="isDown"/>
        <Footer />
    </div>
</template>

<script setup lang="ts">
import { useScroll } from '@vueuse/core'
const isUser = ref(false)
const isDown = ref(false)
onMounted(() => {
    window.addEventListener("scroll" , (e) =>{
        const scrollHeight = window.pageYOffset;
        if(scrollHeight > 150){
            isDown.value = true ;
        }
        else {
            isDown.value = false ;
        }
    })
})
const goback = () =>(
    window.scrollTo({
        top : 0 ,
        left : 0 ,
    })
)
</script>

<style scoped>

</style>