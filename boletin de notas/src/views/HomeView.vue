<script setup>
import { onBeforeMount } from "vue";
import { useProductStore } from "../stores/products"
import SideBarVue from "../components/SideBar.vue";
import Product from "../components/product.vue";
  const productsStore= useProductStore()
  onBeforeMount(() => {
      getProducts()
      console.log('aquiiiii');
  })
  const getProducts = async () => {
    await productsStore.fetchProducts()
  }
</script>

<template>
  <div>
    <SideBarVue></SideBarVue>
    <h1>HOLAAAAA</h1>
    <Product
      v-for="product in productsStore.products"
      :image="product.image"
      :title="product.title"
    />
    

  </div>
</template>
