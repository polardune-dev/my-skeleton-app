
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
  console.log('url.searchParams[page]='+url.searchParams.get('page'));
  console.log('url.searchParams[limit]='+url.searchParams.get('limit'));

  const page = url.searchParams.get('page');
  const limit = url.searchParams.get('limit');
  const skip = Number(page) * Number(limit);
  console.log('skip='+skip);
  
  const response = await fetch('https://dummyjson.com/products?limit='+limit+'&skip='+skip);
  const res = await response.json() as Products;
  return res;
}