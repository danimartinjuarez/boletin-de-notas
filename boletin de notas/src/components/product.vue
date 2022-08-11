<template>
  <div class="product-card">
    <figure class="card-Img">
        <img :src="image" alt="">
    </figure>
    <h5>{{title}}</h5>
    <p>{{ descripcion }}</p>
    <h3>{{ precio }}</h3>
  </div>
</template>

<script setup>
const props = defineProps({
    id: {
        type: Number,
        default: null
    },
    image: {
        type: String,
        default: null
    },
    title: {
        type: String,
        require: true
    },
    descripcion: {
        type: String,
        default: null
    },
    price: {
        type: Number,
        require: true
    }
})
</script>

<style>

</style>