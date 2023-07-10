<template>
  <div class=" w-full h-fit">
    <!-- info section  -->
    <div class="bg-mainColor w-full h-6  flex justify-around content-center">
      <!-- phone number  -->
      <div class="flex content-center w-fit cursor-pointer">
        <Icon class="my-auto ml-1" name="material-symbols:phone-in-talk" size="20" color="white" />
        <h5 class="text-[12px] my-auto text-white font-thin ">+213792579563</h5>
      </div>
      <!-- promotion  -->
      <div>
        <h5 class="text-white capitalize text-sm mt-[2px]"> get 50% off on selected items | <nuxt-link to="/"
            class=" underline ml-2"> shop now</nuxt-link></h5>
      </div>
      <!-- language and dark mode  -->
      <div class=" flex justify-between content-center ">
        <!-- language -->
        <div class="mt-1 w-fit text-[15px]">
          <h5 class="flex text-white  text-[12px]">{{ currentLang }}
            <Icon @click="isLang = !isLang" class="my-auto cursor-pointer duration-500"
              :class="isLang ? 'rotate-180' : ''" name="material-symbols:keyboard-arrow-down" size="25"
              color="white" />
          </h5>
          <transition name="fade">
            <ul v-auto-animate v-if="isLang" class="z-50 shadow-2xl bg-white w-full h-fit duration-700 mt-0">
              <li @click="chooseLang(index)" v-for="(lang, index ) in language" :key="index"
                class="text-center overflow-hidden text-black border-teal-500 cursor-pointer border-b shadow-sm">{{ lang }}</li>
            </ul>
          </transition>
        </div>
        <!-- toggle dark mode -->
        <div class=" w-12 my-auto mx-2">
          <div class="my-auto h-5 bg-thirdColor rounded-xl relative">

            <transition name="FromDarkToWhite">
              <Icon @click="toggleDark()" v-if="isDark" class="cursor-pointer absolute top-[2px]  right-[3px] bg-secondColor rounded-xl"
                name="solar:cloudy-moon-broken" size="21" color="black" />
            </transition>
            <transition name="FromWhiteToDark">
              <Icon @click="toggleDark()" v-if="!isDark" class="cursor-pointer absolute top-[2px] left-0.5 bg-secondColor rounded-xl" name="circum:sun"
                size="21" color="black" />
            </transition>

          </div>
        </div>
      </div>
    </div>

    <!-- nav section   -->
    <div class="flex justify-between content-center w-full h-8 bg-white dark:bg-black rounded-b-sm shadow-lg">
      <div class="container mx-auto mt-0 flex justify-between content-center ">
        <!-- brand and category section  -->
        <div class="flex justify-between content-center w-[400px] h-full ">
          <!-- brand  -->
          <div class="flex justify-between content-center">
            <img class="w-8" src="../assets/images/images-removebg-preview.png" alt="">
            <h3 class="text-mainColor text-[15px] my-auto font-medium ">Mr.Shopping</h3>
          </div>
          <!-- categories container -->
          <div class=" h-6 w-24 bg-greyColor my-auto rounded-2xl shadow-sm relative">
            <div class="w-full h-full flex justify-evenly ">
              <h3 class="h-2 text-black">category</h3>
              <Icon @click="isCategory = !isCategory" class=" cursor-pointer duration-500 mt-1"
              :class="isCategory ? 'rotate-180' : ''" name="material-symbols:keyboard-arrow-down" size="25"
              color="black" /> 
            </div>
            <!-- categories -->
            <div v-if="isCategory" class="z-50 absolute top-8 left-1">
              <transition name="fade">
                <ul class="w-[200px] max-h-[200px] overflow-y-scroll rounded-sm bg-white shadow-md">
                  <nuxt-link v-for="(category , index ) in categories" :key="index" to="/">
                    <li class=" min-h-[30px] capitalize line-clamp-2  border-b-gray border-b  hover:bg-slate-200 duration-500"> <h3 class="text-sm text-center my-1 leading-4 cursor-pointer">{{ category }}</h3></li>
                  </nuxt-link>
                </ul>
              </transition>
            </div>
          </div>
        </div>
        <!-- other side of the nav -->
        <div class="flex h-full w-full justify-between content-center">
          <!-- pages  -->
          
            <div  class="flex justify-evenly content-center w-40 h-full mt-1 ">
              <nuxt-link to="/">
                <h4 class="mr-1 capitalize text-center mt-1.5 text-[12px] text-slate-400"> deals</h4>
              </nuxt-link>
              <nuxt-link to="/">
                <h4 class=" capitalize text-center mt-1.5 text-[12px] text-slate-400"> what's new</h4>
              </nuxt-link>
              <nuxt-link to="/">
                <h4 class=" capitalize text-center mt-1.5 text-[12px] text-slate-400"> delivery</h4>
              </nuxt-link>
            </div>
          <!-- search -->
          <div>
            
              <form action="search" class="relative mt-1">
                <Icon name="ph:magnifying-glass-bold" size="20" color="black" class=" absolute top-1 right-1 cursor-pointer"/>
                <input @click="isSearching = !isSearching" :class="isSearching ? '': 'w-[700px]'" placeholder="Search for product" type="text" class="text-sm h-5 min-w-[200px] bg-greyColor pl-2 outline-none rounded-xl duration-1000">
              </form>
            
          </div>
          <!-- account and cart -->
          <div>account</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
//importing stuff 
import { useDark , useToggle} from '@vueuse/core'


// deceleration 
const isLang = ref(false);
const isDark = useDark();
const toggleDark = useToggle(isDark);
const language : string[]= ["Arb", "Eng", "Esp"];
const categories : string[]= ["digital services","cosmetics and body care","food and beverage","furniture and decor","health and wellness","household items","media","pet care","office equipment"]
const currentLang = ref("Eng");
const isCategory = ref(false)
const isSearching = ref(false);
// functions
const chooseLang = (index: number) => {
  currentLang.value = language[index]
}
</script>

<style scoped>
::-webkit-scrollbar {
  width : 10px ;
}
::-webkit-scrollbar-track {
  background-color: #014A32;
  border-radius: 100vw;

}
::-webkit-scrollbar-thumb {
  background-color: #04C988;
  border-radius: 100vw;
}
.FromDarkToWhite-enter-active {
  transition: all 0.3s ease-out;
}

.FromDarkToWhite-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

.FromDarkToWhite-enter-from,
.FromDarkToWhite-leave-to {
  transform: translateX(-40px);
  opacity: 0;
}


.FromWhiteToDark-enter-active {
  transition: all 0.3s ease-out;
}

.FromWhiteToDark-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

.FromWhiteToDark-enter-from,
.FromWhiteToDark-leave-to {
  transform: translateX(40px);
  opacity: 0;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}



</style>