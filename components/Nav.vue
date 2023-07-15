<template>
  <div class=" w-full h-fit">
    <!-- info section  -->
    <div class="bg-mainColor w-full h-6  flex justify-between content-center">
      <!-- phone number  -->
      <div v-if="props.isUser" class="flex  content-center w-fit cursor-pointer ">
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
        <div class=" z-50 mt-1 w-fit text-[15px]">
          <h5 class="flex text-white  text-[12px]">{{ currentLang }}
            <Icon @click="isLang = !isLang" class="my-auto cursor-pointer duration-500"
              :class="isLang ? 'rotate-180' : ''" name="material-symbols:keyboard-arrow-down" size="25" color="white" />
          </h5>
          <transition name="fade">
            <ul v-auto-animate v-if="isLang" class="z-50 shadow-2xl bg-white w-full h-fit duration-700 mt-0">
              <li @click="chooseLang(index)" v-for="(lang, index ) in language" :key="index"
                class="text-center overflow-hidden text-black border-teal-500 cursor-pointer border-b shadow-sm">{{ lang
                }}</li>
            </ul>
          </transition>
        </div>
        <!-- toggle dark mode -->
        <div class=" w-12 my-auto mx-2">
          <div class="my-auto h-5 bg-thirdColor rounded-xl relative">

            <transition name="FromDarkToWhite">
              <Icon @click="toggleDark()" v-if="isDark"
                class="cursor-pointer absolute top-[2px]  right-[3px] bg-secondColor rounded-xl"
                name="solar:cloudy-moon-broken" size="21" color="black" />
            </transition>
            <transition name="FromWhiteToDark">
              <Icon @click="toggleDark()" v-if="!isDark"
                class="cursor-pointer absolute top-[2px] left-0.5 bg-secondColor rounded-xl" name="circum:sun" size="21"
                color="black" />
            </transition>

          </div>
        </div>
      </div>
    </div>

    <!-- nav section   -->
    <div :class=" props.isDown ? 'fixed top-0 bg-transparent backdrop-blur-lg drop-shadow-md': ''" class="z-50 flex ease-in-out justify-between bg-white content-center w-full h-11 duration-500  dark:bg-black rounded-b-sm shadow-lg rounded ">
      <div class="container mx-auto mt-0 flex justify-between content-center ">
        <!-- brand and category section  -->
        <div class="flex justify-between content-center h-full ">
          <!-- brand  -->
          <div class=" w-[130px] flex justify-between content-center">
            <img class="w-10" src="../assets/images/images-removebg-preview (1).png" alt="">
            <h3 class="text-mainColor text-[15px] my-auto font-medium ">Mr.Shopping</h3>
          </div>
        </div>
        <!-- other side of the nav -->
        <div class="flex h-full w-full justify-between content-center">
          <!-- pages  -->

          <div class="flex justify-between content-center w-40 h-full ml-10 ">
            <nuxt-link class="self-center" to="/">
              <h4 class="mr-1 capitalize text-center  text-[12px] text-slate-400 "> deals</h4>
            </nuxt-link>
            <nuxt-link class="self-center" to="/">
              <h4 class=" capitalize text-center text-[12px] text-slate-400 "> what's new</h4>
            </nuxt-link>
            <nuxt-link class="self-center" to="/">
              <h4 class=" capitalize text-center text-[12px] text-slate-400 "> delivery</h4>
            </nuxt-link>
          </div>
          <!-- search -->
          <div class="relative" v-if="isUser">
            <form action="search" class="relative mt-2.5 mb-4  md:w-[250px] 2xl:w-[500px]">
              <Icon name="ph:magnifying-glass-bold" size="25" color="#04C988"
                class=" absolute top-0.5 right-1 cursor-pointer" />
              <input @click="isSearching = true" placeholder="Search for product" type="text"
                class="text-sm h-6 w-full  bg-greyColor pl-2 outline-thirdColor rounded-xl ">
            </form>
            <!-- searched items  -->
            <div @mouseleave="isSearching = false" v-motion-left v-if="isSearching" class="drop-shadow-lg rounded-sm max-h-[300px] overflow-y-auto duration-1000">
              <searchitem v-motion-pop />
              <searchitem v-motion-pop />
              <searchitem v-motion-pop />
              <searchitem v-motion-pop />
              <searchitem v-motion-pop />
              <searchitem v-motion-pop />
              <searchitem v-motion-pop />
              <searchitem v-motion-pop />
              <searchitem v-motion-pop />
              <searchitem v-motion-pop />
              <searchitem v-motion-pop />
            </div>
          </div>
          <!-- account and cart -->
          <div class="h-full w-[200px] flex justify-around content-center drop-shadow-sm">
            <!-- account -->
            <div class="relative self-center ">
              <div class="flex justify-evenly cursor-pointer hover:border-thirdColor border-2 content-center my-auto hover:bg-greyColor duration-300 h-6  w-[100px] rounded-2xl " @click="isProfile = !isProfile">
              <Icon class="my-auto" name="ic:baseline-person-outline" size="25" color="grey"/>
                <h3 class="text-center my-auto text-[15px]" >Account</h3>
            </div>
              <!-- stuff container  -->
              <div v-if="isProfile" v-motion-slide-top class="absolute top-10 -left-5 ">
                <div class="w-[150px] max-h-[200px] flex flex-col justify-evenly content-center  shadow  bg-transparent bg-opacity-80 backdrop-blur-sm rounded drop-shadow-sm" >
                  <!-- profile  -->
                  <nuxt-link to="" v-if="isUser">
                    <div class="h-[50px]  flex justify-evenly hover:bg-greyColor content-center duration-700 cursor-pointer border-b-2 border-secondColor rounded">
                    <Icon name="material-symbols:person-pin-outline" size="25" class="my-auto"/>
                      <h3 class=" capitalize text-center text-black my-auto"> profile</h3>
                    </div>
                  </nuxt-link>
                  <!-- settings  -->
                  <nuxt-link to="" v-if="isUser">
                    <div class="h-[50px]  flex justify-evenly hover:bg-greyColor content-center duration-700 cursor-pointer border-b-2 border-secondColor rounded">
                    <Icon name="material-symbols:settings-account-box" size="25" class="my-auto"/>
                      <h3 class=" capitalize text-center text-black my-auto"> settings</h3>
                    </div>
                  </nuxt-link>
                  <!-- login / register  -->
                  <nuxt-link to="/Register-Login" >
                    <div class="h-[50px]  flex justify-evenly hover:bg-greyColor content-center duration-700 cursor-pointer border-b-2 border-secondColor rounded">
                    <Icon name="ic:baseline-log-in" size="25" class="my-2" color="#04C988"/>
                      <h3 class=" capitalize text-center  mt-1.5 text-thirdColor"> register</h3>
                    </div>
                  </nuxt-link>
                  <!-- sign out  -->
                  <nuxt-link to="" v-if="isUser" >
                    <div class="h-[50px]  flex justify-evenly hover:bg-greyColor content-center duration-700 cursor-pointer border-b-2 border-secondColor v">
                    <Icon name="streamline:interface-login-circle-arrow-enter-left-login-point-circle" size="25" class="my-2" color="rgb(153 27 27)"/>
                      <h3 class=" capitalize text-center  mt-1.5 text-red-800"> logout</h3>
                    </div>
                  </nuxt-link>
                </div>
              </div>
            </div>
            <div class="relative flex justify-evenly cursor-pointer hover:border-thirdColor border-2 content-center my-auto hover:bg-greyColor duration-300 h-6 w-[90px] rounded-2xl ">
              <Icon class="my-auto" name="ph:shopping-cart-simple-bold" size="25" color="grey"/>
                <h3 class="text-center text-sm" >Cart</h3>
              <span class="w-[14px] rounded-full text-[8px] border-2 border-transparent text-white text-center h-[14px] bg-mainColor absolute top-[-7px] right-[-2.5px]" >20</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
//importing stuff 
import { useDark, useToggle } from '@vueuse/core'


// deceleration 
const isLang = ref(false);
const isDark = useDark();
const toggleDark = useToggle(isDark);
const language: string[] = ["Arb", "Eng", "Esp"];
const categories: string[] = ["digital services", "cosmetics and body care", "food and beverage", "furniture and decor", "health and wellness", "household items", "media", "pet care", "office equipment"]
const currentLang = ref("Eng");
const isCategory = ref(false)
const isSearching = ref(false);
const isProfile = ref(false);
interface Props {
  isDown : boolean, 
  isUser : boolean,
}

const props = defineProps<Props>()
  console.log(props.isUser , props.isDown);
// functions
const chooseLang = (index: number) => {
  currentLang.value = language[index]
}
watch(isSearching, () => {
  console.log(isSearching.value);

})

</script>

<style scoped>
::-webkit-scrollbar {
  width: 10px;
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
  transition: opacity 0.3s ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>