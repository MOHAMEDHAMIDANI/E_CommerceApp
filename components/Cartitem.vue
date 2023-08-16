<template>
    <div class="lg:w-[80%] md:w-[90%] mx-auto md:h-28 h-24 my-2 shadow drop-shadow-sm bg-gray-100 flex justify-between content-center rounded">

            <!-- image  -->
            <nuxt-link :to="{name : 'Item-id' , params : {id : 33}}" class="h-full flex content-center">
                <div class="w-32 md:w-24 h-full">
                    <img src="../assets/images/photo-1597872200969-2b65d56bd16b.avif" alt=""
                        class="w-full  h-full object-cover object-center rounded">
                </div>
            
            <!-- info  -->

            <div class="flex flex-col justify-evenly content-center ml-4">
                <h3
                    class="break-words capitalize text-[17px] text-left font-semibold text-slate-900  my-auto overflow-hidden">
                    pc gamer asus edition</h3>
                <p
                    class="md:w-[380px] lg:w-[550px] mb-1  text-[12px] font-semibold break-words text-slate-600 overflow-hidden">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt harum suscipit mollitia excepturi
                    quaerat aliquam corrupti dolores sapiente ab officiis qui nihil laboriosam nam delectus rerum, maiores
                    pariatur, quasi ipsum.
                </p>
            </div>
        </nuxt-link>
        <!-- btn and price  -->
        <div class="h-full xl:w-[500px] md:w-[150px]   flex justify-evenly content-center  xl:flex-row md:flex-col ">
            <h4 class="my-auto font-semibold lg:ml-2 lg:text-start md:text-center text-lg text-thirdColor">455.99 $</h4>
            <Btn class="w-[120px] h-7 lg:mx-0 md:mx-auto " condition="true" Text="buy now" />
            <button
                class="font-semibold lg:mx-0 md:mx-auto h-7 bg-error w-[120px]  duration-1000  text-sm text-center capitalize rounded-full my-auto ">
                <h3>
                    remove
                    <Icon name="tabler:shopping-cart-x" size="22" />
                </h3>
            </button>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped></style>