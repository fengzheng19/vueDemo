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
import UserTodo from "./UserTodo.vue";
import { nanoid } from "nanoid";

export default {
  name: "UserTodos",
  data() {
    return {
      todoList: [
        { id: nanoid(), context: "xxxx", done: false },
        { id: nanoid(), context: "xxxxx", done: false },
        { id: nanoid(), context: "xxxxxx", done: true },
      ],
    };
  },
  components: { UserTodo },
  methods: {
    getId(index) {
      let id = this.todoList.findIndex((el) => {
        return el.id === index;
      });
      this.todoList.splice(id,1)
    },
  },
  mounted() {
    this.$bus.$on("addItem", (data) => {
      this.todoList.unshift(data);
    });
    this.$bus.$emit("allItem", this.todoList);
    this.$bus.$on('subTask',()=>{
        this.todoList =  this.todoList.filter(item=> !item.done)
        this.$bus.$emit("allItem", this.todoList);
      })
  },
  watch:{

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