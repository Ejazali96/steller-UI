export interface Product {
    id: number
    title: string
    description: string
    price: number
    discountPercentage: string
    rating: number
    stock: string
    brand: string
    category: string
    thumbnail: string
}

export interface ProductDescriptionDto {
    id: number,
    product_id: string
    language_id: string
    name:string
    description: string
    meta_title: string
    meta_description: string
    meta_keyword: string
    created_at: string
    updated_at: string
}
export interface totalDto{
shipping_cost:number
sub_total:number
total:number
}
export interface ProductImagesDto {
    id :null
    product_id :string,
    image:string,
    sort_order:string
    created_at:string
    updated_at:string}
export interface ProductDto{
    id :string
    price :string
    viewed :string
    created_at :string
    updated_at :string
    description:ProductDescriptionDto
    images:ProductImagesDto[]
    
  }
  export interface categoryDto{
    name:string
    count:number
    select:boolean
  }
  export interface addCartDto{
    token_id:string,
    user_id: number,
    product_id:string,
    quantity:number
  }

  export interface bagsItemDto {
    Products: ProductDto[]
    total:totalDto[],
  }
  
