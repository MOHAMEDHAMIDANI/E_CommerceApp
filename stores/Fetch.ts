import { defineStore } from 'pinia'
export const useFetchStore = defineStore('Fetch', {
    state: () => {
        return {
            Products: [] ,
            SingleProduct: [],
            ProductByCategory: [],
            SearchedProducts: [],
            user: null,
        }
    },
    getters: {
        GetFavoriteProducts() {

        },
        GetCartProducts() {

        },
    },
    actions: {
        async FetchAllProducts() {
            try {
                const { data , error } = await useFetch(`/api/prisma/get-all-products`);
                this.Products = data.value;
                return data.value
              } catch (error) {
                // to do later on alert stuff 
                console.error(error)
              }
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
