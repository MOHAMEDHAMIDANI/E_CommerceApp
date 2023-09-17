import { defineStore } from 'pinia'
export const useFetchStore = defineStore('Fetch', {
    state: () => {
        return {
            Products: [] as ProductsTypes[],
            SingleProduct: {} as SingleProductsType,
            ProductByCategory: [] as ProductsTypes[],
            SearchedProducts: [] as ProductsTypes[],
            CartProducts: [] as ProductsTypes[],
            FavoriteProducts: [] as ProductsTypes[],
            user: null,
            error: null,
            loading: false,
        }
    },
    getters: {
        GetFavoriteProducts() {
            this.FavoriteProducts = this.Products.filter((el) => el.isfav)
        },
        GetCartProducts() {
            this.CartProducts = this.Products.filter((el) => el.isInCart)
        },
    },
    actions: {
        async FetchAllProducts() {
            try {
                this.loading = true;
                const { data, error } = await useFetch(`/api/prisma/get-all-products`);
                this.Products = await data.value;
                this.loading = false;
                if (error) throw error
            } catch (error) {
                console.error(error.message)
            }
        },
        async FetchSingleProducts(id: number) {
            try {
                this.loading = true;
                const { data, error } = await useFetch(`/api/prisma/productId/${id}`);
                this.SingleProduct = await data.value;
                this.loading = false;
                if (error) throw error
            } catch (error) {
                console.error(error.message)
            }
        },
        async FetchProductByCategory(category: string) {
            try {
                this.loading = true;

                this.loading = false;

            } catch (error) {

            }
        },
        async FetchSearching(search: string) {

        },
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
interface comment {
    author: string,
    description: string,
    ratingNum: number,
    time: string,
}
interface SingleProductsType {
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
    comments: comment[],
}
