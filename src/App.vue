<template>
  <div class="mycontainer">
    <div class="container">
      <FirstHeader
        @toggle-add-task="toggleAddtask"
        title="task manager"
        :showAddtask="showAddtask"
      />
      
      <router-view :showAddtask="showAddtask"></router-view>
      <my-footer />
    </div>
    
  </div>
</template>

<script>
import FirstHeader from "./components/FirstHeader.vue";

import MyFooter from "./components/MyFooter.vue";

export default {
  name: "App",
  components: {
    FirstHeader,
   
    MyFooter
  },
  data() {
    return {
      showAddtask: false
    };
  },
  methods: {
    toggleAddtask() {
      this.showAddtask = !this.showAddtask;
    },
  },  
 
}
</script>

<style>
@import url("https://fonts.googleapis/cpm/css2?family=Poppins:wght@300;400&display=swap");

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: "Poppins", sans-serif;
}
.mycontainer {
  display: flex;
  justify-content: center;
}

.container {
  display: inline-block;
  background-color: #fff;
  color: #000;
  border: 1px solid steelblue;
  padding: 50px;
  border-radius: 5px;
  max-width: 500px;
  margin: 30px;
  overflow: auto;
  min-height: 300px;
  border-radius: 5px;
  justify-content: space-between;
}

.btn {
  display: inline-block;
  background: #000;
  color: #fff;
  border: none;
  padding: 10px 20px;
  margin: 15px;
  cursor: pointer;
  text-decoration: none;
  font-size: 15px;
  font-family: inherit;
}
</style>
