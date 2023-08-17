<template>
  <div class=" w-full h-fit">
    <!-- nav section   -->
    <div :class="props.isDown ? 'top-0 fixed bg-transparent backdrop-blur-lg drop-shadow-sm' : 'relative bg-white '"
      class="z-50 flex justify-between ease-in-out content-center w-full h-11 duration-500  shadow-lg">
      <div class="container mx-auto mt-0 flex justify-evenly content-center ">
        <!-- brand and category section  -->
        <div class="flex justify-between content-center h-full ">
          <!-- brand  -->
          <nuxt-link to="/" class=" w-[130px] flex justify-between content-center relative">
            <img class="w-10  object-cover  object-center" src="../assets/images/images-removebg-preview (1).png" alt="">
            <h3 class="text-mainColor text-[15px] my-auto font-medium">Mr.Shopping</h3>
          </nuxt-link>
        </div>
        <!-- other side of the nav -->
        <div class="flex h-full w-full justify-evenly content-center">
          <!-- pages  -->
          <div class=" justify-evenly content-center w-40 h-full ml-3 lg:flex md:hidden">
            <a class="self-center" href="#deals">
              <h4 class=" capitalize text-center  text-[12px] text-slate-400 "> deals</h4>
            </a>
            <a class="self-center" href="#new">
              <h4 class=" capitalize text-center text-[12px] text-slate-400 "> what's new</h4>
            </a>
            <nuxt-link class="self-center" :to="{ name: 'Delivery' }">
              <h4 class=" capitalize text-center text-[12px] text-slate-400 "> delivery</h4>
            </nuxt-link>
          </div>
          <!-- search -->
          <div class="mx-auto" v-if="isUser">
            <form action="search" class="relative mt-2.5 mb-4  md:w-[310px] 2xl:w-[500px]">
              <Icon name="ph:magnifying-glass-bold" size="25" color="#04C988"
                class=" absolute top-0.5 right-1 cursor-pointer" />
              <input @click="isSearching = true" placeholder="Search for product" type="text"
                class="text-sm h-6 w-full  bg-greyColor pl-2 outline-thirdColor rounded-xl">
            </form>
            <!-- searched items  -->
            <div @mouseleave="isSearching = false" v-if="isSearching" id="search"
              class="drop-shadow-lg  rounded-sm max-h-[300px] overflow-y-auto duration-1000">
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
              <div
                class="flex justify-evenly cursor-pointer hover:border-thirdColor border-transparent border-2 my-auto hover:bg-greyColor duration-300 h-6  w-[90px] rounded-2xl "
                @click="isProfile = !isProfile">
                <Icon class="my-auto" name="ic:baseline-person-outline" size="25" color="grey" />
                <h3 class="text-center my-auto text-[15px]">Account</h3>
              </div>
              <!-- stuff container  -->
              <div v-if="isProfile" v-motion-slide-top class="absolute top-10 -left-5 ">
                <div class="w-[150px] flex flex-col justify-evenly content-center  shadow  bg-white bg-opacity-90">
                  <!-- profile  -->
                  <nuxt-link :to="{ name: 'profile' }" v-if="isUser">
                    <div
                      class="h-[50px]  flex justify-evenly hover:bg-gray-200 content-center duration-700 cursor-pointer border-b-2 border-secondColor  ">
                      <Icon name="material-symbols:person-pin-outline" size="25" class="my-auto" />
                      <h3 class=" capitalize text-center text-black my-auto"> profile</h3>
                    </div>
                  </nuxt-link>
                  <!-- favorite  -->
                  <nuxt-link :to="{ name: 'favorite' }" v-if="isUser">
                    <div
                      class="h-[50px]  flex justify-evenly hover:bg-gray-200 content-center duration-700 cursor-pointer border-b-2 border-secondColor  ">
                      <Icon name="material-symbols:favorite" size="25" class="my-auto" />
                      <h3 class=" capitalize text-center text-black my-auto"> favorite</h3>
                    </div>
                  </nuxt-link>

                  <!-- settings  -->
                  <nuxt-link :to="{ name: 'Settings' }" v-if="isUser">
                    <div
                      class="h-[50px]  flex justify-evenly hover:bg-gray-200 content-center duration-700 cursor-pointer border-b-2 border-secondColor  ">
                      <Icon name="material-symbols:settings-account-box" size="25" class="my-auto" />
                      <h3 class=" capitalize text-center text-black my-auto"> settings</h3>
                    </div>
                  </nuxt-link>
                  <!-- login / register  -->
                  <nuxt-link to="/Register-Login">
                    <div
                      class="h-[50px]  flex justify-evenly hover:bg-gray-200 content-center duration-700 cursor-pointer border-b-2 border-secondColor ">
                      <Icon name="ic:baseline-log-in" size="25" class="my-2" color="#04C988" />
                      <h3 class=" capitalize text-center  mt-1.5 text-thirdColor"> register</h3>
                    </div>
                  </nuxt-link>
                  <!-- sign out  -->
                  <div v-if="isUser"
                    class="h-[50px]  flex justify-evenly hover:bg-gray-200 content-center duration-700 cursor-pointer border-b-2 border-secondColor ">
                    <Icon name="streamline:interface-login-circle-arrow-enter-left-login-point-circle" size="25"
                      class="my-2" color="rgb(153 27 27)" />
                    <h3 class=" capitalize text-center  mt-1.5 text-red-800"> logout</h3>
                  </div>
                </div>
              </div>
            </div>
            <nuxt-link :to="{ name: 'Cart' }" class="my-auto">
              <div
                class="relative flex justify-evenly cursor-pointer hover:border-thirdColor border-2 border-transparent content-center my-auto hover:bg-greyColor duration-300 h-6 w-[80px] rounded-2xl ">
                <Icon class="my-auto" name="ph:shopping-cart-simple-bold" size="25" color="grey" />
                <h3 class="text-center text-sm">Cart</h3>
                <span
                  class="w-[13px] rounded-full text-[8px] border-2 border-transparent text-white text-center h-[14px] bg-mainColor absolute top-[2px] left-[13px]">20</span>
              </div>
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
//importing stuff 

// deceleration 

const isSearching = ref(false);
const isProfile = ref(false);
interface Props {
  isDown: boolean,
  isUser: boolean,
}

const props = defineProps<Props>()
// functions
watch(isSearching, () => {
  console.log(isSearching.value);

})

</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

#search::-webkit-scrollbar {
  display: none;
}</style>