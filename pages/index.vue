
<template>
    <Mainlayout>
      <Hero />
      <category />
      <Section name="hello there">
        <Carousel >
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
        </Carousel>
      </Section>
      <Section :name="'deals you might like'" id="deals" >
        <Carousel >
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
        </Carousel>
        </Section>
        <Section :name="'new products'" id="new" >
        <Carousel >
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
        </Carousel>
        </Section>
    </Mainlayout>
</template>

<script setup lang="ts">
import Mainlayout from '../layouts/Mainlayout.vue';


</script>

<style scoped>

</style>