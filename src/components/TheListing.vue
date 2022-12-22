<template>
  <div class="container">
    <div class="col-md-12">
      <h3>Products</h3>
    </div>
    <div class="row row-cols-1 row-cols-md-3 g-4">
      <ProductCard
        v-for="(product, id) in products"
        :key="id"
        :product="product"
      ></ProductCard>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import type { Product } from "../const/product.const";
import { getAllProducts } from "@/services/products.service";
import ProductCard from "./ProductCard.vue";

export default defineComponent({
  name: "TheListing",
  data() {
    return {
      products: [] as Product[],
      fetchingFacts: false,
    };
  },
  methods: {},
  components: {
    ProductCard,
  },
  created() {
    getAllProducts().then((products) => (this.products = products));
  },
});
</script>
