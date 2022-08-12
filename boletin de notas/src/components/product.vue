<template>
    <div class="product-card card-group">
        <div class="card " style="width: 18rem;">
            <img :src="image" class="card-img" alt="...">
            <div class="card-body text-primary">
                <p class="card-text">{{ title }}</p>
                <p class="card-text">{{ descripcion }}</p>
                <p class="card-text">{{ price }}</p>
            </div>
        </div>
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

<style scoped>

</style>