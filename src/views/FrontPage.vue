<template>
    <Header></Header>
    <Category :categoryList="categoryList"/>
    <Waiter v-if="showWaiter" @click="toggleRequest"/>
    <Request v-if="showRequest"/>
</template>

<script setup>
  import Header from '../components/Header.vue'
  import Waiter from '../components/Waiter.vue'
  import Request from '../components/Request.vue'
  import Category from '../components/Category.vue'
  import { ref } from 'vue'

  const categoryList = ref([
    {id: 1,
    name: 'COFFEE MENU',
    items:[
      {id:1, name: 'Lorem ipsum'},
      {id:2, name: 'Lorem ipsum'},
      {id:3, name: 'Lorem ipsum'},
      {id:4, name: 'Lorem ipsum'},
      {id:5, name: 'Lorem ipsum'},
      {id:6, name: 'Lorem ipsum'}]
    },
    {id: 2,
    name: 'SNACKS AND SWEETS',
    items: [
      {id:1, name: 'Lorem ipsum'},
      {id:2, name: 'Lorem ipsum'},
      {id:3, name: 'Lorem ipsum'},
      {id:4, name: 'Lorem ipsum'},
      {id:5, name: 'Lorem ipsum'},
      {id:6, name: 'Lorem ipsum'}]
    }
  ]);
  
  const showWaiter = ref(true);
  const showRequest = ref(false);

  const toggleRequest = () => {
    showWaiter.value = false;
    showRequest.value = true;
  }

</script>