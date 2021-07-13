<template>
  <div>
    <Menubar :model="items">
      <template #start>
        <img
          alt="logo"
          src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png"
          height="40"
          class="p-mr-2"
        />
      </template>
      <template #end>
        <InputText placeholder="Search" type="text" />
      </template>
    </Menubar>
  </div>
  <router-view />
</template>
<script>
import Menubar from "primevue/menubar";
import InputText from "primevue/inputtext";
export default {
  components: {
    Menubar,
    InputText,
  },
  data() {
    return {
      items: [
        {
          label: "Login",
          icon: "pi pi-lock",
          to: "/login",
        },
        {
          label: "Home",
          icon: "pi pi-slack",
          to: "/",
        },
        {
          label: "Cart",
          icon: "pi pi-cart",
          to: "/cart",
        },
      ],
    };
  },
};
</script>
<style></style>
