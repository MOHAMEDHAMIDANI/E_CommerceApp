
<template>
  <Mainlayout>
    <Hero />
    <category />
    <Section name="hello there">
      <Carousel>
        <SkeletonItem v-if="loading" />
        <Item v-else v-for="product in Products" :key="product.id" :id="product.id" :title="product.title"
          :description="product.description" :isfav="product.isfav" :isInCart="product.isInCart" :url="product.url"
          :price="product.price" :rating="product.rating" />
      </Carousel>
    </Section>
    <Section :name="'deals you might like'" id="deals">
      <Carousel>
        <SkeletonItem v-if="loading" />
        <Item v-else v-for="product in Products " :key="product.id" :id="product.id" :title="product.title"
          :description="product.description" :isfav="product.isfav" :isInCart="product.isInCart" :url="product.url"
          :price="product.price" :rating="product.rating" />
      </Carousel>
    </Section>
    <Section :name="'new products'" id="new">
      <Carousel>
        <SkeletonItem v-if="loading" />
        <Item v-else v-for="product in Products" :key="product.id" :id="product.id" :title="product.title"
          :description="product.description" :isfav="product.isfav" :isInCart="product.isInCart" :url="product.url"
          :price="product.price" :rating="product.rating" />
      </Carousel>
    </Section>
  </Mainlayout>
</template>

<script setup lang="ts">
import { useFetchStore } from '../stores/Fetch';
import Mainlayout from '../layouts/Mainlayout.vue';
import { storeToRefs } from 'pinia';
const store = useFetchStore()
const {loading , Products } = storeToRefs(store); 
onBeforeMount(async () => {
  await store.FetchAllProducts();
});


</script>

<style scoped></style>