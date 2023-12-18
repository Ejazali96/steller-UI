import { environment } from "src/environments/environment.development"

export const baseUrl = environment.baseUrl
export const productApi = {
    getAllProduct:"api/v1/storecontroller/home",
    getProductById:"api/v1/storecontroller/product/",
    searchByQuery:"api/v1/storecontroller/home?search=",
    searchByCategory:"api/v1/storecontroller/home?category_ids=",
    sortingBy:"api/v1/storecontroller/home?order_by=",
    addToCart:"api/v1/storecontroller/cart/add",
    cartOverview:"cart/overview/",
}