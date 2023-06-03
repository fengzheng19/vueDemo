<template>
  <div id="app">
    <div class="main">
      <div class="todoList">
        <userHeader />
        <userTodos />
        <userFooter />
      </div>
    </div>
    <git-user/>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import UserTodos from "./components/UserTodos";
import UserFooter from "./components/UserFooter";
import UserHeader from "./components/UserHeader";
import GitUser from './components/GitUser.vue';

// import {nanoid} from 'nanoid'

export default {
  name: "App",
  components: {
    UserTodos,
    UserFooter,
    UserHeader,
    GitUser
  },
  data() {
    return {};
  },
  methods: {}
};
</script>

<style>
* {
  list-style: none;
}
.todoList {
  border: 1px solid #000;
  width: 500px;
  border-radius: 10px;
}
.main{
  display: none;
}



</style>
