<template>
        <div class="w-[230px] ml-1 my-auto h-[310px] shadow-md rounded">
            <div class="w-full h-[180px] bg-slate-500 relative">
                <nuxt-link :to="{name : 'Item-id' , params : {id : 30}}">
                    <img src="../assets/images/photo-1588872657578-7efd1f1555ed.avif" alt="" class=" absolute object-fill top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] object-center w-full h-full">
                </nuxt-link>
                <button v-if="IsFav" :onClick="FavToNoFav">
                    <Icon v-motion-pop  name="material-symbols:heart-check-outline" size="30" color="white" class="absolute top-1 right-1 rounded-full w-7 h-7 border-2 pt-1 p-0.5 bg-secondColor cursor-pointer"/>
                </button>
                <button v-else :onClick="NoFavToFav">
                    <Icon v-motion-pop name="material-symbols:favorite-outline" size="30" color="black" class="absolute top-1 right-1 rounded-full w-7 h-7 border-2 pt-1 p-0.5 bg-slate-50 cursor-pointer"/>
                </button>
            </div>
            <div class=" w-full h-[120px]">
                <div class=" flex justify-between content-center w-full h-7  ">
                    <h3 class="ml-1 w-[160px]  break-words capitalize text-[17px] text-left font-semibold text-slate-900  my-auto overflow-hidden">gaming  headphone </h3>
                    <h5 class="relative text-sm my-auto font-semibold text-slate-900 p-1 pr-3">233<span class="text-[10px] font-medium text-slate-900 top-0 left-0 absolute">$</span><span class="text-[10px] font-bold text-slate-900 absolute font-sm top-0 right-0">.99</span> </h5>
                </div>
                <div class="w-full h-9">
                    <p class="w-full h-full ml-1 text-[10px] font-semibold break-words text-slate-500 overflow-hidden">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus officia illum quod</p>
                </div>
                <div class="flex justify-between content-center w-full h-[40px]">
                    <Btn @click="ToggleCart()" :isInCart="isInCart" :secondText="'added to cart'" :Text="'add to cart'" :Width="'100px'" :Height="'30px'" />
                    <Rating />
                </div>
            </div>
        </div>
</template>

<script setup lang="ts">
const isInCart = ref(true)
const IsFav = ref(true)
const FavToNoFav = () => {
        IsFav.value = false ;
}
const NoFavToFav = () => {
        IsFav.value = true ;
}

const ToggleCart = () => {
    isInCart.value = !isInCart.value ;
}

</script>

<style scoped>

</style>