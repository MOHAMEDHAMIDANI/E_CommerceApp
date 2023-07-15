<template>
    <Mainlayout>
        <div class=" w-full mt-9  h-[700px] flex justify-center content-center">
            <!-- login and some infos -->
            <div class="max-w-[500px] w-[500px] min-w-[300px]  h-full">
                <div class="w-full h-full bg-gray-100 flex justify-evenly flex-col content-center shadow-xl rounded-md ">
                    <div v-if="isRegister">
                        <h1 class=" capitalize text-2xl text-center text-secondColor duration-300" v-motion-pop>register
                        </h1>
                    </div>
                    <div v-else>
                        <h1 class=" capitalize text-2xl text-center text-secondColor duration-300 " v-motion-pop>sign in
                        </h1>
                    </div>
                    <form class="">
                        <div class="flex justify-evenly  flex-col h-[250px] duration-300" v-if="isRegister" v-motion-pop>
                            <input v-motion-slide-right type="email"
                                class="duration-200  mx-auto  h-8 w-[290px] caret-thirdColor bg-greyColor shadow-inner  pl-2 rounded outline-thirdColor "
                                placeholder=" Your Email" v-model="RegisterEmail">
                            <input v-motion-slide-right type="password"
                                class="duration-300  mx-auto  h-8 w-[290px] caret-thirdColor bg-greyColor shadow-inner  pl-2 rounded outline-thirdColor "
                                placeholder="Your Password" v-model="RegisterPassword">
                            <input v-motion-slide-right type="password"
                                class="duration-500  mx-auto  h-8 w-[290px] caret-thirdColor bg-greyColor shadow-inner  pl-2 rounded outline-thirdColor "
                                placeholder=" Confirm Your Password" v-model="RegisterPasswordConfirmation">
                            <button v-motion-slide-right type="submit" @click.prevent="SignIn"
                                class="duration-700 mx-auto hover:bg-secondColor  h-8 w-[290px] bg-thirdColor text-white shadow-md outline-none pl-2 rounded text-lg capitalize">
                                register</button>
                        </div>
                        <div class="flex justify-evenly  flex-col h-[200px] duration-300" v-else v-motion-pop>
                            <input v-motion-slide-right type="email"
                                class="duration-200  mx-auto h-8 w-[290px] caret-thirdColor bg-greyColor shadow-inner  pl-2 rounded outline-thirdColor"
                                placeholder=" Your Email" v-model="LoginEmail">
                            <input v-motion-slide-right type="password"
                                class="duration-500  mx-auto  h-8 w-[290px] caret-thirdColor bg-greyColor shadow-inner  pl-2 rounded outline-thirdColor "
                                placeholder="Your Password" v-model="LoginPassword">
                            <button v-motion-slide-right type="submit"
                                class="duration-700 mx-auto hover:bg-secondColor  h-8 w-[290px] bg-thirdColor text-white shadow-md outline-none pl-2 rounded text-lg capitalize">
                                Sign In</button>
                        </div>
                    </form>
                    <div>
                        <h3 class="capitalize text-lg text-center text-secondColor ">Or sign in with :</h3>
                        <div class="flex justify-between w-32 mx-auto mt-2">
                            <icon name="devicon:google" size="30"
                                class=" cursor-pointer rounded duration-700 hover:rotate-[360deg]" />
                            <icon name="skill-icons:github-dark" size="30"
                                class=" cursor-pointer rounded duration-700 hover:rotate-[360deg]" />
                            <icon name="logos:linkedin-icon" size="30"
                                class=" cursor-pointer rounded duration-700 hover:rotate-[360deg]" />
                        </div>
                    </div>
                    <div class="duration-300" v-if="isRegister" v-motion-pop>
                        <h3 class="capitalize text-sm text-center text-secondColor  "> already have an account?</h3>
                        <h5 class="capitalize text-md text-center hover:text-thirdColor cursor-pointer duration-500 text-secondColor"
                            @click="isRegister = !isRegister"> login</h5>
                    </div>
                    <div v-else class="duration-300" v-motion-pop>
                        <h3 class="capitalize text-sm text-center text-secondColor  "> don't have an account?!</h3>
                        <h5 class="capitalize text-md text-center hover:text-thirdColor cursor-pointer duration-500 text-secondColor"
                            @click="isRegister = !isRegister"> register</h5>
                    </div>
                </div>
            </div>
        </div>
    </Mainlayout>
</template>

<script setup lang="ts">
const supabase = useSupabaseClient()
import Mainlayout from '../layouts/Mainlayout.vue';
const isRegister = ref(true)
const LoginEmail = ref('');
const LoginPassword = ref('');
const message = ref('')
const RegisterPassword = ref('');
const RegisterPasswordConfirmation = ref('');
const RegisterEmail = ref('');
const SignIn = async () => {
    if (isRegister) {
        if(RegisterPassword.value === RegisterPasswordConfirmation.value && RegisterEmail.value == '' ){
            try {
                        const { error } = await supabase.auth.signUp({
                            email: RegisterEmail.value ,
                            password: RegisterPassword.value,
                        });
                        if(error) throw error
                        isRegister.value = true ;
            } catch (error) {
                message.value = error.message ; 
                setTimeout(() => {
                    message.value = '';
                }, 5000);
            }
        }
    } else {
        try {

        } catch (error) {

        }
    }
}
</script>

<style scoped></style>