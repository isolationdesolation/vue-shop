import axios from "axios";
import type { Product } from "../const/product.const";

const SHOP_API = "https://fakestoreapi.com";

export async function getAllProducts(): Promise<Product[]> {
  return (await axios.get(`${SHOP_API}/products`)).data as Product[];
}
