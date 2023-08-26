
<template>
  <Mainlayout>
    <Hero />
    <category />
    <Section name="hello there">
      <Carousel>
        <Item v-for="product in products" :key="product.id" :id="product.id" :title="product.title"
          :description="product.description" :isfav="product.isfav" :isInCart="product.isInCart" :url="product.url"
          :price="product.price" :rating="product.rating" />
      </Carousel>
    </Section>
    <Section :name="'deals you might like'" id="deals" >
        <Carousel >
            <Item v-for="product in products" :key="product.id" :id="product.id" :title="product.title" :description="product.description" :isfav="product.isfav" :isInCart="product.isInCart" :url="product.url" :price="product.price" :rating="product.rating" />
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
import Mainlayout from '../layouts/Mainlayout.vue';
interface Product {
  id: number,
  title: string,
  description: string,
  isfav: boolean | null,
  isInCart: boolean | null,
  cuantity: number,
  category: string,
  url: string[],
  price: number,
  rating: number,
  created_at: Date | null,
}
// const products = ref<Product[]>();
onBeforeMount(async () => {
  try {
    const fetchedProducts = await useFetch(`/api/prisma/get-all-products`);
    console.log(fetchedProducts)
    const products : Product[] = fetchedProducts.data._rawValue;
    console.log(products)
  } catch (error) {
    // to do later on alert stuff 
  }
});

</script>

<style scoped></style>