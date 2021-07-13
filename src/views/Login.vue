<template>
  <div class="p-grid">
    <div class="p-md-2 p-col-12 p-md-offset-5 p-mt-5">
      <Card>
         <template #content>
          <div class="p-fluid">
            
          <span class="p-input-icon-left">
              <i class="pi pi-user" />
              <InputText type="text" placeholder="Username" />
          </span>
                        
            <div class="p-field">
              <label for="lastname">Lastname</label>
              <InputText id="lastname" type="text" v-model="lastname" />
            </div>
           <Button @click="login" label="Secondary" class="p-button-raised" />
           <p v-if="loading">loading.....</p>
          </div>
       </template>
      </Card>
    </div>
  </div>
</template>
<script>
export default {
  name: "Login",
  created() {},
  data() {
    return {
      firstname: "",
      lastname: "",
      loading: false,
    };
  },
  props: {},
  methods: {
    login(){
      this.loading = true;
      setTimeout(()=>{
        this.loading = false;
        this.$router.push('/')        
      },1000);
      
    },
    
  },
};
</script>

<style lang="scss" scoped></style>
