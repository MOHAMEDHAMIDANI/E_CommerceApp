<template>
    <div class="w-[230px]  my-auto h-[300px] shadow-md rounded">
        <div class="w-full h-[180px] relative  ">
            <nuxt-link :to="{ name: 'Item-id', params: { id: id } }">
                <img :src="url[0]" alt="" loading="lazy"
                    class="rounded-t  object-fill  object-center w-full h-full">
            </nuxt-link>
            <button v-if="isfav" @Click="store.toggleFavorite(id , isfav)">
                <Icon v-motion-pop name="material-symbols:heart-check-outline" size="30" color="white"
                    class="absolute top-1 right-1 rounded-full w-7 h-7 border-2 pt-1 p-0.5 bg-secondColor cursor-pointer" />
            </button>
            <button v-else @click="store.ToggleFavorite(id , isfav)">
                <Icon v-motion-pop name="material-symbols:favorite-outline" size="30" color="black"
                    class="absolute top-1 right-1 rounded-full w-7 h-7 border-2 pt-1 p-0.5 bg-slate-50 cursor-pointer" />
            </button>
        </div>
        <div class=" w-full h-[120px]">
            <div class=" flex justify-between content-center w-full h-7  ">
                <h3
                    class="ml-1 w-[160px]  break-words capitalize text-[15px] text-left font-semibold text-slate-900  my-auto overflow-hidden  h-5">
                    {{ title }} </h3>
                <h5 class="relative text-sm my-auto font-semibold text-slate-900 p-1 pr-3">{{ price }}<span
                        class="text-[10px] font-medium text-slate-900 top-0 left-0 absolute">$</span><span
                        class="text-[10px] font-bold text-slate-900 absolute font-sm top-0 right-0">.99</span> </h5>
            </div>
            <div class="w-full h-9">
                <p class="w-full h-full ml-1 px-1 text-[10px] font-semibold break-words text-slate-500 overflow-hidden">{{
                    description }}</p>
            </div>
            <div class="flex justify-between content-center w-full h-[40px]">
                <Btn @click="toggleCart(id , isInCart )" :condition="isInCart" :Text="'added to cart'" :secondText="'add to cart'"
                    :Width="'100px'" :Height="'30px'" class="ml-1" />
                <DisplayRating :ratingNum="rating" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const supabase = useSupabaseClient()
interface productInfo {
    id: number,
    title: string,
    description: string,
    isfav: boolean ,
    isInCart: boolean ,
    category: string,
    url: string[],
    price: number,
    rating: number,
}


const { id, isfav, isInCart } = defineProps<productInfo>();

const toggleFavorite = async (id: number, value: boolean) => {
  value = !value;
  try {
    const { error } = await supabase.from('products').update({ isfav: value }).eq('id', id);
    if (error) throw error;
  } catch (error) {
    console.error(error);
  }
};

const toggleCart = async (id: number, value: boolean) => {
  value = !value;
  try {
    const { error } = await supabase.from('products').update({ isInCart: value }).eq('id', id);
    if (error) throw error;
  } catch (error) {
    console.error(error);
  }
};
</script>

<style scoped></style>