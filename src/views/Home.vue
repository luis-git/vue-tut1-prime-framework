<template>
  <div class="p-grid">
       <ProductSummaryComponent
       class="p-col p-m-4"
          v-for="product in items"
          :key="product.id"
          :product="product"
          v-on:view-product="viewProduct($event)"
        />
   
  </div>

  <ProductDescriptionComponent
  :product="product"
   />
</template>

<script>
import items from "../data/items";
import ProductSummaryComponent from "../components/product/ProductSummaryComponent.vue";
import ProductDescriptionComponent from "../components/product/ProductDescriptionComponent.vue";
export default {
  components: {
    ProductSummaryComponent,
    ProductDescriptionComponent,
  },
  name: "Home",
  data() {
    return {
      items: items,
      product: null,
    };
  },
 
  methods: {
    viewProduct(product) {
      this.$store.commit('LeftSideDrawer/SET_DRAWER_VISIBLE')
      this.product = product;
      console.log(this.product)
    },
  },
};
</script>
