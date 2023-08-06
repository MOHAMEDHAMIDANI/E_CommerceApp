<template>
    <div class="h-full">
        <TopInfo />
        <Nav :isUser="isUser"  :isDown="isDown" />
        <div>
            <slot />
        </div>
        <Uparrow @click="Go_back" :isDown="isDown"/>
        <Footer />
    </div>
</template>

<script setup lang="ts">
const isUser = ref(true)
const isDown = ref(false)
onMounted(() => {
    window.addEventListener("scroll" , (e) =>{
        const scrollHeight = window.pageYOffset;
        if(scrollHeight > 200){
            isDown.value = true ;
        }
        else {
            isDown.value = false ;
        }
    })
})
const Go_back = () =>(
    window.scrollTo({
        top : 0 ,
        left : 0 ,
    })
)
</script>

<style scoped>

</style>