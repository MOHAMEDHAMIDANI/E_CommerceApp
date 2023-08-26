import { defineStore } from 'pinia'
export const useFetchStore = defineStore('Fetch', {
    state: () => {
        return {
            Products: [],
            SingleProduct : [] ,
            ProductByCategory: [],
            SearchedProducts: [],
            user: null,
        }
    },
    getters: {
        GetFavoriteProducts () {

        },
        GetCartProducts () {

        },
    },
    actions: {
        async FetchAllProducts() {

        },
        async FetchSingleProducts() {

        },
        async FetchProductByCategory() {

        },
        async FetchSearching() {

        }
    },
})

interface ProductsTypes { 

}
