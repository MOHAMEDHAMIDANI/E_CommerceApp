<!-- categories container -->
          <!-- <div class=" h-6 w-24  my-auto relative">
            <div class="w-full h-full flex justify-evenly bg-greyColor rounded-2xl shadow">
              <h3 class=" capitalize text-black">category</h3>
              <Icon @click="isCategory = !isCategory" class=" cursor-pointer duration-500 mt-1"
                :class="isCategory ? 'rotate-180' : ''" name="material-symbols:keyboard-arrow-down" size="25"
                color="black" />
            </div>
            categories
            <div v-if="isCategory" class="z-50 absolute top-8 -left-7">
              <transition name="fade">
                <ul class="w-[200px] max-h-[200px] overflow-y-scroll rounded-sm bg-white shadow-md">
                  <nuxt-link v-for="(category, index ) in categories" :key="index" to="/">
                    <li v-motion-pop
                      class=" min-h-[30px] capitalize line-clamp-2  border-b-gray border-b  hover:bg-slate-200 duration-500">
                      <h3 class="text-sm text-center my-1 leading-4 cursor-pointer">{{ category }}</h3>
                    </li>
                  </nuxt-link>
                </ul>
              </transition>
            </div>
          </div> -->




          <!-- language -->
        <!-- <div class=" z-50 mt-1 w-fit text-[15px]">
          <h5 class="flex text-white  text-[12px]">{{ currentLang }}
            <Icon @click="isLang = !isLang" class="my-auto cursor-pointer duration-500"
              :class="isLang ? 'rotate-180' : ''" name="material-symbols:keyboard-arrow-down" size="25" color="white" />
          </h5>
          <transition name="fade">
            <ul v-auto-animate v-if="isLang" class="z-50 absolute shadow-2xl bg-white w-full h-fit duration-700 mt-0">
              <li @click="chooseLang(index)" v-for="(lang, index ) in language" :key="index"
                class="text-center   text-black border-teal-500 cursor-pointer border-b shadow-sm">{{ lang
                }}</li>
            </ul>
          </transition>
        </div> -->