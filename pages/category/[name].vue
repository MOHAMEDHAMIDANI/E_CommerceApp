<template>
    <Mainlayout>
        
        <div class="">
            <Section :name="'your result for : ' + category" >
        <SkeletonItem v-if="loading"/>
                <Item v-else v-for="product in ProductByCategory" :key="product.id" :id="product.id" :title="product.title"
          :description="product.description" :isfav="product.isfav" :isInCart="product.isInCart" :url="product.url"
          :price="product.price" :rating="product.rating" />
            </Section>
        </div>
    </Mainlayout>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import Mainlayout from '../../layouts/Mainlayout.vue'
import {useFetchStore} from '../../stores/Fetch'
const route = useRoute();
const store = useFetchStore();
const { loading , Products , ProductByCategory } = storeToRefs(store); 
const category = route.params.name
onBeforeMount( async() => {
await store.FetchAllProducts()
await store.FetchProductByCategory(category.toString());
})
</script>

<style scoped>

</style>