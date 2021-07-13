<template>
  <Card>
    <template #header>
        <img alt="user header" src="https://picsum.photos/200/300">
    </template>
    <template #title>
        {{product.name}}
    </template>
    <template #content>
      <h2>${{product.price.toFixed(2)}}</h2>
        <p>{{description}}</p>
        <h3>{{product.category}}</h3>
    </template>
    <template #footer>
        <Button icon="pi pi-check" label="View" @click="$emit('view-product', product)" />
    </template>
</Card>
</template>

<script>
  export default {
    props: {
      product: Object,
      },
    name: 'ProductSummaryComponent',
    data() {
      return {

      }
    },
    computed:{
      description(){
        return this.product.description.substring(0, 150);
      }

    },
    methods: {
      // viewProduct(product){
      //   console.log(product)
      //   this.$emit('view-product', product);
      // }
    }
  }
</script>

<style lang="scss" scoped></style>
