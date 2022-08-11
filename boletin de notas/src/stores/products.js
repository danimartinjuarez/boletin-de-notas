import { defineStore } from 'pinia'

export const useProductStore = defineStore( {
    id: 'products',
    state: () => ({
        products:[]
    }),
    actions: {
        async fetchProducts() {
            await fetch('https://fakestoreapi.com/products/')
                .then(res => res.json())
                .then(data => {
                    this.products = data
                })
        }
    }    
})