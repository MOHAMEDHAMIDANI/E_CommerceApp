
<template>
  <Mainlayout>
    <Hero />
    <category />
    <Section name="hello there">
      <Carousel>
        <Alert v-if="!products" />
        <Item v-else v-for="product in products" :key="product.id" :id="product.id" :title="product.title"
          :description="product.description" :isfav="product.isfav" :isInCart="product.isInCart" :url="product.url"
          :price="product.price" :rating="product.rating" />
      </Carousel>
    </Section>
    <Section :name="'deals you might like'" id="deals" >
        <Carousel >
          <Alert v-if="!store.Products" />
            <Item v-else v-for="product in store.Products " :key="product.id" :id="product.id" :title="product.title" :description="product.description" :isfav="product.isfav" :isInCart="product.isInCart" :url="product.url" :price="product.price" :rating="product.rating" />
        </Carousel>
        </Section>
        <Section :name="'new products'" id="new" >
        <Carousel  >
            <Item v-for="product in products" :key="product.id" :id="product.id" :title="product.title" :description="product.description" :isfav="product.isfav" :isInCart="product.isInCart" :url="product.url" :price="product.price" :rating="product.rating" />
        </Carousel>
        </Section>
  </Mainlayout>
</template>

<script setup lang="ts">
import { useFetchStore } from '../stores/Fetch';
import Mainlayout from '../layouts/Mainlayout.vue';
const store  = useFetchStore()
interface Product {
  id: number,
  title: string,
  description: string,
  isfav: boolean | null,
  isInCart: boolean | null,
  quantity: number,
  category: string,
  url: string[],
  price: number,
  rating: number,
  created_at: Date | null,
}
const products = ref<Product[]>();
onBeforeMount(async () => {
await store.FetchAllProducts();
console.log(store.Products)
  try {
    const { data , error } = await useFetch(`/api/prisma/get-all-products`);
    products.value = await store.FetchAllProducts();
    console.log(products)
  } catch (error) {
    // to do later on alert stuff 
  }
});

</script>

<style scoped></style>