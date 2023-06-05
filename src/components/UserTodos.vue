<template>
  <ul class="todos">
    <userTodo
      :item="item"
      v-for="(item, index) in todoList"
      :key="item.id"
      @click="todoList[index].done = !todoList[index].done"
      @getId="getId"
    />
    <h3 v-if="todoList.length === 0">请添加任务吧！</h3>
  </ul>
</template>
<script>
import { mapState } from 'vuex';
import UserTodo from "./UserTodo.vue";


export default {
  name: "UserTodos",
  data() {
    return {
      
    };
  },
  components: { UserTodo },
  computed:{
    ...mapState('todoList',['todoList'])
  },
  methods: {
    getId(index) {
      let id = this.todoList.findIndex((el) => {
        return el.id === index;
      });
      this.todoList.splice(id,1)
    },
  }
};
</script>
<style scoped>
.todos {
  font-size: 14px;
  width: 90%;
  height: 200px;
}
</style>