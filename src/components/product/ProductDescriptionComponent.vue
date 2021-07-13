<template>
 <Sidebar :visible="drawerVisible" :showCloseIcon="false" :dismissable="true">
   <div class="p-col p-mb-4">
    <Button label="X" @click="closeSideBar"/>
   </div>
		{{product}}
</Sidebar>
</template>

<script>
import Sidebar from 'primevue/sidebar';

  export default {
    props: [
      'product'
    ],
    components: {
      Sidebar
    },
    name: 'ProductDescriptionComponent',
    data() {
      return {        

      }
    },
     computed:{
      drawerVisible(){
      return this.$store.state.LeftSideDrawer.visible
      }
  },
  methods:{
    closeSideBar(){
      this.$store.commit('LeftSideDrawer/SET_DRAWER_VISIBLE')
    }
  }
  }
</script>

<style lang="scss" scoped></style>
