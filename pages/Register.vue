<template>
    <Mainlayout>
        <div class=" w-full my-9  h-[700px] flex justify-center content-center">
            <!-- login and some infos -->
            <div class="max-w-[500px] w-[500px] min-w-[300px]  h-full">
                <div class="w-full h-full bg-slate-100 flex justify-evenly flex-col content-center shadow-xl rounded-md ">
                    <h1 class=" capitalize text-2xl text-center text-secondColor ">sign in</h1>
                    <form class="flex justify-evenly  flex-col h-[200px]">
                        <input type="text" class=" mx-auto h-8 w-[290px] bg-greyColor shadow-md outline-none pl-2 rounded " placeholder="Enter Your Email">
                        <input type="text" class=" mx-auto  h-8 w-[290px] bg-greyColor shadow-md outline-none pl-2 rounded " placeholder="Enter Your Password">
                        <button type="submit" class="mx-auto hover:bg-secondColor duration-700 h-8 w-[290px] bg-thirdColor text-white shadow-md outline-none pl-2 rounded text-lg"> Sign In</button>
                    </form>
                    <div>
                        <h3 class="capitalize text-lg text-center text-secondColor ">Or sign in with :</h3>
                        <div class="flex justify-between w-32 mx-auto mt-2">
                            <icon name="devicon:google" size="30" class=" cursor-pointer rounded duration-700 hover:rotate-[360deg]"/>
                            <icon name="skill-icons:github-dark" size="30" class=" cursor-pointer rounded duration-700 hover:rotate-[360deg]"/>
                            <icon name="logos:linkedin-icon" size="30" class=" cursor-pointer rounded duration-700 hover:rotate-[360deg]"/>
                        </div>
                    </div>
                </div>
                <div>

                </div>
            </div>
            <!-- register and some infos 
            <div class="max-w-[500px] w-[500px] min-w-[300px] bg-green-300 h-full">
                <div>

                </div>
                <div>

                </div>
            </div> -->
        </div>
    </Mainlayout>
</template>

<script setup lang="ts">
import Mainlayout from '../layouts/Mainlayout.vue';

</script>

<style scoped></style>