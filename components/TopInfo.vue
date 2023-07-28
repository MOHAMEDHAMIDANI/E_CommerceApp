<template>
<!-- info section  -->
<div class="bg-mainColor w-full h-6  flex justify-between content-center relative ">
      <!-- phone number  -->
      <div class="flex ml-8 content-center w-fit cursor-pointer ">
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
        <!-- toggle dark mode -->
        <div class=" w-12 my-auto mx-2 mr-8">
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
</template>

<script setup lang="ts">
const isLang = ref(false);
const language: string[] = ["Arb", "Eng", "Esp"];
const currentLang = ref("Eng");
const isDark = useDark();
const toggleDark = useToggle(isDark);
const chooseLang = (index: number) => {
  currentLang.value = language[index]
}
</script>

<style scoped>
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
</style>