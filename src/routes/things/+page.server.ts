
// Sample stuff
// import productsData from "./sampledata.json";

export interface Products {
    products: Product[]
    total: number
    skip: number
    limit: number
  }
  
  export interface Product {
    id: number
    title: string
    description: string
    price: number
    discountPercentage: number
    rating: number
    stock: number
    brand: string
    category: string
    thumbnail: string
    //images: string[]
  } 

export async function load( {fetch, url}) {
  let page = url.searchParams.get('page');
  let limit = url.searchParams.get('limit');
  if (!page) { page = '0'};
  if (!limit) { limit = '10'};
  const skip = Number(page) * Number(limit);

  const response = await fetch('https://dummyjson.com/products?limit='+limit+'&skip='+skip);
  const res = await response.json() as Products;
  res.limit = Number(limit);
  return res;
}