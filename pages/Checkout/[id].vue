<template>
    <Mainlayout>
        <!-- <h3 class="relative top-4 text-black capitalize -right-10"> {{ useRouter().currentRoute.value.fullPath }} </h3> -->
        <div class="container mx-auto my-4 w-full flex justify-between flex-wrap ">
            <!-- main one  -->
            <div class=" xl:w-[1000px] lg:w-[820px] md:w-[550px] mx-auto h-full ">
                <!-- review item and shipping -->
                <div class=" h-[230px] my-5 rounded-md border-2 border-gray-400">
                    <h3 class="capitalize px-5 mt-2  font-semibold text-slate-800">review item and shipping</h3>
                    <div class="mt-2 px-5   flex justify-between gap-5 content-center">
                        <div class="w-[200px] h-[150px] my-auto">
                            <img src="../../assets/images/photo-1597872200969-2b65d56bd16b.avif" alt=""
                                class="object-fit rounded-md object-center h-full w-full border-[3px] border-secondColor">
                        </div>
                        <div class="w-full flex justify-between content-center">
                            <div class="flex flex-col justify-center content-center">
                                <h3 class="capitalize font-semibold text-xl text-center text-black ">pc gamer </h3>
                                <span class="capitalize font-medium text-sm text-center text-slate-400"> default color :
                                    black</span>
                            </div>
                            <div class="flex flex-col justify-center content-center">
                                <h3 class="capitalize font-semibold text-xl text-center text-slate-600 ">$549.00</h3>
                                <span class="capitalize font-medium text-sm text-center text-slate-400"> quantity :
                                    02</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class=" my-1.5 h-7  w-full">
                    <input id="returning customer" type="checkbox" class="top-1 relative accent-secondColor checkbox-sm my-auto">
                    <label for="returning customer" class="capitalize text-lg text-slate-700 font-semibold top-0 relative ml-3">returning customer ?</label>
                </div>
                <!-- delivery information  -->
                <div class="rounded-md border-2 mt-5  border-gray-400">
                    <div class="flex justify-between content-center">
                        <h3 class="capitalize px-5 mt-2 text-lg font-semibold text-slate-800">delivery information</h3>
                        <Btn :secondText="'save information'" :Width="'200px'" class="mx-5" />
                    </div>
                    <div class="flex">
                        <div class="flex flex-col ml-5 my-3">
                                <label for="first name" class="capitalize text-md text-slate-700 font-semibold ">first name</label>
                                <input id="first name" type="text" required class="xl:w-[450px] lg:w-[350px] mt-2 border-2 border-gray-300 rounded h-8 pl-2 outline-thirdColor" placeholder="type here">
                            </div>
                            <div class="flex flex-col ml-5 my-3">
                                <label for="second name" class="capitalize text-md text-slate-700 font-semibold ">second name</label>
                                <input id="second name" type="text" required class="xl:w-[450px] lg:w-[350px] mt-2 border-2 border-gray-300 rounded h-8 pl-2 outline-thirdColor" placeholder="type here">
                            </div>
                        </div>
                        <div class="flex flex-col ml-5 my-3">
                        <label for="address" class="capitalize text-md text-slate-700 font-semibold ">address</label>
                        <input id="address" type="code" required class="xl:w-[925px] lg:w-[725px] md:w-[500px] mt-2 border-2 border-gray-300 rounded h-8 pl-2 outline-thirdColor" placeholder="type here">
                    </div>
                    <div class="flex">
                        <div class="flex flex-col ml-5 my-3">
                                <label for="city / town" class="capitalize text-md text-slate-700 font-semibold ">city / town</label>
                                <input id="city / town" type="city" required class="xl:w-[450px] lg:w-[350px] mt-2 border-2 border-gray-300 rounded h-8 pl-2 outline-thirdColor" placeholder="type here">
                            </div>
                            <div class="flex flex-col ml-5 my-3">
                                <label for="zip code" class="capitalize text-md text-slate-700 font-semibold ">zip code</label>
                                <input id="zip code" type="email" required class="xl:w-[450px] lg:w-[350px] mt-2 border-2 border-gray-300 rounded h-8 pl-2 outline-thirdColor" placeholder="type here">
                            </div>
                        </div>
                        <div class="flex">
                        <div class="flex flex-col ml-5 my-3">
                                <label for="email" class="capitalize text-md text-slate-700 font-semibold ">email</label>
                                <input id="email" type="email" required class="xl:w-[450px] lg:w-[350px] mt-2 border-2 border-gray-300 rounded h-8 pl-2 outline-thirdColor" placeholder="type here">
                            </div>
                            <div class="flex flex-col ml-5 my-3">
                                <label for="mobile" class="capitalize text-md text-slate-700 font-semibold ">mobile</label>
                                <input id="mobile" type="tel" required class="xl:w-[450px] lg:w-[350px] mt-2 border-2 border-gray-300 rounded h-8 pl-2 outline-thirdColor" placeholder="type here">
                            </div>
                        </div>
                </div>
            </div>
            <!-- order summery  -->
            <div class=" mt-5 xl:w-[500px] lg:w-[820px] md:w-[550px] rounded-md border-2 mx-auto border-gray-400">
                <h3 class="capitalize px-5 mt-2 text-xl font-semibold text-slate-800">order summery</h3>
                <div class="mt-5 relative flex justify-center content-center">
                    <input type="text" placeholder="enter coupon code"
                        class="w-[400px] p-1 pl-2 mx-auto rounded-full bg-gray-100 outline-secondColor">
                    <Btn class="absolute top-1 right-12" :Text="'apply'" :condition="true" />
                </div>
                <div class="mt-5">
                    <h3 class="capitalize px-5 mt-2 text-md font-semibold text-slate-800">payment details</h3>
                    <form action="" class="accent-secondColor">
                        <div class="w-full ml-5 mt-5">
                            <input id="cash" type="radio" name="payment">
                            <label for="cash" class="capitalize text-md text-slate-700 font-semibold ml-2">cash on
                                delivery</label>
                        </div>
                        <div class="w-full ml-5 mt-5">
                            <input id="shopCart" type="radio" name="payment" >
                            <label for="shopCart" class="capitalize text-md text-slate-700 font-semibold ml-2">shopcart card</label>
                        </div>
                        <div class="w-full ml-5 mt-5">
                            <input id="paypal" type="radio" name="payment">
                            <label for="paypal" class="capitalize text-md text-slate-700 font-semibold ml-2">paypal</label>
                        </div>
                        <div class="w-full ml-5 mt-5">
                            <input id="card" type="radio" name="payment">
                            <label for="card" class="capitalize text-md text-slate-700 font-semibold ml-2">credit or debit card</label>
                        </div>
                        <div class="flex justify-evenly content-center  mt-2">
                            <Icon name="ant-design:amazon-square-filled" size="40" class="hover:border-thirdColor border-2 border-transparent"/>
                            <Icon name="logos:visa" size="40" class="hover:border-thirdColor border-2 border-transparent"/>
                            <Icon name="noto:credit-card" size="40" class="hover:border-thirdColor border-2 border-transparent"/>
                        </div>
                    </form>
                    <form action="" class="mt-2">
                        <div class="flex flex-col ml-5 mt-2">
                            <label for="email" class="capitalize text-md text-slate-700 font-semibold ">email</label>
                            <input id="email" type="email" required class="w-[400px] mt-2 border-2 border-gray-300 rounded h-8 pl-2 outline-thirdColor" placeholder="type here">
                        </div>
                        <div class="flex flex-col ml-5 mt-2">
                            <label for="card holder name" class="capitalize text-md text-slate-700 font-semibold ">card holder name</label>
                            <input id="card holder name" type="text" required class="w-[400px] mt-2 border-2 border-gray-300 rounded h-8 pl-2 outline-thirdColor" placeholder="type here">
                        </div>
                        <div class="flex flex-col ml-5 mt-2">
                            <label for="card number" class="capitalize text-md text-slate-700 font-semibold ">card number</label>
                            <input id="card number" type="text" required class="w-[400px] mt-2 border-2 border-gray-300 rounded h-8 pl-2 outline-thirdColor" placeholder="type here">
                        </div>
                        <div class="flex mb-2">
                            <div class="flex flex-col ml-5 mt-2">
                            <label for="expiry" class="capitalize text-md text-slate-700 font-semibold ">expiry</label>
                            <input id="expiry" type="date" required class="w-[200px] mt-2 border-2 border-gray-300 rounded h-8 pl-2 outline-thirdColor" placeholder="type here">
                        </div><div class="flex flex-col ml-5 mt-2">
                            <label for="cvc" class="capitalize text-md text-slate-700 font-semibold ">cvc</label>
                            <input id="cvc" type="text" required class="w-[200px] mt-2 border-2 border-gray-300 rounded h-8 pl-2 outline-thirdColor" placeholder="type here">
                        </div>
                        </div>
                    </form>
                </div>
            </div>
    </div>
</Mainlayout></template>

<script setup lang="ts">
import Mainlayout from '../../layouts/Mainlayout.vue'
</script>

<style scoped></style>