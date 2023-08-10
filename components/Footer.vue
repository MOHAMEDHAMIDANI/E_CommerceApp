<template>
  <div class=" bg-gray-100 pb-5 relative bottom-0">
    <!-- footer items  -->
    <div class="w-full flex flex-wrap justify-center content-center ">
      <site-item v-for="(item , index) in items " :key="index" :title="item.title" :description="item.description" :icon="item.icon" />
    </div>
    <!-- footer stuff  -->
    <div class="flex flex-wrap justify-center content-center mt-10 xl:gap-15 lg:gap-10 md:gap-5">
      <footer-item v-for="(footeritem , index) in footerItems" :key="index" :title="footeritem.title" :titles="footeritem.titles"  />
    </div>
  </div>
</template>

<script setup lang="ts">
interface FooterItem{
  title : string ,
  titles : string[],
}
interface SiteItems {
    title : string ,
    description : string ,
    icon : string,
}
const items = <SiteItems[]>[{
    title : "Great value" ,
    description : "We offer competitive prices on over 100 million items" ,
    icon : "ph:currency-circle-dollar",
},{
    title : "Worldwide shopping" ,
    description : "We ship to over 200 countries and regions, and our site comes in 12 languages." ,
    icon : "carbon:delivery",
},{
    title : "Safe payment" ,
    description : "Pay with the world’s most popular and secure payment methods." ,
    icon : "fluent:payment-48-regular",
},{
    title : "Shop with confidence" ,
    description : "Our Buyer Protection policy covers your entire purchase journey." ,
    icon : "codicon:workspace-trusted",
},{
    title : "Help center" ,
    description : "Round-the-clock assistance for a smooth shopping experience." ,
    icon : "fluent:person-question-mark-20-filled",
},]
const footerItems = <FooterItem[]> [{
  title : "Get to Know Us" ,
  titles : ["Careers", "Blog","About Mr.Shopping","Investor Relations","Mr.Shopping Devices","Mr.Shopping Science"],
},{
  title : "Make Money with Us" ,
  titles : ["Sell products on Mr.Shopping","Sell on Mr.Shopping Business","Sell apps on Mr.Shopping","Become an Affiliate","Advertise Your Products","Self-Publish with Us","Host an Mr.Shopping Hub"],
},{
  title : "Mr.Shopping Payment Products" ,
  titles : ["Mr.Shopping Business Card","Shop with Points","Reload Your Balance","Mr.Shopping Currency Converter"],
},{
  title : "Let Us Help You" ,
  titles : ["Mr.Shopping and COVID-19","Your Account","Your Orders","Shipping Rates & Policies","Returns & Replacements","help"],
}]
</script>

<style scoped></style>
